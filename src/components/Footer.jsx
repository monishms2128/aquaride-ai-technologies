import React from 'react';
import { Droplets, ShieldCheck, Heart, Sparkles } from 'lucide-react';

export default function Footer({ setActiveTab }) {
  return (
    <footer className="mt-16 border-t border-slate-800/80 bg-slate-950 py-10 px-4 sm:px-6 lg:px-8 text-center text-xs text-slate-400">
      <div className="max-w-7xl mx-auto space-y-6">
        
        <div className="flex flex-wrap items-center justify-center gap-6 text-slate-300 font-semibold">
          <button onClick={() => setActiveTab('simulator')} className="hover:text-cyan-400 cursor-pointer">AI Wash Bay</button>
          <button onClick={() => setActiveTab('roi')} className="hover:text-cyan-400 cursor-pointer">ROI Calculator</button>
          <button onClick={() => setActiveTab('iot')} className="hover:text-cyan-400 cursor-pointer">IoT Telemetry</button>
          <button onClick={() => setActiveTab('mobile')} className="hover:text-cyan-400 cursor-pointer">Customer App</button>
          <button onClick={() => setActiveTab('patent')} className="hover:text-cyan-400 cursor-pointer">Patent Dossier</button>
          <button onClick={() => setActiveTab('pitch')} className="hover:text-cyan-400 cursor-pointer">Pitch Deck & Q&A</button>
        </div>

        <div className="flex items-center justify-center gap-2 text-slate-500 font-mono text-[11px]">
          <span>AquaRide AI Technologies</span>
          <span>•</span>
          <span>Developed by Team Crimson</span>
          <span>•</span>
          <span>Patent Specification Form 2 IPO / PCT Ready</span>
        </div>

        <p className="text-[11px] text-slate-600 max-w-xl mx-auto">
          Autonomous computer-vision two-wheeler washing apparatus designed for environmental sustainability, zero component damage, and rapid MSME commercialization.
        </p>

      </div>
    </footer>
  );
}