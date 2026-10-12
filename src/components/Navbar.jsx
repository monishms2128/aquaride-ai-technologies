import React, { useState, useEffect } from "react";
import { Droplets, Menu, X, Smartphone, Sparkles, Sun, Moon } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

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
  const { theme, toggleTheme, isDark } = useTheme();

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
          ? isDark 
            ? "bg-slate-950/95 backdrop-blur-xl border-b border-slate-800/80 shadow-xl shadow-slate-950/40"
            : "bg-white/95 backdrop-blur-xl border-b border-slate-200 shadow-lg shadow-slate-200/50"
          : isDark 
            ? "bg-slate-950/70 backdrop-blur-md border-b border-slate-900"
            : "bg-white/80 backdrop-blur-md border-b border-slate-100"
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
              <div className={`font-black text-base tracking-tight ${isDark ? 'text-white' : 'text-slate-900'}`}>
                AquaRide<span className="text-cyan-500"> AI</span>
              </div>
              <div className={`text-[9px] font-mono tracking-widest uppercase ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
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
                className={`px-3 py-1.5 rounded-xl text-xs font-medium transition-all duration-200 cursor-pointer ${
                  isDark 
                    ? 'text-slate-300 hover:text-white hover:bg-slate-800/60' 
                    : 'text-slate-600 hover:text-slate-950 hover:bg-slate-100'
                }`}
              >
                {label}
              </button>
            ))}
          </nav>

          {/* Action CTAs, Theme Toggle & Mobile Toggle */}
          <div className="flex items-center gap-2 sm:gap-3">
            
            {/* Light / Dark Mode Toggle Button */}
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-xl border transition-all cursor-pointer flex items-center justify-center ${
                isDark 
                  ? 'bg-slate-900 border-slate-700 text-amber-400 hover:bg-slate-800 hover:border-amber-400/50' 
                  : 'bg-slate-100 border-slate-300 text-slate-700 hover:bg-slate-200 hover:text-slate-950'
              }`}
              title={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
              aria-label="Toggle theme"
            >
              {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>

            <button
              onClick={() => scrollTo("#rider-app")}
              className={`hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-xl border text-xs font-bold transition-all duration-200 cursor-pointer ${
                isDark 
                  ? 'bg-slate-900 hover:bg-slate-800 border-slate-700 text-slate-200 hover:border-cyan-500/40' 
                  : 'bg-white hover:bg-slate-50 border-slate-300 text-slate-700 shadow-sm'
              }`}
            >
              <Smartphone className="w-3.5 h-3.5 text-cyan-500" />
              <span>Rider App</span>
            </button>

            <button
              onClick={() => onOpenDemoModal && onOpenDemoModal()}
              className="flex items-center gap-1.5 px-3.5 sm:px-4 py-2 rounded-xl bg-gradient-to-r from-cyan-500 via-sky-400 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-black text-xs transition-all duration-200 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 cursor-pointer hover:scale-105"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span className="hidden xs:inline">Book a Free Demo</span>
              <span className="xs:hidden">Demo</span>
            </button>

            <button
              className={`xl:hidden p-2 rounded-xl border cursor-pointer ${
                isDark 
                  ? 'bg-slate-900/80 border-slate-800 text-slate-300 hover:text-white' 
                  : 'bg-slate-100 border-slate-200 text-slate-700 hover:text-slate-950'
              }`}
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
        <div className={`xl:hidden border-t px-4 pb-5 pt-3 space-y-1.5 animate-fade-in text-left ${
          isDark 
            ? 'border-slate-800 bg-slate-950/98 backdrop-blur-xl' 
            : 'border-slate-200 bg-white/98 backdrop-blur-xl shadow-xl'
        }`}>
          {NAV_LINKS.map(({ label, href }) => (
            <button
              key={href}
              onClick={() => scrollTo(href)}
              className={`w-full text-left px-4 py-2.5 rounded-xl text-xs font-medium transition-all cursor-pointer ${
                isDark 
                  ? 'text-slate-300 hover:text-white hover:bg-slate-900' 
                  : 'text-slate-700 hover:text-slate-950 hover:bg-slate-100'
              }`}
            >
              {label}
            </button>
          ))}
          
          <div className="pt-2 flex flex-col gap-2 border-t border-slate-800/40 dark:border-slate-800">
            <button
              onClick={() => scrollTo("#rider-app")}
              className={`w-full py-2.5 rounded-xl border font-bold text-xs flex items-center justify-center gap-1.5 cursor-pointer ${
                isDark 
                  ? 'bg-slate-900 border-slate-700 text-cyan-300' 
                  : 'bg-slate-50 border-slate-200 text-cyan-700'
              }`}
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