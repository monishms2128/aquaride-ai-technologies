import React, { useState, useEffect, useRef } from 'react';
import { 
  Smartphone, 
  Droplets, 
  CheckCircle2, 
  ShieldCheck, 
  ArrowRight, 
  Check, 
  RefreshCw, 
  Share2, 
  MapPin
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { soundEffects } from '../utils/audioEffects';

const VEHICLE_PRESETS = [
  { id: 're_hunter', name: 'Royal Enfield Hunter 350', plate: 'TN 21 BK 4902', type: 'Cruiser / 350cc', icon: '🏍️' },
  { id: 'ather_ev', name: 'Ather 450X Gen 3', plate: 'TN 09 EV 1024', type: 'Electric Scooter', icon: '⚡' },
  { id: 'ktm_duke', name: 'KTM Duke 390', plate: 'TN 22 DK 8812', type: 'Performance Sports', icon: '🏁' },
  { id: 'activa', name: 'Honda Activa 6G', plate: 'TN 14 AX 3410', type: 'Daily Commuter', icon: '🛵' },
];

const PACKAGES = [
  { 
    id: 'eco', 
    name: 'Express Eco Wash', 
    price: 60, 
    time: '2 Mins', 
    desc: 'Pre-rinse + pH neutral foam + Spot-free rinse + Cyclone dry', 
    tag: 'Quick Refresh',
    waterUsed: 18,
    waterSaved: 72
  },
  { 
    id: 'standard', 
    name: 'Pro Deep Clean (Flagship)', 
    price: 90, 
    time: '3 Mins', 
    desc: 'AI scan + Dual foam + Contour microfiber scrub + Hydro-jet rinse + Dry', 
    tag: 'Most Popular',
    waterUsed: 28,
    waterSaved: 62
  },
  { 
    id: 'heavy', 
    name: 'Monsoon Mud Blast', 
    price: 150, 
    time: '4.5 Mins', 
    desc: '120 Bar underbody mud blast + Heavy degreaser + Spoke scrub + Heated dry', 
    tag: 'Extreme Clean',
    waterUsed: 38,
    waterSaved: 52
  },
  { 
    id: 'ev_pro', 
    name: 'EV Safe Ceramic Detail', 
    price: 180, 
    time: '5 Mins', 
    desc: 'TFT screen shield + Ceramic gloss coating + Battery bay moisture purge', 
    tag: 'EV Specialist',
    waterUsed: 24,
    waterSaved: 66
  },
];

const WASH_STAGES = [
  { title: 'AI Optical Scan', desc: 'Neural net mapping vehicle profile & dirt zones', duration: 3, pressure: 'Sensors' },
  { title: 'Dynamic Pre-Rinse', desc: 'Modulated low-pressure mist softening road dirt', duration: 4, pressure: '45 Bar' },
  { title: 'Active Snow Foam', desc: 'Dispensing thick pH-neutral shampoo & degreaser', duration: 5, pressure: '55 Bar' },
  { title: 'Contour Scrubbing', desc: 'Oscillating EVA microfiber rollers cleaning wheels', duration: 6, pressure: '60 Bar' },
  { title: 'High-Pressure Rinse', desc: 'Demineralized spot-free flush with 100% water reclamation', duration: 4, pressure: '90 Bar' },
  { title: 'Cyclone Air Dry', desc: 'Dual 120 km/h air blades purging crevices & chain', duration: 3, pressure: 'Air 3.5HP' },
];

export default function CustomerMobileApp() {
  // Navigation / Wizard State: 'select' | 'payment' | 'tracking' | 'complete'
  const [appState, setAppState] = useState('select');
  
  // Customization selections
  const [selectedPreset, setSelectedPreset] = useState(VEHICLE_PRESETS[0]);
  const [selectedPkgId, setSelectedPkgId] = useState('standard');
  const [hasChainLube, setHasChainLube] = useState(true);
  const [hasCeramicWax, setHasCeramicWax] = useState(false);
  const [hasHelmetClean, setHasHelmetClean] = useState(true);
  const [paymentMethod, setPaymentMethod] = useState('upi_gpay');
  const [isProcessingPayment, setIsProcessingPayment] = useState(false);

  // Live Wash tracking states
  const [currentStageIdx, setCurrentStageIdx] = useState(0);
  const [progressPercent, setProgressPercent] = useState(0);
  const [secondsLeft, setSecondsLeft] = useState(25);
  const [showToast, setShowToast] = useState(null);

  const currentPkg = PACKAGES.find(p => p.id === selectedPkgId) || PACKAGES[1];
  const totalAmount = currentPkg.price + 
    (hasChainLube ? 30 : 0) + 
    (hasCeramicWax ? 40 : 0) + 
    (hasHelmetClean ? 25 : 0);

  // Handle simulated payment
  const handleInitiatePayment = () => {
    setIsProcessingPayment(true);
    setTimeout(() => {
      setIsProcessingPayment(false);
      setAppState('tracking');
      setCurrentStageIdx(0);
      setProgressPercent(0);
      setSecondsLeft(25);
      soundEffects.playSpraySound(60);
    }, 1400);
  };

  // Live tracking timer & stage progression
  useEffect(() => {
    let interval = null;
    if (appState === 'tracking') {
      interval = setInterval(() => {
        setSecondsLeft(prevSec => {
          if (prevSec <= 1) {
            clearInterval(interval);
            setAppState('complete');
            soundEffects.playSuccessChime();
            try {
              confetti({
                particleCount: 75,
                spread: 70,
                origin: { y: 0.6 }
              });
            } catch (e) {}
            return 0;
          }
          return prevSec - 1;
        });

        setProgressPercent(prevPct => {
          const nextPct = Math.min(100, prevPct + 4);
          // Calculate stage based on percentage
          const stage = Math.min(WASH_STAGES.length - 1, Math.floor((nextPct / 100) * WASH_STAGES.length));
          setCurrentStageIdx(stage);
          return nextPct;
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [appState]);

  const handleReset = () => {
    setAppState('select');
    setCurrentStageIdx(0);
    setProgressPercent(0);
    setSecondsLeft(25);
  };

  const handleShareReceipt = () => {
    if (navigator.share) {
      navigator.share({
        title: 'AquaRide AI Eco-Certificate',
        text: `I just washed my ${selectedPreset.name} with AquaRide AI and saved ${currentPkg.waterSaved}L of groundwater!`,
        url: window.location.href,
      }).catch(() => {});
    } else {
      setShowToast('Eco-Certificate link copied to clipboard!');
      setTimeout(() => setShowToast(null), 3000);
    }
  };

  return (
    <section id="rider-app" className="py-20 px-4 bg-slate-950 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_50%,rgba(6,182,212,0.06),transparent)]" />
      
      <div className="max-w-7xl mx-auto space-y-10 relative">
        
        {/* SECTION HEADER */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-bold font-mono uppercase tracking-widest">
            <Smartphone className="w-3.5 h-3.5 text-cyan-400" />
            <span>Interactive Rider PWA Demo</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            The AquaRide <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-400 bg-clip-text text-transparent">Rider Web App</span>
          </h2>
          
          <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
            Experience zero-line booking. Scan the wash bay QR code, select customized wash packages, pay via UPI, and monitor live bay telemetry & CCTV in real time.
          </p>
        </div>

        {/* INTERACTIVE WORKSPACE GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center justify-center">
          
          {/* LEFT 6 COLS: Explanations & Quick Controls */}
          <div className="lg:col-span-6 space-y-6 text-left">
            
            <div className="space-y-3">
              <h3 className="text-2xl sm:text-3xl font-black text-white leading-tight">
                Scan. Pay. Wash. <br />
                <span className="text-cyan-400">Spotless in 3 Minutes.</span>
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                No tickets, no manual queue tokens, and no cash hassles. Riders pull into an automated AquaRide bay, tap to authenticate via Web App, and drive away in under 3 minutes with an instant digital water conservation certificate.
              </p>
            </div>

            {/* Quick interactive steps guide */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div 
                onClick={() => setAppState('select')} 
                className={`p-3.5 rounded-2xl border transition-all cursor-pointer ${
                  appState === 'select' 
                    ? 'bg-cyan-950/70 border-cyan-400 shadow-md shadow-cyan-500/15' 
                    : 'bg-slate-900/60 border-slate-800 hover:border-slate-700'
                }`}
              >
                <div className="flex items-center gap-2 text-cyan-300 font-bold text-xs">
                  <span className="w-5 h-5 rounded-full bg-cyan-500/20 text-cyan-400 flex items-center justify-center text-[11px] font-mono">1</span>
                  <span>Select Bike & Mode</span>
                </div>
                <p className="text-[11px] text-slate-400 mt-1">Pick preset or enter registration</p>
              </div>

              <div 
                onClick={() => setAppState('payment')} 
                className={`p-3.5 rounded-2xl border transition-all cursor-pointer ${
                  appState === 'payment' 
                    ? 'bg-cyan-950/70 border-cyan-400 shadow-md shadow-cyan-500/15' 
                    : 'bg-slate-900/60 border-slate-800 hover:border-slate-700'
                }`}
              >
                <div className="flex items-center gap-2 text-cyan-300 font-bold text-xs">
                  <span className="w-5 h-5 rounded-full bg-cyan-500/20 text-cyan-400 flex items-center justify-center text-[11px] font-mono">2</span>
                  <span>Instant UPI Checkout</span>
                </div>
                <p className="text-[11px] text-slate-400 mt-1">GPay, PhonePe, Paytm or AquaPay</p>
              </div>

              <div 
                onClick={() => {
                  setAppState('tracking');
                  setCurrentStageIdx(2);
                  setProgressPercent(50);
                  setSecondsLeft(15);
                }} 
                className={`p-3.5 rounded-2xl border transition-all cursor-pointer ${
                  appState === 'tracking' 
                    ? 'bg-cyan-950/70 border-cyan-400 shadow-md shadow-cyan-500/15' 
                    : 'bg-slate-900/60 border-slate-800 hover:border-slate-700'
                }`}
              >
                <div className="flex items-center gap-2 text-cyan-300 font-bold text-xs">
                  <span className="w-5 h-5 rounded-full bg-cyan-500/20 text-cyan-400 flex items-center justify-center text-[11px] font-mono">3</span>
                  <span>Live Bay Telemetry</span>
                </div>
                <p className="text-[11px] text-slate-400 mt-1">CCTV feed, pressure & timer</p>
              </div>

              <div 
                onClick={() => {
                  setAppState('complete');
                }} 
                className={`p-3.5 rounded-2xl border transition-all cursor-pointer ${
                  appState === 'complete' 
                    ? 'bg-cyan-950/70 border-cyan-400 shadow-md shadow-cyan-500/15' 
                    : 'bg-slate-900/60 border-slate-800 hover:border-slate-700'
                }`}
              >
                <div className="flex items-center gap-2 text-emerald-300 font-bold text-xs">
                  <span className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-[11px] font-mono">4</span>
                  <span>Digital Eco-Receipt</span>
                </div>
                <p className="text-[11px] text-slate-400 mt-1">Water saved certificate & tax invoice</p>
              </div>
            </div>

            {/* Live Station Status Pill */}
            <div className="p-4 rounded-2xl bg-gradient-to-r from-slate-900 via-cyan-950/40 to-slate-900 border border-slate-800 flex items-center justify-between text-xs">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-white font-bold">Bay 01 - Chennai OMR Station</div>
                  <div className="text-[11px] text-slate-400">Queue: 0 Bikes • Ready for Instant Wash</div>
                </div>
              </div>
              <span className="px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 font-mono text-[11px] font-bold">
                Online
              </span>
            </div>

          </div>

          {/* RIGHT 6 COLS: Fully Interactive Smartphone Simulator */}
          <div className="lg:col-span-6 flex justify-center">
            
            <div className="relative w-[360px] h-[720px] bg-slate-950 rounded-[52px] border-[6px] border-slate-800 shadow-[0_0_60px_rgba(6,182,212,0.25)] p-3.5 flex flex-col justify-between overflow-hidden">
              
              {/* Phone Dynamic Island / Camera Bar */}
              <div className="absolute top-4 left-1/2 -translate-x-1/2 w-32 h-5 bg-slate-900 rounded-full z-40 border border-slate-800 flex items-center justify-center gap-2 px-3">
                <div className="w-2.5 h-2.5 rounded-full bg-slate-950" />
                <div className="w-1.5 h-1.5 rounded-full bg-cyan-400/80 animate-pulse" />
                <span className="text-[9px] font-mono text-slate-400 font-bold">AquaRide Pay</span>
              </div>

              {/* PHONE SCREEN CONTENT */}
              <div className="w-full h-full bg-slate-900 rounded-[40px] overflow-y-auto p-4 pt-8 text-left space-y-4 no-scrollbar">
                
                {/* Header bar inside app */}
                <div className="flex items-center justify-between border-b border-slate-800 pb-2.5">
                  <div className="flex items-center gap-1.5">
                    <Droplets className="w-4 h-4 text-cyan-400" />
                    <span className="font-black text-xs text-white tracking-tight">AquaRide PWA</span>
                  </div>
                  <span className="text-[10px] font-mono font-bold text-emerald-400 bg-emerald-950/80 px-2 py-0.5 rounded-full border border-emerald-500/30 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                    Bay 01 Active
                  </span>
                </div>

                {/* VIEW 1: SELECT BIKE & PACKAGE */}
                {appState === 'select' && (
                  <div className="space-y-4 animate-fade-in">
                    
                    {/* Vehicle identification card */}
                    <div className="p-3 rounded-2xl bg-gradient-to-r from-cyan-950/90 to-blue-950/90 border border-cyan-500/30 space-y-2">
                      <div className="flex items-center justify-between text-[10px] text-cyan-300 font-mono uppercase">
                        <span>Vehicle AI Identified</span>
                        <span className="font-bold text-emerald-400">Confidence 99%</span>
                      </div>
                      
                      <div className="flex items-center gap-2.5">
                        <span className="text-2xl">{selectedPreset.icon}</span>
                        <div className="leading-tight">
                          <div className="text-xs font-black text-white">{selectedPreset.name}</div>
                          <div className="text-[10px] text-slate-300 font-mono mt-0.5">{selectedPreset.plate} • {selectedPreset.type}</div>
                        </div>
                      </div>

                      {/* Quick preset changer */}
                      <div className="grid grid-cols-2 gap-1.5 pt-1 border-t border-cyan-500/20">
                        {VEHICLE_PRESETS.map(v => (
                          <button
                            key={v.id}
                            onClick={() => setSelectedPreset(v)}
                            className={`px-2 py-1 rounded-lg text-[10px] font-medium transition-all text-left truncate cursor-pointer ${
                              selectedPreset.id === v.id
                                ? 'bg-cyan-500 text-slate-950 font-bold'
                                : 'bg-slate-900/80 text-slate-300 hover:text-white'
                            }`}
                          >
                            {v.name.split(' ')[0]} {v.name.split(' ')[1]}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Wash Package Options */}
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-[11px] font-bold text-slate-300 uppercase tracking-wider">
                        <span>Select Wash Package:</span>
                        <span className="text-cyan-400 text-[10px] font-mono">3-Min Cycle</span>
                      </div>

                      {PACKAGES.map(pkg => {
                        const isSelected = selectedPkgId === pkg.id;
                        return (
                          <div
                            key={pkg.id}
                            onClick={() => setSelectedPkgId(pkg.id)}
                            className={`p-2.5 rounded-2xl border transition-all cursor-pointer ${
                              isSelected
                                ? 'bg-cyan-950/80 border-cyan-400 shadow-md shadow-cyan-500/20'
                                : 'bg-slate-950/60 border-slate-800 hover:border-slate-700'
                            }`}
                          >
                            <div className="flex items-center justify-between">
                              <span className="text-xs font-black text-white">{pkg.name}</span>
                              <span className="text-xs font-black text-cyan-300 font-mono">₹{pkg.price}</span>
                            </div>
                            <p className="text-[10px] text-slate-400 mt-0.5 leading-snug">{pkg.desc}</p>
                            <div className="flex items-center justify-between text-[10px] font-mono text-slate-400 mt-1.5 pt-1 border-t border-slate-800/60">
                              <span>Duration: {pkg.time}</span>
                              <span className="text-emerald-400 font-bold">Saves {pkg.waterSaved}L water</span>
                            </div>
                          </div>
                        );
                      })}
                    </div>

                    {/* Add-on Options */}
                    <div className="space-y-2">
                      <span className="text-[11px] font-bold text-slate-300 block uppercase tracking-wider">
                        Add-on Care Options:
                      </span>

                      <label className="flex items-center justify-between p-2 rounded-xl bg-slate-950/60 border border-slate-800 text-xs cursor-pointer hover:border-slate-700">
                        <span className="text-slate-300 font-medium">Chain Degrease & Teflon Lube</span>
                        <div className="flex items-center gap-2">
                          <span className="font-mono text-cyan-400 font-bold">+₹30</span>
                          <input
                            type="checkbox"
                            checked={hasChainLube}
                            onChange={(e) => setHasChainLube(e.target.checked)}
                            className="accent-cyan-400 cursor-pointer"
                          />
                        </div>
                      </label>

                      <label className="flex items-center justify-between p-2 rounded-xl bg-slate-950/60 border border-slate-800 text-xs cursor-pointer hover:border-slate-700">
                        <span className="text-slate-300 font-medium">Hydrophobic Ceramic Gloss</span>
                        <div className="flex items-center gap-2">
                          <span className="font-mono text-cyan-400 font-bold">+₹40</span>
                          <input
                            type="checkbox"
                            checked={hasCeramicWax}
                            onChange={(e) => setHasCeramicWax(e.target.checked)}
                            className="accent-cyan-400 cursor-pointer"
                          />
                        </div>
                      </label>

                      <label className="flex items-center justify-between p-2 rounded-xl bg-slate-950/60 border border-slate-800 text-xs cursor-pointer hover:border-slate-700">
                        <span className="text-slate-300 font-medium">Helmet UV Sanitization & Visor Clean</span>
                        <div className="flex items-center gap-2">
                          <span className="font-mono text-cyan-400 font-bold">+₹25</span>
                          <input
                            type="checkbox"
                            checked={hasHelmetClean}
                            onChange={(e) => setHasHelmetClean(e.target.checked)}
                            className="accent-cyan-400 cursor-pointer"
                          />
                        </div>
                      </label>
                    </div>

                    {/* Proceed CTA */}
                    <button
                      onClick={() => setAppState('payment')}
                      className="w-full py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-black text-xs transition-all shadow-lg shadow-cyan-500/20 cursor-pointer flex items-center justify-center gap-2"
                    >
                      <span>PROCEED TO PAY ₹{totalAmount}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                )}

                {/* VIEW 2: INTERACTIVE PAYMENT MODAL */}
                {appState === 'payment' && (
                  <div className="space-y-4 animate-fade-in">
                    <div className="p-3 rounded-2xl bg-slate-950 border border-slate-800 space-y-3">
                      <div className="flex items-center justify-between text-xs text-slate-400">
                        <span>Selected Package</span>
                        <span className="text-white font-bold">{currentPkg.name}</span>
                      </div>
                      <div className="flex items-center justify-between text-xs text-slate-400">
                        <span>Vehicle</span>
                        <span className="text-cyan-300 font-mono">{selectedPreset.name}</span>
                      </div>
                      <div className="flex items-center justify-between text-sm font-black text-white border-t border-slate-800 pt-2">
                        <span>Total Payable</span>
                        <span className="text-cyan-400 font-mono text-base">₹{totalAmount}</span>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <span className="text-[11px] font-bold text-slate-300 uppercase tracking-wider block">
                        Choose Payment Method:
                      </span>

                      {[
                        { id: 'upi_gpay', name: 'Google Pay / PhonePe / Paytm', desc: 'Instant UPI 1-Click Pay', icon: '📱' },
                        { id: 'aquapay', name: 'AquaPay Rider FastPass Wallet', desc: 'Balance: ₹450 available', icon: '⚡' },
                        { id: 'qr_intent', name: 'Scan Bay QR at Station', desc: 'Pay via any bank UPI app', icon: '🏁' },
                      ].map(method => (
                        <div
                          key={method.id}
                          onClick={() => setPaymentMethod(method.id)}
                          className={`p-2.5 rounded-xl border flex items-center justify-between cursor-pointer transition-all ${
                            paymentMethod === method.id
                              ? 'bg-cyan-950/80 border-cyan-400'
                              : 'bg-slate-950/60 border-slate-800'
                          }`}
                        >
                          <div className="flex items-center gap-2">
                            <span className="text-lg">{method.icon}</span>
                            <div>
                              <div className="text-xs font-bold text-white">{method.name}</div>
                              <div className="text-[10px] text-slate-400">{method.desc}</div>
                            </div>
                          </div>
                          {paymentMethod === method.id && (
                            <Check className="w-4 h-4 text-cyan-400 shrink-0" />
                          )}
                        </div>
                      ))}
                    </div>

                    <button
                      onClick={handleInitiatePayment}
                      disabled={isProcessingPayment}
                      className="w-full py-3.5 rounded-xl bg-gradient-to-r from-emerald-500 via-teal-400 to-cyan-500 hover:from-emerald-400 hover:to-cyan-400 text-slate-950 font-black text-xs transition-all shadow-xl shadow-emerald-500/20 cursor-pointer flex items-center justify-center gap-2 disabled:opacity-50"
                    >
                      {isProcessingPayment ? (
                        <>
                          <RefreshCw className="w-4 h-4 animate-spin text-slate-950" />
                          <span>AUTHORIZING UPI TRANSACTION...</span>
                        </>
                      ) : (
                        <>
                          <span>PAY ₹{totalAmount} & INITIATE WASH</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </>
                      )}
                    </button>

                    <button
                      onClick={() => setAppState('select')}
                      className="w-full text-center text-[11px] text-slate-400 hover:text-white transition-colors cursor-pointer"
                    >
                      ← Back to package selection
                    </button>
                  </div>
                )}

                {/* VIEW 3: LIVE WASH BAY TELEMETRY & CCTV TRACKING */}
                {appState === 'tracking' && (
                  <div className="space-y-4 animate-fade-in text-center">
                    
                    {/* Live CCTV Video Mockup */}
                    <div className="p-3 rounded-2xl bg-cyan-950/80 border border-cyan-500/40 text-left space-y-2">
                      <div className="flex items-center justify-between text-[10px] text-cyan-300 font-mono">
                        <span className="flex items-center gap-1.5">
                          <span className="w-2 h-2 rounded-full bg-red-500 animate-ping" />
                          LIVE BAY 01 CCTV FEED
                        </span>
                        <span className="font-bold text-red-400">REC [1080p AI]</span>
                      </div>

                      <div className="w-full h-32 bg-slate-950 rounded-xl border border-slate-800 relative overflow-hidden flex flex-col items-center justify-center">
                        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_50%,rgba(6,182,212,0.15),transparent)]" />
                        
                        {/* Dynamic stage animation icons */}
                        <div className="relative z-10 flex flex-col items-center space-y-1">
                          <div className="text-3xl animate-bounce">
                            {currentStageIdx === 0 && '🔍'}
                            {currentStageIdx === 1 && '💧'}
                            {currentStageIdx === 2 && '🫧'}
                            {currentStageIdx === 3 && '🧽'}
                            {currentStageIdx === 4 && '🌊'}
                            {currentStageIdx === 5 && '💨'}
                          </div>
                          <span className="text-xs font-black text-white tracking-wide">
                            {WASH_STAGES[currentStageIdx].title}
                          </span>
                          <span className="text-[10px] font-mono text-cyan-300">
                            {WASH_STAGES[currentStageIdx].pressure}
                          </span>
                        </div>

                        {/* Animated water mist scan overlay */}
                        <div className="absolute inset-x-0 bottom-0 h-1 bg-cyan-400 animate-pulse" />
                      </div>
                    </div>

                    {/* Progress details */}
                    <div className="space-y-1 text-left">
                      <div className="flex items-center justify-between text-xs">
                        <span className="font-black text-white">{WASH_STAGES[currentStageIdx].title}</span>
                        <span className="font-mono font-bold text-cyan-400">{progressPercent}%</span>
                      </div>
                      <p className="text-[10px] text-slate-400">{WASH_STAGES[currentStageIdx].desc}</p>
                    </div>

                    {/* Progress Bar */}
                    <div className="w-full h-2.5 bg-slate-950 rounded-full overflow-hidden border border-slate-800">
                      <div 
                        className="h-full bg-gradient-to-r from-cyan-500 via-sky-400 to-emerald-400 transition-all duration-500" 
                        style={{ width: `${progressPercent}%` }} 
                      />
                    </div>

                    {/* Live Sensor Metrics */}
                    <div className="grid grid-cols-2 gap-2 text-left text-[11px]">
                      <div className="p-2.5 rounded-xl bg-slate-950/70 border border-slate-800">
                        <div className="text-slate-400">Est. Time Remaining</div>
                        <div className="text-base font-black text-white font-mono mt-0.5">{secondsLeft}s</div>
                      </div>

                      <div className="p-2.5 rounded-xl bg-emerald-950/50 border border-emerald-500/30">
                        <div className="text-emerald-300 font-bold">Groundwater Saved</div>
                        <div className="text-base font-black text-emerald-400 font-mono mt-0.5">+{currentPkg.waterSaved} Liters</div>
                      </div>
                    </div>

                    {/* Safety Mask Pill */}
                    <div className="p-2.5 rounded-xl bg-indigo-950/50 border border-indigo-500/30 text-left flex items-center gap-2">
                      <ShieldCheck className="w-4 h-4 text-indigo-400 shrink-0" />
                      <span className="text-[10px] text-indigo-200">
                        TFT Console & ECU Shielding active (&lt;35 Bar)
                      </span>
                    </div>

                    <button
                      onClick={() => setAppState('complete')}
                      className="text-[10px] text-cyan-400 hover:underline font-mono cursor-pointer"
                    >
                      [Skip to completion receipt]
                    </button>
                  </div>
                )}

                {/* VIEW 4: DIGITAL ECO-CERTIFICATE & INVOICE */}
                {appState === 'complete' && (
                  <div className="space-y-4 animate-fade-in text-left">
                    
                    <div className="p-4 rounded-2xl bg-gradient-to-b from-emerald-950/80 via-slate-900 to-slate-950 border border-emerald-400/50 text-center space-y-2">
                      <div className="w-10 h-10 rounded-full bg-emerald-500/20 border border-emerald-400 flex items-center justify-center mx-auto text-emerald-400">
                        <CheckCircle2 className="w-6 h-6" />
                      </div>
                      
                      <div>
                        <h4 className="text-sm font-black text-white">Wash Cycle Completed!</h4>
                        <p className="text-[11px] text-emerald-300 font-mono">Your vehicle is 100% spotless & dry</p>
                      </div>

                      <div className="p-3 rounded-xl bg-slate-950/90 border border-emerald-500/30 text-left space-y-1.5 mt-2">
                        <div className="flex items-center justify-between text-[11px]">
                          <span className="text-slate-400">Potable Water Saved:</span>
                          <span className="font-mono font-bold text-emerald-400">{currentPkg.waterSaved} Liters</span>
                        </div>
                        <div className="flex items-center justify-between text-[11px]">
                          <span className="text-slate-400">Carbon Offset:</span>
                          <span className="font-mono font-bold text-cyan-300">0.42 kg CO₂ eq</span>
                        </div>
                        <div className="flex items-center justify-between text-[11px]">
                          <span className="text-slate-400">Green Rider Points:</span>
                          <span className="font-mono font-bold text-amber-400">+100 Pts</span>
                        </div>
                      </div>
                    </div>

                    {/* Tax invoice receipt summary */}
                    <div className="p-3 rounded-2xl bg-slate-950 border border-slate-800 space-y-2 text-[11px]">
                      <div className="flex justify-between text-slate-400 border-b border-slate-800 pb-1.5">
                        <span>Invoice #AR-2026-9812</span>
                        <span className="text-emerald-400 font-bold">PAID VIA UPI</span>
                      </div>
                      <div className="flex justify-between text-slate-300">
                        <span>{selectedPreset.name} ({selectedPreset.plate})</span>
                        <span className="font-mono font-bold">₹{totalAmount}</span>
                      </div>
                      <div className="text-[10px] text-slate-500 font-mono">
                        GSTIN: 33AAICA9821M1Z5 • 100% Recycled Wash
                      </div>
                    </div>

                    {/* Action buttons */}
                    <div className="grid grid-cols-2 gap-2">
                      <button
                        onClick={handleShareReceipt}
                        className="py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs flex items-center justify-center gap-1.5 transition-all cursor-pointer"
                      >
                        <Share2 className="w-3.5 h-3.5 text-cyan-400" />
                        <span>Share Receipt</span>
                      </button>

                      <button
                        onClick={handleReset}
                        className="py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-black text-xs flex items-center justify-center gap-1.5 transition-all cursor-pointer"
                      >
                        <RefreshCw className="w-3.5 h-3.5" />
                        <span>Wash Another</span>
                      </button>
                    </div>

                  </div>
                )}

              </div>
            </div>

          </div>

        </div>

        {/* Floating toast notification */}
        {showToast && (
          <div className="fixed bottom-6 right-6 z-50 p-4 rounded-2xl bg-cyan-950 border border-cyan-400 text-cyan-200 text-xs font-bold shadow-2xl animate-fade-in flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-cyan-400" />
            <span>{showToast}</span>
          </div>
        )}

      </div>
    </section>
  );
}