/**
 * Master Stations Dataset for Paryatan
 * Destination stations and major hub railway junctions
 */
const STATIONS = [
  // Major Hubs / Common Origins
  { code: "NDLS", name: "New Delhi", city: "New Delhi", state: "Delhi" },
  { code: "CSMT", name: "Mumbai CSMT", city: "Mumbai", state: "Maharashtra" },
  { code: "HWH",  name: "Howrah Junction", city: "Kolkata", state: "West Bengal" },
  { code: "MAS",  name: "MGR Chennai Central", city: "Chennai", state: "Tamil Nadu" },
  { code: "SBC",  name: "KSR Bengaluru", city: "Bengaluru", state: "Karnataka" },
  { code: "PUNE", name: "Pune Junction", city: "Pune", state: "Maharashtra" },
  { code: "ADI",  name: "Ahmedabad Junction", city: "Ahmedabad", state: "Gujarat" },
  { code: "HYB",  name: "Hyderabad Deccan", city: "Hyderabad", state: "Telangana" },

  // Destination Stations Mapped to the 15 Spots
  { code: "AGC",  name: "Agra Cantt", city: "Agra", state: "Uttar Pradesh" },
  { code: "JP",   name: "Jaipur Junction", city: "Jaipur", state: "Rajasthan" },
  { code: "HPT",  name: "Hosapete Junction", city: "Hampi / Hosapete", state: "Karnataka" },
  { code: "MYS",  name: "Mysuru Junction", city: "Mysuru", state: "Karnataka" },
  { code: "PURI", name: "Puri", city: "Puri / Konark", state: "Odisha" },
  { code: "THVM", name: "Thivim", city: "North Goa (Ashwem/Arambol)", state: "Goa" },
  { code: "MAO",  name: "Madgaon Junction", city: "South Goa (Varca)", state: "Goa" },
  { code: "GOK",  name: "Gokarna Road", city: "Gokarna", state: "Karnataka" },
  { code: "VAK",  name: "Varkala Sivagiri", city: "Varkala", state: "Kerala" },
  { code: "AWY",  name: "Aluva", city: "Aluva / Munnar (Anamudi)", state: "Kerala" },
  { code: "UAM",  name: "Udhagamandalam", city: "Ooty (Doddabetta)", state: "Tamil Nadu" },
  { code: "ABR",  name: "Abu Road", city: "Mount Abu (Guru Shikhar)", state: "Rajasthan" },
  { code: "PPI",  name: "Pipariya", city: "Pipariya / Pachmarhi (Dhupgarh)", state: "Madhya Pradesh" }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { STATIONS };
}
