import React, { useState } from 'react';
import { 
  Building2, 
  Fuel, 
  Bike, 
  Truck, 
  CheckCircle2, 
  ArrowRight, 
  ShieldCheck, 
  Sparkles
} from 'lucide-react';

const SOLUTIONS = [
  {
    id: 'fuel',
    icon: Fuel,
    title: 'Petrol Pumps & Fuel Forecourts',
    subtitle: 'HPCL / BPCL / IndianOil Stations',
    tagline: 'Monetize idle station space with automated 3-minute bike washes',
    color: 'from-amber-500/20 to-orange-500/10',
    border: 'border-amber-500/40',
    textGradient: 'from-amber-400 to-orange-400',
    accentText: 'text-amber-400',
    metrics: [
      { label: 'Daily Throughput', value: '50–80 Bikes' },
      { label: 'Capex Payback', value: '8–11 Months' },
      { label: 'Water Footprint', value: '-75% Potable' },
    ],
    benefits: [
      'Turn 150 sq.ft of idle driveway into high-margin recurring income',
      'Zero traffic congestion with fast 3-minute automated turnaround',
      'Full closed-loop effluent treatment compliant with PCB environmental norms',
      'Attendant-lite operation with QR code automated UPI billing'
    ],
    ctaText: 'Explore Fuel Forecourt Partnership'
  },
  {
    id: 'dealership',
    icon: Building2,
    title: 'Auto Dealerships & Service Centers',
    subtitle: 'Honda / TVS / Hero / Bajaj / KTM Hubs',
    tagline: 'Eliminate washing backlogs and slash service delivery turnaround',
    color: 'from-cyan-500/20 to-blue-500/10',
    border: 'border-cyan-500/40',
    textGradient: 'from-cyan-400 to-blue-400',
    accentText: 'text-cyan-400',
    metrics: [
      { label: 'Turnaround Time', value: '3 Mins / Bike' },
      { label: 'Labor Reduction', value: '60% Less Staff' },
      { label: 'Electronics Safety', value: '100% Safe (<35 Bar)' },
    ],
    benefits: [
      'De-bottleneck service washing bays—wash up to 20 bikes per hour',
      'Zero waterlogged digital meter consoles, ECUs, or delicate wire harnesses',
      'Consistent showroom-grade wash quality without swirl marks or human fatigue',
      'Integration with Dealership DMS for automated service invoice billing'
    ],
    ctaText: 'Deploy in Dealership Service Bay'
  },
  {
    id: 'fleets',
    icon: Truck,
    title: 'EV & Quick-Commerce Fleets',
    subtitle: 'Swiggy / Zomato / Rapido / Zepto Fleets',
    tagline: 'Keep commercial fleets clean, hygienic, and branded at scale',
    color: 'from-emerald-500/20 to-teal-500/10',
    border: 'border-emerald-500/40',
    textGradient: 'from-emerald-400 to-teal-400',
    accentText: 'text-emerald-400',
    metrics: [
      { label: 'Batch Wash Rate', value: '120 Bikes/Shift' },
      { label: 'Corporate Billing', value: 'Automated RFID' },
      { label: 'ESG Reporting', value: 'Water Audit Ready' },
    ],
    benefits: [
      'Automated shift-change batch washing for delivery riders',
      'Custom EV battery compartment moisture purge with heated air blowers',
      'Corporate dashboard with live RFID fleet utilization tracking',
      'Digital ESG certificates documenting groundwater conservation metrics'
    ],
    ctaText: 'Setup Commercial Fleet Contract'
  },
  {
    id: 'franchise',
    icon: Bike,
    title: 'Turnkey Commercial Franchises',
    subtitle: 'Modular Plug-and-Play Wash Bays',
    tagline: 'High-margin entrepreneurship with autonomous cyber-physical bays',
    color: 'from-purple-500/20 to-indigo-500/10',
    border: 'border-purple-500/40',
    textGradient: 'from-purple-400 to-indigo-400',
    accentText: 'text-purple-400',
    metrics: [
      { label: 'Gross Margin', value: '55–65%' },
      { label: 'Deployment Time', value: '14 Days' },
      { label: 'IoT Monitoring', value: '24/7 Cloud Hub' },
    ],
    benefits: [
      'Modular prefabricated container bay shipped ready-to-plug',
      'Integrated water recycling skid, high-pressure pump, and AI cameras',
      'Automated customer mobile app & payment collection direct to bank',
      'End-to-end AMC warranty, spare parts logistics, and remote IoT support'
    ],
    ctaText: 'Inquire About Franchise Bay'
  }
];

export default function B2bSolutions({ onOpenContact }) {
  const [activeTab, setActiveTab] = useState('fuel');
  const activeSolution = SOLUTIONS.find(s => s.id === activeTab) || SOLUTIONS[0];

  return (
    <section id="solutions" className="py-24 px-4 bg-slate-950 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_50%,rgba(14,165,233,0.05),transparent)]" />

      <div className="max-w-7xl mx-auto relative space-y-16">
        
        {/* Section Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-cyan-400 bg-cyan-500/10 px-4 py-1.5 rounded-full border border-cyan-500/20">
            Commercial & B2B Solutions
          </span>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Engineered for <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-400 bg-clip-text text-transparent">Scale & Profitability</span>
          </h2>
          
          <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
            Whether you operate a high-volume fuel retail forecourt, a busy automobile dealership, or an urban commercial fleet, AquaRide AI delivers unmatched throughput, reliability, and water conservation.
          </p>
        </div>

        {/* Tab Buttons */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 max-w-5xl mx-auto">
          {SOLUTIONS.map((sol) => {
            const isSelected = activeTab === sol.id;
            const Icon = sol.icon;
            return (
              <button
                key={sol.id}
                onClick={() => setActiveTab(sol.id)}
                className={`p-4 rounded-2xl border text-left transition-all duration-200 cursor-pointer ${
                  isSelected
                    ? `bg-slate-900 border-cyan-400 shadow-lg shadow-cyan-500/15 scale-[1.02]`
                    : `bg-slate-900/50 border-slate-800 hover:border-slate-700 opacity-75 hover:opacity-100`
                }`}
              >
                <div className="flex items-center gap-2 mb-2">
                  <div className={`p-2 rounded-xl bg-slate-950 border border-slate-800 ${sol.accentText}`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  {isSelected && (
                    <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-cyan-500/20 text-cyan-300 border border-cyan-500/40">
                      ACTIVE
                    </span>
                  )}
                </div>
                <div className="text-sm font-black text-white leading-tight">{sol.title}</div>
                <div className="text-[11px] text-slate-400 mt-1 truncate">{sol.subtitle}</div>
              </button>
            );
          })}
        </div>

        {/* Detailed Solution Card */}
        <div className={`p-8 sm:p-10 rounded-3xl bg-gradient-to-b ${activeSolution.color} border ${activeSolution.border} backdrop-blur-xl shadow-2xl transition-all duration-300 text-left`}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left 7 cols: Content & Benefits */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <div className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-slate-300 bg-slate-950/60 px-3 py-1 rounded-full border border-slate-800 mb-3">
                  <span>{activeSolution.subtitle}</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-black text-white leading-tight">
                  {activeSolution.tagline}
                </h3>
              </div>

              {/* Benefits list */}
              <div className="space-y-3 pt-2">
                {activeSolution.benefits.map((benefit, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-sm text-slate-200">
                    <CheckCircle2 className={`w-5 h-5 ${activeSolution.accentText} shrink-0 mt-0.5`} />
                    <span className="leading-relaxed">{benefit}</span>
                  </div>
                ))}
              </div>

              {/* Action Button */}
              <div className="pt-2">
                <button
                  onClick={() => onOpenContact(activeSolution.title)}
                  className="flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-black text-sm transition-all duration-200 shadow-xl shadow-cyan-500/25 cursor-pointer hover:scale-105"
                >
                  <span>{activeSolution.ctaText}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Right 5 cols: Metrics & Highlights */}
            <div className="lg:col-span-5 space-y-4">
              <div className="p-6 rounded-3xl bg-slate-950/90 border border-slate-800 space-y-6">
                <div className="text-xs font-mono uppercase tracking-wider text-slate-400 font-bold border-b border-slate-800 pb-3 flex items-center justify-between">
                  <span>Performance Key Metrics</span>
                  <Sparkles className="w-4 h-4 text-cyan-400" />
                </div>

                <div className="space-y-4">
                  {activeSolution.metrics.map((m, mIdx) => (
                    <div key={mIdx} className="p-3.5 rounded-2xl bg-slate-900/80 border border-slate-800 flex items-center justify-between">
                      <span className="text-xs text-slate-300 font-medium">{m.label}</span>
                      <span className={`text-lg font-black font-mono ${activeSolution.accentText}`}>
                        {m.value}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="p-3 rounded-2xl bg-cyan-950/40 border border-cyan-500/30 text-xs text-slate-300 flex items-center gap-2.5">
                  <ShieldCheck className="w-5 h-5 text-cyan-400 shrink-0" />
                  <span>100% Turnkey Delivery with Factory Commissioning & AMC</span>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
