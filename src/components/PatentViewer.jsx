import React, { useState } from 'react';
import { ShieldCheck, FileText, Cpu, Layers, CheckCircle2, ChevronRight, Download, BookOpen } from 'lucide-react';

export default function PatentViewer() {
  const [activeClaimIdx, setActiveClaimIdx] = useState(0);

  const claims = [
    {
      number: 'Claim 1 (Independent Apparatus)',
      title: 'Computer-Vision Guided Selective Differential Pressure Washing Apparatus',
      desc: 'An automated cyber-physical cleaning apparatus for open-chassis two-wheeled vehicles comprising an optical imaging assembly, an Edge Processing Unit executing vehicle sub-assembly segmentation, a Variable Frequency Drive (VFD) modulating high-pressure pumps (35 to 120 Bar), and independent multi-zone spray manifold banks configured to alter fluid pressure in real time based on component sensitivity.',
      novelty: 'First open-chassis automated system to dynamically vary nozzle pressure per vehicle anatomical zone rather than blasting static pressure across the entire frame.'
    },
    {
      number: 'Claim 2 (Independent Method)',
      title: 'Adaptive Cyber-Physical Wash Recipe Generation Method',
      desc: 'A computer-implemented method capturing multi-angle optical images, segmenting the motorcycle into structural sub-assemblies (cockpit, engine, wheels, drive chain), calculating pixel-level colorimetric/textural dirt accumulation, and executing a dynamically tuned washing cycle modulating nozzle traverse speed, pump bar pressure, and chemical ratio.',
      novelty: 'Real-time OpenCV/YOLO dirt reflectance mapping coupled with Closed-Loop PLC execution.'
    },
    {
      number: 'Claim 3 (Dependent Claim - Sensitive Masking)',
      title: 'Delicate Electrical & Mechanical Sensitive Zone Exclusion Envelope',
      desc: 'An Edge safety masking module defining strict low-pressure (<40 Bar) exclusion envelopes around motorcycle handle bar switchgear, digital TFT instrument clusters, exposed battery compartments, and air intakes, preventing electrical short-circuiting and decal damage.',
      novelty: 'Solves the primary reason two-wheeler owners fear automated washing: electrical waterlogging.'
    },
    {
      number: 'Claim 4 (Dependent Claim - Closed-Loop Recycling)',
      title: 'Turbidity-Driven Closed-Loop Effluent Reclamation Skid',
      desc: 'A multi-stage water reclamation module integrating an underbody collection trough, coalescing oil-water separator, quartz sand & activated carbon filtration canisters, and in-line optical turbidity feedback (NTU) to automatically reclaim water for pre-rinse cycles.',
      novelty: 'Reduces net fresh water consumption from 90L to under 25L with automated backwash triggering.'
    },
    {
      number: 'Claim 5 (Dependent Claim - Chemical Formulation Dosing)',
      title: 'Hydrocarbon Grease vs Road Dust Spectral Chemical Ratio Dosing',
      desc: 'Dynamic chemical dispensing varying alkaline degreaser vs pH-neutral active snow foam concentration based on detected hydrocarbon grease on lower swingarm and engine underguard surfaces.',
      novelty: 'Optimizes chemical usage by 40%, cutting chemical runoff into municipal sewage.'
    }
  ];

  const handleDownloadPatentDraft = () => {
    const draftText = `# FORM 2 - PATENT SPECIFICATION (PROVISIONAL / COMPLETE DRAFT)
THE PATENTS ACT, 1970 (39 OF 1970) & THE PATENTS RULES, 2003

1. TITLE:
CYBER-PHYSICAL ADAPTIVE WASHING APPARATUS AND METHOD FOR OPEN-CHASSIS TWO-WHEELERS USING COMPUTER-VISION GUIDED DIFFERENTIAL PRESSURE ZONING AND CLOSED-LOOP RECIRCULATION

2. APPLICANT: AquaRide AI Technologies / Team Crimson

3. FIELD OF THE INVENTION:
Automated Cleaning Systems, Edge AI, Fluid Mechanics, Environmental Engineering

4. SUMMARY & CLAIMS:
${claims.map(c => `\n### ${c.number}: ${c.title}\n${c.desc}\nNovelty: ${c.novelty}\n`).join('')}

Drafted for Indian Patent Office & PCT International filing.`;

    const blob = new Blob([draftText], { type: 'text/markdown' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `AquaRide_Patent_Specification_Form2.md`;
    a.click();
  };

  return (
    <div className="space-y-6 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-800 pb-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="p-2 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/30">
              <ShieldCheck className="w-6 h-6" />
            </span>
            <div>
              <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                Patent Specification & Technical Dossier
              </h2>
              <p className="text-xs sm:text-sm text-slate-400 font-medium">
                Official Patent Draft (Form 2 - Indian Patents Act 1970 & PCT International), Architectural schematics and Novel Claims.
              </p>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={handleDownloadPatentDraft}
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-black text-xs transition-all shadow-lg shadow-cyan-500/20 cursor-pointer"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Download Form 2 Patent Draft (.MD)</span>
          </button>
        </div>
      </div>

      <div className="glass-panel-glow p-6 rounded-3xl border border-cyan-500/30 text-left space-y-3">
        <div className="flex items-center justify-between">
          <span className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-wider">
            Patent Specification • Form 2 Draft
          </span>
          <span className="text-xs font-mono text-slate-400">Class: B60S 3/04 (Vehicle Washing)</span>
        </div>

        <h3 className="text-lg sm:text-xl font-black text-white">
          CYBER-PHYSICAL ADAPTIVE WASHING APPARATUS AND METHOD FOR OPEN-CHASSIS TWO-WHEELERS USING COMPUTER-VISION GUIDED DIFFERENTIAL PRESSURE ZONING AND CLOSED-LOOP RECIRCULATION
        </h3>

        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
          An automated system solving the unique vulnerabilities of two-wheeled vehicles (exposed electrical wiring, sensitive instrument panels, open drive chains) by applying real-time Edge Computer Vision to segment vehicle components, regulate water pressure between 35 and 120 Bar, and recycle 75% of wash water through in-line turbidity monitoring.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        
        <div className="lg:col-span-5 space-y-3">
          <span className="text-xs font-bold text-slate-300 uppercase tracking-wider block text-left">
            Core Novel Patent Claims:
          </span>

          {claims.map((c, idx) => {
            const isSelected = activeClaimIdx === idx;
            return (
              <div
                key={idx}
                onClick={() => setActiveClaimIdx(idx)}
                className={`p-3.5 rounded-2xl border text-left transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-cyan-950/80 border-cyan-400 shadow-md shadow-cyan-500/20'
                    : 'bg-slate-900/60 border-slate-800 hover:border-slate-700'
                }`}
              >
                <div className="text-[10px] font-mono font-bold text-cyan-400">{c.number}</div>
                <div className="text-xs font-bold text-white mt-1 leading-snug">{c.title}</div>
              </div>
            );
          })}
        </div>

        <div className="lg:col-span-7 space-y-4 text-left">
          
          <div className="glass-panel p-5 rounded-3xl border border-slate-800 space-y-4">
            <div className="flex items-center justify-between border-b border-slate-800 pb-2">
              <span className="text-xs font-mono font-bold text-cyan-300">
                {claims[activeClaimIdx].number}
              </span>
              <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-950 text-emerald-300 border border-emerald-500/40">
                Patent Novelty Verified
              </span>
            </div>

            <div>
              <h4 className="text-base font-black text-white">{claims[activeClaimIdx].title}</h4>
              <p className="text-xs text-slate-300 mt-2 leading-relaxed font-sans">
                {claims[activeClaimIdx].desc}
              </p>
            </div>

            <div className="p-3 rounded-2xl bg-slate-900/80 border border-slate-800">
              <div className="text-[11px] font-bold text-cyan-400 uppercase font-mono">Why this claim is patentable:</div>
              <div className="text-xs text-slate-300 mt-1 leading-normal font-sans">
                {claims[activeClaimIdx].novelty}
              </div>
            </div>
          </div>

          <div className="glass-panel p-4 rounded-2xl border border-slate-800 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-slate-300 uppercase tracking-wider flex items-center gap-2">
                <Cpu className="w-4 h-4 text-cyan-400" />
                Hardware Interfaces & Pinouts
              </span>
              <span className="text-[11px] font-mono text-slate-400">ESP32-S3 + Raspberry Pi 4</span>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-xs text-slate-300">
                <thead>
                  <tr className="border-b border-slate-800 text-slate-400 text-[10px] font-mono">
                    <th className="py-1 text-left">Subsystem</th>
                    <th className="py-1 text-left">Interface</th>
                    <th className="py-1 text-left">Pin / Protocol</th>
                    <th className="py-1 text-left">Voltage / Spec</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/60 font-mono text-[11px]">
                  <tr>
                    <td className="py-1.5 font-sans font-semibold text-white">Edge TPU Vision Host</td>
                    <td className="py-1.5">UART / USB-CDC</td>
                    <td className="py-1.5 text-cyan-300">GPIO 43/44 (115200)</td>
                    <td className="py-1.5">3.3V Logic</td>
                  </tr>
                  <tr>
                    <td className="py-1.5 font-sans font-semibold text-white">VFD Triplex Pump</td>
                    <td className="py-1.5">RS485 Modbus / DAC</td>
                    <td className="py-1.5 text-cyan-300">GPIO 18 (0 to 10V)</td>
                    <td className="py-1.5">35 to 120 Bar Modulation</td>
                  </tr>
                  <tr>
                    <td className="py-1.5 font-sans font-semibold text-white">Gantry X/Y Steppers</td>
                    <td className="py-1.5">TMC2209 Step/Dir</td>
                    <td className="py-1.5 text-cyan-300">GPIO 15/16, 17/21</td>
                    <td className="py-1.5">24V / 2.5A Linear Drive</td>
                  </tr>
                  <tr>
                    <td className="py-1.5 font-sans font-semibold text-white">Optical Turbidity Sensor</td>
                    <td className="py-1.5">Analog ADC</td>
                    <td className="py-1.5 text-cyan-300">GPIO 1 (ADC1_CH0)</td>
                    <td className="py-1.5">0 to 4.5V / 0 to 3000 NTU</td>
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