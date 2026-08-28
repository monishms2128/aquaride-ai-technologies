import React, { useState } from 'react';
import { Analytics } from '@vercel/analytics/react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import B2bSolutions from './components/B2bSolutions';
import ProblemSection from './components/ProblemSection';
import HowItWorks from './components/HowItWorks';
import WashSimulator from './components/Simulator/WashSimulator';
import CustomerMobileApp from './components/CustomerMobileApp';
import TechnologySection from './components/TechnologySection';
import WashPackages from './components/WashPackages';
import RoiCalculator from './components/RoiCalculator';
import IotDashboard from './components/IotDashboard';
import TestimonialsSection from './components/TestimonialsSection';
import Footer from './components/Footer';
import ContactDemoModal from './components/ContactDemoModal';

export default function App() {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const [modalTopic, setModalTopic] = useState('');

  const handleOpenDemoModal = (topic = '') => {
    setModalTopic(topic);
    setIsDemoModalOpen(true);
  };

  const handleCloseDemoModal = () => {
    setIsDemoModalOpen(false);
    setModalTopic('');
  };

  const scrollToSection = (href) => {
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col justify-between selection:bg-cyan-500 selection:text-slate-950 font-sans">
      
      {/* Global Sticky Navigation */}
      <Navbar 
        onOpenDemoModal={() => handleOpenDemoModal('Free Station Demo Booking')}
        onScrollToSection={scrollToSection}
      />

      <main className="flex-grow space-y-0">
        
        {/* 1. Hero Section */}
        <Hero 
          onOpenDemoModal={() => handleOpenDemoModal('Commercial Station Partnership')}
          onScrollToSection={scrollToSection}
        />

        {/* 2. Commercial & B2B Solutions */}
        <B2bSolutions 
          onOpenContact={(title) => handleOpenDemoModal(title)}
        />

        {/* 3. The Problem: Broken Status Quo vs Solution */}
        <ProblemSection />

        {/* 4. How It Works: 4-Step Wash Journey */}
        <HowItWorks />

        {/* 5. Interactive Live AI Wash Bay Simulator */}
        <section id="simulator-section" className="py-20 px-4 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 relative border-t border-slate-800/60">
          <div className="max-w-7xl mx-auto space-y-6">
            <div className="text-center space-y-3 max-w-3xl mx-auto">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-cyan-400 bg-cyan-500/10 px-4 py-1.5 rounded-full border border-cyan-500/20">
                Interactive Engineering Showcase
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
                Live AI Wash Bay <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Simulator</span>
              </h2>
              <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
                Test the core cyber-physical systems: vehicle model classification, optical dirt measurement, sensitive zone masking, and VFD pressure modulation.
              </p>
            </div>

            <WashSimulator />
          </div>
        </section>

        {/* 6. The AquaRide Rider Web App (PWA) Interactive Showcase */}
        <CustomerMobileApp />

        {/* 7. Proprietary Technology & Architecture */}
        <TechnologySection />

        {/* 8. Wash Packages & Pricing */}
        <WashPackages />

        {/* 9. Franchise & Commercial ROI Calculator */}
        <RoiCalculator 
          onOpenContact={(topic) => handleOpenDemoModal(topic)}
        />

        {/* 10. Live IoT Station Fleet Command Center */}
        <IotDashboard 
          onOpenContact={(topic) => handleOpenDemoModal(topic)}
        />

        {/* 11. Commercial Testimonials & Verified Case Studies */}
        <TestimonialsSection />

      </main>

      {/* Corporate Startup Footer */}
      <Footer 
        onScrollToSection={scrollToSection}
        onOpenDemoModal={() => handleOpenDemoModal('Franchise & Enterprise Inquiry')}
      />

      {/* Interactive Consultation & Demo Booking Modal */}
      <ContactDemoModal 
        isOpen={isDemoModalOpen}
        onClose={handleCloseDemoModal}
        prefilledTopic={modalTopic}
      />

      {/* Vercel Web Analytics */}
      <Analytics />

    </div>
  );
}