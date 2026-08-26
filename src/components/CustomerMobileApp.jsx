import React, { useState } from 'react';
import { Smartphone, QrCode, Sparkles, Droplets, CheckCircle2, Clock, Shield, ArrowRight, Star } from 'lucide-react';

export default function CustomerMobileApp() {
  const [selectedPkg, setSelectedPkg] = useState('standard');
  const [hasChainLube, setHasChainLube] = useState(true);
  const [hasCeramicWax, setHasCeramicWax] = useState(false);
  const [isBooked, setIsBooked] = useState(false);
  const [washProgress, setWashProgress] = useState(65);

  const packages = [
    { id: 'eco', name: 'Express Quick Wash', price: 60, time: '2 Mins', desc: 'Pre-rinse + Foam + Spot-free dry', tag: 'Fast' },
    { id: 'standard', name: 'Pro Deep Foam Clean', price: 90, time: '3 Mins', desc: 'AI contour scrub + Wheel degreaser + Air dry', tag: 'Most Popular' },
    { id: 'heavy', name: 'Monsoon Mud Blast', price: 150, time: '4.5 Mins', desc: '120 Bar underbody mud blast + Heavy degreaser', tag: 'Extreme' },
  ];

  const currentPkg = packages.find(p => p.id === selectedPkg);
  const totalAmount = currentPkg.price + (hasChainLube ? 30 : 0) + (hasCeramicWax ? 40 : 0);

  return (
    <div className="space-y-6 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-800 pb-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="p-2 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/30">
              <Smartphone className="w-6 h-6" />
            </span>
            <div>
              <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                Customer Mobile App & QR Booking Flow
              </h2>
              <p className="text-xs sm:text-sm text-slate-400 font-medium">
                Seamless rider experience: Scan bay QR code, select customized wash package, and track live status with CCTV feed mockup.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center justify-center">
        
        <div className="lg:col-span-6 space-y-5 text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-500/40 text-cyan-300 text-xs font-bold font-mono">
            <span>Rider-Centric UI / Progressive Web App</span>
          </div>

          <h3 className="text-2xl sm:text-3xl font-black text-white leading-tight">
            Zero Waiting in Line. <br />
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Scan, Wash & Ride in 3 Minutes.
            </span>
          </h3>

          <p className="text-sm text-slate-300 leading-relaxed">
            In traditional manual washing, riders face 20 to 40 minutes of weekend queue delays with zero transparency. 
            AquaRide PWA allows two-wheeler owners to scan the QR at the wash bay or book from home, pay via UPI, and monitor cycle telemetry live on their phone.
          </p>

          <div className="space-y-3 pt-2">
            <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-slate-900/60 border border-slate-800">
              <QrCode className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
              <div>
                <h4 className="text-xs font-bold text-white">Instant QR Docking & Auto-Billing</h4>
                <p className="text-[11px] text-slate-400 mt-0.5">
                  Rider docks vehicle on the wheel guides, scans the bay QR code, and AI detects vehicle type automatically.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-slate-900/60 border border-slate-800">
              <Shield className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
              <div>
                <h4 className="text-xs font-bold text-white">Water Savings Green Certificate</h4>
                <p className="text-[11px] text-slate-400 mt-0.5">
                  Every completed wash generates a digital eco-receipt showing exact liters of groundwater saved.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-6 flex justify-center">
          <div className="relative w-[340px] h-[680px] bg-slate-950 rounded-[48px] border-4 border-slate-800 shadow-[0_0_50px_rgba(6,182,212,0.25)] p-3.5 flex flex-col justify-between overflow-hidden">
            
            <div className="absolute top-4 left-1/2 -translate-x-1/2 w-28 h-4 bg-slate-900 rounded-full z-40 border border-slate-800 flex items-center justify-center">
              <div className="w-2.5 h-2.5 rounded-full bg-slate-950 mr-2" />
              <div className="w-2 h-2 rounded-full bg-cyan-500/60 animate-pulse" />
            </div>

            <div className="w-full h-full bg-slate-900 rounded-[36px] overflow-y-auto p-4 pt-7 text-left space-y-4 no-scrollbar">
              
              <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                <div className="flex items-center gap-1.5">
                  <Droplets className="w-4 h-4 text-cyan-400" />
                  <span className="font-extrabold text-xs text-white">AquaRide Pay & Wash</span>
                </div>
                <span className="text-[10px] font-mono font-bold text-emerald-400 bg-emerald-950/80 px-2 py-0.5 rounded-full border border-emerald-500/30">
                  Bay 01 Ready
                </span>
              </div>

              {!isBooked ? (
                <>
                  <div className="p-3 rounded-2xl bg-gradient-to-r from-cyan-950/80 to-blue-950/80 border border-cyan-500/30">
                    <div className="text-[10px] text-cyan-300 font-mono uppercase">Vehicle AI Identification</div>
                    <div className="text-xs font-black text-white mt-0.5">Honda CB350 / Sports Commuter</div>
                    <div className="text-[10px] text-slate-400 font-mono mt-1">Weight: 181 kg • License: TN 21 BK 4902</div>
                  </div>

                  <div className="space-y-2">
                    <span className="text-[11px] font-bold text-slate-300 block uppercase tracking-wider">
                      Select Wash Package:
                    </span>
                    
                    {packages.map((pkg) => {
                      const isSelected = selectedPkg === pkg.id;
                      return (
                        <div
                          key={pkg.id}
                          onClick={() => setSelectedPkg(pkg.id)}
                          className={`p-2.5 rounded-2xl border transition-all cursor-pointer ${
                            isSelected
                              ? 'bg-cyan-950/80 border-cyan-400 shadow-md shadow-cyan-500/20'
                              : 'bg-slate-950/60 border-slate-800'
                          }`}
                        >
                          <div className="flex items-center justify-between">
                            <span className="text-xs font-bold text-white">{pkg.name}</span>
                            <span className="text-xs font-black text-cyan-300 font-mono">INR {pkg.price}</span>
                          </div>
                          <div className="text-[10px] text-slate-400 mt-0.5">{pkg.desc}</div>
                          <div className="flex items-center justify-between text-[10px] font-mono text-slate-400 mt-1">
                            <span>Duration: {pkg.time}</span>
                            <span className="text-emerald-400">{pkg.tag}</span>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  <div className="space-y-2">
                    <span className="text-[11px] font-bold text-slate-300 block uppercase tracking-wider">
                      Add-on Enhancements:
                    </span>

                    <label className="flex items-center justify-between p-2 rounded-xl bg-slate-950/60 border border-slate-800 text-xs cursor-pointer">
                      <span className="text-slate-300 font-medium">Chain Degrease & Teflon Lube</span>
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-cyan-400 font-bold">+INR 30</span>
                        <input
                          type="checkbox"
                          checked={hasChainLube}
                          onChange={(e) => setHasChainLube(e.target.checked)}
                          className="accent-cyan-400"
                        />
                      </div>
                    </label>

                    <label className="flex items-center justify-between p-2 rounded-xl bg-slate-950/60 border border-slate-800 text-xs cursor-pointer">
                      <span className="text-slate-300 font-medium">Hydrophobic Ceramic Gloss</span>
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-cyan-400 font-bold">+INR 40</span>
                        <input
                          type="checkbox"
                          checked={hasCeramicWax}
                          onChange={(e) => setHasCeramicWax(e.target.checked)}
                          className="accent-cyan-400"
                        />
                      </div>
                    </label>
                  </div>

                  <button
                    onClick={() => setIsBooked(true)}
                    className="w-full py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-black text-xs transition-all shadow-lg shadow-cyan-500/20 cursor-pointer flex items-center justify-center gap-2"
                  >
                    <span>PAY INR {totalAmount} VIA UPI & START</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </>
              ) : (
                <div className="space-y-4 text-center">
                  <div className="p-3 rounded-2xl bg-cyan-950/80 border border-cyan-500/40 text-left">
                    <div className="flex items-center justify-between text-[10px] text-cyan-300 font-mono">
                      <span>LIVE BAY 01 CCTV</span>
                      <span className="flex items-center gap-1 text-red-400 font-bold">
                        <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-ping" />
                        REC
                      </span>
                    </div>
                    <div className="w-full h-24 bg-slate-950 rounded-xl mt-1.5 border border-slate-800 flex items-center justify-center relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-t from-cyan-900/30 via-transparent to-transparent" />
                      <Droplets className="w-8 h-8 text-cyan-400 animate-bounce" />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <div className="text-xs font-black text-white">Active Foam & Oscillating Scrub</div>
                    <div className="text-[11px] font-mono text-cyan-300">Estimated completion: 45 seconds</div>
                  </div>

                  <div className="w-full h-2 bg-slate-950 rounded-full overflow-hidden border border-slate-800">
                    <div className="h-full bg-cyan-400" style={{ width: `${washProgress}%` }} />
                  </div>

                  <div className="p-3 rounded-2xl bg-emerald-950/40 border border-emerald-500/30 text-left space-y-1">
                    <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                      <span>Eco-Impact Counter</span>
                    </div>
                    <div className="text-[11px] text-slate-300">
                      You are saving <strong>66 Liters</strong> of clean potable water on this wash.
                    </div>
                  </div>

                  <button
                    onClick={() => setIsBooked(false)}
                    className="text-[11px] text-slate-400 hover:text-slate-200 underline font-mono cursor-pointer"
                  >
                    Reset Mobile Mockup
                  </button>
                </div>
              )}

            </div>
          </div>
        </div>

      </div>

    </div>
  );
}