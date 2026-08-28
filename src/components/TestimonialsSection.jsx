import React from 'react';
import { TESTIMONIALS, COMMERCIAL_PARTNERS } from '../data/mockData';
import { Star } from 'lucide-react';

export default function TestimonialsSection() {
  return (
    <section className="py-24 px-4 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_50%,rgba(6,182,212,0.04),transparent)]" />
      
      <div className="max-w-7xl mx-auto relative space-y-16">
        
        {/* Partner Logos Strip */}
        <div className="space-y-6 text-center">
          <p className="text-xs font-mono uppercase tracking-widest text-slate-400 font-bold">
            Trusted by Forecourt Retailers, Authorized Dealerships & Fleets
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
            {COMMERCIAL_PARTNERS.map((p, idx) => (
              <div 
                key={idx}
                className="px-5 py-2.5 rounded-2xl bg-slate-900/80 border border-slate-800 flex items-center gap-2.5 hover:border-cyan-500/40 transition-colors"
              >
                <span className="text-lg">{p.logo}</span>
                <div className="text-left">
                  <div className="text-xs font-bold text-white leading-tight">{p.name}</div>
                  <div className="text-[10px] text-slate-400 font-mono">{p.category}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Section Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-emerald-400 bg-emerald-500/10 px-4 py-1.5 rounded-full border border-emerald-500/20">
            Case Studies & Verification
          </span>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Proven Results in the <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">Real World</span>
          </h2>
          
          <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
            Discover how automobile dealership managers, fuel station franchise operators, and two-wheeler riders experience AquaRide AI every day.
          </p>
        </div>

        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="p-8 rounded-3xl bg-slate-900/60 border border-slate-800 hover:border-slate-700 transition-all duration-300 flex flex-col justify-between text-left relative group hover:scale-[1.02]"
            >
              <div className="space-y-4">
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  
                  <span className="text-[10px] font-mono font-bold px-2.5 py-1 rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-500/30">
                    {t.metric}
                  </span>
                </div>

                <p className="text-sm text-slate-300 leading-relaxed italic">
                  "{t.quote}"
                </p>
              </div>

              <div className="pt-6 border-t border-slate-800/80 mt-6">
                <div className="text-white font-black text-sm">{t.author}</div>
                <div className="text-xs text-cyan-400 font-medium">{t.role}</div>
                <div className="text-[11px] text-slate-400 font-mono mt-0.5">{t.company}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Verified Impact Metrics Banner */}
        <div className="p-8 rounded-3xl bg-gradient-to-r from-cyan-950/70 via-slate-900 to-blue-950/70 border border-cyan-500/30 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div className="space-y-1">
            <h4 className="text-xl font-black text-white">Ready to elevate your station or dealership?</h4>
            <p className="text-xs sm:text-sm text-slate-400">
              Join leading automotive retailers deploying autonomous AI washing systems.
            </p>
          </div>

          <a
            href="#contact"
            className="px-8 py-3.5 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-black text-sm transition-all duration-200 shadow-lg shadow-cyan-500/20 shrink-0 hover:scale-105 cursor-pointer"
          >
            Partner With Us →
          </a>
        </div>

      </div>
    </section>
  );
}
