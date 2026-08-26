// Web Audio API Synthesizer for AquaRide AI Simulation
// Generates realistic water spray, foam bubble, brush motor, and cyclone air sounds without external audio files!

class SoundEngine {
  constructor() {
    this.ctx = null;
    this.noiseNode = null;
    this.gainNode = null;
    this.oscNode = null;
    this.isEnabled = true;
  }

  init() {
    if (!this.ctx) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (AudioContext) {
        this.ctx = new AudioContext();
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  toggleSound(enabled) {
    this.isEnabled = enabled;
    if (!enabled) {
      this.stopAll();
    }
  }

  playSpraySound(pressureBar = 75) {
    if (!this.isEnabled) return;
    this.init();
    if (!this.ctx) return;

    this.stopAll();

    // White noise generator for water spray
    const bufferSize = this.ctx.sampleRate * 2;
    const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      data[i] = Math.random() * 2 - 1;
    }

    const noise = this.ctx.createBufferSource();
    noise.buffer = buffer;
    noise.loop = true;

    // Filter to simulate water spray pitch
    const filter = this.ctx.createBiquadFilter();
    filter.type = 'bandpass';
    filter.frequency.value = 800 + (pressureBar * 15);
    filter.Q.value = 1.2;

    const gain = this.ctx.createGain();
    gain.gain.value = 0.08 + (pressureBar / 100) * 0.08;

    noise.connect(filter);
    filter.connect(gain);
    gain.connect(this.ctx.destination);

    noise.start();
    this.noiseNode = noise;
    this.gainNode = gain;
  }

  playFoamSound() {
    if (!this.isEnabled) return;
    this.init();
    if (!this.ctx) return;
    this.stopAll();

    // Low bubble hiss
    const bufferSize = this.ctx.sampleRate * 2;
    const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      data[i] = Math.random() * 2 - 1;
    }

    const noise = this.ctx.createBufferSource();
    noise.buffer = buffer;
    noise.loop = true;

    const filter = this.ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.value = 500;

    const gain = this.ctx.createGain();
    gain.gain.value = 0.1;

    noise.connect(filter);
    filter.connect(gain);
    gain.connect(this.ctx.destination);

    noise.start();
    this.noiseNode = noise;
    this.gainNode = gain;
  }

  playBrushSound() {
    if (!this.isEnabled) return;
    this.init();
    if (!this.ctx) return;
    this.stopAll();

    // Motor hum + sweep
    const osc = this.ctx.createOscillator();
    osc.type = 'triangle';
    osc.frequency.value = 120;

    const gain = this.ctx.createGain();
    gain.gain.value = 0.08;

    osc.connect(gain);
    gain.connect(this.ctx.destination);

    osc.start();
    this.oscNode = osc;
    this.gainNode = gain;
  }

  playAirDrySound() {
    if (!this.isEnabled) return;
    this.init();
    if (!this.ctx) return;
    this.stopAll();

    // High velocity cyclone wind
    const bufferSize = this.ctx.sampleRate * 2;
    const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      data[i] = Math.random() * 2 - 1;
    }

    const noise = this.ctx.createBufferSource();
    noise.buffer = buffer;
    noise.loop = true;

    const filter = this.ctx.createBiquadFilter();
    filter.type = 'highpass';
    filter.frequency.value = 1200;

    const gain = this.ctx.createGain();
    gain.gain.value = 0.12;

    noise.connect(filter);
    filter.connect(gain);
    gain.connect(this.ctx.destination);

    noise.start();
    this.noiseNode = noise;
    this.gainNode = gain;
  }

  playSuccessChime() {
    if (!this.isEnabled) return;
    this.init();
    if (!this.ctx) return;
    this.stopAll();

    const notes = [523.25, 659.25, 783.99, 1046.50]; // C Major arpeggio
    notes.forEach((freq, idx) => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      
      osc.type = 'sine';
      osc.frequency.value = freq;
      
      const startTime = this.ctx.currentTime + (idx * 0.1);
      gain.gain.setValueAtTime(0.12, startTime);
      gain.gain.exponentialRampToValueAtTime(0.001, startTime + 0.6);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(startTime);
      osc.stop(startTime + 0.6);
    });
  }

  stopAll() {
    if (this.noiseNode) {
      try { this.noiseNode.stop(); } catch (e) {}
      this.noiseNode = null;
    }
    if (this.oscNode) {
      try { this.oscNode.stop(); } catch (e) {}
      this.oscNode = null;
    }
  }
}

export const soundEffects = new SoundEngine();