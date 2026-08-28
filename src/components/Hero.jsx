import React, { useEffect, useState } from "react";
import { Droplets, Zap, ShieldCheck, ArrowRight, Play, Smartphone, Sparkles, MapPin } from "lucide-react";
import { COMPANY_STATS } from "../data/mockData";

const BADGES = [
  { icon: Droplets, label: "75% Groundwater Saved", color: "text-cyan-400", bg: "bg-cyan-500/10 border-cyan-500/30" },
  { icon: Zap, label: "3-Min Precision Turnaround", color: "text-amber-400", bg: "bg-amber-500/10 border-amber-500/30" },
  { icon: ShieldCheck, label: "100% Electronics Safe (<35 Bar)", color: "text-emerald-400", bg: "bg-emerald-500/10 border-emerald-500/30" },
];

export default function Hero({ onOpenDemoModal, onScrollToSection }) {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => { setTimeout(() => setLoaded(true), 100); }, []);

  const scrollTo = (href) => {
    if (onScrollToSection) {
      onScrollToSection(href);
    } else {
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-[92vh] flex flex-col items-center justify-center overflow-hidden pt-28 pb-16 px-4">
      {/* Background with futuristic radial gradient */}
      <div className="absolute inset-0 bg-slate-950" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(6,182,212,0.14),transparent)]" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

      {/* Grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{ 
          backgroundImage: "linear-gradient(rgba(6,182,212,1) 1px, transparent 1px), linear-gradient(90deg, rgba(6,182,212,1) 1px, transparent 1px)", 
          backgroundSize: "60px 60px" 
        }}
      />

      <div className={`relative z-10 max-w-5xl mx-auto text-center space-y-8 transition-all duration-700 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>

        {/* Live Launch Pill Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-bold font-mono uppercase tracking-wider">
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
          <span>Commercial Station Network Live in Chennai & Kanchipuram</span>
        </div>

        {/* Headline */}
        <div className="space-y-4">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-white tracking-tight leading-[1.05]">
            India's First Autonomous <br />
            <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-400 bg-clip-text text-transparent">
              AI Two-Wheeler Washing
            </span> <br />
            Station Network.
          </h1>
          
          <p className="text-base sm:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed font-normal">
            Zero waiting lines. 3-minute precision washes. 75% groundwater reclaimed. Powered by Edge Computer Vision to protect motorcycle instrument clusters, ECUs, and paintwork.
          </p>
        </div>

        {/* Value Badges */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3">
          {BADGES.map(({ icon: Icon, label, color, bg }) => (
            <div key={label} className={`flex items-center gap-2 px-3.5 py-1.5 rounded-full border ${bg} text-xs font-bold`}>
              <Icon className={`w-4 h-4 ${color}`} />
              <span className="text-slate-200">{label}</span>
            </div>
          ))}
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 pt-2">
          <button
            onClick={() => scrollTo("#simulator-section")}
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 rounded-2xl bg-gradient-to-r from-cyan-500 via-sky-400 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-black text-sm transition-all duration-200 shadow-xl shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-105 cursor-pointer"
          >
            <span>Experience AI Simulator</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <button
            onClick={() => scrollTo("#rider-app")}
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-7 py-4 rounded-2xl bg-slate-900/90 hover:bg-slate-800 border border-slate-700 hover:border-cyan-500/40 text-cyan-300 font-bold text-sm transition-all duration-200 cursor-pointer"
          >
            <Smartphone className="w-4 h-4 text-cyan-400" />
            <span>Launch Rider Web App</span>
          </button>

          <button
            onClick={() => onOpenDemoModal && onOpenDemoModal()}
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-7 py-4 rounded-2xl bg-slate-900/50 hover:bg-slate-800 border border-slate-800 text-slate-300 font-medium text-sm transition-all duration-200 cursor-pointer"
          >
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span>Partner / Franchise</span>
          </button>
        </div>

        {/* Verified Impact Strip */}
        <div className="pt-6 border-t border-slate-900 max-w-4xl mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
            {COMPANY_STATS.map((stat, idx) => (
              <div key={idx} className="space-y-1">
                <div className={`text-2xl sm:text-3xl font-black font-mono ${stat.color}`}>
                  {stat.value}{stat.suffix}
                </div>
                <div className="text-xs font-bold text-slate-300">{stat.label}</div>
                <div className="text-[10px] text-slate-500 line-clamp-1">{stat.desc}</div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Subtle Scroll Down Indicator */}
      <div 
        onClick={() => scrollTo("#solutions")} 
        className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-slate-600 animate-bounce cursor-pointer"
      >
        <div className="w-px h-8 bg-gradient-to-b from-transparent to-cyan-500/50" />
        <div className="w-1.5 h-1.5 rounded-full bg-cyan-500/50" />
      </div>
    </section>
  );
}