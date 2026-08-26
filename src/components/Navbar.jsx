import React, { useState } from 'react';
import { Droplets, Activity, Calculator, Smartphone, ShieldCheck, Award, Menu, X, Zap } from 'lucide-react';

const NAV_TABS = [
  { id: 'simulator', label: 'AI Simulator', icon: Droplets, shortLabel: 'Simulator' },
  { id: 'roi', label: 'ROI Calculator', icon: Calculator, shortLabel: 'ROI Calc' },
  { id: 'iot', label: 'IoT Dashboard', icon: Activity, shortLabel: 'IoT' },
  { id: 'mobile', label: 'Customer App', icon: Smartphone, shortLabel: 'App' },
  { id: 'patent', label: 'Patent Dossier', icon: ShieldCheck, shortLabel: 'Patent' },
  { id: 'pitch', label: 'Pitch & Q&A', icon: Award, shortLabel: 'Pitch' },
];

export default function Navbar({ activeTab, setActiveTab }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-slate-950/90 backdrop-blur-xl border-b border-slate-800/80 shadow-lg shadow-slate-950/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14">
          {/* Logo */}
          <div className="flex items-center gap-2.5 shrink-0">
            <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center shadow-lg shadow-cyan-500/30">
              <Droplets className="w-4.5 h-4.5 text-white" />
            </div>
            <div className="leading-none">
              <span className="font-black text-white text-sm tracking-tight">AquaRide</span>
              <span className="font-black text-cyan-400 text-sm"> AI</span>
              <div className="text-[9px] font-mono text-slate-500 tracking-widest uppercase">Team Crimson</div>
            </div>
          </div>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            {NAV_TABS.map(({ id, label, icon: Icon }) => {
              const isActive = activeTab === id;
              return (
                <button
                  key={id}
                  onClick={() => setActiveTab(id)}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold transition-all duration-200 cursor-pointer ${
                    isActive
                      ? 'bg-cyan-500/15 text-cyan-300 border border-cyan-500/40 shadow-sm shadow-cyan-500/10'
                      : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span>{label}</span>
                </button>
              );
            })}
          </nav>

          {/* Status + Mobile menu */}
          <div className="flex items-center gap-3">
            <div className="hidden sm:flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-emerald-950/80 border border-emerald-500/30 text-emerald-300 text-[10px] font-mono font-bold">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
              <span>Bay Online</span>
            </div>

            <button
              className="md:hidden p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 cursor-pointer"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden border-t border-slate-800 bg-slate-950/95 px-4 pb-4 pt-2 space-y-1">
          {NAV_TABS.map(({ id, label, icon: Icon }) => {
            const isActive = activeTab === id;
            return (
              <button
                key={id}
                onClick={() => { setActiveTab(id); setMenuOpen(false); }}
                className={`w-full flex items-center gap-2.5 px-3 py-2.5 rounded-xl text-sm font-semibold transition-all cursor-pointer text-left ${
                  isActive
                    ? 'bg-cyan-950/80 text-cyan-300 border border-cyan-500/40'
                    : 'text-slate-400 hover:text-white hover:bg-slate-900'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{label}</span>
              </button>
            );
          })}
        </div>
      )}
    </header>
  );
}