import React, { useState, useRef } from 'react';
import { 
  Play, 
  Pause, 
  RotateCcw, 
  Download, 
  Droplets, 
  Sparkles, 
  ShieldCheck, 
  CheckCircle2, 
  AlertTriangle, 
  Clock, 
  ArrowRight, 
  Activity, 
  Maximize2,
  Cpu,
  Layers,
  Flame,
  Gauge
} from 'lucide-react';

const RECYCLING_STAGES = [
  {
    step: 1,
    id: "sump",
    title: "Grated Inflow Sump & Cyclone Desander",
    tagline: "Mechanical grit & heavy mud precipitation",
    inflowTds: "680 PPM (Muddy)",
    outflowTds: "580 PPM",
    color: "from-rose-500 to-amber-600",
    border: "border-rose-500/40",
    badgeBg: "bg-rose-500/10 text-rose-400 border-rose-500/20",
    desc: "Wash runoff drains through an angled stainless-steel floor grate into a hydro-cyclonic desanding hopper. Centrifugal vortex forces spin heavy tire grit, gravel, and brake dust particles to the bottom sump for automated sludge purging.",
    keyBenefit: "Eliminates 98% of abrasive grit before entering mechanical pump chambers."
  },
  {
    step: 2,
    id: "oil_skimmer",
    title: "Coalescing Oil-Water Separation Weir",
    tagline: "Petrochemical & chain grease trapping",
    inflowTds: "580 PPM",
    outflowTds: "460 PPM",
    color: "from-amber-500 to-yellow-600",
    border: "border-amber-500/40",
    badgeBg: "bg-amber-500/10 text-amber-400 border-amber-500/20",
    desc: "Because two-wheelers shed unburnt chain lube, engine oil film, and asphalt road oils, fluid enters an oleophilic coalescing weir. Oil droplets float to the surface where a motorized disc skimmer collects oil waste into a sealed canister.",
    keyBenefit: "Prevents surfactant fouling and satisfies CPCB oil-grease discharge norms (<10 mg/L)."
  },
  {
    step: 3,
    id: "microfilter",
    title: "5-Micron Multi-Media Polypropylene Matrix",
    tagline: "High-density particulate micro-filtration",
    inflowTds: "460 PPM",
    outflowTds: "320 PPM",
    color: "from-teal-500 to-emerald-600",
    border: "border-teal-500/40",
    badgeBg: "bg-teal-500/10 text-teal-400 border-teal-500/20",
    desc: "Pressurized fluid is driven through a multi-stage depth filter consisting of activated carbon and spun 5-micron polypropylene cartridges. This removes micro-fine suspended solids, neutralizing detergent suds and chemical odors.",
    keyBenefit: "Ensures 100% clarity and zero nozzle clogging in the high-pressure manifold."
  },
  {
    step: 4,
    id: "distillation",
    title: "Vacuum Flash Evaporation & Distillation Chamber",
    tagline: "100% Mineral & Salt Stripping (The 0-TDS Core)",
    inflowTds: "320 PPM (Hard Minerals)",
    outflowTds: "< 5 PPM (Pure Distillate)",
    color: "from-cyan-400 to-blue-600",
    border: "border-cyan-400/60",
    badgeBg: "bg-cyan-500/20 text-cyan-300 border-cyan-400/40 shadow-lg shadow-cyan-950/50",
    desc: "The critical breakthrough: Under negative sub-atmospheric pressure, thermal heat vaporizes water into clean steam, leaving behind all dissolved calcium carbonates, magnesium, and dissolved salts. Steam is condensed across chilled copper coils into pure demineralized water.",
    keyBenefit: "Zero mineral spots. Non-conductive 0-TDS water prevents short circuits in EV battery packs and LCD dashboards."
  },
  {
    step: 5,
    id: "buffer_recirc",
    title: "0-TDS Buffer Tank & Recirculation Line",
    tagline: "75% Closed-loop closed circuit return to wash jets",
    inflowTds: "< 5 PPM",
    outflowTds: "0 PPM (Pure Finish)",
    color: "from-emerald-400 to-cyan-500",
    border: "border-emerald-400/50",
    badgeBg: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
    desc: "The pristine 0-TDS distillate is pumped into the clean holding reservoir. 75% of this water is recirculated back to the triplex high-pressure plunger pumps for subsequent vehicle washes, requiring only ~7.5 L of fresh makeup water balance.",
    keyBenefit: "Massive 75% water conservation: uses only ~22 L net fresh water per bike vs 90 L in traditional manual washing."
  }
];

const INDIA_COMPETITOR_BENCHMARK = [
  {
    feature: "Water Treatment & Recycling",
    manualWash: "Zero recycling; 70–90 L fresh water dumped into public gutters per wash.",
    semiAutoIndia: "Basic sand/sediment mesh or pit settling. Reuses dirty water without demineralization.",
    aquaRideAi: "Patent-pending 0-TDS closed-loop flash distillation. 75% water reclaimed with zero mineral scale.",
    winner: true
  },
  {
    feature: "EV Battery & Electronics Safety",
    manualWash: "High hazard. Uncalibrated 120-bar pressure blasts directly into battery boxes, ECUs, and switches.",
    semiAutoIndia: "Moderate hazard. Rigid spray arch sprays high pressure indiscriminately over entire bike.",
    aquaRideAi: "100% EV safe. AI vision masks sensitive consoles (<35 Bar); non-conductive 0-TDS water eliminates short-circuits.",
    winner: true
  },
  {
    feature: "Wash & Turnaround Speed",
    manualWash: "Slow: 25 to 45 minutes per bike (creates long weekend queues).",
    semiAutoIndia: "5 to 8 minutes (often requires manual pre-scrubbing and towel drying).",
    aquaRideAi: "3 to 4 Minutes total turnaround (fully automated robotic wash + high-velocity air-knife dry).",
    winner: true
  },
  {
    feature: "Finish Quality & Water Spots",
    manualWash: "Leaves white chalky mineral spots (350–700 PPM TDS) and sponge swirl scratches.",
    semiAutoIndia: "Hard borewell water leaves water marks on black engines and glossy fairings.",
    aquaRideAi: "True showroom gloss: 0-TDS pure distilled final rinse leaves zero chalky residue or streaks.",
    winner: true
  },
  {
    feature: "Operating Labor Dependency",
    manualWash: "Requires 2–3 full-time manual laborers per bay; acute absenteeism.",
    semiAutoIndia: "Requires 1–2 attendants to wipe, guide, and scrub wheels manually.",
    aquaRideAi: "Fully unattended autonomous pod. Cuts operator payroll costs by 85%.",
    winner: true
  },
  {
    feature: "Statutory ESG & CPCB Norms",
    manualWash: "Violates local pollution norms; risks civic closure notices for oily sewage runoff.",
    semiAutoIndia: "Partial compliance; still discharges high-TDS oily effluent.",
    aquaRideAi: "100% CPCB Zero Liquid Discharge (ZLD) compliant; sealed zero-runoff pod.",
    winner: true
  }
];

export default function WaterRecyclingVideoDemo() {
  const [activeStageIdx, setActiveStageIdx] = useState(3); // Default to stage 4 (Distillation)
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  const activeStage = RECYCLING_STAGES[activeStageIdx];

  const handleTogglePlay = () => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const handleRestartVideo = () => {
    if (!videoRef.current) return;
    videoRef.current.currentTime = 0;
    videoRef.current.play();
    setIsPlaying(true);
  };

  return (
    <section id="water-recycling-demo" className="py-24 px-4 bg-slate-950 relative border-t border-slate-800/80 overflow-hidden">
      
      {/* Background ambient lighting */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-16 relative z-10">

        {/* SECTION HEADER */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono font-bold tracking-widest uppercase">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Jury Demonstration • Closed-Loop Water Architecture</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            How Water Gets Recycled: <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-emerald-400 bg-clip-text text-transparent">
              0-TDS Flash Distillation Video Demo
            </span>
          </h2>

          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Addressing evaluator feedback from the Top 50 Innovation Challenge: Watch the complete physics of our 
            closed-loop recycling system, demonstrating how <strong className="text-white">680 PPM dirty runoff</strong> is 
            thermally stripped of 100% mineral salts to produce non-conductive, EV-safe 0-TDS water.
          </p>
        </div>

        {/* PRIMARY VIDEO DEMO PLAYER & TELEMETRY skids */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

          {/* LEFT: HTML5 VIDEO PLAYER WITH EMBEDDED MP4 */}
          <div className="lg:col-span-7 space-y-4">
            <div className="p-2 sm:p-3 rounded-3xl bg-slate-900/90 border border-slate-800 shadow-2xl shadow-cyan-950/40 relative group">
              
              {/* Header Bar */}
              <div className="flex items-center justify-between px-3 py-2 border-b border-slate-800/80 mb-2 text-xs font-mono">
                <span className="text-cyan-400 font-bold flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                  AQUARIDE_DISTILLATION_SIMULATION.MP4
                </span>
                <span className="text-slate-400 text-[11px]">720p HD • 30 FPS • 18s Loop</span>
              </div>

              {/* Video Element */}
              <div className="relative rounded-2xl overflow-hidden bg-black aspect-video border border-slate-800 flex items-center justify-center">
                <video
                  ref={videoRef}
                  src="./water_recycling_demonstration.mp4"
                  className="w-full h-full object-contain"
                  loop
                  playsInline
                  controls
                  onPlay={() => setIsPlaying(true)}
                  onPause={() => setIsPlaying(false)}
                />
              </div>

              {/* Quick Action Bar under video */}
              <div className="flex flex-wrap items-center justify-between gap-3 pt-3 px-2">
                <div className="flex items-center gap-2">
                  <button
                    onClick={handleTogglePlay}
                    className="px-3.5 py-1.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs flex items-center gap-1.5 transition-colors cursor-pointer"
                  >
                    {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
                    <span>{isPlaying ? "Pause Video" : "Play Demonstration"}</span>
                  </button>

                  <button
                    onClick={handleRestartVideo}
                    className="px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 font-medium text-xs flex items-center gap-1.5 transition-colors cursor-pointer"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    <span>Replay</span>
                  </button>
                </div>

                {/* Direct MP4 Download Button for Jury / Evaluators */}
                <a
                  href="./water_recycling_demonstration.mp4"
                  download="AquaRide_Water_Recycling_Demonstration.mp4"
                  className="px-3.5 py-1.5 rounded-xl bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 hover:text-emerald-300 text-xs font-mono font-bold flex items-center gap-1.5 transition-all cursor-pointer"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download Video (MP4)</span>
                </a>
              </div>
            </div>

            {/* Mass Balance Summary Callout */}
            <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800 text-left text-xs text-slate-300 grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800">
                <div className="text-[10px] font-mono text-slate-400">Total Wash Fluid Used</div>
                <div className="text-base font-bold text-white font-mono mt-0.5">30.0 Liters</div>
                <div className="text-[10px] text-slate-400 mt-0.5">High-pressure hydro volume</div>
              </div>
              <div className="p-3 rounded-xl bg-emerald-950/40 border border-emerald-500/30">
                <div className="text-[10px] font-mono text-emerald-300">Reclaimed 0-TDS Distillate</div>
                <div className="text-base font-bold text-emerald-400 font-mono mt-0.5">22.5 L (75.0%)</div>
                <div className="text-[10px] text-emerald-300/80 mt-0.5">Closed-loop recirculation</div>
              </div>
              <div className="p-3 rounded-xl bg-cyan-950/40 border border-cyan-500/30">
                <div className="text-[10px] font-mono text-cyan-300">Net Fresh Makeup Water</div>
                <div className="text-base font-bold text-cyan-400 font-mono mt-0.5">7.5 Liters</div>
                <div className="text-[10px] text-cyan-300/80 mt-0.5">vs 90 L manual wash</div>
              </div>
            </div>
          </div>

          {/* RIGHT: INTERACTIVE 5-STAGE RECYCLING WALKTHROUGH */}
          <div className="lg:col-span-5 space-y-4 text-left">
            
            <div className="p-6 rounded-3xl bg-slate-900/80 border border-slate-800 shadow-xl space-y-4">
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 font-bold font-mono">
                    {activeStage.step}
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white">Stage {activeStage.step} of 5</h3>
                    <p className="text-[11px] text-slate-400">{activeStage.tagline}</p>
                  </div>
                </div>
                <span className={`text-[10px] font-mono font-bold px-2.5 py-1 rounded-full border ${activeStage.badgeBg}`}>
                  TDS: {activeStage.outflowTds}
                </span>
              </div>

              {/* Stage Stepper Tabs */}
              <div className="grid grid-cols-5 gap-1.5">
                {RECYCLING_STAGES.map((s, idx) => (
                  <button
                    key={s.id}
                    onClick={() => setActiveStageIdx(idx)}
                    className={`py-2 px-1 rounded-xl text-[10px] font-mono font-bold transition-all text-center border cursor-pointer ${
                      activeStageIdx === idx 
                        ? 'bg-cyan-500 text-slate-950 border-cyan-400 shadow-md shadow-cyan-950/50' 
                        : 'bg-slate-950 hover:bg-slate-800 text-slate-400 border-slate-800'
                    }`}
                  >
                    Step {s.step}
                  </button>
                ))}
              </div>

              {/* Active Stage Content Card */}
              <div className="space-y-3 pt-2">
                <h4 className="text-lg font-bold text-white">{activeStage.title}</h4>
                <p className="text-xs text-slate-300 leading-relaxed">{activeStage.desc}</p>
                
                <div className="p-3 rounded-xl bg-slate-950/90 border border-slate-800/80 space-y-1.5">
                  <div className="text-[10px] font-mono font-bold text-cyan-400 uppercase tracking-wider flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>Engineering Advantage</span>
                  </div>
                  <div className="text-xs text-emerald-300 font-medium">
                    {activeStage.keyBenefit}
                  </div>
                </div>

                {/* TDS Transition Bar */}
                <div className="p-3 rounded-xl bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 border border-slate-800 flex items-center justify-between text-xs font-mono">
                  <div>
                    <span className="text-[10px] text-slate-400 block">Stage Inflow</span>
                    <span className="font-bold text-rose-400">{activeStage.inflowTds}</span>
                  </div>
                  <ArrowRight className="w-4 h-4 text-slate-500" />
                  <div>
                    <span className="text-[10px] text-slate-400 block">Stage Outflow</span>
                    <span className="font-bold text-emerald-400">{activeStage.outflowTds}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Why 0-TDS is Required for Modern EV Two-Wheelers */}
            <div className="p-5 rounded-3xl bg-gradient-to-br from-indigo-950/40 to-slate-900 border border-indigo-500/30 space-y-3">
              <div className="flex items-center gap-2 text-indigo-400 text-xs font-mono font-bold">
                <ShieldCheck className="w-4 h-4" />
                <span>CRUCIAL FOR MODERN ELECTRIC TWO-WHEELERS</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Indian borewell water contains <strong className="text-white">500–800 PPM of conductive salts</strong>. 
                When ordinary water penetrates EV battery connectors, throttle sensors, or digital TFT displays, electrolytic corrosion causes short circuits. 
                <strong className="text-cyan-300"> AquaRide's 0-TDS water is demineralized and non-conductive</strong>, ensuring 100% electrical insulation for Ather, Ola, TVS, and Bajaj electric scooters.
              </p>
            </div>

          </div>
        </div>

        {/* CLARIFYING CYCLE TIME (2-3s vs 3-4 mins) */}
        <div className="p-6 sm:p-8 rounded-3xl bg-slate-900/80 border border-slate-800 text-left space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-4">
            <div>
              <span className="text-xs font-mono font-bold text-amber-400 uppercase tracking-widest bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20">
                Cycle Time Clarification
              </span>
              <h3 className="text-xl sm:text-2xl font-black text-white mt-2">
                Understanding the Wash Timeline: <span className="text-cyan-400">3 to 4 Minutes Total</span>
              </h3>
            </div>
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-950 border border-slate-800 text-xs font-mono text-slate-400">
              <Clock className="w-4 h-4 text-cyan-400" />
              <span>Real-World SLA: 3 to 4 Mins</span>
            </div>
          </div>

          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            During live evaluations, judges asked whether a wash takes "2 to 3 seconds" or "3 to 5 minutes". 
            <strong className="text-white"> A full two-wheeler wash can never happen in 2–3 seconds—that is physically impossible for foaming, hydro-blasting, and drying!</strong> 
            Here is the transparent physical phase breakdown:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            
            <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-2">
              <div className="text-cyan-400 font-mono text-xs font-bold">Phase 1 (0:00 – 0:03)</div>
              <div className="text-base font-black text-white">2 to 3 Seconds</div>
              <div className="text-[11px] font-mono text-slate-400 uppercase">AI Optical Camera Profiling</div>
              <p className="text-[11px] text-slate-400 leading-relaxed">
                Edge TPU camera scans bike geometry, measures dirt density heatmap, and identifies EV battery/cluster masking zones.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-2">
              <div className="text-blue-400 font-mono text-xs font-bold">Phase 2 (0:03 – 1:30)</div>
              <div className="text-base font-black text-white">90 Seconds</div>
              <div className="text-[11px] font-mono text-slate-400 uppercase">Foam & 70-Bar Robotic Wash</div>
              <p className="text-[11px] text-slate-400 leading-relaxed">
                Dual gantry traverses bike length applying biodegradable snow foam and 70-bar targeted oscillating fan jets to chassis and wheels.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-2">
              <div className="text-teal-400 font-mono text-xs font-bold">Phase 3 (1:30 – 2:30)</div>
              <div className="text-base font-black text-white">60 Seconds</div>
              <div className="text-[11px] font-mono text-slate-400 uppercase">0-TDS Distilled Hydro-Rinse</div>
              <p className="text-[11px] text-slate-400 leading-relaxed">
                Demineralized pure water flushes all chemical foam. Leaves zero calcium carbonate mineral rings or residue upon drying.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-2">
              <div className="text-emerald-400 font-mono text-xs font-bold">Phase 4 (2:30 – 3:30)</div>
              <div className="text-base font-black text-white">60 Seconds</div>
              <div className="text-[11px] font-mono text-slate-400 uppercase">Cyclone Air-Knife Drying</div>
              <p className="text-[11px] text-slate-400 leading-relaxed">
                Twin 3.5 kW aerodynamic centrifugal blowers strip water off mirrors, chain drive, and calipers. Bike rolls out dry.
              </p>
            </div>

          </div>

          <div className="p-3.5 rounded-xl bg-cyan-950/30 border border-cyan-500/30 flex items-center justify-between text-xs">
            <span className="text-cyan-300 font-medium">
              ✨ <strong>Total Real-World Wash Cycle: ~3.5 Minutes (3 to 4 Minutes).</strong> Deep Clean / Ceramic Shield runs for ~4.5 to 5 Minutes.
            </span>
            <span className="text-[11px] font-mono text-slate-400 hidden md:inline">vs 35–45 minutes for manual washing</span>
          </div>
        </div>

        {/* INDIAN COMPETITIVE DIFFERENTIATION TABLE */}
        <div className="space-y-6 text-left">
          <div className="space-y-2">
            <span className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-widest bg-cyan-500/10 px-3 py-1 rounded-full border border-cyan-500/20">
              Indian Market Landscape & Defensibility
            </span>
            <h3 className="text-2xl sm:text-3xl font-black text-white">
              Why AquaRide AI Outperforms Existing Systems in India
            </h3>
            <p className="text-sm text-slate-400 leading-relaxed max-w-3xl">
              Evaluators noted that automatic bike washes exist in India. 
              Here is why first-generation Indian semi-automated systems (e.g., Express Bike Works / local conveyor booths) 
              fail modern riders, and how AquaRide introduces the first genuinely closed-loop, EV-safe robotic station in India.
            </p>
          </div>

          <div className="overflow-x-auto rounded-3xl border border-slate-800 shadow-2xl bg-slate-900/60">
            <table className="w-full text-left border-collapse text-xs">
              <thead>
                <tr className="border-b border-slate-800 bg-slate-950/80 text-slate-300 font-mono">
                  <th className="p-4 sm:p-5 font-bold">Key Evaluation Criteria</th>
                  <th className="p-4 sm:p-5 text-slate-400 font-normal">Traditional Indian Garages (Manual)</th>
                  <th className="p-4 sm:p-5 text-slate-400 font-normal">1st-Gen Indian Semi-Auto Washers</th>
                  <th className="p-4 sm:p-5 text-cyan-400 font-bold bg-cyan-950/20 border-l border-r border-cyan-500/30">
                    AquaRide AI Station (Team AquaForge)
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/80 text-slate-300">
                {INDIA_COMPETITOR_BENCHMARK.map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-850/40 transition-colors">
                    <td className="p-4 sm:p-5 font-bold text-white whitespace-nowrap">{row.feature}</td>
                    <td className="p-4 sm:p-5 text-slate-400">{row.manualWash}</td>
                    <td className="p-4 sm:p-5 text-slate-300">{row.semiAutoIndia}</td>
                    <td className="p-4 sm:p-5 text-cyan-200 bg-cyan-950/30 font-medium border-l border-r border-cyan-500/20">
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                        <span>{row.aquaRideAi}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </section>
  );
}
