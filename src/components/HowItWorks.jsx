import React from "react";
import { ScanLine, Cpu, Droplets, Wind } from "lucide-react";

const STEPS = [
  {
    number: "01",
    icon: ScanLine,
    color: "text-cyan-400",
    glow: "shadow-cyan-500/20",
    bg: "from-cyan-950/80 to-slate-900",
    border: "border-cyan-500/30",
    title: "Ride In & Dock",
    desc: "Pull into the bay and align your front wheel onto the centering guide rails. The platform automatically adjusts to your wheelbase. No kickstand needed.",
  },
  {
    number: "02",
    icon: Cpu,
    color: "text-purple-400",
    glow: "shadow-purple-500/20",
    bg: "from-purple-950/80 to-slate-900",
    border: "border-purple-500/30",
    title: "AI Scans Your Bike",
    desc: "Our Edge AI camera identifies your vehicle type, maps dirt density zones, and automatically places digital protection shields around your instrument console, ECU, and switchgear.",
  },
  {
    number: "03",
    icon: Droplets,
    color: "text-sky-400",
    glow: "shadow-sky-500/20",
    bg: "from-sky-950/80 to-slate-900",
    border: "border-sky-500/30",
    title: "Precision Wash Cycle",
    desc: "The automated gantry delivers variable-pressure water jets — 120 Bar on muddy wheel arches, just 35 Bar near your digital meter. Snow foam, microfiber scrub, spot-free rinse.",
  },
  {
    number: "04",
    icon: Wind,
    color: "text-emerald-400",
    glow: "shadow-emerald-500/20",
    bg: "from-emerald-950/80 to-slate-900",
    border: "border-emerald-500/30",
    title: "Ride Out Spotless",
    desc: "Twin cyclone blowers purge every crevice in 60 seconds. Your bike rolls out dry, gleaming, and scratch-free. Zero waterlogged meters. Zero swirl marks. Every time.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 px-4 bg-slate-950 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_50%,rgba(6,182,212,0.04),transparent)]" />
      <div className="max-w-6xl mx-auto relative">

        <div className="text-center space-y-4 mb-16">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-cyan-400 bg-cyan-500/10 px-3 py-1 rounded-full border border-cyan-500/20">
            How It Works
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mt-4">
            From Dusty to{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Spotless
            </span>{" "}
            in 4 Steps
          </h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            Fully automated. No human touch required. Consistent quality every single wash.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {STEPS.map(({ number, icon: Icon, color, glow, bg, border, title, desc }, idx) => (
            <div key={number} className="relative group">
              {/* Connector line */}
              {idx < STEPS.length - 1 && (
                <div className="hidden lg:block absolute top-10 left-[calc(100%_-_12px)] w-6 h-px bg-gradient-to-r from-slate-700 to-transparent z-10" />
              )}

              <div className={`h-full p-6 rounded-3xl bg-gradient-to-b ${bg} border ${border} shadow-xl ${glow} hover:scale-[1.02] transition-all duration-300 text-left`}>
                <div className="flex items-center justify-between mb-5">
                  <div className={`w-12 h-12 rounded-2xl bg-slate-950/80 border ${border} flex items-center justify-center`}>
                    <Icon className={`w-5 h-5 ${color}`} />
                  </div>
                  <span className={`text-4xl font-black ${color} opacity-30 font-mono`}>{number}</span>
                </div>
                <h3 className="text-white font-black text-lg mb-3">{title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Time callout */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl bg-cyan-950/60 border border-cyan-500/30 text-cyan-200">
            <span className="text-3xl font-black text-cyan-400">3 Min</span>
            <span className="text-sm font-medium text-slate-400">average total wash time vs 35 minutes manually</span>
          </div>
        </div>

      </div>
    </section>
  );
}