import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WashSimulator from './components/Simulator/WashSimulator';
import RoiCalculator from './components/RoiCalculator';
import IotDashboard from './components/IotDashboard';
import CustomerMobileApp from './components/CustomerMobileApp';
import PatentViewer from './components/PatentViewer';
import PitchDeckPresenter from './components/PitchDeckPresenter';
import Footer from './components/Footer';

export default function App() {
  const [activeTab, setActiveTab] = useState('simulator');

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col justify-between selection:bg-cyan-500 selection:text-slate-950">
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />

      <main className="flex-grow">
        {activeTab === 'simulator' && (
          <Hero 
            onStartDemo={() => {
              const el = document.getElementById('simulator-section');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
            onOpenPitch={() => setActiveTab('pitch')}
          />
        )}

        <div id="simulator-section" className="transition-all duration-300">
          {activeTab === 'simulator' && <WashSimulator />}
          {activeTab === 'roi' && <RoiCalculator />}
          {activeTab === 'iot' && <IotDashboard />}
          {activeTab === 'mobile' && <CustomerMobileApp />}
          {activeTab === 'patent' && <PatentViewer />}
          {activeTab === 'pitch' && <PitchDeckPresenter />}
        </div>
      </main>

      <Footer setActiveTab={setActiveTab} />
    </div>
  );
}