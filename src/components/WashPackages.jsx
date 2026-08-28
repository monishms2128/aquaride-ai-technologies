import React from "react";
import { CheckCircle2, Sparkles } from "lucide-react";

const PLANS = [
  {
    id: "eco",
    name: "Express Eco Wash",
    price: "60",
    duration: "~2 Min",
    badge: null,
    color: "border-slate-700",
    highlight: false,
    desc: "Perfect for a quick refresh after dusty daily commutes.",
    features: [
      "AI camera scan & profiling",
      "Low-pressure pre-mist rinse",
      "pH-neutral snow foam application",
      "Spot-free demineralized rinse",
      "Cyclone air dry",
    ],
    water: "18 Litres used",
  },
  {
    id: "standard",
    name: "Pro Deep Clean",
    price: "90",
    duration: "~3 Min",
    badge: "Most Popular",
    color: "border-cyan-500/60",
    highlight: true,
    desc: "Our flagship wash. Balances deep cleaning with delicate care.",
    features: [
      "Full AI vision + sensitive zone masking",
      "High-pressure gantry pre-rinse (80 Bar)",
      "Dual chemical injection (degreaser + foam)",
      "Oscillating microfiber contour scrub",
      "Hydro-jet final rinse + air dry",
    ],
    water: "28 Litres used",
  },
  {
    id: "heavy",
    name: "Monsoon Mud Blast",
    price: "150",
    duration: "~4.5 Min",
    badge: "Extreme Clean",
    color: "border-amber-500/40",
    highlight: false,
    desc: "For off-road rides, monsoon mud, and caked chassis grease.",
    features: [
      "Multi-angle mud depth profiling",
      "120 Bar underbody jet blast array",
      "High-density alkaline degreaser soak",
      "Multi-angle rotary power scrub",
      "Twin gantry rinse + heated air dry",
    ],
    water: "38 Litres used",
  },
];

export default function WashPackages() {
  return (
    <section id="pricing" className="py-24 px-4 bg-slate-950 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_60%,rgba(6,182,212,0.05),transparent)]" />
      <div className="max-w-6xl mx-auto relative">

        <div className="text-center space-y-4 mb-16">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-cyan-400 bg-cyan-500/10 px-3 py-1 rounded-full border border-cyan-500/20">
            Wash Packages
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mt-4">
            Pick Your Clean.
          </h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            Every package includes AI-guided wash logic and sensitive component protection as standard.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {PLANS.map(({ name, price, duration, badge, color, highlight, desc, features, water }) => (
            <div
              key={name}
              className={`relative flex flex-col p-8 rounded-3xl border ${color} transition-all duration-300 hover:scale-[1.02] ${
                highlight
                  ? "bg-gradient-to-b from-cyan-950/60 to-slate-900 shadow-2xl shadow-cyan-500/15"
                  : "bg-slate-900/50"
              }`}
            >
              {badge && (
                <div className={`absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-black ${
                  highlight ? "bg-cyan-500 text-slate-950" : "bg-amber-500 text-slate-950"
                }`}>
                  {badge}
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-white font-black text-xl mb-1">{name}</h3>
                <p className="text-slate-400 text-sm">{desc}</p>
              </div>

              <div className="mb-6">
                <div className="flex items-end gap-1">
                  <span className="text-4xl font-black text-white">&#8377;{price}</span>
                  <span className="text-slate-400 text-sm mb-1">/ wash</span>
                </div>
                <div className="text-xs font-mono text-cyan-400 mt-1">{duration} · {water}</div>
              </div>

              <div className="space-y-3 flex-grow mb-8">
                {features.map((f) => (
                  <div key={f} className="flex items-start gap-2.5 text-sm text-slate-300">
                    <CheckCircle2 className={`w-4 h-4 shrink-0 mt-0.5 ${highlight ? "text-cyan-400" : "text-slate-500"}`} />
                    <span>{f}</span>
                  </div>
                ))}
              </div>

              <a
                href="#contact"
                onClick={(e) => { e.preventDefault(); document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" }); }}
                className={`w-full py-3 rounded-2xl font-bold text-sm text-center transition-all cursor-pointer ${
                  highlight
                    ? "bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white shadow-lg shadow-cyan-500/20"
                    : "bg-slate-800 hover:bg-slate-700 text-white border border-slate-700"
                }`}
              >
                Book This Wash
              </a>
            </div>
          ))}
        </div>

        {/* AI Auto note */}
        <div className="mt-8 p-6 rounded-3xl bg-gradient-to-r from-purple-950/60 to-slate-900 border border-purple-500/30 flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
          <div className="w-12 h-12 rounded-2xl bg-purple-500/15 border border-purple-500/30 flex items-center justify-center shrink-0">
            <Sparkles className="w-6 h-6 text-purple-400" />
          </div>
          <div>
            <div className="text-white font-black text-lg">AI Auto-Sense Mode — Included with every wash</div>
            <div className="text-slate-400 text-sm mt-1">
              Not sure which package to pick? Our AI camera scans your bike, reads the dirt level, and automatically selects and customizes the ideal wash cycle for your vehicle. Always the right clean, automatically.
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}