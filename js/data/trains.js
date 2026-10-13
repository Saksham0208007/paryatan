// SAMPLE: REPLACE WITH VERIFIED DATA
/**
 * Sample Train Schedules & Master Routes Dataset
 * Note: Generated for prototype demonstration and end-to-end booking simulation.
 * Replace with verified Indian Railways API or database dump in production.
 */

const TRAINS = [
  // --- North & Central India Routes (Connecting NDLS, AGC, JP, ABR, PPI) ---
  {
    id: "12002",
    number: "12002",
    name: "Bhopal Shatabdi Express",
    runsOn: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    stops: [
      { stationCode: "NDLS", seq: 1, dep: "06:00", arr: "Start" },
      { stationCode: "AGC",  seq: 2, dep: "07:55", arr: "07:50" },
      { stationCode: "PPI",  seq: 3, dep: "End",   arr: "13:45" }
    ],
    classes: {
      "1A": { totalSeats: 25, fare: 2150 },
      "2A": { totalSeats: 45, fare: 1450 },
      "3A": { totalSeats: 80, fare: 980 }
    }
  },
  {
    id: "12004",
    number: "12004",
    name: "Taj Superfast Express",
    runsOn: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    stops: [
      { stationCode: "NDLS", seq: 1, dep: "06:55", arr: "Start" },
      { stationCode: "AGC",  seq: 2, dep: "End",   arr: "09:30" }
    ],
    classes: {
      "3A": { totalSeats: 90, fare: 480 },
      "SL": { totalSeats: 140, fare: 185 }
    }
  },
  {
    id: "12986",
    number: "12986",
    name: "Jaipur Double Decker",
    runsOn: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    stops: [
      { stationCode: "NDLS", seq: 1, dep: "17:35", arr: "Start" },
      { stationCode: "JP",   seq: 2, dep: "End",   arr: "22:05" }
    ],
    classes: {
      "2A": { totalSeats: 60, fare: 840 },
      "3A": { totalSeats: 110, fare: 520 }
    }
  },
  {
    id: "12958",
    number: "12958",
    name: "Swarna Jayanti Rajdhani",
    runsOn: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    stops: [
      { stationCode: "NDLS", seq: 1, dep: "19:55", arr: "Start" },
      { stationCode: "JP",   seq: 2, dep: "00:10", arr: "00:05" },
      { stationCode: "ABR",  seq: 3, dep: "04:35", arr: "04:30" },
      { stationCode: "ADI",  seq: 4, dep: "End",   arr: "08:45" }
    ],
    classes: {
      "1A": { totalSeats: 20, fare: 3100 },
      "2A": { totalSeats: 50, fare: 2150 },
      "3A": { totalSeats: 90, fare: 1540 }
    }
  },
  {
    id: "12915",
    number: "12915",
    name: "Ashram Express",
    runsOn: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    stops: [
      { stationCode: "ADI",  seq: 1, dep: "19:15", arr: "Start" },
      { stationCode: "ABR",  seq: 2, dep: "23:30", arr: "23:25" },
      { stationCode: "JP",   seq: 3, dep: "04:30", arr: "04:20" },
      { stationCode: "NDLS", seq: 4, dep: "End",   arr: "10:00" }
    ],
    classes: {
      "1A": { totalSeats: 18, fare: 2650 },
      "2A": { totalSeats: 48, fare: 1720 },
      "3A": { totalSeats: 85, fare: 1180 },
      "SL": { totalSeats: 160, fare: 440 }
    }
  },

  // --- West Coast & Konkan Routes (Connecting CSMT, PUNE, THVM, MAO, GOK, VAK, AWY) ---
  {
    id: "12051",
    number: "12051",
    name: "Madgaon Jan Shatabdi Express",
    runsOn: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    stops: [
      { stationCode: "CSMT", seq: 1, dep: "05:10", arr: "Start" },
      { stationCode: "THVM", seq: 2, dep: "13:35", arr: "13:30" },
      { stationCode: "MAO",  seq: 3, dep: "End",   arr: "14:40" }
    ],
    classes: {
      "2A": { totalSeats: 40, fare: 1120 },
      "3A": { totalSeats: 90, fare: 680 },
      "SL": { totalSeats: 120, fare: 295 }
    }
  },
  {
    id: "12133",
    number: "12133",
    name: "Mangaluru Superfast Express",
    runsOn: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    stops: [
      { stationCode: "CSMT", seq: 1, dep: "22:02", arr: "Start" },
      { stationCode: "THVM", seq: 2, dep: "07:15", arr: "07:10" },
      { stationCode: "MAO",  seq: 3, dep: "08:40", arr: "08:35" },
      { stationCode: "GOK",  seq: 4, dep: "End",   arr: "10:15" }
    ],
    classes: {
      "2A": { totalSeats: 42, fare: 1680 },
      "3A": { totalSeats: 84, fare: 1190 },
      "SL": { totalSeats: 140, fare: 470 }
    }
  },
  {
    id: "16345",
    number: "16345",
    name: "Netravati Express",
    runsOn: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    stops: [
      { stationCode: "CSMT", seq: 1, dep: "11:40", arr: "Start" },
      { stationCode: "THVM", seq: 2, dep: "21:52", arr: "21:48" },
      { stationCode: "MAO",  seq: 3, dep: "22:55", arr: "22:50" },
      { stationCode: "GOK",  seq: 4, dep: "01:12", arr: "01:08" },
      { stationCode: "AWY",  seq: 5, dep: "12:45", arr: "12:40" },
      { stationCode: "VAK",  seq: 6, dep: "End",   arr: "17:10" }
    ],
    classes: {
      "2A": { totalSeats: 36, fare: 2420 },
      "3A": { totalSeats: 72, fare: 1680 },
      "SL": { totalSeats: 150, fare: 630 }
    }
  },

  // --- Pan-India North to South Corridors (NDLS, AGC, PPI, AWY, VAK) ---
  {
    id: "12626",
    number: "12626",
    name: "Kerala Express",
    runsOn: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    stops: [
      { stationCode: "NDLS", seq: 1, dep: "20:10", arr: "Start" },
      { stationCode: "AGC",  seq: 2, dep: "22:25", arr: "22:20" },
      { stationCode: "HYB",  seq: 3, dep: "14:05", arr: "14:00" },
      { stationCode: "AWY",  seq: 4, dep: "13:55", arr: "13:50" },
      { stationCode: "VAK",  seq: 5, dep: "End",   arr: "18:25" }
    ],
    classes: {
      "1A": { totalSeats: 16, fare: 4850 },
      "2A": { totalSeats: 48, fare: 2890 },
      "3A": { totalSeats: 96, fare: 1980 },
      "SL": { totalSeats: 160, fare: 760 }
    }
  },
  {
    id: "12618",
    number: "12618",
    name: "Mangala Lakshadweep Express",
    runsOn: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    stops: [
      { stationCode: "NDLS", seq: 1, dep: "05:35", arr: "Start" },
      { stationCode: "AGC",  seq: 2, dep: "08:45", arr: "08:40" },
      { stationCode: "PPI",  seq: 3, dep: "19:20", arr: "19:15" },
      { stationCode: "MAO",  seq: 4, dep: "11:25", arr: "11:20" },
      { stationCode: "AWY",  seq: 5, dep: "End",   arr: "06:15" }
    ],
    classes: {
      "2A": { totalSeats: 44, fare: 2750 },
      "3A": { totalSeats: 90, fare: 1890 },
      "SL": { totalSeats: 155, fare: 710 }
    }
  },

  // --- East India & Odisha Coast (HWH, NDLS, PURI) ---
  {
    id: "12837",
    number: "12837",
    name: "Howrah Puri Superfast Express",
    runsOn: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    stops: [
      { stationCode: "HWH",  seq: 1, dep: "22:40", arr: "Start" },
      { stationCode: "PURI", seq: 2, dep: "End",   arr: "07:10" }
    ],
    classes: {
      "1A": { totalSeats: 22, fare: 2120 },
      "2A": { totalSeats: 52, fare: 1390 },
      "3A": { totalSeats: 110, fare: 960 },
      "SL": { totalSeats: 160, fare: 360 }
    }
  },
  {
    id: "12802",
    number: "12802",
    name: "Purushottam Express",
    runsOn: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    stops: [
      { stationCode: "NDLS", seq: 1, dep: "22:40", arr: "Start" },
      { stationCode: "PURI", seq: 2, dep: "End",   arr: "05:25" }
    ],
    classes: {
      "1A": { totalSeats: 18, fare: 3750 },
      "2A": { totalSeats: 46, fare: 2350 },
      "3A": { totalSeats: 88, fare: 1640 },
      "SL": { totalSeats: 140, fare: 620 }
    }
  },

  // --- Southern Heritage & Karnataka Circuit (MAS, SBC, MYS, HPT) ---
  {
    id: "20607",
    number: "20607",
    name: "Mysuru Vande Bharat Express",
    runsOn: ["Mon", "Tue", "Wed", "Fri", "Sat", "Sun"],
    stops: [
      { stationCode: "MAS", seq: 1, dep: "05:50", arr: "Start" },
      { stationCode: "SBC", seq: 2, dep: "10:25", arr: "10:20" },
      { stationCode: "MYS", seq: 3, dep: "End",   arr: "12:20" }
    ],
    classes: {
      "1A": { totalSeats: 30, fare: 2360 },
      "2A": { totalSeats: 70, fare: 1380 },
      "3A": { totalSeats: 120, fare: 950 }
    }
  },
  {
    id: "16591",
    number: "16591",
    name: "Hampi Express",
    runsOn: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    stops: [
      { stationCode: "MYS", seq: 1, dep: "18:50", arr: "Start" },
      { stationCode: "SBC", seq: 2, dep: "21:50", arr: "21:40" },
      { stationCode: "HPT", seq: 3, dep: "End",   arr: "08:50" }
    ],
    classes: {
      "1A": { totalSeats: 16, fare: 1980 },
      "2A": { totalSeats: 40, fare: 1250 },
      "3A": { totalSeats: 90, fare: 860 },
      "SL": { totalSeats: 160, fare: 320 }
    }
  },
  {
    id: "12649",
    number: "12649",
    name: "Karnataka Sampark Kranti",
    runsOn: ["Mon", "Wed", "Fri", "Sat"],
    stops: [
      { stationCode: "NDLS", seq: 1, dep: "06:25", arr: "Start" },
      { stationCode: "PPI",  seq: 2, dep: "20:15", arr: "20:10" },
      { stationCode: "HYB",  seq: 3, dep: "08:20", arr: "08:15" },
      { stationCode: "HPT",  seq: 4, dep: "15:50", arr: "15:45" },
      { stationCode: "SBC",  seq: 5, dep: "End",   arr: "21:40" }
    ],
    classes: {
      "1A": { totalSeats: 18, fare: 4200 },
      "2A": { totalSeats: 50, fare: 2540 },
      "3A": { totalSeats: 95, fare: 1780 },
      "SL": { totalSeats: 150, fare: 690 }
    }
  },

  // --- Nilgiri Mountain / Ooty Route (MAS, UAM) ---
  {
    id: "12671",
    number: "12671",
    name: "Nilgiri Superfast Express",
    runsOn: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    stops: [
      { stationCode: "MAS", seq: 1, dep: "21:05", arr: "Start" },
      { stationCode: "UAM", seq: 2, dep: "End",   arr: "12:00" }
    ],
    classes: {
      "1A": { totalSeats: 16, fare: 2450 },
      "2A": { totalSeats: 44, fare: 1520 },
      "3A": { totalSeats: 88, fare: 1040 },
      "SL": { totalSeats: 145, fare: 395 }
    }
  },

  // --- Central India Pachmarhi & Agra Route (PUNE, PPI, AGC, NDLS) ---
  {
    id: "11077",
    number: "11077",
    name: "Jhelum Express",
    runsOn: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    stops: [
      { stationCode: "PUNE", seq: 1, dep: "17:20", arr: "Start" },
      { stationCode: "PPI",  seq: 2, dep: "06:35", arr: "06:30" },
      { stationCode: "AGC",  seq: 3, dep: "16:55", arr: "16:50" },
      { stationCode: "NDLS", seq: 4, dep: "End",   arr: "20:45" }
    ],
    classes: {
      "2A": { totalSeats: 48, fare: 2180 },
      "3A": { totalSeats: 92, fare: 1480 },
      "SL": { totalSeats: 160, fare: 560 }
    }
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { TRAINS };
}
