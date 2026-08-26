import React, { useMemo } from 'react';
import { ShieldCheck, Crosshair, Droplets, Wind, Sparkles } from 'lucide-react';

export default function BikeCanvas({ 
  vehicle, 
  dirtLevel, 
  isScanning, 
  isWashing, 
  activeStageIndex, 
  currentPressure,
  cleanedProgress = 0
}) {
  const visualDirtOpacity = Math.max(0, (dirtLevel / 100) * (1 - cleanedProgress / 100));

  const isPreRinsing = isWashing && (activeStageIndex === 1);
  const isFoaming = isWashing && (activeStageIndex === 2);
  const isBrushing = isWashing && (activeStageIndex === 3);
  const isFinalRinsing = isWashing && (activeStageIndex === 4);
  const isAirDrying = isWashing && (activeStageIndex === 5);
  const isAnyWaterActive = isPreRinsing || isFinalRinsing;

  const dirtParticles = useMemo(() => {
    const particles = [];
    const count = 35;
    for (let i = 0; i < count; i++) {
      const x = 15 + Math.random() * 70;
      const y = 35 + Math.random() * 50;
      const size = 3 + Math.random() * 8;
      particles.push({ id: i, x, y, size });
    }
    return particles;
  }, [vehicle.id]);

  return (
    <div className="relative w-full h-[420px] rounded-3xl bg-gradient-to-b from-slate-900 via-slate-950 to-slate-950 border border-cyan-900/40 overflow-hidden shadow-2xl shadow-cyan-950/30 flex items-center justify-center p-4 select-none">
      
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#082f4915_1px,transparent_1px),linear-gradient(to_bottom,#082f4915_1px,transparent_1px)] bg-[size:28px_28px] opacity-60" />
      
      <div className="absolute top-3 inset-x-8 h-2 bg-slate-800 rounded-full border border-slate-700/80 shadow-inner flex items-center justify-between px-6">
        <div className="w-12 h-4 bg-cyan-500/20 border border-cyan-400/50 rounded-sm -top-1" />
        <div className={`h-3 w-16 rounded-md transition-all duration-500 ${isWashing ? 'bg-cyan-500 shadow-lg shadow-cyan-400/50 animate-pulse' : 'bg-slate-700'}`} />
        <div className="w-12 h-4 bg-cyan-500/20 border border-cyan-400/50 rounded-sm -top-1" />
      </div>

      <div className="absolute top-6 inset-x-12 flex justify-around pointer-events-none">
        {[1, 2, 3, 4, 5].map((nozzle) => (
          <div key={nozzle} className="flex flex-col items-center">
            <div className={`w-3 h-4 rounded-b-sm border transition-colors ${isAnyWaterActive ? 'bg-cyan-400 border-cyan-300 shadow-md shadow-cyan-400/80' : isFoaming ? 'bg-blue-300 border-white' : 'bg-slate-700 border-slate-600'}`} />
            {isAnyWaterActive && (
              <div 
                className="w-16 h-56 bg-gradient-to-b from-cyan-400/50 via-sky-300/20 to-transparent blur-[1px] transform origin-top animate-pulse"
                style={{ clipPath: 'polygon(45% 0%, 55% 0%, 100% 100%, 0% 100%)' }}
              />
            )}
            {isFoaming && (
              <div 
                className="w-20 h-56 bg-gradient-to-b from-white/70 via-blue-100/40 to-transparent blur-[2px] transform origin-top animate-pulse"
                style={{ clipPath: 'polygon(40% 0%, 60% 0%, 100% 100%, 0% 100%)' }}
              />
            )}
          </div>
        ))}
      </div>

      {isAnyWaterActive && (
        <div className="absolute bottom-10 inset-x-20 flex justify-around pointer-events-none z-20">
          {[1, 2, 3, 4].map((nozzle) => (
            <div 
              key={nozzle}
              className="w-12 h-36 bg-gradient-to-t from-cyan-400/60 via-sky-300/25 to-transparent blur-[1px] transform origin-bottom animate-pulse"
              style={{ clipPath: 'polygon(0% 0%, 100% 0%, 55% 100%, 45% 100%)' }}
            />
          ))}
        </div>
      )}

      {(isScanning || (isWashing && activeStageIndex === 0)) && (
        <div className="absolute inset-x-6 z-30 pointer-events-none animate-scan">
          <div className="h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent shadow-[0_0_15px_#22d3ee]" />
          <div className="h-8 bg-gradient-to-b from-cyan-500/20 to-transparent" />
        </div>
      )}

      <div className="relative z-10 w-[85%] max-w-[540px] h-[260px] flex items-center justify-center">
        <svg viewBox="0 0 500 300" className="w-full h-full drop-shadow-[0_10px_20px_rgba(0,0,0,0.8)]">
          <defs>
            <linearGradient id="metalGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#94a3b8" />
              <stop offset="50%" stopColor="#475569" />
              <stop offset="100%" stopColor="#1e293b" />
            </linearGradient>
            <linearGradient id="bodyGradCommuter" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#0284c7" />
              <stop offset="100%" stopColor="#082f49" />
            </linearGradient>
            <linearGradient id="bodyGradScooter" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#059669" />
              <stop offset="100%" stopColor="#064e3b" />
            </linearGradient>
            <linearGradient id="bodyGradSuperbike" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ea580c" />
              <stop offset="100%" stopColor="#7c2d12" />
            </linearGradient>
            <linearGradient id="bodyGradOffroad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#eab308" />
              <stop offset="100%" stopColor="#713f12" />
            </linearGradient>
          </defs>

          <rect x="40" y="260" width="420" height="8" rx="4" fill="#334155" />
          <rect x="80" y="248" width="50" height="14" rx="3" fill="#0284c7" opacity="0.4" />
          <rect x="360" y="248" width="50" height="14" rx="3" fill="#0284c7" opacity="0.4" />

          {/* FRONT WHEEL */}
          <g>
            <circle cx="100" cy="210" r="50" fill="#0f172a" stroke="#334155" strokeWidth="12" />
            <circle cx="100" cy="210" r="42" fill="none" stroke="#64748b" strokeWidth="2" strokeDasharray="6 4" />
            <circle cx="100" cy="210" r="18" fill="url(#metalGrad)" stroke="#94a3b8" strokeWidth="3" />
            <line x1="100" y1="170" x2="100" y2="250" stroke="#cbd5e1" strokeWidth="3" />
            <line x1="60" y1="210" x2="140" y2="210" stroke="#cbd5e1" strokeWidth="3" />
            <line x1="72" y1="182" x2="128" y2="238" stroke="#cbd5e1" strokeWidth="3" />
            <line x1="72" y1="238" x2="128" y2="182" stroke="#cbd5e1" strokeWidth="3" />
            <circle cx="100" cy="210" r="26" fill="none" stroke="#94a3b8" strokeWidth="3" strokeDasharray="3 2" />
          </g>

          {/* REAR WHEEL */}
          <g>
            <circle cx="390" cy="210" r="50" fill="#0f172a" stroke="#334155" strokeWidth="12" />
            <circle cx="390" cy="210" r="42" fill="none" stroke="#64748b" strokeWidth="2" strokeDasharray="6 4" />
            <circle cx="390" cy="210" r="20" fill="url(#metalGrad)" stroke="#94a3b8" strokeWidth="3" />
            <line x1="390" y1="170" x2="390" y2="250" stroke="#cbd5e1" strokeWidth="3" />
            <line x1="350" y1="210" x2="430" y2="210" stroke="#cbd5e1" strokeWidth="3" />
            <line x1="362" y1="182" x2="418" y2="238" stroke="#cbd5e1" strokeWidth="3" />
            <line x1="362" y1="238" x2="418" y2="182" stroke="#cbd5e1" strokeWidth="3" />
            <circle cx="390" cy="210" r="28" fill="none" stroke="#f59e0b" strokeWidth="4" strokeDasharray="4 2" />
          </g>

          {/* Suspension & Frame */}
          <line x1="100" y1="210" x2="160" y2="105" stroke="#94a3b8" strokeWidth="10" strokeLinecap="round" />
          <line x1="105" y1="200" x2="155" y2="110" stroke="#e2e8f0" strokeWidth="3" />
          <line x1="390" y1="210" x2="270" y2="195" stroke="#475569" strokeWidth="12" strokeLinecap="round" />
          <line x1="375" y1="205" x2="270" y2="195" stroke="#f59e0b" strokeWidth="4" />

          {/* Engine Block */}
          <rect x="210" y="170" width="85" height="55" rx="10" fill="#1e293b" stroke="#64748b" strokeWidth="4" />
          <circle cx="235" cy="195" r="16" fill="#334155" stroke="#94a3b8" strokeWidth="2" />
          <line x1="260" y1="178" x2="288" y2="178" stroke="#94a3b8" strokeWidth="2" />
          <line x1="260" y1="186" x2="288" y2="186" stroke="#94a3b8" strokeWidth="2" />
          <line x1="260" y1="194" x2="288" y2="194" stroke="#94a3b8" strokeWidth="2" />

          {/* Exhaust */}
          <path d="M 270 205 Q 310 235 380 215" fill="none" stroke="#64748b" strokeWidth="10" strokeLinecap="round" />
          <rect x="330" y="200" width="75" height="16" rx="6" fill="#94a3b8" stroke="#cbd5e1" strokeWidth="2" transform="rotate(-10 330 200)" />

          {/* Vehicle Body Geometry */}
          {vehicle.id === 'commuter' && (
            <g>
              <path d="M 160 110 Q 200 80 250 110 L 350 125 Q 365 145 350 160 L 260 160 Z" fill="url(#bodyGradCommuter)" stroke="#38bdf8" strokeWidth="3" />
              <path d="M 235 110 Q 300 115 360 128 Q 365 145 330 148 L 245 130 Z" fill="#0f172a" stroke="#334155" strokeWidth="2" />
              <path d="M 65 185 Q 95 150 135 185" fill="none" stroke="#0284c7" strokeWidth="8" strokeLinecap="round" />
              <line x1="160" y1="105" x2="148" y2="70" stroke="#94a3b8" strokeWidth="7" strokeLinecap="round" />
              <rect x="135" y="65" width="26" height="8" rx="3" fill="#cbd5e1" />
              <path d="M 130 90 Q 145 75 160 90 Z" fill="#e0f2fe" stroke="#38bdf8" strokeWidth="2" />
            </g>
          )}

          {vehicle.id === 'scooter' && (
            <g>
              <path d="M 120 180 Q 140 100 160 80 L 180 85 Q 160 130 150 200 Z" fill="url(#bodyGradScooter)" stroke="#34d399" strokeWidth="3" />
              <rect x="150" y="195" width="100" height="20" rx="4" fill="#0f172a" stroke="#334155" strokeWidth="3" />
              <path d="M 240 195 Q 260 130 360 135 Q 380 160 365 200 Z" fill="url(#bodyGradScooter)" stroke="#34d399" strokeWidth="3" />
              <path d="M 210 140 Q 280 135 345 142 Q 350 160 310 162 L 210 155 Z" fill="#0f172a" stroke="#334155" strokeWidth="2" />
              <rect x="145" y="68" width="30" height="16" rx="6" fill="#059669" stroke="#34d399" strokeWidth="2" />
              <circle cx="152" cy="76" r="5" fill="#fef08a" />
            </g>
          )}

          {vehicle.id === 'superbike' && (
            <g>
              <path d="M 125 105 L 180 75 Q 225 70 250 115 L 290 145 L 250 190 L 170 170 L 130 115 Z" fill="url(#bodyGradSuperbike)" stroke="#fb923c" strokeWidth="3" />
              <path d="M 250 115 L 350 100 L 375 110 L 320 150 Z" fill="url(#bodyGradSuperbike)" stroke="#fb923c" strokeWidth="3" />
              <path d="M 240 115 Q 275 118 305 125 Q 305 140 270 140 Z" fill="#0f172a" stroke="#475569" strokeWidth="2" />
              <path d="M 180 205 L 280 220 L 290 200 L 200 195 Z" fill="#1e293b" stroke="#fb923c" strokeWidth="2" />
              <path d="M 130 100 Q 145 65 170 75" fill="none" stroke="#38bdf8" strokeWidth="4" />
            </g>
          )}

          {vehicle.id === 'offroad' && (
            <g>
              <path d="M 90 130 L 160 110 Q 210 75 250 110 L 360 120 L 330 155 L 220 160 Z" fill="url(#bodyGradOffroad)" stroke="#facc15" strokeWidth="3" />
              <path d="M 70 145 L 130 135 L 140 150 Z" fill="#ca8a04" stroke="#facc15" strokeWidth="2" />
              <rect x="205" y="210" width="85" height="15" rx="3" fill="#cbd5e1" stroke="#94a3b8" strokeWidth="2" />
              <path d="M 230 110 Q 300 112 360 122 L 350 140 L 230 130 Z" fill="#0f172a" stroke="#475569" strokeWidth="2" />
              <line x1="150" y1="95" x2="140" y2="45" stroke="#93c5fd" strokeWidth="4" strokeLinecap="round" />
            </g>
          )}

          {/* DIRT OVERLAY */}
          {dirtParticles.map((d) => (
            <circle
              key={d.id}
              cx={d.x * 5}
              cy={d.y * 3}
              r={d.size}
              fill="#78350f"
              opacity={visualDirtOpacity * 0.85}
              className="transition-opacity duration-300 pointer-events-none"
            />
          ))}

          {/* SENSITIVE MASKING ZONES */}
          {(isScanning || isWashing) && vehicle.sensitiveZones?.map((zone) => (
            <g key={zone.id} className="transition-all duration-300 animate-pulse">
              <circle
                cx={zone.x * 5}
                cy={zone.y * 3}
                r={zone.radius * 3}
                fill="none"
                stroke="#10b981"
                strokeWidth="2.5"
                strokeDasharray="4 3"
                opacity="0.9"
              />
              <circle
                cx={zone.x * 5}
                cy={zone.y * 3}
                r={zone.radius * 3}
                fill="#10b981"
                opacity="0.12"
              />
            </g>
          ))}

          {/* HEAVY DIRT MUD BLAST TARGET RETICLES */}
          {(isScanning || isWashing) && vehicle.heavyDirtZones?.map((hZone) => (
            <g key={hZone.id} className="transition-all duration-300">
              <circle
                cx={hZone.x * 5}
                cy={hZone.y * 3}
                r="18"
                fill="none"
                stroke="#ef4444"
                strokeWidth="2"
                opacity="0.85"
              />
              <line x1={hZone.x * 5 - 22} y1={hZone.y * 3} x2={hZone.x * 5 + 22} y2={hZone.y * 3} stroke="#ef4444" strokeWidth="1.5" />
              <line x1={hZone.x * 5} y1={hZone.y * 3 - 22} x2={hZone.x * 5} y2={hZone.y * 3 + 22} stroke="#ef4444" strokeWidth="1.5" />
            </g>
          ))}

        </svg>

        {isBrushing && (
          <div className="absolute inset-0 pointer-events-none flex items-center justify-between px-6 z-25">
            <div className="w-24 h-48 rounded-full border-4 border-cyan-400/80 bg-gradient-to-r from-blue-500/30 to-cyan-400/30 backdrop-blur-xs flex items-center justify-center animate-spin">
              <div className="w-full h-1 bg-cyan-300/80" />
            </div>
            <div className="w-24 h-48 rounded-full border-4 border-cyan-400/80 bg-gradient-to-r from-blue-500/30 to-cyan-400/30 backdrop-blur-xs flex items-center justify-center animate-spin">
              <div className="w-full h-1 bg-cyan-300/80" />
            </div>
          </div>
        )}

        {isAirDrying && (
          <div className="absolute inset-0 pointer-events-none overflow-hidden z-25 flex flex-col justify-around">
            {[1, 2, 3, 4, 5].map((w) => (
              <div 
                key={w}
                className="h-1 bg-gradient-to-r from-transparent via-cyan-300 to-transparent blur-[1px] opacity-80"
                style={{
                  transform: `translateX(${w % 2 === 0 ? '-30%' : '30%'})`,
                  animation: 'pulseSlow 0.8s ease-in-out infinite'
                }}
              />
            ))}
          </div>
        )}

      </div>

      <div className="absolute top-4 left-4 z-30 flex flex-col gap-1.5 pointer-events-none">
        <div className="px-3 py-1 rounded-lg bg-slate-900/90 border border-slate-700/80 text-[11px] font-mono text-slate-300 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
          <span>Profile: <strong className="text-white">{vehicle.name}</strong></span>
        </div>
        <div className="px-3 py-1 rounded-lg bg-slate-900/90 border border-slate-700/80 text-[11px] font-mono text-slate-300">
          Weight: <strong className="text-cyan-400">{vehicle.weightKg} kg</strong> (Center Stand Locked)
        </div>
      </div>

      <div className="absolute top-4 right-4 z-30 flex items-center gap-2 pointer-events-none">
        {isScanning ? (
          <div className="px-3 py-1 rounded-lg bg-indigo-950/90 border border-indigo-500/50 text-xs font-mono text-indigo-300 flex items-center gap-2">
            <Crosshair className="w-3.5 h-3.5 animate-spin" />
            <span>AI Neural Mapping...</span>
          </div>
        ) : isWashing ? (
          <div className="px-3 py-1.5 rounded-lg bg-cyan-950/90 border border-cyan-500/50 text-xs font-mono text-cyan-300 flex items-center gap-2 shadow-lg shadow-cyan-500/20">
            <Droplets className="w-4 h-4 text-cyan-400 animate-bounce" />
            <span>Active Pressure: <strong>{currentPressure} Bar</strong></span>
          </div>
        ) : (
          <div className="px-3 py-1 rounded-lg bg-slate-900/80 border border-slate-800 text-xs font-mono text-emerald-400 flex items-center gap-2">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Bay Ready</span>
          </div>
        )}
      </div>

      <div className="absolute bottom-3 inset-x-4 z-30 flex items-center justify-between px-3 py-1.5 rounded-xl bg-slate-950/80 border border-slate-800 text-[11px] font-mono text-slate-400">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full border border-emerald-400 bg-emerald-500/30" />
            <span>Sensitive Zone (&le; 35 Bar Mask)</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full border border-red-500 bg-red-500/30" />
            <span>Mud Blast Zone (&ge; 100 Bar)</span>
          </div>
        </div>
        <div className="hidden sm:flex items-center gap-1.5 text-cyan-300 font-bold">
          <span>Turbidity Sensor: 7.8 NTU (Clean Recirculation)</span>
        </div>
      </div>

    </div>
  );
}