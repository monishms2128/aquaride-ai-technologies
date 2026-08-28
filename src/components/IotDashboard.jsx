import React, { useState } from 'react';
import { TELEMETRY_NODES } from '../data/mockData';
import { Activity, ShieldCheck, Droplets, Zap, AlertTriangle, RefreshCw, Server, CheckCircle2, MapPin, Gauge } from 'lucide-react';

export default function IotDashboard({ onOpenContact }) {
  const [nodes, setNodes] = useState(TELEMETRY_NODES);
  const [selectedNodeId, setSelectedNodeId] = useState('bay_01');

  const selectedNode = nodes.find(n => n.id === selectedNodeId) || nodes[0];

  return (
    <section id="iot-section" className="py-24 px-4 bg-slate-950 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_50%,rgba(6,182,212,0.04),transparent)]" />

      <div className="space-y-10 max-w-7xl mx-auto relative">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-800/80 pb-6 text-left">
          <div>
            <div className="flex items-center gap-2">
              <span className="p-2 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/30">
                <Activity className="w-6 h-6 animate-pulse" />
              </span>
              <div>
                <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                  IoT Fleet Command & Station Telemetry
                </h2>
                <p className="text-xs sm:text-sm text-slate-400 font-medium">
                  Live cloud monitoring of commercial wash bays, consumable fluid tanks, water recycling beds, and pump health.
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            {nodes.map(n => (
              <button
                key={n.id}
                onClick={() => setSelectedNodeId(n.id)}
                className={`px-3.5 py-2 rounded-xl text-xs font-bold font-mono transition-all cursor-pointer ${
                  selectedNodeId === n.id
                    ? 'bg-cyan-500 text-slate-950 border border-cyan-400 shadow-md shadow-cyan-500/20 scale-105'
                    : 'bg-slate-900 text-slate-400 border border-slate-800 hover:text-white'
                }`}
              >
                {n.city} ({n.id.toUpperCase()})
              </button>
            ))}
          </div>
        </div>

        {/* Live Top Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-left">
          
          <div className="glass-panel p-4 rounded-2xl border border-slate-800">
            <div className="flex items-center justify-between text-xs text-slate-400">
              <span>Station Operating Status</span>
              <Server className="w-4 h-4 text-cyan-400" />
            </div>
            <div className="text-lg font-black text-white mt-1.5 flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
              <span>{selectedNode.status}</span>
            </div>
            <div className="text-[11px] font-mono text-slate-400 mt-1">
              {selectedNode.address}
            </div>
          </div>

          <div className="glass-panel p-4 rounded-2xl border border-slate-800">
            <div className="flex items-center justify-between text-xs text-slate-400">
              <span>Washes Completed Today</span>
              <Activity className="w-4 h-4 text-sky-400" />
            </div>
            <div className="text-2xl font-black text-sky-300 mt-1">
              {selectedNode.todayWashes} <span className="text-xs font-normal text-slate-400">Two-Wheelers</span>
            </div>
            <div className="text-[11px] font-mono text-emerald-400 mt-1">
              100% on-time 3-min SLA
            </div>
          </div>

          <div className="glass-panel p-4 rounded-2xl border border-slate-800">
            <div className="flex items-center justify-between text-xs text-slate-400">
              <span>Groundwater Saved Today</span>
              <Droplets className="w-4 h-4 text-cyan-400" />
            </div>
            <div className="text-2xl font-black text-cyan-400 mt-1">
              {selectedNode.todayWaterSavedLiters.toLocaleString('en-IN')} <span className="text-xs font-normal text-slate-400">Liters</span>
            </div>
            <div className="text-[11px] font-mono text-slate-400 mt-1">
              75% closed-loop reclamation
            </div>
          </div>

          <div className="glass-panel p-4 rounded-2xl border border-slate-800">
            <div className="flex items-center justify-between text-xs text-slate-400">
              <span>Optical Turbidity Level</span>
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
            </div>
            <div className="text-2xl font-black text-emerald-400 mt-1">
              {selectedNode.turbidityNtu} <span className="text-xs font-normal text-slate-400">NTU</span>
            </div>
            <div className="text-[11px] font-mono text-emerald-400 mt-1">
              Filter Status: {selectedNode.filterStatus}
            </div>
          </div>

        </div>

        {/* Detailed Telemetry Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 text-left">
          
          {/* Tank Levels */}
          <div className="lg:col-span-7 glass-panel p-6 rounded-3xl border border-slate-800 space-y-4">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <h3 className="text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2">
                <Droplets className="w-4 h-4 text-cyan-400" />
                Chemical & Fluid Tank Telemetry (Ultrasonic Sensors)
              </h3>
              <span className="text-xs font-mono text-emerald-400 font-bold">100 Hz Sync</span>
            </div>

            <div className="space-y-4">
              
              <div className="space-y-1.5">
                <div className="flex justify-between text-xs">
                  <span className="font-semibold text-slate-300">Fresh Demineralized Water Buffer (300 L):</span>
                  <span className="font-mono text-cyan-300 font-bold">{selectedNode.freshTankLevelPct}% (264 L)</span>
                </div>
                <div className="w-full h-2.5 bg-slate-900 rounded-full overflow-hidden border border-slate-800">
                  <div className="h-full bg-cyan-500 transition-all duration-500" style={{ width: `${selectedNode.freshTankLevelPct}%` }} />
                </div>
              </div>

              <div className="space-y-1.5">
                <div className="flex justify-between text-xs">
                  <span className="font-semibold text-slate-300">Recycled Effluent Clarified Reservoir (500 L):</span>
                  <span className="font-mono text-sky-300 font-bold">{selectedNode.recycleTankLevelPct}% (410 L)</span>
                </div>
                <div className="w-full h-2.5 bg-slate-900 rounded-full overflow-hidden border border-slate-800">
                  <div className="h-full bg-sky-500 transition-all duration-500" style={{ width: `${selectedNode.recycleTankLevelPct}%` }} />
                </div>
              </div>

              <div className="space-y-1.5">
                <div className="flex justify-between text-xs">
                  <span className="font-semibold text-slate-300">pH-Neutral Active Snow Foam Concentrate (25 L):</span>
                  <span className="font-mono text-indigo-300 font-bold">{selectedNode.shampooTankLevelPct}% (15.5 L)</span>
                </div>
                <div className="w-full h-2.5 bg-slate-900 rounded-full overflow-hidden border border-slate-800">
                  <div className="h-full bg-indigo-500 transition-all duration-500" style={{ width: `${selectedNode.shampooTankLevelPct}%` }} />
                </div>
              </div>

              <div className="space-y-1.5">
                <div className="flex justify-between text-xs">
                  <span className="font-semibold text-slate-300">Alkaline Chassis & Wheel Degreaser (20 L):</span>
                  <span className="font-mono text-amber-300 font-bold">{selectedNode.degreaserTankLevelPct}% (11.0 L)</span>
                </div>
                <div className="w-full h-2.5 bg-slate-900 rounded-full overflow-hidden border border-slate-800">
                  <div className="h-full bg-amber-500 transition-all duration-500" style={{ width: `${selectedNode.degreaserTankLevelPct}%` }} />
                </div>
              </div>

            </div>
          </div>

          {/* Skid Health */}
          <div className="lg:col-span-5 glass-panel p-6 rounded-3xl border border-slate-800 space-y-4">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <h3 className="text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                Effluent Treatment Skid Diagnostics
              </h3>
              <span className="text-xs font-mono text-emerald-400 font-bold">100% HEALTH</span>
            </div>

            <div className="space-y-3 text-xs">
              <div className="p-3 rounded-2xl bg-slate-900/80 border border-slate-800 flex items-center justify-between">
                <div>
                  <div className="font-bold text-slate-200">Oil-Water Hydrocarbon Separator</div>
                  <div className="text-[11px] text-slate-400">Coalescing Plate Matrix</div>
                </div>
                <span className="px-2 py-0.5 rounded bg-emerald-950 text-emerald-400 border border-emerald-500/30 font-mono font-bold">
                  PASS
                </span>
              </div>

              <div className="p-3 rounded-2xl bg-slate-900/80 border border-slate-800 flex items-center justify-between">
                <div>
                  <div className="font-bold text-slate-200">Dual Quartz Sand Filtration Bed</div>
                  <div className="text-[11px] text-slate-400">Differential Pressure: 2.1 Bar</div>
                </div>
                <span className="px-2 py-0.5 rounded bg-emerald-950 text-emerald-400 border border-emerald-500/30 font-mono font-bold">
                  OPTIMAL
                </span>
              </div>

              <div className="p-3 rounded-2xl bg-slate-900/80 border border-slate-800 flex items-center justify-between">
                <div>
                  <div className="font-bold text-slate-200">Activated Carbon Absorption Vessel</div>
                  <div className="text-[11px] text-slate-400">Surfactant Adsorption: 88% Life</div>
                </div>
                <span className="px-2 py-0.5 rounded bg-emerald-950 text-emerald-400 border border-emerald-500/30 font-mono font-bold">
                  GOOD
                </span>
              </div>

              <div className="p-3 rounded-2xl bg-slate-900/80 border border-slate-800 flex items-center justify-between">
                <div>
                  <div className="font-bold text-slate-200">Triplex High-Pressure Pump Unit</div>
                  <div className="text-[11px] text-slate-400">Health Index: {selectedNode.pumpHealthPct}%</div>
                </div>
                <span className="px-2 py-0.5 rounded bg-cyan-950 text-cyan-400 border border-cyan-500/30 font-mono font-bold">
                  CALIBRATED
                </span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}