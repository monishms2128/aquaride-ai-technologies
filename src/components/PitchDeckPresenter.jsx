import React, { useState, useEffect } from 'react';
import { PITCH_SLIDES, SURVEY_METRICS } from '../data/mockData';
import { Sparkles, ChevronLeft, ChevronRight, Award, HelpCircle, Users, BarChart3, ShieldCheck, CheckCircle2, ChevronDown, Download, Maximize2 } from 'lucide-react';

export default function PitchDeckPresenter() {
  const [currentSlideIdx, setCurrentSlideIdx] = useState(0);
  const [expandedFaq, setExpandedFaq] = useState(null);

  const currentSlide = PITCH_SLIDES[currentSlideIdx];

  // Keyboard navigation for pitch slides
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight' || e.key === ' ') {
        setCurrentSlideIdx((prev) => Math.min(PITCH_SLIDES.length - 1, prev + 1));
      } else if (e.key === 'ArrowLeft') {
        setCurrentSlideIdx((prev) => Math.max(0, prev - 1));
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const judgeFaqs = [
    {
      q: "Your physical prototype only has an LDR sensor and relays. How can you claim this is an AI-powered system?",
      a: "Hardware development follows staged validation: Stage 1 proved electrical fluid sequencing and relay switching safely in wet environments. For our commercial and patent architecture, we built the Edge AI vision pipeline using YOLOv8-nano and OpenCV colorimetric reflectance mapping. This classifies motorcycle anatomy and localized dirt density to dynamically command the VFD high-pressure pump and proportional valves."
    },
    {
      q: "How do you prevent high-pressure water from damaging delicate motorcycle electronics or the instrument console?",
      a: "This is precisely the core novelty of our Patent Claim 3: Sensitive Component Shielding. Traditional car/bike washers blast everything with uniform high pressure. AquaRide AI uses spatial segmentation to identify handlebars, switchgear, digital instrument pods, and battery boxes, automatically routing low-pressure (<35 Bar) atomized mist to these zones while reserving 110 Bar jets strictly for fenders, wheels, and swingarms."
    },
    {
      q: "Won't automatic brushes scratch high-gloss bike paint and delicate decals?",
      a: "No, we use ultra-soft, closed-cell EVA foam and split-microfiber oscillating brushes operating at a controlled 120 RPM under continuous lubricant snow-foam flood. Furthermore, for premium/superbikes, riders can select Touchless Hydro-Jet mode via the app, which cleans exclusively through high-impingement variable nozzles without mechanical brush contact."
    },
    {
      q: "How do you handle greasy oily runoff without violating environmental PCB (Pollution Control Board) norms?",
      a: "AquaRide AI integrates a 3-stage closed-loop reclamation skid: an initial gravity settling grid for heavy sand/mud, a coalescing plate oil-water separator for hydrocarbon skimming, and dual quartz sand + activated carbon canisters. In-line optical turbidity meters verify water clarity before recycling it back into the pre-rinse tanks, cutting net freshwater intake to under 25 Liters."
    },
    {
      q: "How does this make financial sense for a small local mechanic or garage owner?",
      a: "A manual wash takes 35 minutes and costs the mechanic INR 60 in labor and utility per bike, capping throughput at 8 bikes a day. With AquaRide AI, a single bay processes 15 bikes per hour at INR 39 operating cost per wash. Even at a modest 15 bikes a day, the workshop owner generates over INR 15,000 net monthly profit, recovering the entire machine cost in approximately 14 to 16 months."
    }
  ];

  const handleDownloadPitch = () => {
    const pitchText = `# AQUARIDE AI TECHNOLOGIES - HACKATHON PITCH DECK
Team Crimson | Smart Water-Efficient Automated Two-Wheeler Cleaning System

${PITCH_SLIDES.map(s => `## Slide ${s.number}: ${s.title}\n**${s.subtitle}** (${s.category})\n${s.bulletPoints.map(b => `- ${b}`).join('\n')}\n`).join('\n---\n\n')}

### Primary Market Survey Findings:
- 213 Riders Surveyed: 68% frustrated with 20-40 min delays, 54% irregular wash quality, 91% demand automated cleaning.
- 15 Workshop Operators: 80% struggle with labor hiring, 90L water wasted manually, 87% interested in AquaRide bay.

### Unit Economics:
- Monthly Washes: 312 bikes (12 bikes/day)
- Monthly Revenue: INR 24,960 (@ INR 80/wash)
- Monthly Cost: INR 12,478
- Net Monthly Profit: INR 12,482 (50% Profit Margin)
- Capex Recovery (ROI): 16 Months on INR 2,00,000 machine cost.`;

    const blob = new Blob([pitchText], { type: 'text/markdown' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `AquaRide_Hackathon_Pitch_Deck.md`;
    a.click();
  };

  return (
    <div className="space-y-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 text-left">
      
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-800 pb-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="p-2 rounded-xl bg-amber-500/10 text-amber-400 border border-amber-500/30">
              <Award className="w-6 h-6" />
            </span>
            <div>
              <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                Hackathon Pitch Deck & Judge Q&A Engine
              </h2>
              <p className="text-xs sm:text-sm text-slate-400 font-medium">
                Presentation slides, field survey statistics (213 customers, 15 workshops), and bulletproof answers for technical judges. Use Left/Right Arrow keys to navigate.
              </p>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={handleDownloadPitch}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-700 text-xs font-mono font-bold transition-all cursor-pointer"
            title="Download full pitch deck script as Markdown"
          >
            <Download className="w-3.5 h-3.5 text-amber-400" />
            <span>Export Deck</span>
          </button>

          <span className="text-xs font-mono font-bold text-slate-400">
            Slide {currentSlideIdx + 1} of {PITCH_SLIDES.length}
          </span>
          <div className="flex items-center gap-1">
            <button
              onClick={() => setCurrentSlideIdx(Math.max(0, currentSlideIdx - 1))}
              disabled={currentSlideIdx === 0}
              className="p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white disabled:opacity-40 cursor-pointer"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => setCurrentSlideIdx(Math.min(PITCH_SLIDES.length - 1, currentSlideIdx + 1))}
              disabled={currentSlideIdx === PITCH_SLIDES.length - 1}
              className="p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white disabled:opacity-40 cursor-pointer"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      <div className="glass-panel-glow p-8 rounded-3xl border border-cyan-500/40 relative overflow-hidden shadow-2xl min-h-[340px] flex flex-col justify-between">
        
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-xs font-mono font-bold px-3 py-1 rounded-full bg-cyan-950 text-cyan-300 border border-cyan-500/40">
              {currentSlide.category} • Slide #{currentSlide.number}
            </span>
            <span className="text-xs font-mono text-slate-400">Team Crimson • Pitch Deck</span>
          </div>

          <div>
            <h3 className="text-2xl sm:text-3xl font-black text-white">{currentSlide.title}</h3>
            <p className="text-sm font-semibold text-cyan-300 mt-1">{currentSlide.subtitle}</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
            {currentSlide.bulletPoints.map((point, pIdx) => (
              <div key={pIdx} className="flex items-start gap-2.5 p-3 rounded-2xl bg-slate-900/80 border border-slate-800">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <span className="text-xs text-slate-200 leading-relaxed font-sans">{point}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-center gap-2 pt-6">
          {PITCH_SLIDES.map((_, dotIdx) => (
            <button
              key={dotIdx}
              onClick={() => setCurrentSlideIdx(dotIdx)}
              className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                currentSlideIdx === dotIdx ? 'w-8 bg-cyan-400' : 'w-2 bg-slate-700 hover:bg-slate-500'
              }`}
            />
          ))}
        </div>

      </div>

      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <BarChart3 className="w-5 h-5 text-cyan-400" />
          <h3 className="text-lg font-black text-white">
            Primary Field Survey Validation (Kanchipuram & Urban Tamil Nadu)
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          
          <div className="glass-panel p-5 rounded-3xl border border-slate-800 space-y-3">
            <div className="flex items-center justify-between border-b border-slate-800 pb-2">
              <span className="text-xs font-bold text-cyan-300 uppercase tracking-wider flex items-center gap-1.5">
                <Users className="w-4 h-4" />
                Rider / Customer Segment (213 Surveyed)
              </span>
              <span className="text-xs font-mono text-slate-400">100% Real Data</span>
            </div>

            <div className="space-y-2.5 text-xs">
              <div className="flex justify-between items-center p-2 rounded-xl bg-slate-900/60">
                <span className="text-slate-300">Frustrated with 20 to 40 min weekend waiting:</span>
                <span className="font-mono font-bold text-red-400">{SURVEY_METRICS.customers.waitTimeFrustrationPct}%</span>
              </div>
              <div className="flex justify-between items-center p-2 rounded-xl bg-slate-900/60">
                <span className="text-slate-300">Report quality varies with worker fatigue:</span>
                <span className="font-mono font-bold text-amber-400">{SURVEY_METRICS.customers.inconsistentQualityReportPct}%</span>
              </div>
              <div className="flex justify-between items-center p-2 rounded-xl bg-slate-900/60">
                <span className="text-slate-300">Experienced scratches or waterlogged meters:</span>
                <span className="font-mono font-bold text-red-400">{SURVEY_METRICS.customers.scratchOrDamagePct}%</span>
              </div>
              <div className="flex justify-between items-center p-2 rounded-xl bg-emerald-950/40 border border-emerald-500/30">
                <span className="text-emerald-300 font-semibold">Willing to adopt automated bike washing:</span>
                <span className="font-mono font-bold text-emerald-400">{SURVEY_METRICS.customers.willingnessForAutoWashPct}%</span>
              </div>
            </div>
          </div>

          <div className="glass-panel p-5 rounded-3xl border border-slate-800 space-y-3">
            <div className="flex items-center justify-between border-b border-slate-800 pb-2">
              <span className="text-xs font-bold text-amber-300 uppercase tracking-wider flex items-center gap-1.5">
                <Users className="w-4 h-4" />
                Service Operator Segment (15 Workshops)
              </span>
              <span className="text-xs font-mono text-slate-400">Field Interviews</span>
            </div>

            <div className="space-y-2.5 text-xs">
              <div className="flex justify-between items-center p-2 rounded-xl bg-slate-900/60">
                <span className="text-slate-300">Struggle with hiring & retaining washing labor:</span>
                <span className="font-mono font-bold text-red-400">{SURVEY_METRICS.operators.struggleHiringLaborPct}%</span>
              </div>
              <div className="flex justify-between items-center p-2 rounded-xl bg-slate-900/60">
                <span className="text-slate-300">Frequent complaints about missed underbody spots:</span>
                <span className="font-mono font-bold text-amber-400">{SURVEY_METRICS.operators.complaintRateMissedSpotsPct}%</span>
              </div>
              <div className="flex justify-between items-center p-2 rounded-xl bg-slate-900/60">
                <span className="text-slate-300">Average water wasted per manual wash:</span>
                <span className="font-mono font-bold text-cyan-400">{SURVEY_METRICS.operators.avgWaterUsedManualLiters}</span>
              </div>
              <div className="flex justify-between items-center p-2 rounded-xl bg-emerald-950/40 border border-emerald-500/30">
                <span className="text-emerald-300 font-semibold">Interested in installing AquaRide AI bay:</span>
                <span className="font-mono font-bold text-emerald-400">{SURVEY_METRICS.operators.interestInAutoSystemPct}%</span>
              </div>
            </div>
          </div>

        </div>
      </div>

      <div className="space-y-4 pt-2">
        <div className="flex items-center gap-2">
          <HelpCircle className="w-5 h-5 text-amber-400" />
          <h3 className="text-lg font-black text-white">
            Hackathon Judge Q&A Defense Engine (Tough Questions Answered)
          </h3>
        </div>

        <div className="space-y-3">
          {judgeFaqs.map((faq, fIdx) => {
            const isOpen = expandedFaq === fIdx;
            return (
              <div
                key={fIdx}
                className="glass-panel rounded-2xl border border-slate-800 overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => setExpandedFaq(isOpen ? null : fIdx)}
                  className="w-full p-4 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-slate-900/50"
                >
                  <span className="text-xs sm:text-sm font-bold text-slate-200">
                    <span className="text-amber-400 font-mono mr-2">Q{fIdx + 1}:</span>
                    {faq.q}
                  </span>
                  <ChevronDown className={`w-4 h-4 text-slate-400 shrink-0 transition-transform ${isOpen ? 'rotate-180 text-cyan-400' : ''}`} />
                </button>

                {isOpen && (
                  <div className="p-4 pt-0 text-xs text-slate-300 leading-relaxed font-sans border-t border-slate-800/80 bg-slate-950/60">
                    <div className="text-cyan-300 font-mono font-bold text-[11px] mb-1">Recommended Response:</div>
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

    </div>
  );
}