import React from 'react';
import { Droplets, Sparkles, ShieldCheck, Zap, ArrowRight, Gauge, Layers, Cpu, Award } from 'lucide-react';

export default function Hero({ onStartDemo, onOpenPitch }) {
  const stats = [
    { label: 'Water Consumed', val: '20-25 L', prev: '90 L Manual', highlight: '75% Saved', color: 'text-cyan-400' },
    { label: 'Wash Duration', val: '2.5 Mins', prev: '35 Mins Manual', highlight: '10x Faster', color: 'text-sky-400' },
    { label: 'Component Safety', val: 'AI Masked', prev: 'High Scratch Risk', highlight: 'Zero Damage', color: 'text-emerald-400' },
    { label: 'MSME Breakeven', val: '16 Months', prev: '₹1.8L Capex', highlight: '50% Margin', color: 'text-amber-400' },
  ];

  return (
    <section className="relative pt-6 pb-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-r from-cyan-600/20 via-blue-600/15 to-indigo-600/20 blur-[120px] rounded-full pointer-events-none -z-10" />

      <div className="text-center max-w-4xl mx-auto space-y-6">
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-gradient-to-r from-cyan-950/80 to-blue-950/80 border border-cyan-500/40 text-cyan-300 text-xs font-bold shadow-lg shadow-cyan-500/10">
          <Sparkles className="w-4 h-4 text-cyan-400 animate-pulse" />
          <span>Patent-Pending Cyber-Physical Two-Wheeler Washing System</span>
          <span className="hidden sm:inline-block w-1.5 h-1.5 rounded-full bg-cyan-400" />
          <span className="hidden sm:inline-block text-slate-300 font-mono">Form 2 IPO Ready</span>
        </div>

        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-tight">
          Autonomous Bike Washing Powered by{' '}
          <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-400 bg-clip-text text-transparent underline decoration-cyan-500/40 underline-offset-8">
            Edge AI Vision
          </span>
        </h1>

        <p className="text-sm sm:text-base lg:text-lg text-slate-300 font-medium max-w-3xl mx-auto leading-relaxed">
          Replacing 90-liter water wastage, worker fatigue, and electrical damage with an enclosed, intelligent wash bay. 
          Real-time dirt optical mapping, sensitive zone protection, and closed-loop multi-stage water reclamation.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
          <button
            onClick={onStartDemo}
            className="flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 via-sky-500 to-blue-600 text-slate-950 font-black text-sm hover:from-cyan-400 hover:to-blue-500 transition-all duration-300 shadow-xl shadow-cyan-500/25 hover:shadow-cyan-400/40 hover:scale-105 cursor-pointer"
          >
            <Zap className="w-4 h-4 fill-current" />
            <span>Launch Live AI Wash Simulator</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <button
            onClick={onOpenPitch}
            className="flex items-center gap-2 px-5 py-3.5 rounded-xl bg-slate-900/90 hover:bg-slate-800/90 text-slate-200 border border-slate-700/80 font-bold text-sm transition-all duration-200 hover:border-amber-500/50 hover:text-amber-300 shadow-lg cursor-pointer"
          >
            <Award className="w-4 h-4 text-amber-400" />
            <span>Hackathon Pitch & Q&A Defense</span>
          </button>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3.5 pt-6">
          {stats.map((s, idx) => (
            <div 
              key={idx}
              className="glass-panel p-4 rounded-2xl border border-slate-800/90 hover:border-cyan-500/40 transition-all duration-300 text-left relative overflow-hidden group"
            >
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                  {s.label}
                </span>
                <span className="text-[10px] font-black px-2 py-0.5 rounded-full bg-cyan-950 text-cyan-300 border border-cyan-500/30">
                  {s.highlight}
                </span>
              </div>
              <div className={`text-2xl font-black mt-2 ${s.color}`}>
                {s.val}
              </div>
              <div className="text-[11px] text-slate-400 font-medium mt-0.5 line-through opacity-75">
                {s.prev}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}