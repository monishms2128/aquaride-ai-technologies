import React, { useState, useEffect, useRef } from 'react';
import { VEHICLE_PROFILES, WASH_MODES } from '../../data/mockData';
import BikeCanvas from './BikeCanvas';
import confetti from 'canvas-confetti';
import { soundEffects } from '../../utils/audioEffects';
import { 
  Play, 
  Pause, 
  RotateCcw, 
  AlertOctagon, 
  Cpu, 
  Droplets, 
  Zap, 
  Gauge, 
  Clock, 
  ShieldCheck, 
  Layers, 
  Sparkles, 
  TrendingDown, 
  Camera, 
  CheckCircle2,
  Volume2,
  VolumeX,
  Upload,
  Image as ImageIcon,
  Download
} from 'lucide-react';

export default function WashSimulator() {
  const [selectedVehicle, setSelectedVehicle] = useState(VEHICLE_PROFILES[0]);
  const [selectedModeId, setSelectedModeId] = useState('ai_auto');
  const [dirtLevel, setDirtLevel] = useState(VEHICLE_PROFILES[0].baseDirtLevel);
  const [isScanning, setIsScanning] = useState(false);
  const [scanResult, setScanResult] = useState(null);
  const [isAudioEnabled, setIsAudioEnabled] = useState(true);

  // Custom Image Upload State
  const [customImage, setCustomImage] = useState(null);
  const fileInputRef = useRef(null);

  // Simulation Running States
  const [isWashing, setIsWashing] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [currentStageIdx, setCurrentStageIdx] = useState(0);
  const [elapsedSeconds, setElapsedSeconds] = useState(0);
  const [cleanedProgress, setCleanedProgress] = useState(0);
  const [washCompleted, setWashCompleted] = useState(false);

  const selectedMode = WASH_MODES.find(m => m.id === selectedModeId) || WASH_MODES[3];

  // Dynamic AI Auto-Sense Calculation
  const activeModeConfig = React.useMemo(() => {
    if (selectedModeId === 'ai_auto') {
      const dynamicDuration = Math.round(110 + (dirtLevel * 1.3));
      const dynamicWater = (16 + (dirtLevel * 0.22)).toFixed(1);
      const dynamicPressure = Math.round(50 + (dirtLevel * 0.65));
      const dynamicChemical = Math.round(30 + (dirtLevel * 0.8));
      const dynamicFreshWater = (dynamicWater * 0.25).toFixed(1);
      const dynamicCost = Math.round(60 + (dirtLevel * 0.6));

      return {
        ...selectedMode,
        durationSec: dynamicDuration,
        waterLiters: parseFloat(dynamicWater),
        avgPressureBar: dynamicPressure,
        chemicalDoseMl: dynamicChemical,
        netFreshWaterLiters: parseFloat(dynamicFreshWater),
        priceInr: dynamicCost,
        stages: [
          { name: 'Edge AI Camera & LiDAR Scan', duration: 15, pressure: 0, desc: `Neural net analyzed ${dirtLevel}% dirtiness on ${selectedVehicle.name}` },
          { name: 'Selective Dynamic Pre-Rinse', duration: Math.round(dynamicDuration * 0.22), pressure: dynamicPressure, desc: 'Variable 35 to 115 Bar gantry sweeps' },
          { name: 'Active Snow Foam & Degreaser', duration: Math.round(dynamicDuration * 0.20), pressure: 50, desc: `${dynamicChemical}ml chemical applied to grime zones` },
          { name: 'Contour Microfiber Scrubbing', duration: Math.round(dynamicDuration * 0.25), pressure: 60, desc: 'Dual EVA foam rollers sweep rims and swingarm' },
          { name: 'High-Velocity Final Hydro-Rinse', duration: Math.round(dynamicDuration * 0.18), pressure: dynamicPressure + 10, desc: '100% demineralized spot-free rinse' },
          { name: 'Cyclone Heated Air Dry', duration: Math.round(dynamicDuration * 0.15), pressure: 0, desc: 'Twin 3.5HP blowers clear moisture' }
        ]
      };
    }
    return selectedMode;
  }, [selectedModeId, selectedMode, dirtLevel, selectedVehicle]);

  const totalStages = activeModeConfig.stages.length;
  const currentStage = activeModeConfig.stages[currentStageIdx] || activeModeConfig.stages[0];

  // Sound effects sync
  useEffect(() => {
    soundEffects.toggleSound(isAudioEnabled);
  }, [isAudioEnabled]);

  useEffect(() => {
    if (!isWashing || isPaused || washCompleted) {
      soundEffects.stopAll();
      return;
    }

    if (currentStageIdx === 1 || currentStageIdx === 4) {
      soundEffects.playSpraySound(currentStage.pressure);
    } else if (currentStageIdx === 2) {
      soundEffects.playFoamSound();
    } else if (currentStageIdx === 3) {
      soundEffects.playBrushSound();
    } else if (currentStageIdx === 5) {
      soundEffects.playAirDrySound();
    } else {
      soundEffects.stopAll();
    }
  }, [isWashing, isPaused, currentStageIdx, washCompleted, currentStage]);

  // Trigger AI Camera Scan
  const handleTriggerAiScan = () => {
    setIsScanning(true);
    setScanResult(null);
    setTimeout(() => {
      const calculatedDirt = Math.min(95, Math.max(25, selectedVehicle.baseDirtLevel + Math.floor(Math.random() * 15 - 5)));
      setDirtLevel(calculatedDirt);
      setIsScanning(false);
      setScanResult({
        dirtIndex: calculatedDirt,
        greaseContentPct: Math.round(calculatedDirt * 0.45),
        sensitiveZonesDetected: selectedVehicle.sensitiveZones.length,
        recommendedPressure: calculatedDirt > 60 ? 105 : 75,
        confidence: '98.6%'
      });
    }, 1800);
  };

  // Image Upload Handler
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setCustomImage(event.target.result);
        handleTriggerAiScan();
      };
      reader.readAsDataURL(file);
    }
  };

  const handleVehicleChange = (v) => {
    setSelectedVehicle(v);
    setDirtLevel(v.baseDirtLevel);
    setScanResult(null);
    setCustomImage(null);
    handleReset();
  };

  useEffect(() => {
    let interval = null;
    if (isWashing && !isPaused && !washCompleted) {
      interval = setInterval(() => {
        setElapsedSeconds((prev) => {
          const nextSec = prev + 1;
          const totalSec = activeModeConfig.durationSec;
          
          const progress = Math.min(100, Math.round((nextSec / totalSec) * 100));
          setCleanedProgress(progress);

          let cumulative = 0;
          let stageIdx = 0;
          for (let i = 0; i < activeModeConfig.stages.length; i++) {
            cumulative += activeModeConfig.stages[i].duration;
            if (nextSec <= cumulative) {
              stageIdx = i;
              break;
            }
          }
          setCurrentStageIdx(stageIdx);

          if (nextSec >= totalSec) {
            setIsWashing(false);
            setWashCompleted(true);
            soundEffects.playSuccessChime();
            try {
              confetti({
                particleCount: 90,
                spread: 80,
                origin: { y: 0.6 }
              });
            } catch (e) {}
            return totalSec;
          }
          return nextSec;
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isWashing, isPaused, washCompleted, activeModeConfig]);

  const handleStart = () => {
    if (washCompleted) {
      handleReset();
    }
    setIsWashing(true);
    setIsPaused(false);
  };

  const handlePause = () => {
    setIsPaused(!isPaused);
  };

  const handleReset = () => {
    setIsWashing(false);
    setIsPaused(false);
    setCurrentStageIdx(0);
    setElapsedSeconds(0);
    setCleanedProgress(0);
    setWashCompleted(false);
    soundEffects.stopAll();
  };

  const handleEmergencyStop = () => {
    setIsWashing(false);
    setIsPaused(true);
    soundEffects.stopAll();
    alert('EMERGENCY STOP ACTIVATED: Pressure manifolds sealed. Safety interlocks disengaged.');
  };

  const currentPressure = isWashing ? currentStage.pressure : 0;
  const currentWaterUsed = isWashing 
    ? ((elapsedSeconds / activeModeConfig.durationSec) * activeModeConfig.waterLiters).toFixed(1)
    : washCompleted ? activeModeConfig.waterLiters.toFixed(1) : '0.0';
  const waterSavedVsManual = (90 - parseFloat(currentWaterUsed)).toFixed(1);
  const remainingSeconds = Math.max(0, activeModeConfig.durationSec - elapsedSeconds);

  // Download Telemetry Report
  const handleDownloadReport = () => {
    const reportText = `AquaRide AI Technologies - Wash Cycle Telemetry Report
Vehicle: ${selectedVehicle.name} (${selectedVehicle.category})
Mode: ${activeModeConfig.name}
Dirt Density Index: ${dirtLevel}%
Duration: ${activeModeConfig.durationSec} seconds
Water Consumed: ${activeModeConfig.waterLiters} Liters
Water Saved vs Manual: ${waterSavedVsManual} Liters
Recirculation Rate: ${activeModeConfig.recycledWaterPct}%
Peak Pressure: ${activeModeConfig.avgPressureBar} Bar
Chemical Dispensed: ${activeModeConfig.chemicalDoseMl} ml
Energy Used: ${activeModeConfig.powerKwh} kWh
Cost per Wash: INR ${activeModeConfig.priceInr}
Generated on: ${new Date().toLocaleString()}
AquaRide AI Technologies Pvt. Ltd. | Autonomous Cyber-Physical System`;

    const blob = new Blob([reportText], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `AquaRide_Telemetry_${selectedVehicle.id}_${Date.now()}.txt`;
    a.click();
  };

  return (
    <div className="space-y-6 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
      
      {/* SECTION HEADER & QUICK TOGGLES */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-800 pb-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="p-2 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/30">
              <Droplets className="w-6 h-6 animate-pulse" />
            </span>
            <div>
              <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                AI Wash Bay Interactive Simulator
              </h2>
              <p className="text-xs sm:text-sm text-slate-400 font-medium">
                Test real-time dirt optical density detection, sensitive component masking, and dynamic fluid modulation.
              </p>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2">
          {/* Sound Toggle */}
          <button
            onClick={() => setIsAudioEnabled(!isAudioEnabled)}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-mono font-bold transition-all cursor-pointer ${
              isAudioEnabled 
                ? 'bg-cyan-950/80 text-cyan-300 border border-cyan-400/40 shadow-sm' 
                : 'bg-slate-900 text-slate-500 border border-slate-800'
            }`}
            title="Toggle sound effects (Web Audio Synthesizer)"
          >
            {isAudioEnabled ? <Volume2 className="w-3.5 h-3.5 text-cyan-400" /> : <VolumeX className="w-3.5 h-3.5" />}
            <span>Sound: {isAudioEnabled ? 'ON' : 'MUTED'}</span>
          </button>

          {/* Telemetry Report Download */}
          <button
            onClick={handleDownloadReport}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-700 text-xs font-mono font-bold transition-all cursor-pointer"
            title="Download Telemetry Log"
          >
            <Download className="w-3.5 h-3.5 text-cyan-400" />
            <span>Export Log</span>
          </button>
        </div>
      </div>

      {/* VEHICLE SELECTOR BUTTONS */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
        {VEHICLE_PROFILES.map((v) => {
          const isSelected = selectedVehicle.id === v.id;
          return (
            <button
              key={v.id}
              onClick={() => handleVehicleChange(v)}
              disabled={isWashing}
              className={`p-3.5 rounded-2xl text-left transition-all duration-200 cursor-pointer border ${
                isSelected
                  ? 'bg-cyan-950/70 border-cyan-400 shadow-lg shadow-cyan-500/15 scale-[1.02]'
                  : 'bg-slate-900/60 border-slate-800 hover:border-slate-700 opacity-80 hover:opacity-100'
              } ${isWashing ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold text-slate-400">{v.category}</span>
                {isSelected && (
                  <span className="text-[10px] font-extrabold px-1.5 py-0.5 rounded bg-cyan-500 text-slate-950">
                    ACTIVE
                  </span>
                )}
              </div>
              <div className="text-sm font-black text-white mt-1.5 truncate">{v.name}</div>
              <div className="text-[11px] text-slate-400 mt-0.5">{v.modelExample}</div>
              <div className="flex items-center justify-between text-[11px] text-cyan-300 font-mono mt-2 pt-2 border-t border-slate-800">
                <span>{v.weightKg} kg</span>
                <span>Base Dirt: {v.baseDirtLevel}%</span>
              </div>
            </button>
          );
        })}
      </div>

      {/* MAIN TWO-COLUMN WORKSPACE */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        
        {/* LEFT 7 COLS */}
        <div className="lg:col-span-7 space-y-4">
          
          <BikeCanvas
            vehicle={selectedVehicle}
            dirtLevel={dirtLevel}
            isScanning={isScanning}
            isWashing={isWashing}
            activeStageIndex={currentStageIdx}
            currentPressure={currentPressure}
            cleanedProgress={cleanedProgress}
          />

          {/* DIRT LEVEL SCANNER SLIDER / AI CAMERA TRIGGER & IMAGE UPLOAD */}
          <div className="glass-panel p-4 rounded-2xl border border-slate-800 space-y-3">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <div className="flex items-center gap-2">
                <Gauge className="w-4 h-4 text-cyan-400" />
                <span className="text-xs font-bold text-slate-200">Optical Dirt Accumulation Index:</span>
                <span className="text-xs font-mono font-extrabold text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/30">
                  {dirtLevel}% Dirtiness
                </span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={handleTriggerAiScan}
                  disabled={isWashing || isScanning}
                  className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-indigo-900/80 hover:bg-indigo-800 text-indigo-200 border border-indigo-500/40 text-xs font-bold transition-all duration-200 cursor-pointer disabled:opacity-50"
                >
                  <Camera className="w-3.5 h-3.5 text-indigo-400" />
                  <span>{isScanning ? 'Scanning...' : 'Trigger AI Vision Scan'}</span>
                </button>

                <input
                  type="file"
                  ref={fileInputRef}
                  onChange={handleImageUpload}
                  accept="image/*"
                  className="hidden"
                />
                <button
                  onClick={() => fileInputRef.current?.click()}
                  disabled={isWashing || isScanning}
                  className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-600 text-xs font-bold transition-all duration-200 cursor-pointer disabled:opacity-50"
                  title="Upload a photo of your bike to run AI Vision Detection"
                >
                  <Upload className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Upload Bike Photo</span>
                </button>
              </div>
            </div>

            <input
              type="range"
              min="10"
              max="95"
              value={dirtLevel}
              onChange={(e) => setDirtLevel(parseInt(e.target.value))}
              disabled={isWashing || isScanning}
              className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-400 disabled:opacity-50"
            />
            <div className="flex justify-between text-[10px] font-mono text-slate-500">
              <span>10% (Light Dust)</span>
              <span>50% (City Rain/Slush)</span>
              <span>95% (Heavy Off-Road Sludge)</span>
            </div>

            {scanResult && (
              <div className="p-3 rounded-xl bg-gradient-to-r from-indigo-950/90 to-slate-900 border border-indigo-500/40 text-xs text-indigo-200 flex items-center justify-between animate-fade-in">
                <div className="flex items-center gap-2">
                  <Cpu className="w-4 h-4 text-indigo-400" />
                  <span>
                    YOLOv8 Edge TPU: <strong>{scanResult.dirtIndex}% Dirt</strong> • {scanResult.sensitiveZonesDetected} Sensitive Masks applied.
                  </span>
                </div>
                <span className="font-mono text-[11px] text-emerald-400 font-bold">Confidence {scanResult.confidence}</span>
              </div>
            )}
          </div>

          {/* ACTIVE 6-STAGE SEQUENCE STEPPER */}
          <div className="glass-panel p-4 rounded-2xl border border-slate-800 space-y-3">
            <div className="flex items-center justify-between text-xs">
              <span className="font-bold text-slate-300 flex items-center gap-1.5">
                <Layers className="w-4 h-4 text-cyan-400" />
                Wash Stage Sequence Tracker
              </span>
              <span className="font-mono text-slate-400 font-semibold">
                Stage {currentStageIdx + 1} of {totalStages} ({cleanedProgress}% Completed)
              </span>
            </div>

            <div className="w-full h-2.5 bg-slate-900 rounded-full overflow-hidden border border-slate-800">
              <div 
                className="h-full bg-gradient-to-r from-cyan-500 via-sky-400 to-emerald-400 transition-all duration-500"
                style={{ width: `${cleanedProgress}%` }}
              />
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 pt-1">
              {activeModeConfig.stages.map((stg, sIdx) => {
                const isCurrent = isWashing && currentStageIdx === sIdx;
                const isDone = isWashing ? currentStageIdx > sIdx : washCompleted;
                return (
                  <div
                    key={sIdx}
                    className={`p-2 rounded-xl border text-left transition-all ${
                      isCurrent
                        ? 'bg-cyan-950/80 border-cyan-400 shadow-md shadow-cyan-500/20 scale-102'
                        : isDone
                        ? 'bg-emerald-950/40 border-emerald-500/30 opacity-90'
                        : 'bg-slate-900/40 border-slate-800/80 opacity-60'
                    }`}
                  >
                    <div className="flex items-center justify-between text-[10px] font-mono">
                      <span className={isCurrent ? 'text-cyan-300 font-bold' : isDone ? 'text-emerald-400' : 'text-slate-500'}>
                        Step 0{sIdx + 1}
                      </span>
                      {isDone && <CheckCircle2 className="w-3 h-3 text-emerald-400" />}
                    </div>
                    <div className="text-[11px] font-bold text-slate-200 mt-1 leading-tight line-clamp-2">
                      {stg.name}
                    </div>
                    <div className="text-[10px] font-mono text-cyan-400 mt-1">
                      {stg.pressure > 0 ? `${stg.pressure} Bar` : 'Sensors'}
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-800 text-xs text-slate-300 flex items-center justify-between font-mono">
              <span className="text-cyan-300">
                Current Activity: <strong>{currentStage.desc}</strong>
              </span>
              <span className="text-slate-400 font-bold">{currentStage.duration}s</span>
            </div>
          </div>

        </div>

        {/* RIGHT 5 COLS */}
        <div className="lg:col-span-5 space-y-4">
          
          <div className="glass-panel p-4 rounded-2xl border border-slate-800 space-y-3">
            <span className="text-xs font-bold text-slate-300 uppercase tracking-wider block">
              Select Automated Wash Mode:
            </span>

            <div className="grid grid-cols-2 gap-2">
              {WASH_MODES.map((mode) => {
                const isSelected = selectedModeId === mode.id;
                return (
                  <button
                    key={mode.id}
                    onClick={() => {
                      setSelectedModeId(mode.id);
                      handleReset();
                    }}
                    disabled={isWashing}
                    className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                      isSelected
                        ? 'bg-gradient-to-br from-cyan-950 via-slate-900 to-blue-950 border-cyan-400 shadow-lg shadow-cyan-500/20'
                        : 'bg-slate-900/70 border-slate-800 hover:border-slate-700'
                    } ${isWashing ? 'opacity-50 cursor-not-allowed' : ''}`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-black text-white">{mode.name}</span>
                      {mode.isAi && (
                        <span className="text-[9px] font-extrabold px-1.5 py-0.2 rounded bg-purple-500 text-white animate-pulse">
                          AI SENSE
                        </span>
                      )}
                    </div>
                    <div className="text-[10px] text-slate-400 mt-1 line-clamp-1">{mode.tagline}</div>
                    <div className="flex items-center justify-between text-[11px] font-mono mt-2 pt-1.5 border-t border-slate-800 text-cyan-300 font-bold">
                      <span>{mode.durationSec}s</span>
                      <span>{mode.waterLiters}L Water</span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="glass-panel-glow p-4 rounded-2xl border border-cyan-500/40 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-cyan-300 uppercase tracking-wider flex items-center gap-1.5">
                <Zap className="w-4 h-4 text-cyan-400" />
                Bay Execution Terminal
              </span>
              <div className="text-xs font-mono text-slate-400">
                Timer: <strong className="text-cyan-300">{remainingSeconds}s remaining</strong>
              </div>
            </div>

            <div className="grid grid-cols-4 gap-2">
              {!isWashing ? (
                <button
                  onClick={handleStart}
                  className="col-span-3 flex items-center justify-center gap-2 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 via-sky-400 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-black text-sm transition-all duration-200 shadow-xl shadow-cyan-500/25 hover:scale-[1.02] cursor-pointer"
                >
                  <Play className="w-4 h-4 fill-current" />
                  <span>START AUTOMATED WASH</span>
                </button>
              ) : (
                <button
                  onClick={handlePause}
                  className={`col-span-3 flex items-center justify-center gap-2 py-3.5 rounded-xl text-slate-950 font-black text-sm transition-all duration-200 cursor-pointer ${
                    isPaused ? 'bg-amber-400 hover:bg-amber-300' : 'bg-cyan-400 hover:bg-cyan-300'
                  }`}
                >
                  {isPaused ? <Play className="w-4 h-4 fill-current" /> : <Pause className="w-4 h-4 fill-current" />}
                  <span>{isPaused ? 'RESUME CYCLE' : 'PAUSE WASH'}</span>
                </button>
              )}

              <button
                onClick={handleReset}
                className="col-span-1 flex items-center justify-center rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-300 font-bold transition-all cursor-pointer"
                title="Reset Wash Simulation"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
            </div>

            <button
              onClick={handleEmergencyStop}
              className="w-full flex items-center justify-center gap-2 py-2 rounded-xl bg-red-950/80 hover:bg-red-900/90 text-red-300 border border-red-500/50 text-xs font-mono font-bold transition-all duration-200 cursor-pointer"
            >
              <AlertOctagon className="w-3.5 h-3.5 text-red-400" />
              <span>EMERGENCY INTERLOCK KILL SWITCH</span>
            </button>
          </div>

          <div className="glass-panel p-4 rounded-2xl border border-slate-800 space-y-3">
            <div className="flex items-center justify-between text-xs font-bold text-slate-300 border-b border-slate-800 pb-2">
              <span className="flex items-center gap-1.5">
                <Gauge className="w-4 h-4 text-cyan-400" />
                Live Sensor Telemetry
              </span>
              <span className="font-mono text-emerald-400 text-[11px]">Sampling: 100 Hz</span>
            </div>

            <div className="grid grid-cols-2 gap-2.5">
              <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800">
                <div className="flex items-center justify-between text-[11px] text-slate-400 font-medium">
                  <span>Water Consumed</span>
                  <Droplets className="w-3.5 h-3.5 text-cyan-400" />
                </div>
                <div className="text-xl font-black text-cyan-300 mt-1">
                  {currentWaterUsed} <span className="text-xs font-normal text-slate-400">Liters</span>
                </div>
                <div className="text-[10px] font-mono text-emerald-400 mt-0.5 flex items-center gap-1">
                  <TrendingDown className="w-3 h-3" />
                  <span>{waterSavedVsManual}L Saved vs Manual</span>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800">
                <div className="flex items-center justify-between text-[11px] text-slate-400 font-medium">
                  <span>VFD Pump Pressure</span>
                  <Gauge className="w-3.5 h-3.5 text-sky-400" />
                </div>
                <div className="text-xl font-black text-sky-300 mt-1">
                  {currentPressure} <span className="text-xs font-normal text-slate-400">Bar</span>
                </div>
                <div className="text-[10px] font-mono text-slate-400 mt-0.5">
                  Safe Envelope: &le; 120 Bar
                </div>
              </div>

              <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800">
                <div className="flex items-center justify-between text-[11px] text-slate-400 font-medium">
                  <span>Recirculation Rate</span>
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                </div>
                <div className="text-xl font-black text-emerald-300 mt-1">
                  {activeModeConfig.recycledWaterPct}% <span className="text-xs font-normal text-slate-400">Recycled</span>
                </div>
                <div className="text-[10px] font-mono text-slate-400 mt-0.5">
                  Fresh Intake: ~{activeModeConfig.netFreshWaterLiters} L
                </div>
              </div>

              <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800">
                <div className="flex items-center justify-between text-[11px] text-slate-400 font-medium">
                  <span>Chemical & Energy</span>
                  <Zap className="w-3.5 h-3.5 text-amber-400" />
                </div>
                <div className="text-xl font-black text-amber-300 mt-1">
                  {activeModeConfig.chemicalDoseMl} <span className="text-xs font-normal text-slate-400">ml / {activeModeConfig.powerKwh} kWh</span>
                </div>
                <div className="text-[10px] font-mono text-cyan-300 mt-0.5">
                  Est. Wash Cost: INR {activeModeConfig.priceInr}
                </div>
              </div>
            </div>

            {washCompleted && (
              <div className="p-3.5 rounded-2xl bg-gradient-to-r from-emerald-950 via-teal-950 to-slate-900 border border-emerald-400/50 text-emerald-200 space-y-1 animate-fade-in text-center">
                <div className="flex items-center justify-center gap-2 font-black text-sm text-emerald-300">
                  <Sparkles className="w-4 h-4 text-emerald-400" />
                  <span>AUTOMATED WASH COMPLETE!</span>
                </div>
                <p className="text-xs text-slate-300">
                  Vehicle 100% spotless. Sensitive electronics protected. Drained water reclaimed through Sand & Carbon filter bed.
                </p>
              </div>
            )}

          </div>

        </div>

      </div>

    </div>
  );
}