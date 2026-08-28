import React, { useEffect, useRef, useState } from "react";

const STATS = [
  { value: 75, suffix: "%", label: "Less Water Used", desc: "vs traditional manual washing", color: "text-cyan-400" },
  { value: 3, suffix: " Min", label: "Average Wash Time", desc: "vs 35 minutes manually", color: "text-emerald-400" },
  { value: 260, suffix: "M+", label: "Two-Wheelers in India", desc: "total addressable market", color: "text-purple-400" },
  { value: 91, suffix: "%", label: "Riders Want This", desc: "willing to switch to automated wash", color: "text-amber-400" },
];

function AnimatedNumber({ target, suffix, color, inView }) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 1800;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) { setCount(target); clearInterval(timer); }
      else setCount(Math.floor(start));
    }, 16);
    return () => clearInterval(timer);
  }, [inView, target]);
  return (
    <span className={`text-5xl sm:text-6xl font-black ${color}`}>
      {count}{suffix}
    </span>
  );
}

export default function ImpactStats() {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true); }, { threshold: 0.3 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section ref={ref} className="py-24 px-4 bg-gradient-to-b from-slate-950 to-slate-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_50%,rgba(6,182,212,0.06),transparent)]" />
      <div className="max-w-6xl mx-auto relative">

        <div className="text-center mb-16 space-y-3">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-cyan-400 bg-cyan-500/10 px-3 py-1 rounded-full border border-cyan-500/20">
            Our Impact
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-white mt-4">
            Numbers That Matter
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {STATS.map(({ value, suffix, label, desc, color }) => (
            <div key={label} className="space-y-2">
              <AnimatedNumber target={value} suffix={suffix} color={color} inView={inView} />
              <div className="text-white font-bold text-base">{label}</div>
              <div className="text-slate-500 text-xs">{desc}</div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}