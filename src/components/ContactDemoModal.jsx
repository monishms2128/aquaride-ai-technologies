import React, { useState } from 'react';
import { 
  X, 
  CheckCircle2, 
  Send, 
  ShieldCheck, 
  Sparkles
} from 'lucide-react';
import confetti from 'canvas-confetti';

export default function ContactDemoModal({ isOpen, onClose, prefilledTopic = '' }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    businessType: 'dealership',
    city: 'Chennai',
    dailyVolume: '30-50',
    message: prefilledTopic ? `Inquiry regarding: ${prefilledTopic}` : '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.5 }
        });
      } catch (e) {}
    }, 1200);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md animate-fade-in">
      <div 
        className="relative w-full max-w-2xl bg-slate-950 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl shadow-cyan-500/10 overflow-hidden max-h-[90vh] overflow-y-auto no-scrollbar"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Glow circle background */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl bg-slate-900/80 hover:bg-slate-800 text-slate-400 hover:text-white border border-slate-800 transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {!isSubmitted ? (
          <div className="space-y-6 text-left">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-mono font-bold uppercase mb-2">
                <Sparkles className="w-3.5 h-3.5" />
                <span>AquaRide Commercial Partnerships</span>
              </div>
              
              <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                Book a Free Station Demo <br />
                <span className="text-cyan-400">& Franchise Consultation</span>
              </h3>
              
              <p className="text-xs sm:text-sm text-slate-400 mt-1">
                Experience our live autonomous AI wash bay at our Chennai or Kanchipuram stations, or discuss a turnkey deployment for your location.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-300">Your Full Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Rajesh Sharma"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900/90 border border-slate-800 text-white text-xs focus:border-cyan-400 focus:outline-none transition-colors"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-300">Phone / WhatsApp *</label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. +91 98400 12345"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900/90 border border-slate-800 text-white text-xs focus:border-cyan-400 focus:outline-none transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-300">Work Email Address *</label>
                  <input
                    type="email"
                    required
                    placeholder="e.g. contact@business.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900/90 border border-slate-800 text-white text-xs focus:border-cyan-400 focus:outline-none transition-colors"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-300">Organization / Business Type</label>
                  <select
                    value={formData.businessType}
                    onChange={(e) => setFormData({ ...formData, businessType: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900/90 border border-slate-800 text-white text-xs focus:border-cyan-400 focus:outline-none transition-colors"
                  >
                    <option value="dealership">Automobile Dealership / Service Center</option>
                    <option value="fuel_station">Petrol Pump / Fuel Forecourt Retailer</option>
                    <option value="fleet">EV / Quick-Commerce Delivery Fleet</option>
                    <option value="franchise">Commercial Franchise Investor</option>
                    <option value="rider">Rider / General Inquiry</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-300">Target Deployment City</label>
                  <input
                    type="text"
                    placeholder="e.g. Chennai / Kanchipuram / Bengaluru"
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900/90 border border-slate-800 text-white text-xs focus:border-cyan-400 focus:outline-none transition-colors"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-300">Est. Daily Two-Wheeler Volume</label>
                  <select
                    value={formData.dailyVolume}
                    onChange={(e) => setFormData({ ...formData, dailyVolume: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900/90 border border-slate-800 text-white text-xs focus:border-cyan-400 focus:outline-none transition-colors"
                  >
                    <option value="10-25">10 - 25 Bikes / Day</option>
                    <option value="30-50">30 - 50 Bikes / Day</option>
                    <option value="50-100">50 - 100+ Bikes / Day</option>
                  </select>
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-300">Message / Specific Requirements</label>
                <textarea
                  rows={3}
                  placeholder="Tell us about your workshop space, forecourt layout, or preferred demo slot..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900/90 border border-slate-800 text-white text-xs focus:border-cyan-400 focus:outline-none transition-colors"
                />
              </div>

              <div className="p-3 rounded-2xl bg-cyan-950/40 border border-cyan-500/20 text-slate-300 text-[11px] flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Fast response: Our technical deployment director will call within 2 business hours.</span>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 via-sky-400 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-black text-xs transition-all shadow-xl shadow-cyan-500/20 cursor-pointer flex items-center justify-center gap-2 disabled:opacity-50"
              >
                {isSubmitting ? (
                  <span>SCHEDULING CONSULTATION...</span>
                ) : (
                  <>
                    <Send className="w-3.5 h-3.5" />
                    <span>CONFIRM & REQUEST DEMO / FRANCHISE KIT</span>
                  </>
                )}
              </button>
            </form>
          </div>
        ) : (
          <div className="py-8 text-center space-y-5 animate-fade-in">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 border-2 border-emerald-400 text-emerald-400 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <div className="space-y-2">
              <h3 className="text-2xl font-black text-white">Consultation Request Received!</h3>
              <p className="text-xs sm:text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                Thank you, <strong>{formData.name}</strong>. Our enterprise team has received your request for <strong>{formData.city}</strong>. We will send the full commercial brochure & franchise financial model to <strong>{formData.email}</strong> shortly.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 max-w-md mx-auto text-left text-xs space-y-1.5 font-mono">
              <div className="flex justify-between text-slate-400">
                <span>Inquiry Ref ID:</span>
                <span className="text-cyan-400 font-bold">AQ-DEMO-{Math.floor(1000 + Math.random() * 9000)}</span>
              </div>
              <div className="flex justify-between text-slate-400">
                <span>Direct Hotline:</span>
                <span className="text-white">+91 98400 98210</span>
              </div>
              <div className="flex justify-between text-slate-400">
                <span>Priority:</span>
                <span className="text-emerald-400 font-bold">High (Same-Day Callback)</span>
              </div>
            </div>

            <button
              onClick={handleReset}
              className="px-8 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 font-black text-xs hover:from-cyan-400 hover:to-blue-500 transition-all cursor-pointer"
            >
              Done & Return to Website
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
