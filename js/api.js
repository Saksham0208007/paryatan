/**
 * Paryatan API Layer (Single Data Access Point)
 * As required by the specification, all UI components interact ONLY via this module.
 * This architecture allows seamless transition to PHP/MySQL backend later.
 */

const ParyatanAPI = (function () {
  const STORAGE_KEY_BOOKINGS = "paryatan_bookings";
  const STORAGE_KEY_USER = "paryatan_current_user";

  // Helper to load bookings from LocalStorage
  function _getAllStoredBookings() {
    try {
      const data = localStorage.getItem(STORAGE_KEY_BOOKINGS);
      return data ? JSON.parse(data) : [];
    } catch (e) {
      console.error("Error reading bookings from localStorage:", e);
      return [];
    }
  }

  // Helper to save bookings to LocalStorage
  function _saveBookings(bookings) {
    try {
      localStorage.setItem(STORAGE_KEY_BOOKINGS, JSON.stringify(bookings));
    } catch (e) {
      console.error("Error saving bookings to localStorage:", e);
    }
  }

  return {
    /**
     * Get all categories
     */
    getCategories: function () {
      return [...CATEGORIES];
    },

    /**
     * Get single category by ID
     */
    getCategory: function (catId) {
      return CATEGORIES.find(c => c.id.toLowerCase() === (catId || "").toLowerCase()) || CATEGORIES[0];
    },

    /**
     * Get all spots or filter by category
     */
    getSpotsByCategory: function (catId) {
      if (!catId) return [...SPOTS];
      return SPOTS.filter(s => s.category.toLowerCase() === catId.toLowerCase());
    },

    /**
     * Get spot by spot ID
     */
    getSpot: function (spotId) {
      return SPOTS.find(s => s.id === spotId || s.name.toLowerCase() === (spotId || "").toLowerCase());
    },

    /**
     * Get mapped stations for a spot
     */
    getStationsForSpot: function (spotId) {
      const spot = this.getSpot(spotId);
      if (!spot) return [];
      const station = STATIONS.find(st => st.code === spot.nearestStation.code);
      return station ? [station] : [{ code: spot.nearestStation.code, name: spot.nearestStation.name }];
    },

    /**
     * Get master stations list
     */
    getAllStations: function () {
      return [...STATIONS];
    },

    /**
     * Get station object by Code or Name
     */
    getStation: function (query) {
      if (!query) return null;
      const q = query.trim().toLowerCase();
      return STATIONS.find(s => s.code.toLowerCase() === q || s.name.toLowerCase() === q) || null;
    },

    /**
     * Search trains between fromStation and toStation
     * Matches if both stations are on the route and origin stop sequence < destination stop sequence
     */
    searchTrains: function (fromCode, toCode, date) {
      if (!fromCode || !toCode) return [];
      
      const origin = fromCode.trim().toUpperCase();
      const dest = toCode.trim().toUpperCase();

      if (origin === dest) {
        return [];
      }

      const results = [];

      TRAINS.forEach(train => {
        const originStop = train.stops.find(s => s.stationCode === origin);
        const destStop = train.stops.find(s => s.stationCode === dest);

        if (originStop && destStop && originStop.seq < destStop.seq) {
          // Calculate approx duration
          const depTime = originStop.dep !== "Start" ? originStop.dep : "06:00";
          const arrTime = destStop.arr !== "End" ? destStop.arr : "18:00";

          // Calculate availability for each class for the given date
          const availableClasses = {};
          Object.keys(train.classes).forEach(cls => {
            const avail = this.getAvailability(train.id, cls, date);
            availableClasses[cls] = {
              totalSeats: train.classes[cls].totalSeats,
              fare: train.classes[cls].fare,
              seatsLeft: avail.seatsLeft,
              status: avail.status
            };
          });

          results.push({
            id: train.id,
            number: train.number,
            name: train.name,
            runsOn: train.runsOn,
            from: {
              code: origin,
              dep: depTime
            },
            to: {
              code: dest,
              arr: arrTime
            },
            classes: availableClasses
          });
        }
      });

      return results;
    },

    /**
     * Get real-time seat availability taking existing bookings into account
     * Seats left = total seats minus passengers in non-cancelled bookings
     */
    getAvailability: function (trainId, travelClass, date) {
      const train = TRAINS.find(t => t.id === trainId);
      if (!train || !train.classes[travelClass]) {
        return { seatsLeft: 0, status: "NOT AVAILABLE", canBook: false };
      }

      const totalSeats = train.classes[travelClass].totalSeats;
      const allBookings = _getAllStoredBookings();

      // Sum active passengers booked for this train, class, and date
      const bookedPaxCount = allBookings
        .filter(b => b.trainId === trainId && b.travelClass === travelClass && b.travelDate === date && b.status !== "CANCELLED")
        .reduce((sum, b) => sum + (b.passengers ? b.passengers.length : 1), 0);

      const seatsLeft = Math.max(0, totalSeats - bookedPaxCount);

      let status = "AVAILABLE";
      if (seatsLeft <= 0) {
        status = "REGRET / FULL";
      } else if (seatsLeft < 10) {
        status = `RAC / WL (${seatsLeft} LEFT)`;
      } else {
        status = `AVAILABLE - ${seatsLeft}`;
      }

      return {
        totalSeats,
        bookedPaxCount,
        seatsLeft,
        status,
        canBook: seatsLeft > 0
      };
    },

    /**
     * Create a new booking
     * Re-checks seat availability to prevent overbooking as requested in spec
     */
    createBooking: function (payload) {
      const { trainId, travelClass, travelDate, passengers, contact } = payload;

      if (!trainId || !travelClass || !travelDate || !passengers || !passengers.length) {
        throw new Error("Missing required booking details.");
      }

      if (passengers.length > 6) {
        throw new Error("Maximum 6 passengers allowed per booking.");
      }

      // Re-check seat availability to block overbooking
      const currentAvail = this.getAvailability(trainId, travelClass, travelDate);
      if (currentAvail.seatsLeft < passengers.length) {
        throw new Error(`Insufficient seats available. Only ${currentAvail.seatsLeft} seat(s) left.`);
      }

      // Generate 10-digit authentic IRCTC-style PNR number
      const pnr = "24" + Math.floor(10000000 + Math.random() * 90000000).toString().substring(0, 8);

      const train = TRAINS.find(t => t.id === trainId);
      const farePerPax = train ? train.classes[travelClass].fare : 500;
      const baseFare = farePerPax * passengers.length;
      const reservationFee = 40 * passengers.length;
      const gst = Math.round(baseFare * 0.05);
      const totalAmount = baseFare + reservationFee + gst;

      // Assign berths/seats to passengers
      const berths = ["Lower", "Middle", "Upper", "Side Lower", "Side Upper"];
      const enrichedPassengers = passengers.map((p, idx) => ({
        ...p,
        seatNumber: `${travelClass}-${Math.floor(Math.random() * 60) + 1}`,
        berthAllocated: p.berthPreference || berths[idx % berths.length],
        status: "CNF"
      }));

      const newBooking = {
        pnr: pnr,
        bookingDate: new Date().toISOString(),
        travelDate: travelDate,
        trainId: trainId,
        trainNumber: train ? train.number : trainId,
        trainName: train ? train.name : "Express",
        fromStation: payload.fromStation,
        toStation: payload.toStation,
        travelClass: travelClass,
        passengers: enrichedPassengers,
        contact: contact,
        pricing: {
          baseFare,
          reservationFee,
          gst,
          totalAmount
        },
        status: "CONFIRMED"
      };

      const bookings = _getAllStoredBookings();
      bookings.unshift(newBooking);
      _saveBookings(bookings);

      return newBooking;
    },

    /**
     * Get booking details by 10-digit PNR
     */
    getBooking: function (pnr) {
      if (!pnr) return null;
      const cleanPnr = pnr.toString().trim().replace(/[-\s]/g, "");
      const bookings = _getAllStoredBookings();
      return bookings.find(b => b.pnr === cleanPnr) || null;
    },

    /**
     * Get all bookings saved in browser
     */
    getAllBookings: function () {
      return _getAllStoredBookings();
    },

    /**
     * Cancel booking by PNR
     */
    cancelBooking: function (pnr) {
      const cleanPnr = pnr.toString().trim().replace(/[-\s]/g, "");
      const bookings = _getAllStoredBookings();
      const booking = bookings.find(b => b.pnr === cleanPnr);
      if (!booking) return false;
      booking.status = "CANCELLED";
      _saveBookings(bookings);
      return true;
    },

    /**
     * Client-side User Session Management (For frontend testing & simulation)
     */
    getCurrentUser: function () {
      try {
        const u = localStorage.getItem(STORAGE_KEY_USER);
        return u ? JSON.parse(u) : null;
      } catch (e) {
        return null;
      }
    },

    setCurrentUser: function (user) {
      if (user) {
        localStorage.setItem(STORAGE_KEY_USER, JSON.stringify(user));
      } else {
        localStorage.removeItem(STORAGE_KEY_USER);
      }
    }
  };
})();

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { ParyatanAPI };
}
