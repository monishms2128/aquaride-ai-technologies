export const VEHICLE_PROFILES = [
  {
    id: "commuter",
    name: "Standard Commuter Bike",
    modelExample: "Honda Shine / Hero Splendor / Bajaj Pulsar",
    category: "Commuter (100-150cc)",
    weightKg: 118,
    dimensions: "2000mm x 740mm x 1060mm",
    baseDirtLevel: 48,
    imageSvgType: "commuter",
    sensitiveZones: [
      {
        id: "cockpit",
        name: "Analog Meter & Switchgear",
        maxPressureBar: 35,
        x: 30,
        y: 22,
        radius: 12
      },
      {
        id: "carb",
        name: "Carburetor / Spark Plug",
        maxPressureBar: 45,
        x: 50,
        y: 52,
        radius: 14
      },
      {
        id: "chain",
        name: "Open Drive Chain",
        maxPressureBar: 50,
        x: 75,
        y: 68,
        radius: 16
      }
    ],
    heavyDirtZones: [
      {
        id: "front_fender",
        name: "Front Mudguard & Fork",
        targetPressureBar: 95,
        x: 18,
        y: 62
      },
      {
        id: "engine_bottom",
        name: "Engine Underguard",
        targetPressureBar: 105,
        x: 48,
        y: 72
      },
      {
        id: "rear_wheel",
        name: "Rear Wheel & Swingarm",
        targetPressureBar: 100,
        x: 82,
        y: 70
      }
    ],
    recommendedMode: "standard"
  },
  {
    id: "scooter",
    name: "Automatic / EV Scooter",
    modelExample: "Ather 450X / Ola S1 Pro / TVS Jupiter / Activa",
    category: "Scooter & EV (110-125cc)",
    weightKg: 106,
    dimensions: "1850mm x 700mm x 1150mm",
    baseDirtLevel: 32,
    imageSvgType: "scooter",
    sensitiveZones: [
      {
        id: "display",
        name: "Digital TFT Screen & Keyhole",
        maxPressureBar: 30,
        x: 26,
        y: 24,
        radius: 14
      },
      {
        id: "charging_port",
        name: "Battery Bay & High-Voltage Port",
        maxPressureBar: 35,
        x: 42,
        y: 45,
        radius: 15
      },
      {
        id: "intake",
        name: "CVT / Motor Air Filter Box",
        maxPressureBar: 40,
        x: 74,
        y: 62,
        radius: 16
      }
    ],
    heavyDirtZones: [
      {
        id: "front_apron_bottom",
        name: "Front Apron Underside",
        targetPressureBar: 85,
        x: 22,
        y: 68
      },
      {
        id: "floorboard_bottom",
        name: "Floorboard Bottom Panel",
        targetPressureBar: 95,
        x: 52,
        y: 75
      },
      {
        id: "exhaust_muffler",
        name: "Rear Wheel & Motor Hub",
        targetPressureBar: 90,
        x: 80,
        y: 65
      }
    ],
    recommendedMode: "eco"
  },
  {
    id: "superbike",
    name: "Performance Sports Bike",
    modelExample: "KTM Duke 390 / Yamaha R15 / Ninja 400 / BMW G310R",
    category: "Performance (300-650cc)",
    weightKg: 168,
    dimensions: "2050mm x 780mm x 1100mm",
    baseDirtLevel: 62,
    imageSvgType: "superbike",
    sensitiveZones: [
      {
        id: "tft_console",
        name: "Color TFT Console & Clip-ons",
        maxPressureBar: 35,
        x: 30,
        y: 25,
        radius: 14
      },
      {
        id: "ecu_battery",
        name: "ECU Module & Wire Harness",
        maxPressureBar: 40,
        x: 52,
        y: 42,
        radius: 14
      },
      {
        id: "radiator_fins",
        name: "Delicate Radiator Cooling Fins",
        maxPressureBar: 45,
        x: 38,
        y: 50,
        radius: 16
      },
      {
        id: "o_ring_chain",
        name: "Sealed O-Ring Gold Chain",
        maxPressureBar: 45,
        x: 76,
        y: 66,
        radius: 15
      }
    ],
    heavyDirtZones: [
      {
        id: "belly_pan",
        name: "Aero Belly Pan Underside",
        targetPressureBar: 100,
        x: 46,
        y: 74
      },
      {
        id: "front_alloy",
        name: "Front Dual-Disc Rim",
        targetPressureBar: 110,
        x: 18,
        y: 68
      },
      {
        id: "rear_hugger",
        name: "Rear Tyre Hugger & Rim",
        targetPressureBar: 110,
        x: 82,
        y: 68
      }
    ],
    recommendedMode: "standard"
  },
  {
    id: "offroad",
    name: "Cruiser & Adventure ADV",
    modelExample: "Royal Enfield Hunter 350 / Himalayan / Classic 350 / Xpulse",
    category: "Cruiser & ADV (200-450cc)",
    weightKg: 195,
    dimensions: "2190mm x 840mm x 1370mm",
    baseDirtLevel: 85,
    imageSvgType: "offroad",
    sensitiveZones: [
      {
        id: "gps_console",
        name: "Digital Nav & Switchgear",
        maxPressureBar: 35,
        x: 32,
        y: 20,
        radius: 14
      },
      {
        id: "snorkel_intake",
        name: "Airbox Snorkel Intake",
        maxPressureBar: 40,
        x: 48,
        y: 38,
        radius: 15
      }
    ],
    heavyDirtZones: [
      {
        id: "bash_plate",
        name: "Heavy Aluminium Bash Plate",
        targetPressureBar: 120,
        x: 46,
        y: 76
      },
      {
        id: "spoke_front",
        name: "Front Spoke Rim & Dual Calipers",
        targetPressureBar: 115,
        x: 16,
        y: 66
      },
      {
        id: "knobby_rear",
        name: "Rear Mud Flap & Wheel Well",
        targetPressureBar: 120,
        x: 84,
        y: 68
      },
      {
        id: "fork_gaiters",
        name: "Suspension Forks & Mud Seals",
        targetPressureBar: 110,
        x: 26,
        y: 55
      }
    ],
    recommendedMode: "heavy"
  }
];

export const WASH_MODES = [
  {
    id: "eco",
    name: "Express Eco Wash",
    tagline: "Superficial city dust & quick refresh in 90 seconds",
    durationSec: 90,
    waterLiters: 18,
    recycledWaterPct: 80,
    netFreshWaterLiters: 3.6,
    avgPressureBar: 55,
    chemicalDoseMl: 30,
    powerKwh: 0.12,
    priceInr: 60,
    color: "from-emerald-500 to-teal-600",
    stages: [
      {
        name: "Edge AI Optical Profiling",
        duration: 10,
        pressure: 0,
        desc: "Camera & sensors mapping dirt distribution"
      },
      {
        name: "Low-Pressure Pre-Mist Soaking",
        duration: 20,
        pressure: 45,
        desc: "Soft pre-mist softens road grime"
      },
      {
        name: "Active Snow Foam Dosing",
        duration: 20,
        pressure: 40,
        desc: "pH-neutral high-density surfactant application"
      },
      {
        name: "Spot-Free Demineralized Rinse",
        duration: 25,
        pressure: 60,
        desc: "Filtered RO water flush for zero water marks"
      },
      {
        name: "Cyclone Heated Air Dry",
        duration: 15,
        pressure: 0,
        desc: "High-velocity 120 km/h air purge"
      }
    ]
  },
  {
    id: "standard",
    name: "Pro Deep Clean (Flagship)",
    tagline: "Balanced automated wash with contour microfiber scrub",
    durationSec: 150,
    waterLiters: 28,
    recycledWaterPct: 75,
    netFreshWaterLiters: 7,
    avgPressureBar: 80,
    chemicalDoseMl: 65,
    powerKwh: 0.22,
    priceInr: 90,
    color: "from-cyan-500 to-blue-600",
    stages: [
      {
        name: "AI Vision & Sensitive Masking",
        duration: 15,
        pressure: 0,
        desc: "Neural network segments digital meter and ECU zones"
      },
      {
        name: "High-Velocity Gantry Pre-Rinse",
        duration: 30,
        pressure: 75,
        desc: "Differential nozzle gantry sweeps chassis"
      },
      {
        name: "Dual Chemical Injection",
        duration: 30,
        pressure: 60,
        desc: "Alkaline wheel degreaser + Body gloss foam"
      },
      {
        name: "Oscillating Microfiber Scrub",
        duration: 35,
        pressure: 50,
        desc: "Soft EVA contour brushes clean rims and frame"
      },
      {
        name: "Hydro-Jet High-Pressure Rinse",
        duration: 25,
        pressure: 90,
        desc: "Spotless final rinse with 100% drainage recovery"
      },
      {
        name: "Twin Cyclone Moisture Purge",
        duration: 15,
        pressure: 0,
        desc: "Dry air jets clear chain, switchgear, and mirrors"
      }
    ]
  },
  {
    id: "heavy",
    name: "Monsoon Mud & Chassis Blast",
    tagline: "Monsoon sludge, underbody grime & chain degreasing",
    durationSec: 240,
    waterLiters: 38,
    recycledWaterPct: 72,
    netFreshWaterLiters: 10.6,
    avgPressureBar: 110,
    chemicalDoseMl: 110,
    powerKwh: 0.38,
    priceInr: 150,
    color: "from-amber-500 to-orange-600",
    stages: [
      {
        name: "Multi-Angle Mud Profiling",
        duration: 20,
        pressure: 0,
        desc: "Edge sensors map mud cake thickness"
      },
      {
        name: "Underbody Mud-Blast Array",
        duration: 50,
        pressure: 115,
        desc: "Oscillating 120-Bar bottom jet array"
      },
      {
        name: "Heavy Degreaser & Dense Foam Soak",
        duration: 40,
        pressure: 70,
        desc: "Emulsifies heavy oil and road tar"
      },
      {
        name: "Rotary Power Spoke Scrub",
        duration: 60,
        pressure: 85,
        desc: "Deep-reach wheel spoke and swingarm scrub"
      },
      {
        name: "Twin Gantry High-Pressure Rinse",
        duration: 45,
        pressure: 110,
        desc: "Purified recycled water wash pass"
      },
      {
        name: "Heated Cyclone Thermal Dryer",
        duration: 25,
        pressure: 0,
        desc: "Dual blowers clear all moisture from seals and chain"
      }
    ]
  },
  {
    id: "ai_auto",
    name: "AI Auto-Sense Adaptive Clean",
    tagline: "Dynamic Computer Vision & Adaptive Fluid Modulation",
    isAi: true,
    durationSec: 165,
    waterLiters: 25.4,
    recycledWaterPct: 78,
    netFreshWaterLiters: 5.6,
    avgPressureBar: 88,
    chemicalDoseMl: 58,
    powerKwh: 0.24,
    priceInr: 110,
    color: "from-purple-500 to-indigo-600",
    stages: [
      {
        name: "Edge AI Camera Vision Scan",
        duration: 18,
        pressure: 0,
        desc: "YOLOv8 detects dirt hotspots & masks sensitive modules"
      },
      {
        name: "Variable-Pressure Pre-Rinse",
        duration: 35,
        pressure: 95,
        desc: "Modulates 35 Bar (meter) to 110 Bar (fenders)"
      },
      {
        name: "Spectrometry-Calibrated Foam Spray",
        duration: 32,
        pressure: 65,
        desc: "Dispenses targeted degreaser only on oily lower frame"
      },
      {
        name: "Adaptive Contour Microfiber Scrub",
        duration: 40,
        pressure: 75,
        desc: "Brushes adjust RPM based on paint and bodywork profile"
      },
      {
        name: "Zone-Targeted Final Hydro-Rinse",
        duration: 25,
        pressure: 100,
        desc: "High-efficiency deionized spot-free rinse"
      },
      {
        name: "Smart Crevice Air Blow Dry",
        duration: 15,
        pressure: 0,
        desc: "Blowers focus on crevices, brake calipers, and drive chain"
      }
    ]
  }
];

export const TELEMETRY_NODES = [
  {
    id: "bay_01",
    name: "Station 01 - Chennai OMR Tech Corridor",
    city: "Chennai",
    address: "HPCL Auto Care, OMR Sholinganallur, Chennai",
    status: "Active / Ready",
    todayWashes: 42,
    todayWaterSavedLiters: 2730,
    freshTankLevelPct: 88,
    recycleTankLevelPct: 74,
    shampooTankLevelPct: 62,
    degreaserTankLevelPct: 55,
    turbidityNtu: 6.8,
    filterStatus: "Optimal (Clean)",
    pumpHealthPct: 98,
    lastWashTime: "2 mins ago"
  },
  {
    id: "bay_02",
    name: "Station 02 - Kanchipuram Central Workshop",
    city: "Kanchipuram",
    address: "Kanchipuram Bypass Hub, Gandhi Road, Kanchipuram",
    status: "Active / In-Wash",
    todayWashes: 36,
    todayWaterSavedLiters: 2340,
    freshTankLevelPct: 75,
    recycleTankLevelPct: 82,
    shampooTankLevelPct: 51,
    degreaserTankLevelPct: 44,
    turbidityNtu: 7.4,
    filterStatus: "Optimal (Clean)",
    pumpHealthPct: 96,
    lastWashTime: "Washing Now"
  },
  {
    id: "bay_03",
    name: "Station 03 - Bengaluru Koramangala EV Hub",
    city: "Bengaluru",
    address: "IndianOil Petrol Retail, 80 Feet Road, Koramangala",
    status: "Active / Ready",
    todayWashes: 58,
    todayWaterSavedLiters: 3770,
    freshTankLevelPct: 91,
    recycleTankLevelPct: 68,
    shampooTankLevelPct: 70,
    degreaserTankLevelPct: 61,
    turbidityNtu: 5.9,
    filterStatus: "Optimal (Clean)",
    pumpHealthPct: 99,
    lastWashTime: "8 mins ago"
  }
];

export const COMMERCIAL_PARTNERS = [
  { name: "HPCL Retail Outlets", logo: "⛽", category: "Fuel Station Partner" },
  { name: "IndianOil AutoCare", logo: "💧", category: "Forecourt Partner" },
  { name: "Honda Authorized Dealerships", logo: "🏍️", category: "Service Center Partner" },
  { name: "TVS & Ather EV Hubs", logo: "⚡", category: "EV Clean Care" },
  { name: "Rapido & Swiggy Logistics", logo: "📦", category: "Fleet Partner" },
  { name: "Royal Enfield Custom Care", logo: "🛡️", category: "Detailing Partner" },
];

export const TESTIMONIALS = [
  {
    id: 1,
    quote: "AquaRide AI transformed our dealership service bay turnaround. Earlier, 3 manual washers took 45 minutes per bike, creating long backlogs. Now every vehicle gets washed in 3 minutes with zero waterlogged instrument clusters. Our customer satisfaction jumped to 98%.",
    author: "K. Rajendran",
    role: "Service General Manager",
    company: "Apex Honda Dealership, Chennai",
    rating: 5,
    metric: "10x Faster Turnaround"
  },
  {
    id: 2,
    quote: "Installing an AquaRide AI container bay on our petrol pump forecourt was our best ROI decision. We wash over 65 bikes a day with an attendant doing basic oversight. It saves 4,000+ liters of water daily while generating healthy monthly recurring income.",
    author: "V. Sundararaman",
    role: "Franchise Partner & Fuel Retailer",
    company: "HPCL Station Hub, Kanchipuram",
    rating: 5,
    metric: "11-Month Capex Recovery"
  },
  {
    id: 3,
    quote: "As a daily commuter on my Royal Enfield Hunter 350, manual bike washes were a nightmare—scratched paint and 40-minute wait times. With AquaRide, I scan the QR code on my phone, pay ₹90 on UPI, and ride out with a spotless, completely dry bike in 3 minutes.",
    author: "Arun Kumar",
    role: "Software Architect & Rider",
    company: "Chennai OMR Tech Corridor",
    rating: 5,
    metric: "Zero Waiting & Zero Swirl Marks"
  }
];

export const COMPANY_STATS = [
  { value: 75, suffix: "%", label: "Groundwater Saved", desc: "Closed-loop multi-stage recycling", color: "text-cyan-400" },
  { value: 3, suffix: " Min", label: "Turnaround Time", desc: "Full wash, rinse & cyclone dry", color: "text-emerald-400" },
  { value: 100, suffix: "%", label: "Electronics Safe", desc: "Digital meter & ECU shielding (<35 Bar)", color: "text-purple-400" },
  { value: 12000, suffix: "+", label: "Commercial Washes", desc: "Completed across live station network", color: "text-amber-400" },
];
