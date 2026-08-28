import React from "react";
import { Clock, Droplets, AlertTriangle } from "lucide-react";

const PROBLEMS = [
  {
    icon: Clock,
    color: "text-red-400",
    bg: "bg-red-500/10 border-red-500/20",
    stat: "25–45 Min",
    label: "Average Wait Time",
    desc: "68% of riders waste their weekends standing in line at crowded garages, waiting for a basic bike wash.",
    source: "Survey of 213 riders, Kanchipuram",
  },
  {
    icon: Droplets,
    color: "text-amber-400",
    bg: "bg-amber-500/10 border-amber-500/20",
    stat: "90 Litres",
    label: "Water Wasted Per Wash",
    desc: "Manual washing squanders potable groundwater — enough to fill a bathtub — on a single motorcycle, every single time.",
    source: "Field measurement at 15 garages",
  },
  {
    icon: AlertTriangle,
    color: "text-orange-400",
    bg: "bg-orange-500/10 border-orange-500/20",
    stat: "1 in 3",
    label: "Bikes Damaged",
    desc: "32% of riders reported scratches, swirl marks, or waterlogged instrument consoles from aggressive manual scrubbing.",
    source: "Post-wash damage survey",
  },
];

export default function ProblemSection() {
  return (
    <section className="py-24 px-4 bg-slate-950 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_100%,rgba(239,68,68,0.04),transparent)]" />
      <div className="max-w-6xl mx-auto relative">

        <div className="text-center space-y-4 mb-16">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-red-400 bg-red-500/10 px-3 py-1 rounded-full border border-red-500/20">
            The Problem
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mt-4">
            Manual Bike Washing is{" "}
            <span className="text-red-400">Broken.</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
            India has 260 million two-wheelers and zero automated cleaning infrastructure. 
            The status quo wastes water, time, and damages vehicles.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PROBLEMS.map(({ icon: Icon, color, bg, stat, label, desc, source }) => (
            <div
              key={label}
              className="relative p-8 rounded-3xl bg-slate-900/60 border border-slate-800 hover:border-slate-700 transition-all duration-300 group text-left"
            >
              <div className={`w-12 h-12 rounded-2xl flex items-center justify-center border ${bg} mb-6`}>
                <Icon className={`w-6 h-6 ${color}`} />
              </div>
              <div className={`text-4xl font-black ${color} mb-1`}>{stat}</div>
              <div className="text-white font-bold text-lg mb-3">{label}</div>
              <p className="text-slate-400 text-sm leading-relaxed mb-4">{desc}</p>
              <div className="text-[11px] font-mono text-slate-600 border-t border-slate-800 pt-3">
                Source: {source}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}