export const VEHICLE_PROFILES = [
  {
    id: "commuter",
    name: "Standard Commuter Bike",
    modelExample: "Honda Shine / Hero Splendor / Pulsar 150",
    category: "Commuter (100-150cc)",
    weightKg: 118,
    dimensions: "2000mm x 740mm x 1060mm",
    baseDirtLevel: 48,
    imageSvgType: "commuter",
    sensitiveZones: [
      { id: "cockpit", name: "Analog Meter & Switchgear", maxPressureBar: 35, x: 30, y: 22, radius: 12 },
      { id: "carb", name: "Carburetor / Spark Plug", maxPressureBar: 45, x: 50, y: 52, radius: 14 },
      { id: "chain", name: "Open Drive Chain", maxPressureBar: 50, x: 75, y: 68, radius: 16 }
    ],
    heavyDirtZones: [
      { id: "front_fender", name: "Front Mudguard & Fork", targetPressureBar: 95, x: 18, y: 62 },
      { id: "engine_bottom", name: "Engine Underguard", targetPressureBar: 105, x: 48, y: 72 },
      { id: "rear_wheel", name: "Rear Wheel & Swingarm", targetPressureBar: 100, x: 82, y: 70 }
    ],
    recommendedMode: "standard"
  },
  {
    id: "scooter",
    name: "Automatic Scooter / EV",
    modelExample: "Honda Activa / TVS Jupiter / Ather 450X / Ola S1",
    category: "Scooter / EV (110-125cc)",
    weightKg: 106,
    dimensions: "1850mm x 700mm x 1150mm",
    baseDirtLevel: 32,
    imageSvgType: "scooter",
    sensitiveZones: [
      { id: "display", name: "Digital TFT Screen & Keyhole", maxPressureBar: 30, x: 26, y: 24, radius: 14 },
      { id: "charging_port", name: "Battery Bay / Charging Port", maxPressureBar: 35, x: 42, y: 45, radius: 15 },
      { id: "intake", name: "CVT Air Filter Box", maxPressureBar: 40, x: 74, y: 62, radius: 16 }
    ],
    heavyDirtZones: [
      { id: "front_apron_bottom", name: "Front Apron Underside", targetPressureBar: 85, x: 22, y: 68 },
      { id: "floorboard_bottom", name: "Floorboard Bottom Panel", targetPressureBar: 95, x: 52, y: 75 },
      { id: "exhaust_muffler", name: "Rear Exhaust Shield", targetPressureBar: 90, x: 80, y: 65 }
    ],
    recommendedMode: "eco"
  },
  {
    id: "superbike",
    name: "Performance Sports Bike",
    modelExample: "KTM Duke 390 / Yamaha R15 / Ninja 400",
    category: "Performance (300-650cc)",
    weightKg: 168,
    dimensions: "2050mm x 780mm x 1100mm",
    baseDirtLevel: 62,
    imageSvgType: "superbike",
    sensitiveZones: [
      { id: "tft_console", name: "Color TFT Console & Clip-ons", maxPressureBar: 35, x: 30, y: 25, radius: 14 },
      { id: "ecu_battery", name: "ECU Module & Wire Harness", maxPressureBar: 40, x: 52, y: 42, radius: 14 },
      { id: "radiator_fins", name: "Delicate Radiator Cooling Fins", maxPressureBar: 45, x: 38, y: 50, radius: 16 },
      { id: "o_ring_chain", name: "Sealed O-Ring Gold Chain", maxPressureBar: 45, x: 76, y: 66, radius: 15 }
    ],
    heavyDirtZones: [
      { id: "belly_pan", name: "Aero Belly Pan Underside", targetPressureBar: 100, x: 46, y: 74 },
      { id: "front_alloy", name: "Front Dual-Disc Rim", targetPressureBar: 110, x: 18, y: 68 },
      { id: "rear_hugger", name: "Rear Tyre Hugger & Rim", targetPressureBar: 110, x: 82, y: 68 }
    ],
    recommendedMode: "standard"
  },
  {
    id: "offroad",
    name: "Adventure / Off-Road ADV",
    modelExample: "RE Himalayan 450 / Hero Xpulse 200 4V",
    category: "Adventure / ADV (200-450cc)",
    weightKg: 195,
    dimensions: "2190mm x 840mm x 1370mm",
    baseDirtLevel: 88,
    imageSvgType: "offroad",
    sensitiveZones: [
      { id: "gps_console", name: "Nav Screen & Auxiliary Switches", maxPressureBar: 35, x: 32, y: 20, radius: 14 },
      { id: "snorkel_intake", name: "Airbox Snorkel Intake", maxPressureBar: 40, x: 48, y: 38, radius: 15 }
    ],
    heavyDirtZones: [
      { id: "bash_plate", name: "Heavy Aluminium Bash Plate", targetPressureBar: 120, x: 46, y: 76 },
      { id: "spoke_front", name: "21-inch Front Spoke Rim & Caliper", targetPressureBar: 115, x: 16, y: 66 },
      { id: "knobby_rear", name: "Rear Mud Flap & Knobby Tyre", targetPressureBar: 120, x: 84, y: 68 },
      { id: "fork_gaiters", name: "Suspension Forks & Mud Seals", targetPressureBar: 110, x: 26, y: 55 }
    ],
    recommendedMode: "heavy"
  }
];

export const WASH_MODES = [
  {
    id: "eco",
    name: "Express Eco Wash",
    tagline: "Quick dust refresh with 0-TDS pure demineralized rinse",
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
      { name: "Optical Profiling & Laser Scan", duration: 10, pressure: 0, desc: "Camera measures dust thickness" },
      { name: "Low-Pressure Pre-Mist Soaking", duration: 20, pressure: 45, desc: "Soaks dust layer to prevent scratching" },
      { name: "Active pH-Neutral Snow Foam", duration: 20, pressure: 40, desc: "Loosens road film & particulate grime" },
      { name: "Distilled Pure Hydro-Rinse", duration: 25, pressure: 60, desc: "Demineralized 0-TDS water prevents water marks" },
      { name: "High-Velocity Cyclone Air Dry", duration: 15, pressure: 0, desc: "120 km/h air blade clears surface moisture" }
    ]
  },
  {
    id: "standard",
    name: "Pro Deep Clean (Flagship)",
    tagline: "Balanced automated wash with contour scrub & distilled rinse",
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
      { name: "AI Vision & Sensitive Masking", duration: 15, pressure: 0, desc: "Neural network segments digital meter and ECU zones" },
      { name: "High-Velocity Gantry Pre-Rinse", duration: 30, pressure: 75, desc: "Differential nozzle gantry sweeps chassis" },
      { name: "Dual Chemical Injection", duration: 30, pressure: 60, desc: "Alkaline wheel degreaser + Body gloss foam" },
      { name: "Oscillating Microfiber Scrub", duration: 35, pressure: 50, desc: "Soft EVA contour brushes clean rims and frame" },
      { name: "Distilled Spot-Free Pure Rinse", duration: 25, pressure: 90, desc: "0-TDS pure distilled rinse leaves zero chalk spots" },
      { name: "Twin Cyclone Moisture Purge", duration: 15, pressure: 0, desc: "Clears moisture from chain, switches, and calipers" }
    ]
  },
  {
    id: "heavy",
    name: "Monsoon Mud Blast",
    tagline: "120 Bar underbody mud blast + 0-TDS demineralized finish",
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
      { name: "Spatial & Mud Depth Profiling", duration: 20, pressure: 0, desc: "Multi-angle cameras map mud thickness" },
      { name: "Underbody Mud-Blast Array", duration: 50, pressure: 115, desc: "Oscillating 120-bar bottom jet array" },
      { name: "Concentrated Degreaser & Foam", duration: 40, pressure: 70, desc: "Heavy emulsifier soak on grease zones" },
      { name: "Multi-Angle Rotary Power Scrub", duration: 60, pressure: 85, desc: "Deep-reach wheel spoke and swingarm scrub" },
      { name: "Distilled High-Pressure Flush", duration: 45, pressure: 110, desc: "Purified distilled water strips all residue" },
      { name: "Heated Cyclone Thermal Dryer", duration: 25, pressure: 0, desc: "Dual 3.5HP blowers blow out chain moisture" }
    ]
  },
  {
    id: "ai_auto",
    name: "AI Auto-Sense Adaptive Clean",
    tagline: "Dynamic Computer Vision, Fluid Modulation & Distillation",
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
      { name: "Edge AI Camera Vision Scan", duration: 18, pressure: 0, desc: "YOLOv8 detects dirt hotspots & masks sensitive modules" },
      { name: "Variable-Pressure Pre-Rinse", duration: 35, pressure: 95, desc: "Modulates 35 Bar (meter) to 110 Bar (fenders)" },
      { name: "Spectrometry-Calibrated Foam Spray", duration: 32, pressure: 65, desc: "Dispenses targeted degreaser only on oily lower frame" },
      { name: "Adaptive Contour Microfiber Scrub", duration: 40, pressure: 75, desc: "Brushes adjust RPM based on paint fragility" },
      { name: "Distilled 0-TDS Spot-Free Rinse", duration: 25, pressure: 100, desc: "Vapor-distilled pure water guarantees zero white spots" },
      { name: "Smart Crevice Air Blow Dry", duration: 15, pressure: 0, desc: "Blowers focus on crevices, brake calipers, and drive chain" }
    ]
  }
];

export const TELEMETRY_NODES = [
  {
    id: "bay_01",
    name: "Station 01 - Chennai OMR Tech Corridor",
    status: "Operational / Ready",
    todayWashes: 34,
    todayWaterSavedLiters: 2210,
    freshTankLevelPct: 88,
    distilledTankLevelPct: 94,
    distilledTdsPpm: 3.2,
    recycleTankLevelPct: 74,
    shampooTankLevelPct: 62,
    degreaserTankLevelPct: 55,
    turbidityNtu: 7.8,
    filterStatus: "Optimal (Clean)",
    pumpHealthPct: 97,
    lastWashTime: "8 mins ago"
  },
  {
    id: "bay_02",
    name: "Station 02 - Kanchipuram Hub",
    status: "Active Wash (Stage 5)",
    todayWashes: 46,
    todayWaterSavedLiters: 2990,
    freshTankLevelPct: 76,
    distilledTankLevelPct: 91,
    distilledTdsPpm: 2.8,
    recycleTankLevelPct: 81,
    shampooTankLevelPct: 50,
    degreaserTankLevelPct: 43,
    turbidityNtu: 8.4,
    filterStatus: "Optimal (Clean)",
    pumpHealthPct: 99,
    lastWashTime: "In progress"
  }
];

export const PITCH_SLIDES = [
  {
    number: 1,
    title: "AquaRide AI Technologies",
    subtitle: "Autonomous, Water-Efficient Two-Wheeler Wash Bays with Distillation",
    category: "Vision & Market",
    bulletPoints: [
      "Serving 260M+ two-wheelers in India with automated 3-minute precision washes.",
      "75% water reduction through closed-loop multi-stage recycling.",
      "Integrated closed-loop distillation skid provides 0-TDS spot-free final rinse.",
      "Edge Computer Vision shields sensitive electronics, TFT clusters, and EV battery ports."
    ]
  },
  {
    number: 2,
    title: "The Problem: Damaging, Slow & Hard Water Scaling",
    subtitle: "Field Validation with 213 Riders & 15 Service Centers",
    category: "Market Pain Points",
    bulletPoints: [
      "Water Waste: Manual washing wastes 80-100L of fresh groundwater per motorcycle.",
      "Hard Water Spots: High TDS (650+ PPM) groundwater leaves white calcium stains and scratches.",
      "Component Damage: 32% of owners report waterlogged meters, fogged displays, or switch short circuits.",
      "Severe Wait Times: 68% wait 25-45 minutes on weekends for manual washing."
    ]
  },
  {
    number: 3,
    title: "The Technology: Closed-Loop Distillation & Differential Pressure",
    subtitle: "Patent-Pending Thermal Reclamation & Robotic Gantry",
    category: "Core Innovation",
    bulletPoints: [
      "Distillation Skid: Evaporation & condensation cycles drop water hardness from 650+ PPM to <5 PPM.",
      "Zero-Conductive Final Rinse: Non-conductive pure distillate eliminates electrical corrosion risks.",
      "Sensitive Zone Masking: Pressure automatically drops to <35 Bar near handlebars & ECUs.",
      "Robotic Gantry: Multi-angle servo targeting sweeps lower wheel arches at up to 120 Bar."
    ]
  },
  {
    number: 4,
    title: "MSME Economics & 8-12 Month Payback",
    subtitle: "Profitable Franchise & Forecourt Unit Economics",
    category: "Business Viability",
    bulletPoints: [
      "Low Machine Capex: ₹1.8 – ₹2.2 Lakhs (versus ₹6-10L for imported car wash systems).",
      "Per-Wash Operating Cost: ₹39.90 including power, chemistry, distillation, and attendant.",
      "Net Monthly Profit: ₹18,000–₹35,000 per bay at 18–35 bikes/day.",
      "Full Capex Payback: Recovered in 8 to 14 months with high franchisee retention."
    ]
  },
  {
    number: 5,
    title: "Why We Win: Hackathon to Commercial Scale",
    subtitle: "Intellectual Property, Rapid Prototyping & Pilots",
    category: "Competitive Moat",
    bulletPoints: [
      "Patent Form 2 Drafted: Differential pressure zoning, closed-loop distillation, and dynamic dosing.",
      "Hardware Proof-of-Concept: Arduino Uno robotic servo gantry, I2C telemetry, and optical profiling.",
      "Cloud & Fleet Portal: Live React platform with remote IoT diagnostics and automated UPI billing.",
      "Ready for deployment in Chennai and Kanchipuram petrol bunks and dealership service centers."
    ]
  }
];
export const COMPANY_STATS = [
  { value: 75, suffix: "%", label: "Less Potable Water Used", desc: "vs 90L manual washing", color: "text-cyan-400" },
  { value: 3, suffix: " Min", label: "Average Automated Wash", desc: "vs 35 minutes manually", color: "text-emerald-400" },
  { value: 0, suffix: " TDS", label: "Spot-Free Distilled Rinse", desc: "0-TDS demineralized pure water", color: "text-amber-400" },
  { value: 91, suffix: "%", label: "Riders Willing to Switch", desc: "Survey of 213 Tamil Nadu riders", color: "text-purple-400" },
];

export const TESTIMONIALS = [
  {
    name: "S. Rajagopalan",
    role: "Owner, Sai Ram Hero Two-Wheeler Service Center",
    location: "Kanchipuram, Tamil Nadu",
    comment: "Earlier, washing was the biggest bottleneck in our workshop. Workers took 40 minutes per bike, leaving chalky white hard-water spots. With AquaRide AI's 3-minute cycle and distilled pure rinse, bikes leave with true showroom gloss.",
    rating: 5,
    highlight: "Zero Water Marks & Faster Delivery"
  },
  {
    name: "V. Karthik",
    role: "Superbike Enthusiast & IT Professional",
    location: "OMR, Chennai",
    comment: "I always avoided local pressure washers because high-pressure water damages the digital TFT meter and radiator fins on my Duke 390. AquaRide AI's sensitive zone shielding and 0-TDS distilled water rinse kept my bike spotless without scratches.",
    rating: 5,
    highlight: "Safe for Digital Meters & Electronics"
  },
  {
    name: "P. Murugan",
    role: "Franchise Partner, Forecourt Retail Station",
    location: "Kanchipuram Bypass",
    comment: "Installing the AquaRide AI station on our unused 180 sq.ft fuel forecourt space generates steady daily revenue. 75% water recycling complies with local PCB norms, and riders love the automated UPI checkout.",
    rating: 5,
    highlight: "Turnkey MSME Profitability"
  }
];

export const COMMERCIAL_PARTNERS = [
  { name: "HPCL Forecourt Pilot", type: "Retail Petrol Bunk Network" },
  { name: "Authorized Hero Motocorp Service Hub", type: "Dealership Service Bay" },
  { name: "Honda Exclusive Authorized Dealer", type: "Pre-Delivery Inspection (PDI)" },
  { name: "Chennai Tech Park Hub", type: "Campus Micro-Mobility Fleet" }
];