import React from "react";
import { Cpu, ShieldCheck, Droplets, Gauge, Sparkles, Filter } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

const FEATURES = [
  {
    icon: Cpu,
    color: "text-purple-400",
    border: "border-purple-500/30",
    bg: "bg-purple-500/10",
    title: "Edge AI Vision",
    tagline: "YOLOv8 Neural Network",
    desc: "Our onboard Edge TPU camera runs a real-time neural network that identifies vehicle type, measures localized dirt density, and maps every surface zone in under 2 seconds.",
    specs: ["Real-time vehicle anatomical segmentation", "98.6% dirt detection accuracy", "Works under variable wash bay illumination"],
  },
  {
    icon: ShieldCheck,
    color: "text-emerald-400",
    border: "border-emerald-500/30",
    bg: "bg-emerald-500/10",
    title: "Sensitive Zone Shielding",
    tagline: "Patent-Pending Electronics Protection",
    desc: "AquaRide AI enforces strict pressure limits (<35 Bar) around digital TFT displays, ECU modules, handlebar switchgear, and battery bays, preventing waterlogging damage.",
    specs: ["<35 Bar automated exclusion envelope", "Zero manual masking tapes or covers needed", "Safeguards TFT screens, EV ports, and wiring"],
  },
  {
    icon: Sparkles,
    color: "text-amber-400",
    border: "border-amber-500/30",
    bg: "bg-amber-500/10",
    title: "Vapor-Distillation & 0-TDS Pure Rinse",
    tagline: "Closed-Loop Evaporation & Condensation",
    desc: "Our integrated distillation skid boils and condenses pure vapor to separate harsh minerals (Calcium, Magnesium, Chlorides). It drops water hardness from 650+ PPM to under 5 PPM for a flawless, 100% spot-free final rinse with zero chalk marks.",
    specs: ["Thermal evaporation & vapor-compression condensation", "Eliminates hard-water chalky spots on gloss paint", "Zero-conductive pure water prevents electrical shorts"],
  },
  {
    icon: Droplets,
    color: "text-cyan-400",
    border: "border-cyan-500/30",
    bg: "bg-cyan-500/10",
    title: "Closed-Loop Reclamation Skid",
    tagline: "75% Effluent Water Reclaimed",
    desc: "Wash runoff flows through an oil-water separator, quartz sand filtration beds, and activated carbon canisters. Purified water is continuously recirculated for pre-rinse cycles.",
    specs: ["75% potable water conservation rate", "In-line optical turbidity monitoring (<10 NTU)", "Compliant with state Pollution Control Board norms"],
  },
  {
    icon: Gauge,
    color: "text-sky-400",
    border: "border-sky-500/30",
    bg: "bg-sky-500/10",
    title: "Dynamic Pressure Modulation",
    tagline: "VFD-Controlled Triplex Pumps",
    desc: "A Variable Frequency Drive continuously modulates high-pressure fluid delivery between 35 Bar and 120 Bar in real time, matching nozzle thrust precisely to component fragility.",
    specs: ["Continuous 35 to 120 Bar fluid modulation", "Eliminates swirl marks on lacquer and fairings", "Smooth VFD motor acceleration cuts peak power draw"],
  },
  {
    icon: Filter,
    color: "text-rose-400",
    border: "border-rose-500/30",
    bg: "bg-rose-500/10",
    title: "Proportional Chemical Dosing",
    tagline: "Targeted Foam & Degreaser Delivery",
    desc: "Separates alkaline wheel/chassis degreaser from pH-neutral body shampoo. Solenoid injectors dose chemistry strictly on oily swingarms and grime spots, reducing chemical runoff by 40%.",
    specs: ["Dual chemical manifold injection lines", "Zero acid damage to anodized aluminium & chrome", "Automated chemical level telemetry alerts"],
  },
];

export default function TechnologySection() {
  const { isDark } = useTheme();

  return (
    <section id="technology" className={`py-24 px-4 relative transition-colors duration-300 ${isDark ? 'bg-slate-950' : 'bg-slate-100/70 border-y border-slate-200'}`}>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_50%,rgba(139,92,246,0.05),transparent)] pointer-events-none" />
      <div className="max-w-7xl mx-auto relative space-y-16">

        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-purple-400 bg-purple-500/10 px-4 py-1.5 rounded-full border border-purple-500/20">
            Proprietary Architecture & Engineering
          </span>
          <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight ${isDark ? 'text-white' : 'text-slate-900'}`}>
            Built Different.{" "}
            <span className="bg-gradient-to-r from-purple-400 via-cyan-400 to-amber-400 bg-clip-text text-transparent">
              Engineered to Clean.
            </span>
          </h2>
          <p className={`text-base sm:text-lg leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
            Six synchronized cyber-physical sub-systems—from Edge Vision and VFD pressure control to closed-loop distillation—guarantee showroom cleanliness with zero component damage.
          </p>
        </div>

        {/* Highlight Banner: Distilled Water Process */}
        <div className={`p-6 sm:p-8 rounded-3xl border transition-all duration-300 ${
          isDark 
            ? 'bg-gradient-to-r from-amber-950/40 via-slate-900 to-cyan-950/40 border-amber-500/40 shadow-xl shadow-amber-950/20' 
            : 'bg-gradient-to-r from-amber-50/80 via-white to-cyan-50/80 border-amber-300 shadow-lg'
        }`}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            <div className="lg:col-span-8 space-y-3 text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-500 text-xs font-mono font-bold uppercase">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Backend Distillation Cycle Explained</span>
              </div>
              <h3 className={`text-xl sm:text-2xl font-black ${isDark ? 'text-white' : 'text-slate-900'}`}>
                Why Distilled 0-TDS Water Changes Everything for Bike Cleaning
              </h3>
              <p className={`text-sm leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
                Ordinary garage water contains <strong>500–800 PPM of dissolved minerals</strong> (calcium, lime, salts). As water evaporates, these minerals leave unsightly white rings and microscopic swirl marks. 
                Our thermal & membrane distillation unit continuously heats, evaporates, and condenses wash fluid, separating 100% of mineral salts before the final hydro-rinse pass.
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col gap-2.5">
              <div className={`p-3 rounded-2xl border text-left flex items-center justify-between ${isDark ? 'bg-slate-900/90 border-slate-800' : 'bg-white border-slate-200'}`}>
                <div>
                  <div className="text-[11px] font-mono text-slate-400 uppercase">Input Raw Water</div>
                  <div className="text-base font-black text-rose-400">~680 PPM (Hard TDS)</div>
                </div>
                <span className="text-xs px-2 py-0.5 rounded bg-rose-500/10 text-rose-400 font-mono font-bold">Unfiltered</span>
              </div>
              <div className={`p-3 rounded-2xl border text-left flex items-center justify-between ${isDark ? 'bg-amber-950/40 border-amber-500/40' : 'bg-amber-50 border-amber-300'}`}>
                <div>
                  <div className="text-[11px] font-mono text-amber-500 uppercase">Distilled Pure Rinse</div>
                  <div className="text-base font-black text-amber-400">&lt;5 PPM (Pure Distillate)</div>
                </div>
                <span className="text-xs px-2 py-0.5 rounded bg-amber-500/20 text-amber-600 dark:text-amber-300 font-mono font-bold">Spot-Free</span>
              </div>
            </div>
          </div>
        </div>

        {/* 6 Technology Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {FEATURES.map(({ icon: Icon, color, border, bg, title, tagline, desc, specs }) => (
            <div
              key={title}
              className={`p-7 rounded-3xl border transition-all duration-300 text-left relative overflow-hidden group hover:scale-[1.02] ${
                isDark 
                  ? `${bg} ${border} hover:border-opacity-80` 
                  : 'bg-white border-slate-200 shadow-md hover:shadow-xl'
              }`}
            >
              <div className="flex items-start gap-4 mb-4">
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 border ${border} ${isDark ? 'bg-slate-900/90' : 'bg-slate-50'}`}>
                  <Icon className={`w-6 h-6 ${color}`} />
                </div>
                <div>
                  <h4 className={`font-black text-lg ${isDark ? 'text-white' : 'text-slate-900'}`}>{title}</h4>
                  <span className={`text-xs font-mono font-bold ${color}`}>{tagline}</span>
                </div>
              </div>

              <p className={`text-xs sm:text-sm leading-relaxed mb-5 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>{desc}</p>

              <div className="space-y-2 pt-2 border-t border-slate-800/40 dark:border-slate-800/60">
                {specs.map((spec) => (
                  <div key={spec} className="flex items-center gap-2 text-xs">
                    <div className={`w-1.5 h-1.5 rounded-full ${color.replace("text-", "bg-")}`} />
                    <span className={isDark ? 'text-slate-300' : 'text-slate-700'}>{spec}</span>
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