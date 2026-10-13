/**
 * Master Spots Dataset for Paryatan
 * All 15 destination spots across Architecture, Beaches, and Mountains
 */
const CATEGORIES = [
  {
    id: "mountains",
    name: "Enchanting Mountains",
    tagline: "Towering peaks, misty trails and cloud-kissed heights",
    description: "Discover South and Central India's highest peaks, lush shola forests, tea-carpeted slopes and unforgettable mountain sunrises.",
    image: "assets/images/mountains/anamudimountain.jpeg",
    count: 5
  },
  {
    id: "architecture",
    name: "Architectural Marvels",
    tagline: "Timeless stone carvings, royal forts and sacred wonders",
    description: "Journey through centuries of royal craftsmanship, intricate Dravidian gopurams, Rajasthani palaces and UNESCO World Heritage sanctuaries.",
    image: "assets/images/architecture/tajmahal.jpeg",
    count: 5
  },
  {
    id: "beaches",
    name: "Relaxing Beaches",
    tagline: "Golden shores, turquoise waves and coastal tranquility",
    description: "Unwind on tranquil Goan coves, hike volcanic red cliff tops in Kerala, and listen to sunset drum circles along pristine coastlines.",
    image: "assets/images/beaches/arambolbeach.jpeg",
    count: 5
  }
];

const SPOTS = [
  // --- ARCHITECTURAL MARVELS ---
  {
    id: "taj-mahal",
    name: "Taj Mahal",
    category: "architecture",
    location: "Agra, Uttar Pradesh",
    image: "assets/images/architecture/tajmahal.jpeg",
    nearestStation: {
      code: "AGC",
      name: "Agra Cantt",
      distance: "5.5 km"
    },
    facts: [
      "Commissioned in 1631 by Mughal Emperor Shah Jahan as an eternal mausoleum for his beloved wife Mumtaz Mahal.",
      "Recognized as a UNESCO World Heritage Site in 1983 and celebrated globally as one of the New 7 Wonders of the World.",
      "Constructed entirely with translucent ivory-white Makrana marble that softly changes hue from dawn glow to moonlight.",
      "Engineered with impeccable bilateral symmetry surrounded by serene 300-meter Persian Charbagh gardens."
    ],
    reach: {
      train: "Agra Cantt (AGC) is just 5.5 km away. Major trains like Gatimaan Express and Vande Bharat connect from New Delhi in under 100 minutes.",
      air: "Agra Airport (Kheria) is 12 km away; Indira Gandhi International Airport in New Delhi is 210 km away.",
      road: "Connected directly from Delhi NCR via the 6-lane Yamuna Expressway in approximately 3 hours."
    }
  },
  {
    id: "amer-fort",
    name: "Amer Fort",
    category: "architecture",
    location: "Jaipur, Rajasthan",
    image: "assets/images/architecture/Amerfort.jpeg",
    nearestStation: {
      code: "JP",
      name: "Jaipur Junction",
      distance: "14 km"
    },
    facts: [
      "Founded in 1592 by Raja Man Singh I atop the rugged Cheel ka Teela (Hill of Eagles) overlooking Maota Lake.",
      "Designated a UNESCO World Heritage Site as part of the majestic Hill Forts of Rajasthan.",
      "Houses the legendary Sheesh Mahal (Mirror Palace) where convex mirror mosaics light up the hall with a single candle.",
      "Seamlessly fuses Rajput defense architecture with refined Mughal decorative courtyards and marble gates."
    ],
    reach: {
      train: "Jaipur Junction (JP) is 14 km from the fort; connected by frequent express, superfast and Rajdhani trains from across India.",
      air: "Jaipur International Airport (JAI) is 22 km away with regular domestic and international flights.",
      road: "Located along National Highway 48 with frequent AC Volvo buses from Delhi (260 km) and Agra (240 km)."
    }
  },
  {
    id: "virupaksha-temple",
    name: "Virupaksha Temple",
    category: "architecture",
    location: "Hampi, Karnataka",
    image: "assets/images/architecture/virupakshatemple.jpeg",
    nearestStation: {
      code: "HPT",
      name: "Hosapete Junction",
      distance: "13 km"
    },
    facts: [
      "An unbroken 7th-century sacred Dravidian sanctuary dedicated to Lord Shiva as Virupaksha.",
      "Served as the sacred spiritual nerve center of the Vijayanagara Empire beside the sacred Tungabhadra River.",
      "Dominates the skyline with a 49-meter-high eastern tiered gopuram and an inverted shadow pinhole chamber.",
      "Surrounded by surreal boulder-strewn hills, ancient stone bazaars and monolith chariot shrines."
    ],
    reach: {
      train: "Hosapete Junction (HPT) is 13 km away; direct daily express trains run from Bengaluru, Hyderabad, Hubballi and Goa.",
      air: "Jindal Vijayanagar Airport (VDY) is 40 km away; Hubballi Airport (HBX) is 145 km away.",
      road: "Direct overnight KSRTC sleeper buses link Hampi to Bengaluru (340 km), Panaji (310 km) and Mysuru (410 km)."
    }
  },
  {
    id: "mysore-palace",
    name: "Mysore Palace",
    category: "architecture",
    location: "Mysuru, Karnataka",
    image: "assets/images/architecture/mysorepalace.jpeg",
    nearestStation: {
      code: "MYS",
      name: "Mysuru Junction",
      distance: "2 km"
    },
    facts: [
      "The official residence of the Wadiyar dynasty, also celebrated as the Amba Vilas Palace.",
      "Masterfully designed by British architect Henry Irwin in exuberant Indo-Saracenic style blending Hindu, Muslim and Gothic motifs.",
      "Illuminated by nearly 100,000 electric bulbs every Sunday evening and during the world-renowned 10-day Dasara festival.",
      "Features intricately carved teakwood ceilings, Belgian stained glass, and the legendary Golden Throne."
    ],
    reach: {
      train: "Mysuru Junction (MYS) is just 2 km away; multiple Vande Bharat and Shatabdi trains connect from Bengaluru daily in under 2 hours.",
      air: "Mysore Airport (MYQ) operates regional flights; Kempegowda International Airport Bengaluru is 170 km away.",
      road: "The state-of-the-art 10-lane Bengaluru-Mysuru Expressway connects directly in about 90 minutes."
    }
  },
  {
    id: "konark-sun-temple",
    name: "Konark Sun Temple",
    category: "architecture",
    location: "Puri / Konark, Odisha",
    image: "assets/images/architecture/konarksuntemple.jpeg",
    nearestStation: {
      code: "PURI",
      name: "Puri",
      distance: "35 km"
    },
    facts: [
      "Built in 1250 CE by King Narasimhadeva I of the Eastern Ganga Dynasty on the Bay of Bengal coast.",
      "Conceived as a colossal stone chariot of the Sun God Surya with 24 carved wheels hauled by seven horses.",
      "The 24 wheels function as remarkably precise sundials that accurately tell time using shadows.",
      "Celebrated for its masterly Kalinga stone carvings depicting musicians, dancers, celestial beings and daily life."
    ],
    reach: {
      train: "Puri Railway Station (PURI) is 35 km away; Bhubaneswar Junction (BBS) is 65 km away with country-wide train routes.",
      air: "Biju Patnaik International Airport at Bhubaneswar (BBI) is 65 km away.",
      road: "Connected by the scenic Puri-Konark Marine Drive highway offering picturesque ocean vistas."
    }
  },

  // --- RELAXING BEACHES ---
  {
    id: "ashwem-beach",
    name: "Ashwem Beach",
    category: "beaches",
    location: "North Goa",
    image: "assets/images/beaches/Ashvembeach.jpeg",
    nearestStation: {
      code: "THVM",
      name: "Thivim",
      distance: "22 km"
    },
    facts: [
      "A serene and expansive stretch of fine silver sands nestled between Morjim and Mandrem in North Goa.",
      "Protected ecological habitat for endangered Olive Ridley sea turtles during their annual winter nesting season.",
      "Characterized by gentle shallow waters, chic eco-friendly beach shacks, and quiet bohemian charm.",
      "Free from heavy water sports, offering an ideal setting for tranquil sunbathing, yoga and coastal sunsets."
    ],
    reach: {
      train: "Thivim Railway Station (THVM) is 22 km away; pre-paid taxis and car rentals operate at the station.",
      air: "Manohar International Airport at Mopa (GOX) is just 28 km away; Dabolim Airport is 55 km away.",
      road: "Scenic coastal roads connect easily from Mapusa (18 km) and Panaji capital city (32 km)."
    }
  },
  {
    id: "varca-beach",
    name: "Varca Beach",
    category: "beaches",
    location: "South Goa",
    image: "assets/images/beaches/varcabeach.jpeg",
    nearestStation: {
      code: "MAO",
      name: "Madgaon Junction",
      distance: "10 km"
    },
    facts: [
      "A pristine shoreline of soft white sand and swaying coconut palms in peaceful South Goa.",
      "Known for traditional wooden Goan fishing boats and early morning dolphin-spotting excursions into the sea.",
      "Retains an uncrowded atmosphere lined with upscale eco-resorts and authentic beachside fish curries.",
      "Gentle tides and wide flat shores make it one of the safest beaches for relaxing ocean dips."
    ],
    reach: {
      train: "Madgaon Junction (MAO) is only 10 km away; Konkan Railway trains from Mumbai, Delhi, Kerala and Karnataka stop here.",
      air: "Goa Dabolim Airport (GOI) is 29 km away; Mopa Airport is 68 km away.",
      road: "Just a 15-minute drive from Margao city center along serene countryside roads."
    }
  },
  {
    id: "arambol-beach",
    name: "Arambol Beach",
    category: "beaches",
    location: "North Goa",
    image: "assets/images/beaches/arambolbeach.jpeg",
    nearestStation: {
      code: "THVM",
      name: "Thivim",
      distance: "25 km"
    },
    facts: [
      "A legendary bohemian haven celebrated for spontaneous sunset drum circles and acoustic gatherings.",
      "Houses a secluded freshwater lake (Vagacolam) tucked right beside the ocean past the rocky cliff headland.",
      "Renowned for cliffside paragliding, therapeutic mud baths, meditation retreats and evening flea markets.",
      "Bordered by dramatic sea cliffs and a lush green banyan tree trail leading to serene forest springs."
    ],
    reach: {
      train: "Thivim Railway Station (THVM) is 25 km away; Pernem Railway Station (PERN) is 17 km away.",
      air: "Manohar International Airport at Mopa (GOX) is only 26 km away.",
      road: "State transport buses and taxis connect regularly from Mapusa bus terminal (22 km) and Panaji (36 km)."
    }
  },
  {
    id: "om-beach",
    name: "Om Beach",
    category: "beaches",
    location: "Gokarna, Karnataka",
    image: "assets/images/beaches/ombeach.jpeg",
    nearestStation: {
      code: "GOK",
      name: "Gokarna Road",
      distance: "10 km"
    },
    facts: [
      "Naturally sculpted into the sacred Sanskrit shape of 'Om' by two adjoining curved semicircular bays.",
      "Cradled by rugged cliffs of the Western Ghats opening into the shimmering turquoise waters of the Arabian Sea.",
      "Popular for sea kayaking, speedboat trips, and scenic cliff treks connecting Kudle, Half Moon and Paradise beaches.",
      "Combines an ancient spiritual temple town heritage with laid-back cliffside cafes and starry night campfires."
    ],
    reach: {
      train: "Gokarna Road Railway Station (GOK) is 10 km away; auto-rickshaws and cabs are readily available.",
      air: "Goa Dabolim Airport (GOI) is 140 km away; Hubballi Airport (HBX) is 150 km away.",
      road: "Direct overnight sleeper buses operate from Bengaluru (490 km), Mangaluru (230 km) and Panaji (150 km)."
    }
  },
  {
    id: "varkala-beach",
    name: "Varkala Beach",
    category: "beaches",
    location: "Varkala, Kerala",
    image: "assets/images/beaches/varkalabeach.jpeg",
    nearestStation: {
      code: "VAK",
      name: "Varkala Sivagiri",
      distance: "3 km"
    },
    facts: [
      "The only destination in southern Kerala where towering reddish laterite cliffs dramatically overlook the Arabian Sea.",
      "Also known as Papanasam Beach, where holy natural mineral springs are believed to cleanse all worldly sins.",
      "The cliff promenade is lined with cozy seafood cafes, yoga ashrams, handicraft shops and Ayurvedic wellness spas.",
      "Designated a national geological monument by the Geological Survey of India for its unique cliff formations."
    ],
    reach: {
      train: "Varkala Sivagiri Railway Station (VAK) is just 3 km away; major express trains running on the Kerala coastal line stop here.",
      air: "Trivandrum International Airport (TRV) is 42 km away with flights from across India and the Middle East.",
      road: "Easily reachable via NH66 from Kollam (25 km) and Thiruvananthapuram (45 km)."
    }
  },

  // --- ENCHANTING MOUNTAINS ---
  {
    id: "anamudi",
    name: "Anamudi",
    category: "mountains",
    location: "Munnar, Kerala",
    image: "assets/images/mountains/anamudimountain.jpeg",
    nearestStation: {
      code: "AWY",
      name: "Aluva",
      distance: "115 km"
    },
    facts: [
      "Standing at 2,695 meters (8,842 ft), Anamudi is the highest peak in South India and the entire Western Ghats.",
      "The name translates from Malayalam as 'Elephant's Head', denoting its imposing forehead-like granite ridge.",
      "Located inside the pristine Eravikulam National Park, sanctuary to the endangered wild mountain goat, the Nilgiri Tahr.",
      "Home to the legendary Neelakurinji shrub (Strobilanthes kunthiana) that bathes the slopes in violet-blue once every 12 years."
    ],
    reach: {
      train: "Aluva Railway Station (AWY) is 115 km away, with Ernakulam Junction at 125 km providing pan-India connectivity.",
      air: "Cochin International Airport (COK) is 110 km away along scenic winding hill highways.",
      road: "KSRTC buses and private taxis run from Kochi and Aluva to Munnar town (13 km to national park gate)."
    }
  },
  {
    id: "meesapulimala",
    name: "Meesapulimala",
    category: "mountains",
    location: "Munnar, Kerala",
    image: "assets/images/mountains/messapulimalamountain.jpeg",
    nearestStation: {
      code: "AWY",
      name: "Aluva",
      distance: "125 km"
    },
    facts: [
      "The second highest mountain peak in the Western Ghats at an elevation of 2,640 meters (8,661 ft).",
      "Named after its eight sharp ridgelines which resemble the fierce whiskers and face of a tiger (Meesapuli).",
      "A premier trekking destination surrounded by high-altitude grasslands, wild rhododendron groves, and floating clouds.",
      "Regulated and protected by the Kerala Forest Development Corporation (KFDC) ensuring sustainable eco-tourism."
    ],
    reach: {
      train: "Aluva (AWY) is 125 km away; Kottayam (KTYM) is 140 km away.",
      air: "Cochin International Airport (COK) is 125 km away via the Kochi-Dhanushkodi National Highway 85.",
      road: "Reach Munnar, then board 4x4 off-road jeeps through tea estates to the KFDC base camp at Rhodo Valley (24 km)."
    }
  },
  {
    id: "doddabetta",
    name: "Doddabetta",
    category: "mountains",
    location: "Ooty, Tamil Nadu",
    image: "assets/images/mountains/doddabettamountain.jpeg",
    nearestStation: {
      code: "UAM",
      name: "Udhagamandalam",
      distance: "9 km"
    },
    facts: [
      "The highest mountain in the Nilgiri Hills range standing at an impressive 2,637 meters (8,652 ft).",
      "Features a prominent Telescope House at the summit offering 360-degree views of the Chamundi Hills and Nilgiri valleys.",
      "Surrounded by dense virgin shola forests, aromatic eucalyptus plantations, and alpine flowering shrubs.",
      "The name Doddabetta comes from the indigenous Badaga language and translates literally to 'Big Mountain'."
    ],
    reach: {
      train: "Udhagamandalam Railway Station (UAM) is 9 km away; connected via the UNESCO World Heritage Nilgiri Mountain Toy Train.",
      air: "Coimbatore International Airport (CJB) is 95 km away via the scenic Mettupalayam ghat road.",
      road: "Frequent state transport buses, shared autos, and tourist cabs operate from Ooty Central Bus Stand."
    }
  },
  {
    id: "guru-shikhar",
    name: "Guru Shikhar",
    category: "mountains",
    location: "Mount Abu, Rajasthan",
    image: "assets/images/mountains/gurushikharmountain.jpeg",
    nearestStation: {
      code: "ABR",
      name: "Abu Road",
      distance: "42 km"
    },
    facts: [
      "The highest peak in the ancient Aravalli Mountain Range rising to 1,722 meters (5,650 ft).",
      "Crowned by a sacred cliffside cave temple dedicated to Guru Dattatreya, an incarnation of Brahma, Vishnu and Shiva.",
      "Hosts the Mount Abu Infrared Observatory, an esteemed astronomical facility operated by the Physical Research Laboratory.",
      "Offers commanding panoramic views of Mount Abu's granite crags, valleys, and lush green forests."
    ],
    reach: {
      train: "Abu Road Railway Station (ABR) is 42 km away at the foot of the hills with extensive Western Railway connections.",
      air: "Udaipur Maharana Pratap Airport (UDR) is 185 km away; Ahmedabad Airport (AMD) is 220 km away.",
      road: "A smooth 15 km scenic mountain drive from Mount Abu town center through pine and eucalyptus slopes."
    }
  },
  {
    id: "dhupgarh",
    name: "Dhupgarh",
    category: "mountains",
    location: "Pachmarhi, Madhya Pradesh",
    image: "assets/images/mountains/dhupgrahamountain.jpeg",
    nearestStation: {
      code: "PPI",
      name: "Pipariya",
      distance: "52 km"
    },
    facts: [
      "The highest point in Madhya Pradesh and the entire Satpura Range at 1,352 meters (4,429 ft).",
      "Renowned across central India as Mount Dhupgarh for its awe-inspiring sunrise and vibrant crimson sunset viewpoints.",
      "Located in the core zone of the Satpura Biosphere Reserve, known for deep ravines, waterfalls, and prehistoric rock art.",
      "Offers a cool mountain microclimate, sweeping forested horizon views, and clear stargazing skies."
    ],
    reach: {
      train: "Pipariya Railway Station (PPI) is 52 km away; frequent taxis and MP Tourism buses connect up to Pachmarhi.",
      air: "Raja Bhoj Airport Bhopal (BHO) is 210 km away; Jabalpur Airport (JLR) is 240 km away.",
      road: "Located 10 km from Pachmarhi cantonment; accessible via forest department pass and taxi routes."
    }
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { CATEGORIES, SPOTS };
}
