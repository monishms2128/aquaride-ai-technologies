import React, { useState } from 'react';
import { Droplets, Send, MapPin, Phone, Mail, CheckCircle2 } from 'lucide-react';

export default function Footer({ onScrollToSection, onOpenDemoModal }) {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
    }
  };

  const scrollTo = (href) => {
    if (onScrollToSection) {
      onScrollToSection(href);
    } else {
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer id="contact" className="border-t border-slate-800/80 bg-slate-950 pt-16 pb-12 px-4 sm:px-6 lg:px-8 text-xs text-slate-400">
      <div className="max-w-7xl mx-auto space-y-12 text-left">
        
        {/* Top 4-column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8">
          
          {/* Col 1 (4 cols): Company Info */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center shadow-lg shadow-cyan-500/30">
                <Droplets className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="font-black text-white text-base tracking-tight">
                  AquaRide<span className="text-cyan-400"> AI</span>
                </div>
                <div className="text-[9px] font-mono text-slate-500 tracking-widest uppercase">
                  Technologies Pvt. Ltd.
                </div>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Pioneering autonomous computer-vision two-wheeler washing infrastructure. Slashes water consumption by 75% while safeguarding motorcycle digital displays and electronics.
            </p>

            <div className="space-y-1.5 text-[11px] text-slate-400 pt-1">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                <span>Chennai (HQ) • Kanchipuram • Bengaluru</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                <a href="mailto:partnerships@aquaride.ai" className="hover:text-cyan-400 transition-colors">partnerships@aquaride.ai</a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                <span>+91 98400 98210 (Commercial Hotline)</span>
              </div>
            </div>
          </div>

          {/* Col 2 (2 cols): Navigation */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-white font-bold text-xs uppercase tracking-wider">Navigation</h4>
            <ul className="space-y-2 text-xs">
              <li><button onClick={() => scrollTo('#solutions')} className="hover:text-cyan-400 transition-colors cursor-pointer">Commercial Solutions</button></li>
              <li><button onClick={() => scrollTo('#how-it-works')} className="hover:text-cyan-400 transition-colors cursor-pointer">How It Works</button></li>
              <li><button onClick={() => scrollTo('#simulator-section')} className="hover:text-cyan-400 transition-colors cursor-pointer">AI Wash Simulator</button></li>
              <li><button onClick={() => scrollTo('#rider-app')} className="hover:text-cyan-400 transition-colors cursor-pointer">Rider App (PWA)</button></li>
              <li><button onClick={() => scrollTo('#technology')} className="hover:text-cyan-400 transition-colors cursor-pointer">Edge AI Technology</button></li>
              <li><button onClick={() => scrollTo('#roi-section')} className="hover:text-cyan-400 transition-colors cursor-pointer">Franchise ROI</button></li>
            </ul>
          </div>

          {/* Col 3 (3 cols): Compliance & Commercial */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-white font-bold text-xs uppercase tracking-wider">Enterprise & Compliance</h4>
            <div className="space-y-2 text-xs text-slate-400">
              <div className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-800 space-y-0.5">
                <div className="text-white font-bold text-[11px]">PCB Zero Discharge</div>
                <p className="text-[10px] text-slate-500">Effluent recycling meets Pollution Control Board industrial discharge standards.</p>
              </div>
              <div className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-800 space-y-0.5">
                <div className="text-white font-bold text-[11px]">Automotive Grade AMC</div>
                <p className="text-[10px] text-slate-500">24/7 IoT remote telemetry monitoring & nationwide spare parts logistics.</p>
              </div>
            </div>
          </div>

          {/* Col 4 (3 cols): Newsletter & Demo */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-white font-bold text-xs uppercase tracking-wider">Stay Updated</h4>
            <p className="text-[11px] text-slate-400">
              Receive new station rollout alerts, franchise opportunities, and water conservation reports.
            </p>

            {!subscribed ? (
              <form onSubmit={handleSubscribe} className="space-y-2">
                <input
                  type="email"
                  required
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-800 text-white text-xs focus:border-cyan-400 focus:outline-none"
                />
                <button
                  type="submit"
                  className="w-full py-2 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Subscribe to Updates</span>
                </button>
              </form>
            ) : (
              <div className="p-3 rounded-xl bg-emerald-950/60 border border-emerald-500/40 text-emerald-300 text-xs flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Thank you for subscribing!</span>
              </div>
            )}

            <button
              onClick={() => onOpenDemoModal && onOpenDemoModal()}
              className="w-full py-2 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-200 font-bold text-xs transition-all cursor-pointer text-center"
            >
              Book Station Consultation →
            </button>
          </div>

        </div>

        {/* Bottom copyright & legal strip */}
        <div className="pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-400">
          <div>
            &copy; {new Date().getFullYear()} AquaRide AI Technologies Pvt. Ltd. All rights reserved.
          </div>
          
          <div className="flex items-center gap-4 text-slate-400">
            <a href="#" className="hover:text-slate-300 transition-colors">Privacy Policy</a>
            <span>•</span>
            <a href="#" className="hover:text-slate-300 transition-colors">Terms of Service</a>
            <span>•</span>
            <a href="#" className="hover:text-slate-300 transition-colors">Safety Standards</a>
            <span>•</span>
            <a href="#" className="hover:text-slate-300 transition-colors">Locations</a>
          </div>
        </div>

      </div>
    </footer>
  );
}