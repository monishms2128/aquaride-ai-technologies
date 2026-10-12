import React from "react";
import { Cpu, ShieldCheck, Droplets, Gauge, Sparkles, Filter, CheckCircle2 } from "lucide-react";

const FEATURES = [
  {
    icon: Cpu,
    color: "text-purple-400",
    border: "border-purple-500/30",
    bg: "bg-purple-950/20",
    glow: "group-hover:border-purple-400/60",
    title: "Edge AI Vision",
    tagline: "YOLOv8 Neural Network",
    desc: "Onboard Edge TPU camera runs a high-speed neural network identifying vehicle model, measuring localized dirt optical density, and mapping surface contours in under 2 seconds.",
    specs: ["Real-time vehicle anatomical segmentation", "98.6% dirt detection accuracy", "Adaptive under low & glaring bay lighting"],
  },
  {
    icon: ShieldCheck,
    color: "text-emerald-400",
    border: "border-emerald-500/30",
    bg: "bg-emerald-950/20",
    glow: "group-hover:border-emerald-400/60",
    title: "Sensitive Zone Shielding",
    tagline: "Patent-Pending Electronics Protection",
    desc: "Enforces strict pressure limits (<35 Bar) and trajectory bypass envelopes around digital TFT displays, handlebar switches, ECU boxes, and EV battery charging doors.",
    specs: ["<35 Bar automated exclusion envelope", "Zero manual masking covers or tapes needed", "100% protection against console fogging"],
  },
  {
    icon: Sparkles,
    color: "text-amber-400",
    border: "border-amber-500/30",
    bg: "bg-amber-950/20",
    glow: "group-hover:border-amber-400/60",
    title: "Vapor-Distillation & 0-TDS Pure Rinse",
    tagline: "Closed-Loop Evaporation & Condensation",
    desc: "Integrated distillation skid evaporates and condenses fluid, stripping 100% of hard minerals (Calcium, Magnesium, Salts) to produce pure 0-TDS water that dries without white chalk spots.",
    specs: ["Thermal evaporation & vapor-compression condensation", "Eliminates hard-water chalky spots on gloss paint", "Zero-conductive pure water prevents electrical shorts"],
  },
  {
    icon: Droplets,
    color: "text-cyan-400",
    border: "border-cyan-500/30",
    bg: "bg-cyan-950/20",
    glow: "group-hover:border-cyan-400/60",
    title: "Closed-Loop Reclamation Skid",
    tagline: "75% Effluent Water Reclaimed",
    desc: "Wash runoff flows through an oil-water separator, multi-layer quartz sand beds, and activated carbon canisters. Recycled water is continuously reused for pre-rinse passes.",
    specs: ["75% potable groundwater conservation", "In-line optical turbidity monitoring (<10 NTU)", "Compliant with state Pollution Control Board norms"],
  },
  {
    icon: Gauge,
    color: "text-sky-400",
    border: "border-sky-500/30",
    bg: "bg-sky-950/20",
    glow: "group-hover:border-sky-400/60",
    title: "Dynamic Pressure Modulation",
    tagline: "VFD-Controlled Triplex Pumps",
    desc: "Variable Frequency Drives modulate fluid pressure between 35 Bar and 120 Bar in real time, matching nozzle thrust precisely to component strength and grime thickness.",
    specs: ["Continuous 35 to 120 Bar fluid modulation", "Eliminates swirl marks on lacquer and fairings", "Soft-start VFD reduces peak power spikes"],
  },
  {
    icon: Filter,
    color: "text-rose-400",
    border: "border-rose-500/30",
    bg: "bg-rose-950/20",
    glow: "group-hover:border-rose-400/60",
    title: "Targeted Chemical Dosing",
    tagline: "Proportional Degreaser & Snow Foam",
    desc: "Separates alkaline wheel/chassis degreaser from pH-neutral body shampoo. Solenoid injectors dose chemistry strictly on oily swingarms and grime spots, reducing chemical runoff by 40%.",
    specs: ["Dual chemical manifold injection lines", "Zero acid damage to anodized aluminium & chrome", "Automated chemical level telemetry alerts"],
  },
];

export default function TechnologySection() {
  return (
    <section id="technology" className="py-24 px-4 bg-slate-950 relative border-t border-slate-800/80">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_50%,rgba(6,182,212,0.06),transparent)] pointer-events-none" />
      <div className="max-w-7xl mx-auto relative space-y-16">

        {/* Section Heading */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono font-bold uppercase tracking-widest">
            <span>By Team AquaForge</span>
            <span>•</span>
            <span>Proprietary Architecture</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Built Different.{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-500 bg-clip-text text-transparent">
              Engineered to Clean.
            </span>
          </h2>
          <p className="text-base sm:text-lg text-slate-400 leading-relaxed">
            Six synchronized cyber-physical sub-systems—from Edge Vision and VFD pressure modulation to closed-loop distillation—guarantee showroom cleanliness with zero component damage.
          </p>
        </div>

        {/* Highlight Banner: Distilled Water Process */}
        <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-amber-950/40 via-slate-900 to-cyan-950/40 border border-amber-500/40 shadow-2xl shadow-cyan-950/40 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-8 space-y-3.5 text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-400 text-xs font-mono font-bold uppercase">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                <span>Backend Distillation Cycle Explained</span>
              </div>
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-black text-white">
                Why Distilled 0-TDS Water Changes Everything for Bike Cleaning
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Ordinary garage water in India contains <strong className="text-white">500–800 PPM of dissolved minerals</strong> (calcium, lime, carbonates). As water evaporates, these minerals dry into chalky white rings, dulling lacquer and trapping abrasive dust. 
                AquaRide's thermal & membrane distillation unit continuously evaporates and condenses wash fluid, separating 100% of mineral salts before the final hydro-rinse pass.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 text-xs font-mono">
                <div className="p-3 rounded-2xl bg-slate-950/80 border border-slate-800 text-slate-300 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>1. Evaporate Runoff</span>
                </div>
                <div className="p-3 rounded-2xl bg-slate-950/80 border border-slate-800 text-slate-300 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>2. Separate Minerals</span>
                </div>
                <div className="p-3 rounded-2xl bg-slate-950/80 border border-slate-800 text-slate-300 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>3. 0-TDS Pure Condense</span>
                </div>
              </div>

              {/* Animated Interactive Distillation Skid Simulation */}
              <div className="p-4 rounded-2xl bg-slate-950/90 border border-slate-800/90 space-y-3 pt-3">
                <div className="flex items-center justify-between text-xs border-b border-slate-800/80 pb-2">
                  <span className="font-mono text-cyan-400 font-bold flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
                    THERMODYNAMIC RECLAMATION CHAMBER (LIVE)
                  </span>
                  <span className="text-[10px] font-mono text-slate-400">Efficiency: 99.4%</span>
                </div>

                <div className="grid grid-cols-3 gap-2.5 text-center">
                  {/* Step A: Boiler & Vapor */}
                  <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 relative overflow-hidden">
                    <div className="text-[10px] font-mono text-rose-400 font-bold mb-1">Thermal Evaporator</div>
                    <div className="h-14 flex flex-col items-center justify-end relative">
                      <div className="w-8 h-8 rounded-full bg-rose-500/10 border border-rose-500/40 animate-pulse flex items-center justify-center">
                        <span className="text-xs">♨️</span>
                      </div>
                      <div className="text-[9px] text-slate-400 font-mono mt-1">Vapor Steam Rising</div>
                    </div>
                  </div>

                  {/* Step B: Mineral Separation Chamber */}
                  <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 relative overflow-hidden">
                    <div className="text-[10px] font-mono text-amber-400 font-bold mb-1">Mineral Separator</div>
                    <div className="h-14 flex flex-col items-center justify-center relative">
                      <div className="w-8 h-8 rounded-full bg-amber-500/10 border border-amber-500/40 flex items-center justify-center">
                        <span className="text-xs">⚗️</span>
                      </div>
                      <div className="text-[9px] text-amber-300/80 font-mono mt-1">Salts Stripped (-99%)</div>
                    </div>
                  </div>

                  {/* Step C: Condenser & Spotless Distillate */}
                  <div className="p-3 rounded-xl bg-cyan-950/40 border border-cyan-500/40 relative overflow-hidden animate-coil">
                    <div className="text-[10px] font-mono text-cyan-300 font-bold mb-1">Chilled Condenser</div>
                    <div className="h-14 flex flex-col items-center justify-center relative">
                      <div className="w-8 h-8 rounded-full bg-cyan-500/20 border border-cyan-400 flex items-center justify-center">
                        <Droplets className="w-4 h-4 text-cyan-400 animate-bounce" />
                      </div>
                      <div className="text-[9px] text-cyan-300 font-mono mt-1">&lt;5 PPM Distillate</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col gap-3">
              <div className="p-4 rounded-2xl bg-slate-950/90 border border-slate-800 text-left flex items-center justify-between">
                <div>
                  <div className="text-[11px] font-mono text-slate-400 uppercase">Input Raw Water</div>
                  <div className="text-xl font-black text-rose-400 mt-0.5">~680 PPM (Hard TDS)</div>
                  <div className="text-[10px] text-slate-500 mt-0.5">Leaves white chalk & scale</div>
                </div>
                <span className="text-xs px-2.5 py-1 rounded bg-rose-500/10 text-rose-400 font-mono font-bold border border-rose-500/20">
                  Unfiltered
                </span>
              </div>
              
              <div className="p-4 rounded-2xl bg-amber-950/50 border border-amber-500/50 text-left flex items-center justify-between shadow-lg shadow-amber-950/30">
                <div>
                  <div className="text-[11px] font-mono text-amber-400 uppercase">Distilled Pure Rinse</div>
                  <div className="text-xl font-black text-amber-300 mt-0.5">&lt;5 PPM (Pure Distillate)</div>
                  <div className="text-[10px] text-amber-200/80 mt-0.5">100% Spotless Showroom Finish</div>
                </div>
                <span className="text-xs px-2.5 py-1 rounded bg-amber-500/20 text-amber-300 font-mono font-bold border border-amber-500/40">
                  0-TDS Pure
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* 6 Technology Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {FEATURES.map(({ icon: Icon, color, border, bg, glow, title, tagline, desc, specs }) => (
            <div
              key={title}
              className={`p-7 rounded-3xl ${bg} border ${border} ${glow} transition-all duration-300 text-left relative overflow-hidden group hover:scale-[1.02] hover:shadow-2xl hover:shadow-cyan-950/30`}
            >
              <div className="flex items-start gap-4 mb-4">
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 border ${border} bg-slate-900/90 shadow-md`}>
                  <Icon className={`w-6 h-6 ${color}`} />
                </div>
                <div>
                  <h4 className="font-black text-lg text-white group-hover:text-cyan-300 transition-colors">{title}</h4>
                  <span className={`text-xs font-mono font-bold ${color}`}>{tagline}</span>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-5">{desc}</p>

              <div className="space-y-2 pt-3 border-t border-slate-800/80">
                {specs.map((spec) => (
                  <div key={spec} className="flex items-center gap-2 text-xs text-slate-300">
                    <div className={`w-1.5 h-1.5 rounded-full ${color.replace("text-", "bg-")}`} />
                    <span>{spec}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}