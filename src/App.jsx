import React, { useState } from 'react';
import { ThemeProvider, useTheme } from './context/ThemeContext';
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

function AppContent() {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const [modalTopic, setModalTopic] = useState('');
  const { isDark } = useTheme();

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
    <div className={`min-h-screen flex flex-col justify-between font-sans transition-colors duration-300 ${
      isDark ? 'bg-slate-950 text-slate-100 selection:bg-cyan-500 selection:text-slate-950' : 'bg-slate-50 text-slate-900 selection:bg-cyan-400 selection:text-slate-950'
    }`}>
      
      {/* Global Sticky Navigation with Light/Dark Switcher */}
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
        <section id="simulator-section" className={`py-20 px-4 relative border-t transition-colors duration-300 ${
          isDark 
            ? 'bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 border-slate-800/60' 
            : 'bg-gradient-to-b from-white via-slate-50 to-white border-slate-200 shadow-inner'
        }`}>
          <div className="max-w-7xl mx-auto space-y-6">
            <div className="text-center space-y-3 max-w-3xl mx-auto">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-cyan-500 bg-cyan-500/10 px-4 py-1.5 rounded-full border border-cyan-500/20">
                Interactive Engineering Showcase
              </span>
              <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight ${isDark ? 'text-white' : 'text-slate-900'}`}>
                Live AI Wash Bay <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Simulator</span>
              </h2>
              <p className={`text-sm sm:text-base leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                Test our cyber-physical systems: vehicle model classification, optical dirt measurement, sensitive zone masking, and closed-loop distilled water final rinse.
              </p>
            </div>

            <WashSimulator />
          </div>
        </section>

        {/* 6. The AquaRide Rider Web App (PWA) Interactive Showcase */}
        <CustomerMobileApp />

        {/* 7. Proprietary Technology & Distilled Water Architecture */}
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

    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}