import React, { useState, useEffect } from "react";
import { Droplets, Menu, X, Smartphone, Sparkles, ArrowRight } from "lucide-react";

const NAV_LINKS = [
  { label: "Solutions", href: "#solutions" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "AI Simulator", href: "#simulator-section" },
  { label: "Rider App", href: "#rider-app" },
  { label: "Technology", href: "#technology" },
  { label: "Franchise ROI", href: "#roi-section" },
  { label: "Live Fleet", href: "#iot-section" },
  { label: "Pricing", href: "#pricing" },
];

export default function Navbar({ onOpenDemoModal, onScrollToSection }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (href) => {
    setMenuOpen(false);
    if (onScrollToSection) {
      onScrollToSection(href);
    } else {
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-slate-950/95 backdrop-blur-xl border-b border-slate-800/80 shadow-xl shadow-slate-950/40"
          : "bg-slate-950/70 backdrop-blur-md border-b border-slate-900"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo */}
          <a
            href="#"
            onClick={(e) => { 
              e.preventDefault(); 
              window.scrollTo({ top: 0, behavior: "smooth" }); 
            }}
            className="flex items-center gap-2.5 shrink-0 group cursor-pointer"
          >
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center shadow-lg shadow-cyan-500/30 group-hover:shadow-cyan-500/50 transition-shadow">
              <Droplets className="w-5 h-5 text-white" />
            </div>
            <div className="leading-none text-left">
              <div className="font-black text-white text-base tracking-tight">
                AquaRide<span className="text-cyan-400"> AI</span>
              </div>
              <div className="text-[9px] font-mono text-slate-400 tracking-widest uppercase">
                Technologies
              </div>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden xl:flex items-center gap-1">
            {NAV_LINKS.map(({ label, href }) => (
              <button
                key={href}
                onClick={() => scrollTo(href)}
                className="px-3.5 py-1.5 rounded-xl text-xs font-medium text-slate-300 hover:text-white hover:bg-slate-800/60 transition-all duration-200 cursor-pointer"
              >
                {label}
              </button>
            ))}
          </nav>

          {/* Action CTAs & Mobile Toggle */}
          <div className="flex items-center gap-2.5">
            
            <button
              onClick={() => scrollTo("#rider-app")}
              className="hidden sm:flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-200 text-xs font-bold transition-all duration-200 cursor-pointer hover:border-cyan-500/40"
            >
              <Smartphone className="w-3.5 h-3.5 text-cyan-400" />
              <span>Rider App</span>
            </button>

            <button
              onClick={() => onOpenDemoModal && onOpenDemoModal()}
              className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-gradient-to-r from-cyan-500 via-sky-400 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-black text-xs transition-all duration-200 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 cursor-pointer hover:scale-105"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Book a Free Demo</span>
            </button>

            <button
              className="xl:hidden p-2 rounded-xl bg-slate-900/80 border border-slate-800 text-slate-300 cursor-pointer hover:text-white"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle navigation menu"
            >
              {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {menuOpen && (
        <div className="xl:hidden border-t border-slate-800 bg-slate-950/98 backdrop-blur-xl px-4 pb-5 pt-3 space-y-1.5 animate-fade-in text-left">
          {NAV_LINKS.map(({ label, href }) => (
            <button
              key={href}
              onClick={() => scrollTo(href)}
              className="w-full text-left px-4 py-2.5 rounded-xl text-xs font-medium text-slate-300 hover:text-white hover:bg-slate-900 transition-all cursor-pointer"
            >
              {label}
            </button>
          ))}
          
          <div className="pt-2 flex flex-col gap-2 border-t border-slate-800/80">
            <button
              onClick={() => scrollTo("#rider-app")}
              className="w-full py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-cyan-300 font-bold text-xs flex items-center justify-center gap-1.5 cursor-pointer"
            >
              <Smartphone className="w-3.5 h-3.5" />
              <span>Open Rider Web App (PWA)</span>
            </button>

            <button
              onClick={() => {
                setMenuOpen(false);
                if (onOpenDemoModal) onOpenDemoModal();
              }}
              className="w-full py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 font-black text-xs cursor-pointer flex items-center justify-center gap-1.5"
            >
              <span>Book a Free Station Demo →</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}