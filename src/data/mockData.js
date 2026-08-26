export const VEHICLE_PROFILES = [
  {
    "id": "commuter",
    "name": "Standard Commuter Bike",
    "modelExample": "Honda Shine / Hero Splendor / Pulsar",
    "category": "Commuter (100-150cc)",
    "weightKg": 118,
    "dimensions": "2000mm x 740mm x 1060mm",
    "baseDirtLevel": 48,
    "imageSvgType": "commuter",
    "sensitiveZones": [
      {
        "id": "cockpit",
        "name": "Analog Meter & Switchgear",
        "maxPressureBar": 35,
        "x": 30,
        "y": 22,
        "radius": 12
      },
      {
        "id": "carb",
        "name": "Carburetor / Spark Plug",
        "maxPressureBar": 45,
        "x": 50,
        "y": 52,
        "radius": 14
      },
      {
        "id": "chain",
        "name": "Open Drive Chain",
        "maxPressureBar": 50,
        "x": 75,
        "y": 68,
        "radius": 16
      }
    ],
    "heavyDirtZones": [
      {
        "id": "front_fender",
        "name": "Front Mudguard & Fork",
        "targetPressureBar": 95,
        "x": 18,
        "y": 62
      },
      {
        "id": "engine_bottom",
        "name": "Engine Underguard",
        "targetPressureBar": 105,
        "x": 48,
        "y": 72
      },
      {
        "id": "rear_wheel",
        "name": "Rear Wheel & Swingarm",
        "targetPressureBar": 100,
        "x": 82,
        "y": 70
      }
    ],
    "recommendedMode": "standard"
  },
  {
    "id": "scooter",
    "name": "Automatic Scooter",
    "modelExample": "Honda Activa / TVS Jupiter / Ather 450X",
    "category": "Scooter / EV (110-125cc)",
    "weightKg": 106,
    "dimensions": "1850mm x 700mm x 1150mm",
    "baseDirtLevel": 32,
    "imageSvgType": "scooter",
    "sensitiveZones": [
      {
        "id": "display",
        "name": "Digital TFT Screen & Keyhole",
        "maxPressureBar": 30,
        "x": 26,
        "y": 24,
        "radius": 14
      },
      {
        "id": "charging_port",
        "name": "Battery Bay / Charging Port",
        "maxPressureBar": 35,
        "x": 42,
        "y": 45,
        "radius": 15
      },
      {
        "id": "intake",
        "name": "CVT Air Filter Box",
        "maxPressureBar": 40,
        "x": 74,
        "y": 62,
        "radius": 16
      }
    ],
    "heavyDirtZones": [
      {
        "id": "front_apron_bottom",
        "name": "Front Apron Underside",
        "targetPressureBar": 85,
        "x": 22,
        "y": 68
      },
      {
        "id": "floorboard_bottom",
        "name": "Floorboard Bottom Panel",
        "targetPressureBar": 95,
        "x": 52,
        "y": 75
      },
      {
        "id": "exhaust_muffler",
        "name": "Rear Exhaust Shield",
        "targetPressureBar": 90,
        "x": 80,
        "y": 65
      }
    ],
    "recommendedMode": "eco"
  },
  {
    "id": "superbike",
    "name": "Performance Sports Bike",
    "modelExample": "KTM Duke 390 / Yamaha R15 / Ninja 400",
    "category": "Performance (300-650cc)",
    "weightKg": 168,
    "dimensions": "2050mm x 780mm x 1100mm",
    "baseDirtLevel": 62,
    "imageSvgType": "superbike",
    "sensitiveZones": [
      {
        "id": "tft_console",
        "name": "Color TFT Console & Clip-ons",
        "maxPressureBar": 35,
        "x": 30,
        "y": 25,
        "radius": 14
      },
      {
        "id": "ecu_battery",
        "name": "ECU Module & Wire Harness",
        "maxPressureBar": 40,
        "x": 52,
        "y": 42,
        "radius": 14
      },
      {
        "id": "radiator_fins",
        "name": "Delicate Radiator Cooling Fins",
        "maxPressureBar": 45,
        "x": 38,
        "y": 50,
        "radius": 16
      },
      {
        "id": "o_ring_chain",
        "name": "Sealed O-Ring Gold Chain",
        "maxPressureBar": 45,
        "x": 76,
        "y": 66,
        "radius": 15
      }
    ],
    "heavyDirtZones": [
      {
        "id": "belly_pan",
        "name": "Aero Belly Pan Underside",
        "targetPressureBar": 100,
        "x": 46,
        "y": 74
      },
      {
        "id": "front_alloy",
        "name": "Front Dual-Disc Rim",
        "targetPressureBar": 110,
        "x": 18,
        "y": 68
      },
      {
        "id": "rear_hugger",
        "name": "Rear Tyre Hugger & Rim",
        "targetPressureBar": 110,
        "x": 82,
        "y": 68
      }
    ],
    "recommendedMode": "standard"
  },
  {
    "id": "offroad",
    "name": "Adventure / Off-Road ADV",
    "modelExample": "RE Himalayan / Hero Xpulse 200 4V",
    "category": "Adventure / ADV (200-450cc)",
    "weightKg": 195,
    "dimensions": "2190mm x 840mm x 1370mm",
    "baseDirtLevel": 88,
    "imageSvgType": "offroad",
    "sensitiveZones": [
      {
        "id": "gps_console",
        "name": "Nav Screen & Auxiliary Switches",
        "maxPressureBar": 35,
        "x": 32,
        "y": 20,
        "radius": 14
      },
      {
        "id": "snorkel_intake",
        "name": "Airbox Snorkel Intake",
        "maxPressureBar": 40,
        "x": 48,
        "y": 38,
        "radius": 15
      }
    ],
    "heavyDirtZones": [
      {
        "id": "bash_plate",
        "name": "Heavy Aluminium Bash Plate",
        "targetPressureBar": 120,
        "x": 46,
        "y": 76
      },
      {
        "id": "spoke_front",
        "name": "21-inch Front Spoke Rim & Caliper",
        "targetPressureBar": 115,
        "x": 16,
        "y": 66
      },
      {
        "id": "knobby_rear",
        "name": "Rear Mud Flap & Knobby Tyre",
        "targetPressureBar": 120,
        "x": 84,
        "y": 68
      },
      {
        "id": "fork_gaiters",
        "name": "Suspension Forks & Mud Caked Seals",
        "targetPressureBar": 110,
        "x": 26,
        "y": 55
      }
    ],
    "recommendedMode": "heavy"
  }
];

export const WASH_MODES = [
  {
    "id": "eco",
    "name": "Eco / Light Mode",
    "tagline": "Superficial dust & quick refresh",
    "durationSec": 90,
    "waterLiters": 18,
    "recycledWaterPct": 80,
    "netFreshWaterLiters": 3.6,
    "avgPressureBar": 55,
    "chemicalDoseMl": 30,
    "powerKwh": 0.12,
    "priceInr": 60,
    "color": "from-emerald-500 to-teal-600",
    "stages": [
      {
        "name": "Sensor Profiling & Optical Scan",
        "duration": 10,
        "pressure": 0,
        "desc": "LiDAR & Camera mapping dirt density"
      },
      {
        "name": "Low-Pressure Pre-Mist",
        "duration": 20,
        "pressure": 45,
        "desc": "Soaking dust layer without runoff"
      },
      {
        "name": "Active Snow Foam Dosing",
        "duration": 20,
        "pressure": 40,
        "desc": "pH-neutral surfactant application"
      },
      {
        "name": "Spot-Free Soft Rinse",
        "duration": 25,
        "pressure": 60,
        "desc": "Filtered demineralized water rinse"
      },
      {
        "name": "Cyclone Heated Air Dry",
        "duration": 15,
        "pressure": 0,
        "desc": "High-velocity 120 km/h air blade"
      }
    ]
  },
  {
    "id": "standard",
    "name": "Standard / Medium Mode",
    "tagline": "Balanced deep wash for daily commuters",
    "durationSec": 150,
    "waterLiters": 28,
    "recycledWaterPct": 75,
    "netFreshWaterLiters": 7,
    "avgPressureBar": 80,
    "chemicalDoseMl": 65,
    "powerKwh": 0.22,
    "priceInr": 90,
    "color": "from-cyan-500 to-blue-600",
    "stages": [
      {
        "name": "AI Vision & Sensitive Masking",
        "duration": 15,
        "pressure": 0,
        "desc": "Neural net segments 5 vehicle safety zones"
      },
      {
        "name": "High-Velocity Pre-Rinse",
        "duration": 30,
        "pressure": 75,
        "desc": "Differential nozzle gantry sweeps chassis"
      },
      {
        "name": "Dual Chemical Injection",
        "duration": 30,
        "pressure": 60,
        "desc": "Alkaline wheel foam + Body gloss shampoo"
      },
      {
        "name": "Oscillating Microfiber Scrub",
        "duration": 35,
        "pressure": 50,
        "desc": "Soft EVA brushes clean rim & swingarm"
      },
      {
        "name": "Hydro-Jet High-Pressure Rinse",
        "duration": 25,
        "pressure": 90,
        "desc": "Spotless rinse with 100% runoff capture"
      },
      {
        "name": "Twin Cyclone Moisture Purge",
        "duration": 15,
        "pressure": 0,
        "desc": "Dry air jets clear chain & switches"
      }
    ]
  },
  {
    "id": "heavy",
    "name": "Heavy Mud / Extreme Mode",
    "tagline": "Monsoon mud, caked grease & off-road sludge blasting",
    "durationSec": 240,
    "waterLiters": 38,
    "recycledWaterPct": 72,
    "netFreshWaterLiters": 10.6,
    "avgPressureBar": 110,
    "chemicalDoseMl": 110,
    "powerKwh": 0.38,
    "priceInr": 150,
    "color": "from-amber-500 to-orange-600",
    "stages": [
      {
        "name": "Spatial & Mud Depth Profiling",
        "duration": 20,
        "pressure": 0,
        "desc": "Multi-angle cameras map mud thickness"
      },
      {
        "name": "Underbody Mud-Blast Pre-Rinse",
        "duration": 50,
        "pressure": 115,
        "desc": "Oscillating 120-bar bottom jet array"
      },
      {
        "name": "High-Density Degreaser & Snow Foam",
        "duration": 40,
        "pressure": 70,
        "desc": "Petrochemical emulsifier & foam soak"
      },
      {
        "name": "Multi-Angle Rotary Power Scrub",
        "duration": 60,
        "pressure": 85,
        "desc": "Deep-reach wheel spoke & swingarm scrub"
      },
      {
        "name": "Twin Gantry High-Pressure Rinse",
        "duration": 45,
        "pressure": 110,
        "desc": "Purified recycled water rinse pass"
      },
      {
        "name": "Heated Cyclone Thermal Dryer",
        "duration": 25,
        "pressure": 0,
        "desc": "Dual 3.5HP blowers + chain moisture blow"
      }
    ]
  },
  {
    "id": "ai_auto",
    "name": "AI Auto-Sense Mode",
    "tagline": "Dynamic Computer Vision & Adaptive Sensor Fusion",
    "isAi": true,
    "durationSec": 165,
    "waterLiters": 25.4,
    "recycledWaterPct": 78,
    "netFreshWaterLiters": 5.6,
    "avgPressureBar": 88,
    "chemicalDoseMl": 58,
    "powerKwh": 0.24,
    "priceInr": 110,
    "color": "from-purple-500 to-indigo-600",
    "stages": [
      {
        "name": "Edge AI Camera & LiDAR Scan",
        "duration": 18,
        "pressure": 0,
        "desc": "YOLOv8 detects dirt hotspots & masks electronics"
      },
      {
        "name": "Dynamic Variable-Pressure Pre-Rinse",
        "duration": 35,
        "pressure": 95,
        "desc": "Modulates 35 bar (meter) to 110 bar (wheels)"
      },
      {
        "name": "Spectrometry-Calibrated Foam Spray",
        "duration": 32,
        "pressure": 65,
        "desc": "Dispenses degreaser only on oily lower frame"
      },
      {
        "name": "Adaptive Contour Microfiber Scrub",
        "duration": 40,
        "pressure": 75,
        "desc": "Brushes adjust RPM based on paint fragility"
      },
      {
        "name": "Zone-Targeted Final Hydro-Rinse",
        "duration": 25,
        "pressure": 100,
        "desc": "High-efficiency deionized spot-free rinse"
      },
      {
        "name": "Smart Moisture-Sensed Air Dry",
        "duration": 15,
        "pressure": 0,
        "desc": "Blowers focus on crevices and drive chain"
      }
    ]
  }
];

export const SURVEY_METRICS = {
  "customers": {
    "total": 213,
    "location": "Kanchipuram & Urban Tamil Nadu",
    "avgWaitTimeMin": "20–40 mins",
    "waitTimeFrustrationPct": 68,
    "inconsistentQualityReportPct": 54,
    "scratchOrDamagePct": 32,
    "avgManualWashCostInr": "₹100–₹150",
    "willingnessForAutoWashPct": 91
  },
  "operators": {
    "total": 15,
    "struggleHiringLaborPct": 80,
    "avgWaterUsedManualLiters": "80–100 L",
    "complaintRateMissedSpotsPct": 40,
    "avgProfitPerManualWashInr": "₹50–₹70",
    "interestInAutoSystemPct": 87
  }
};

export const TELEMETRY_NODES = [
  {
    "id": "bay_01",
    "name": "Bay 01 - Kanchipuram Main Workshop",
    "status": "Ready / Idle",
    "todayWashes": 18,
    "todayWaterSavedLiters": 1170,
    "freshTankLevelPct": 88,
    "recycleTankLevelPct": 74,
    "shampooTankLevelPct": 62,
    "degreaserTankLevelPct": 55,
    "turbidityNtu": 7.8,
    "filterStatus": "Optimal (Clean)",
    "pumpHealthPct": 97,
    "lastWashTime": "12 mins ago"
  },
  {
    "id": "bay_02",
    "name": "Bay 02 - Chennai Tech Park Hub",
    "status": "Washing (Standard Mode)",
    "todayWashes": 29,
    "todayWaterSavedLiters": 1885,
    "freshTankLevelPct": 72,
    "recycleTankLevelPct": 82,
    "shampooTankLevelPct": 48,
    "degreaserTankLevelPct": 41,
    "turbidityNtu": 9.1,
    "filterStatus": "Optimal (Clean)",
    "pumpHealthPct": 99,
    "lastWashTime": "Active now"
  }
];

export const PITCH_SLIDES = [
  {
    "number": 1,
    "title": "AquaRide AI Technologies",
    "subtitle": "The Future of Autonomous, Water-Efficient Two-Wheeler Washing",
    "category": "Overview & Vision",
    "bulletPoints": [
      "Empowering 260M+ two-wheeler owners in India with fast, eco-friendly 3-minute automatic cleaning.",
      "Slashes water usage by 75% through closed-loop multi-stage recycling.",
      "Edge Computer Vision prevents high-pressure damage to delicate electricals and drive chains.",
      "Targeted for MSME garages, petrol bunks, and residential apartment communities."
    ]
  },
  {
    "number": 2,
    "title": "The Problem: Inefficient, Damaging & Wasteful",
    "subtitle": "Field Survey of 213 Customers & 15 Service Centers",
    "category": "Market Need",
    "bulletPoints": [
      "Water Crisis: Manual washing wastes 80-100 Liters of fresh water per motorcycle.",
      "Labor Bottleneck: 80% of garage owners struggle to hire/retain washing staff.",
      "Quality & Damage: 32% experience scratches or waterlogged meter consoles.",
      "Time Waste: 68% of bike riders wait 25-45 minutes on weekends for a manual wash."
    ]
  },
  {
    "number": 3,
    "title": "The Innovation: Cyber-Physical AI Wash Bay",
    "subtitle": "Patented Multi-Sensor Fusion & Differential Pressure Control",
    "category": "Technology",
    "bulletPoints": [
      "Edge RGB-D Vision: Neural network classifies vehicle type and maps localized dirt density.",
      "Sensitive Zone Shielding: Enforces strict <35 Bar pressure cap around throttles, ECUs, and TFT screens.",
      "Mud-Blast Underbody Array: 110 Bar dynamic jet sweeps fenders and greasy lower chassis.",
      "Integrated Water Reclamation Skid: Oil-water separator + dual sand/carbon filters recycle 75% water."
    ]
  },
  {
    "number": 4,
    "title": "Business Model & 16-Month ROI for MSMEs",
    "subtitle": "Unbeatable Unit Economics & Low Capex Barrier",
    "category": "Economics",
    "bulletPoints": [
      "Machine Capex: ₹1.8 – ₹2.2 Lakhs (versus ₹5–8 Lakhs for imported commercial units).",
      "Operating Cost: Only ₹39.90 per wash including power, shampoo, and part-time operator.",
      "Monthly Net Profit: ₹12,482 per bay @ just 12 bikes/day (50% operating margin).",
      "Payback Period: Fully recovered in 16 months with 5-year equipment lifespan."
    ]
  },
  {
    "number": 5,
    "title": "Why We Win: The Hackathon / Startup Advantage",
    "subtitle": "IP Protection, Market Size & Scalability",
    "category": "Strategy",
    "bulletPoints": [
      "Patent-Pending Claims: Cyber-physical differential pressure zoning and closed-loop turbidity control.",
      "Massive TAM: 260 Million Indian bikes x 12 washes/year = 3.1 Billion washes annually.",
      "Proven Prototype Evolution: Evolving from benchtop relay testbed to AI Edge Jet platform.",
      "Ready for Commercial Pilots in Chennai and Kanchipuram workshops."
    ]
  }
];
