import React, { useState } from 'react';
import { Calculator, TrendingUp, Droplets, Clock, CheckCircle2, ArrowRight } from 'lucide-react';

export default function RoiCalculator() {
  const [dailyBikes, setDailyBikes] = useState(15);
  const [washPrice, setWashPrice] = useState(80);
  const [workingDays, setWorkingDays] = useState(26);
  const [machineCost, setMachineCost] = useState(200000);

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
  const monthlyLaborCost = 5500;

  const totalMonthlyOperatingCost = monthlyWaterCost + monthlyChemicalCost + monthlyElectricityCost + monthlyMaintenance + monthlyLaborCost;
  const monthlyNetProfit = Math.max(0, monthlyRevenue - totalMonthlyOperatingCost);
  const profitMarginPct = monthlyRevenue > 0 ? ((monthlyNetProfit / monthlyRevenue) * 100).toFixed(1) : 0;
  
  const paybackMonths = monthlyNetProfit > 0 ? (machineCost / monthlyNetProfit).toFixed(1) : '99';

  const manualWaterUsedMonthly = monthlyBikes * 90;
  const autoWaterUsedMonthly = monthlyBikes * waterLitersPerBike;
  const waterSavedMonthlyLiters = manualWaterUsedMonthly - autoWaterUsedMonthly;
  const waterSavedAnnualLiters = waterSavedMonthlyLiters * 12;

  return (
    <div className="space-y-6 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-800 pb-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="p-2 rounded-xl bg-amber-500/10 text-amber-400 border border-amber-500/30">
              <Calculator className="w-6 h-6" />
            </span>
            <div>
              <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                MSME Business Viability & ROI Calculator
              </h2>
              <p className="text-xs sm:text-sm text-slate-400 font-medium">
                Simulate revenue, operating costs, profit margins, and payback periods for workshop and apartment deployments.
              </p>
            </div>
          </div>
        </div>

        <div className="px-3.5 py-1.5 rounded-xl bg-amber-950/60 border border-amber-500/40 text-xs font-mono text-amber-300 font-bold">
          Estimated Payback: <strong className="text-amber-200">{paybackMonths} Months</strong>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        
        <div className="lg:col-span-6 space-y-4">
          <div className="glass-panel p-5 rounded-3xl border border-slate-800 space-y-5">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-amber-400" />
              Operational Parameters
            </h3>

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
                max="60"
                value={dailyBikes}
                onChange={(e) => setDailyBikes(parseInt(e.target.value))}
                className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-400"
              />
              <div className="flex justify-between text-[10px] font-mono text-slate-500">
                <span>5 Bikes (Small Garage)</span>
                <span>30 Bikes (Busy Center)</span>
                <span>60 Bikes (Petrol Bunk)</span>
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between items-center text-xs">
                <span className="font-semibold text-slate-300">Price Charged per Bike (INR):</span>
                <span className="font-mono font-extrabold text-emerald-400 text-sm bg-emerald-950 px-2.5 py-0.5 rounded border border-emerald-500/30">
                  INR {washPrice} per wash
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
                <span>INR 50 (Budget Quick Wash)</span>
                <span>INR 100 (Standard Market)</span>
                <span>INR 200 (Premium Foam/Wax)</span>
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between items-center text-xs">
                <span className="font-semibold text-slate-300">Working Days per Month:</span>
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

            <div className="space-y-2">
              <div className="flex justify-between items-center text-xs">
                <span className="font-semibold text-slate-300">Total Initial Machine Capex (INR):</span>
                <span className="font-mono font-extrabold text-amber-400 text-sm bg-amber-950 px-2.5 py-0.5 rounded border border-amber-500/30">
                  INR {machineCost.toLocaleString('en-IN')}
                </span>
              </div>
              <input
                type="range"
                min="150000"
                max="350000"
                step="10000"
                value={machineCost}
                onChange={(e) => setMachineCost(parseInt(e.target.value))}
                className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-amber-400"
              />
            </div>

          </div>

          <div className="p-4 rounded-3xl bg-gradient-to-br from-cyan-950/80 to-blue-950/80 border border-cyan-500/30 text-slate-200 space-y-2">
            <div className="flex items-center gap-2 text-cyan-300 font-bold text-sm">
              <Droplets className="w-4 h-4 text-cyan-400" />
              <span>Eco-Impact & Water Conservation</span>
            </div>
            <div className="grid grid-cols-2 gap-3 pt-1">
              <div className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-800 text-left">
                <div className="text-[11px] text-slate-400">Monthly Water Saved:</div>
                <div className="text-base font-black text-cyan-300 mt-0.5">
                  {waterSavedMonthlyLiters.toLocaleString('en-IN')} <span className="text-xs font-normal">Liters</span>
                </div>
              </div>
              <div className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-800 text-left">
                <div className="text-[11px] text-slate-400">Annual Water Saved:</div>
                <div className="text-base font-black text-emerald-400 mt-0.5">
                  {(waterSavedAnnualLiters / 100000).toFixed(2)} <span className="text-xs font-normal">Lakh Liters</span>
                </div>
              </div>
            </div>
            <p className="text-[11px] text-slate-400 leading-normal">
              Equivalent to saving <strong>{Math.round(waterSavedAnnualLiters / 12000)} municipal water tankers</strong> per year per machine bay.
            </p>
          </div>
        </div>

        <div className="lg:col-span-6 space-y-4">
          
          <div className="glass-panel-glow p-6 rounded-3xl border border-cyan-500/40 space-y-4 text-left">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                Financial Performance Summary
              </span>
              <span className="text-xs font-mono font-bold px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/40">
                {profitMarginPct}% Margin
              </span>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 rounded-2xl bg-slate-900/90 border border-slate-800">
                <div className="text-xs text-slate-400 font-medium">Monthly Gross Revenue</div>
                <div className="text-2xl font-black text-white mt-1">
                  INR {monthlyRevenue.toLocaleString('en-IN')}
                </div>
                <div className="text-[11px] font-mono text-cyan-400 mt-0.5">
                  {monthlyBikes} bikes @ INR {washPrice}
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-emerald-950/80 border border-emerald-500/40">
                <div className="text-xs text-emerald-300 font-medium">Net Monthly Profit</div>
                <div className="text-2xl font-black text-emerald-400 mt-1">
                  INR {monthlyNetProfit.toLocaleString('en-IN')}
                </div>
                <div className="text-[11px] font-mono text-emerald-300 mt-0.5">
                  After all utilities & labor
                </div>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-gradient-to-r from-amber-950/70 to-slate-900 border border-amber-500/40 flex items-center justify-between">
              <div>
                <div className="text-xs font-bold text-amber-300 uppercase tracking-wider">
                  Full Capex Payback Period
                </div>
                <div className="text-xs text-slate-300 mt-0.5">
                  Recovery of INR {machineCost.toLocaleString('en-IN')} machine investment
                </div>
              </div>
              <div className="text-2xl font-black text-amber-400 font-mono">
                {paybackMonths} <span className="text-xs font-normal text-amber-200">Months</span>
              </div>
            </div>

            <div className="space-y-2 pt-2 border-t border-slate-800 text-xs">
              <span className="font-bold text-slate-300 block mb-2">
                Monthly Operating Cost Breakdown (INR {totalMonthlyOperatingCost.toLocaleString('en-IN')} Total):
              </span>

              <div className="flex justify-between text-slate-400 py-1 border-b border-slate-800/60">
                <span>1. Water & Sewage (28L/bike @ INR 0.08/L):</span>
                <span className="font-mono text-slate-200">INR {monthlyWaterCost.toLocaleString('en-IN')}</span>
              </div>
              <div className="flex justify-between text-slate-400 py-1 border-b border-slate-800/60">
                <span>2. Shampoo & Consumables (INR 12/bike):</span>
                <span className="font-mono text-slate-200">INR {monthlyChemicalCost.toLocaleString('en-IN')}</span>
              </div>
              <div className="flex justify-between text-slate-400 py-1 border-b border-slate-800/60">
                <span>3. Electricity (0.25 kWh/bike @ INR 8.5/kWh):</span>
                <span className="font-mono text-slate-200">INR {monthlyElectricityCost.toLocaleString('en-IN')}</span>
              </div>
              <div className="flex justify-between text-slate-400 py-1 border-b border-slate-800/60">
                <span>4. Maintenance & Spare Parts (5% rev):</span>
                <span className="font-mono text-slate-200">INR {monthlyMaintenance.toLocaleString('en-IN')}</span>
              </div>
              <div className="flex justify-between text-slate-400 py-1">
                <span>5. Part-time Attendant Labour:</span>
                <span className="font-mono text-slate-200">INR {monthlyLaborCost.toLocaleString('en-IN')}</span>
              </div>
            </div>

          </div>

          <div className="glass-panel p-4 rounded-2xl border border-slate-800 text-left space-y-3">
            <span className="text-xs font-bold text-slate-300 uppercase tracking-wider block">
              Direct Comparison: Manual vs AquaRide AI
            </span>

            <div className="overflow-x-auto">
              <table className="w-full text-xs text-slate-300">
                <thead>
                  <tr className="border-b border-slate-800 text-slate-400 text-[11px]">
                    <th className="py-1.5 text-left font-semibold">Parameter</th>
                    <th className="py-1.5 text-left font-semibold text-red-400">Manual Wash</th>
                    <th className="py-1.5 text-left font-semibold text-emerald-400">AquaRide AI</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/60 font-mono text-[11px]">
                  <tr>
                    <td className="py-1.5 font-sans">Water Consumption</td>
                    <td className="py-1.5 text-red-300">80 - 100 L</td>
                    <td className="py-1.5 text-emerald-300 font-bold">20 - 28 L (-75%)</td>
                  </tr>
                  <tr>
                    <td className="py-1.5 font-sans">Wash Time per Bike</td>
                    <td className="py-1.5 text-red-300">25 - 45 mins</td>
                    <td className="py-1.5 text-emerald-300 font-bold">2.5 - 3 mins (10x faster)</td>
                  </tr>
                  <tr>
                    <td className="py-1.5 font-sans">Labor Required</td>
                    <td className="py-1.5 text-red-300">2 - 3 Workers</td>
                    <td className="py-1.5 text-emerald-300 font-bold">1 Part-time Attendant</td>
                  </tr>
                  <tr>
                    <td className="py-1.5 font-sans">Max Bikes / Hour</td>
                    <td className="py-1.5 text-red-300">2 - 3 Bikes</td>
                    <td className="py-1.5 text-emerald-300 font-bold">15 - 20 Bikes</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

        </div>

      </div>

    </div>
  );
}