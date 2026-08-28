import React, { useState } from 'react';
import { Calculator, TrendingUp, Droplets, Clock, CheckCircle2, ArrowRight, Sparkles, ShieldCheck } from 'lucide-react';

export default function RoiCalculator({ onOpenContact }) {
  const [dailyBikes, setDailyBikes] = useState(25);
  const [washPrice, setWashPrice] = useState(90);
  const [workingDays, setWorkingDays] = useState(26);
  const [machineCost, setMachineCost] = useState(220000);

  const monthlyBikes = dailyBikes * workingDays;
  const monthlyRevenue = monthlyBikes * washPrice;

  const waterLitersPerBike = 28;
  const waterCostPerLiter = 0.08;
  const monthlyWaterCost = Math.round(monthlyBikes * waterLitersPerBike * waterCostPerLiter);

  const chemicalCostPerBike = 12;
  const monthlyChemicalCost = Math.round(monthlyBikes * chemicalCostPerBike);

  const electricityKwhPerBike = 0.25;
  const electricityRatePerKwh = 8.5;
  const monthlyElectricityCost = Math.round(monthlyBikes * electricityKwhPerBike * electricityRatePerKwh);

  const monthlyMaintenance = Math.round(monthlyRevenue * 0.05);
  const monthlyLaborCost = 6000;

  const totalMonthlyOperatingCost = monthlyWaterCost + monthlyChemicalCost + monthlyElectricityCost + monthlyMaintenance + monthlyLaborCost;
  const monthlyNetProfit = Math.max(0, monthlyRevenue - totalMonthlyOperatingCost);
  const profitMarginPct = monthlyRevenue > 0 ? ((monthlyNetProfit / monthlyRevenue) * 100).toFixed(1) : 0;
  
  const paybackMonths = monthlyNetProfit > 0 ? (machineCost / monthlyNetProfit).toFixed(1) : '99';

  const manualWaterUsedMonthly = monthlyBikes * 90;
  const autoWaterUsedMonthly = monthlyBikes * waterLitersPerBike;
  const waterSavedMonthlyLiters = manualWaterUsedMonthly - autoWaterUsedMonthly;
  const waterSavedAnnualLiters = waterSavedMonthlyLiters * 12;

  return (
    <section id="roi-section" className="py-24 px-4 bg-slate-950 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_50%,rgba(245,158,11,0.04),transparent)]" />
      
      <div className="space-y-12 max-w-7xl mx-auto relative">
        
        {/* Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-amber-400 bg-amber-500/10 px-4 py-1.5 rounded-full border border-amber-500/20">
            Commercial Viability Model
          </span>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Franchise & Dealership <span className="bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">ROI Calculator</span>
          </h2>
          
          <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
            Simulate monthly wash volume, ticket price, operational utilities, net profit margins, and machine capex payback timeline for your location.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left 6 cols: Input Controls */}
          <div className="lg:col-span-6 space-y-4 text-left">
            <div className="glass-panel p-6 rounded-3xl border border-slate-800 space-y-5">
              <h3 className="text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-amber-400" />
                Station Parameters
              </h3>

              {/* Slider 1: Daily Bikes */}
              <div className="space-y-2">
                <div className="flex justify-between items-center text-xs">
                  <span className="font-semibold text-slate-300">Daily Two-Wheelers Washed:</span>
                  <span className="font-mono font-extrabold text-cyan-400 text-sm bg-cyan-950 px-2.5 py-0.5 rounded border border-cyan-500/30">
                    {dailyBikes} Bikes / Day
                  </span>
                </div>
                <input
                  type="range"
                  min="5"
                  max="75"
                  value={dailyBikes}
                  onChange={(e) => setDailyBikes(parseInt(e.target.value))}
                  className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-400"
                />
                <div className="flex justify-between text-[10px] font-mono text-slate-500">
                  <span>10 Bikes (Small Workshop)</span>
                  <span>35 Bikes (Busy Dealership)</span>
                  <span>75 Bikes (Fuel Station)</span>
                </div>
              </div>

              {/* Slider 2: Wash Price */}
              <div className="space-y-2">
                <div className="flex justify-between items-center text-xs">
                  <span className="font-semibold text-slate-300">Average Price Charged per Wash:</span>
                  <span className="font-mono font-extrabold text-emerald-400 text-sm bg-emerald-950 px-2.5 py-0.5 rounded border border-emerald-500/30">
                    ₹{washPrice} per wash
                  </span>
                </div>
                <input
                  type="range"
                  min="50"
                  max="200"
                  step="10"
                  value={washPrice}
                  onChange={(e) => setWashPrice(parseInt(e.target.value))}
                  className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-emerald-400"
                />
                <div className="flex justify-between text-[10px] font-mono text-slate-500">
                  <span>₹60 (Eco Express)</span>
                  <span>₹90 (Standard Clean)</span>
                  <span>₹180 (Premium EV/Ceramic)</span>
                </div>
              </div>

              {/* Slider 3: Working Days */}
              <div className="space-y-2">
                <div className="flex justify-between items-center text-xs">
                  <span className="font-semibold text-slate-300">Operating Days per Month:</span>
                  <span className="font-mono font-extrabold text-slate-200 text-sm bg-slate-800 px-2.5 py-0.5 rounded">
                    {workingDays} Days
                  </span>
                </div>
                <input
                  type="range"
                  min="20"
                  max="30"
                  value={workingDays}
                  onChange={(e) => setWorkingDays(parseInt(e.target.value))}
                  className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-slate-400"
                />
              </div>

              {/* Slider 4: Machine Capex */}
              <div className="space-y-2">
                <div className="flex justify-between items-center text-xs">
                  <span className="font-semibold text-slate-300">Modular Station Bay Capex:</span>
                  <span className="font-mono font-extrabold text-amber-400 text-sm bg-amber-950 px-2.5 py-0.5 rounded border border-amber-500/30">
                    ₹{machineCost.toLocaleString('en-IN')}
                  </span>
                </div>
                <input
                  type="range"
                  min="180000"
                  max="350000"
                  step="10000"
                  value={machineCost}
                  onChange={(e) => setMachineCost(parseInt(e.target.value))}
                  className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-amber-400"
                />
              </div>

            </div>

            {/* Water Savings Green Card */}
            <div className="p-5 rounded-3xl bg-gradient-to-br from-cyan-950/80 to-blue-950/80 border border-cyan-500/30 text-slate-200 space-y-2">
              <div className="flex items-center gap-2 text-cyan-300 font-bold text-sm">
                <Droplets className="w-4 h-4 text-cyan-400" />
                <span>Environmental Savings Metrics</span>
              </div>
              <div className="grid grid-cols-2 gap-3 pt-1">
                <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800">
                  <div className="text-[11px] text-slate-400">Monthly Water Saved:</div>
                  <div className="text-base font-black text-cyan-300 mt-0.5">
                    {waterSavedMonthlyLiters.toLocaleString('en-IN')} <span className="text-xs font-normal">Liters</span>
                  </div>
                </div>
                <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800">
                  <div className="text-[11px] text-slate-400">Annual Water Saved:</div>
                  <div className="text-base font-black text-emerald-400 mt-0.5">
                    {(waterSavedAnnualLiters / 100000).toFixed(2)} <span className="text-xs font-normal">Lakh Liters</span>
                  </div>
                </div>
              </div>
              <p className="text-[11px] text-slate-400 leading-normal">
                Prevents groundwater depletion and meets strict PCB (Pollution Control Board) zero liquid discharge guidelines.
              </p>
            </div>
          </div>

          {/* Right 6 cols: Financial Summary */}
          <div className="lg:col-span-6 space-y-4 text-left">
            
            <div className="glass-panel-glow p-6 rounded-3xl border border-cyan-500/40 space-y-5">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                  Monthly Financial Summary
                </span>
                <span className="text-xs font-mono font-bold px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/40">
                  {profitMarginPct}% Operating Margin
                </span>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 rounded-2xl bg-slate-900/90 border border-slate-800">
                  <div className="text-xs text-slate-400 font-medium">Monthly Gross Revenue</div>
                  <div className="text-2xl font-black text-white mt-1">
                    ₹{monthlyRevenue.toLocaleString('en-IN')}
                  </div>
                  <div className="text-[11px] font-mono text-cyan-400 mt-0.5">
                    {monthlyBikes} washes @ ₹{washPrice}
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-emerald-950/80 border border-emerald-500/40">
                  <div className="text-xs text-emerald-300 font-medium">Monthly Net Profit</div>
                  <div className="text-2xl font-black text-emerald-400 mt-1">
                    ₹{monthlyNetProfit.toLocaleString('en-IN')}
                  </div>
                  <div className="text-[11px] font-mono text-emerald-300 mt-0.5">
                    After power, shampoo & labor
                  </div>
                </div>
              </div>

              {/* Payback Banner */}
              <div className="p-4 rounded-2xl bg-gradient-to-r from-amber-950/70 to-slate-900 border border-amber-500/40 flex items-center justify-between">
                <div>
                  <div className="text-xs font-bold text-amber-300 uppercase tracking-wider">
                    Full Capex Payback Timeline
                  </div>
                  <div className="text-xs text-slate-300 mt-0.5">
                    Complete recovery of ₹{machineCost.toLocaleString('en-IN')} station investment
                  </div>
                </div>
                <div className="text-2xl font-black text-amber-400 font-mono">
                  {paybackMonths} <span className="text-xs font-normal text-amber-200">Months</span>
                </div>
              </div>

              {/* Operating cost breakdown */}
              <div className="space-y-2 pt-2 border-t border-slate-800 text-xs">
                <span className="font-bold text-slate-300 block mb-2">
                  Operating Cost Breakdown (₹{totalMonthlyOperatingCost.toLocaleString('en-IN')} Total / month):
                </span>

                <div className="flex justify-between text-slate-400 py-1 border-b border-slate-800/60">
                  <span>1. Water & Sewage (28L @ ₹0.08/L):</span>
                  <span className="font-mono text-slate-200">₹{monthlyWaterCost.toLocaleString('en-IN')}</span>
                </div>
                <div className="flex justify-between text-slate-400 py-1 border-b border-slate-800/60">
                  <span>2. Shampoo & Consumable Detergents:</span>
                  <span className="font-mono text-slate-200">₹{monthlyChemicalCost.toLocaleString('en-IN')}</span>
                </div>
                <div className="flex justify-between text-slate-400 py-1 border-b border-slate-800/60">
                  <span>3. Power & Electrical Consumption:</span>
                  <span className="font-mono text-slate-200">₹{monthlyElectricityCost.toLocaleString('en-IN')}</span>
                </div>
                <div className="flex justify-between text-slate-400 py-1 border-b border-slate-800/60">
                  <span>4. Preventive AMC & Spare Parts:</span>
                  <span className="font-mono text-slate-200">₹{monthlyMaintenance.toLocaleString('en-IN')}</span>
                </div>
                <div className="flex justify-between text-slate-400 py-1">
                  <span>5. Part-time Attendant Oversight:</span>
                  <span className="font-mono text-slate-200">₹{monthlyLaborCost.toLocaleString('en-IN')}</span>
                </div>
              </div>

              <button
                onClick={() => onOpenContact && onOpenContact('Franchise Business Plan & Capex Inquiry')}
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-black text-xs transition-all shadow-lg shadow-cyan-500/20 cursor-pointer flex items-center justify-center gap-2"
              >
                <span>REQUEST COMPLETE FRANCHISE PROSPECTUS</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}