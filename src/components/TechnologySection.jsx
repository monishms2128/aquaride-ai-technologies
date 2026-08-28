import React from "react";
import { Cpu, ShieldCheck, Droplets, Gauge } from "lucide-react";

const FEATURES = [
  {
    icon: Cpu,
    color: "text-purple-400",
    border: "border-purple-500/30",
    bg: "bg-purple-500/8",
    title: "Edge AI Vision",
    tagline: "YOLOv8 Neural Network",
    desc: "Our onboard Edge TPU camera runs a real-time neural network that identifies vehicle type, measures localized dirt density, and maps every surface zone — in under 2 seconds.",
    specs: ["Real-time object segmentation", "98.6% detection confidence", "Works in all lighting conditions"],
  },
  {
    icon: ShieldCheck,
    color: "text-emerald-400",
    border: "border-emerald-500/30",
    bg: "bg-emerald-500/8",
    title: "Sensitive Zone Shielding",
    tagline: "Patent-Pending Protection",
    desc: "AquaRide AI enforces strict pressure limits around your digital instrument cluster, ECU modules, switchgear, and battery compartments — preventing electrical damage that ruins bikes.",
    specs: ["< 35 Bar near electronics", "Automatic masking, no manual input", "Covers TFT screens, ECU, keyhole"],
  },
  {
    icon: Droplets,
    color: "text-cyan-400",
    border: "border-cyan-500/30",
    bg: "bg-cyan-500/8",
    title: "Closed-Loop Recycling",
    tagline: "75% Water Reclaimed",
    desc: "Wash water flows through an oil-water separator, dual sand filtration beds, and activated carbon canisters. Cleaned water is recycled back for the next wash cycle — automatically.",
    specs: ["75% water recirculation rate", "Inline turbidity monitoring", "Municipal PCB compliant discharge"],
  },
  {
    icon: Gauge,
    color: "text-sky-400",
    border: "border-sky-500/30",
    bg: "bg-sky-500/8",
    title: "Dynamic Pressure Control",
    tagline: "VFD-Modulated Pump",
    desc: "A Variable Frequency Drive modulates our triplex high-pressure pump from 35 Bar to 120 Bar in real-time — matching pressure precisely to what each zone of your bike needs.",
    specs: ["35–120 Bar per-zone modulation", "Eliminates paint swirl marks", "Silent VFD motor drive"],
  },
];

export default function TechnologySection() {
  return (
    <section id="technology" className="py-24 px-4 bg-slate-950 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_50%,rgba(139,92,246,0.04),transparent)]" />
      <div className="max-w-6xl mx-auto relative">

        <div className="text-center space-y-4 mb-16">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-purple-400 bg-purple-500/10 px-3 py-1 rounded-full border border-purple-500/20">
            Technology
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mt-4">
            Built Different.{" "}
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Engineered to Last.
            </span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
            Four proprietary systems working in concert to deliver a wash that's safer, smarter, and more sustainable than anything on the market.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {FEATURES.map(({ icon: Icon, color, border, bg, title, tagline, desc, specs }) => (
            <div
              key={title}
              className={`p-8 rounded-3xl ${bg} border ${border} hover:border-opacity-60 transition-all duration-300 group text-left relative overflow-hidden`}
            >
              <div className="flex items-start gap-4 mb-5">
                <div className={`w-12 h-12 rounded-2xl bg-slate-950/80 border ${border} flex items-center justify-center shrink-0`}>
                  <Icon className={`w-6 h-6 ${color}`} />
                </div>
                <div>
                  <h3 className="text-white font-black text-xl">{title}</h3>
                  <span className={`text-xs font-mono font-bold ${color}`}>{tagline}</span>
                </div>
              </div>

              <p className="text-slate-400 text-sm leading-relaxed mb-5">{desc}</p>

              <div className="space-y-2">
                {specs.map((spec) => (
                  <div key={spec} className="flex items-center gap-2 text-xs text-slate-300">
                    <div className={`w-1.5 h-1.5 rounded-full ${color.replace("text-", "bg-")}`} />
                    <span>{spec}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}