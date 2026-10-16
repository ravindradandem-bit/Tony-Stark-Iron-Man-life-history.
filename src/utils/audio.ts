/**
 * Audio synthesis engine using Web Audio API for Stark HUD sound effects
 * Provides futuristic avionics beeps, arc reactor surges, repulsor blasts, and speech
 */

class StarkAudioEngine {
  private ctx: AudioContext | null = null;
  private isMuted: boolean = false;

  private initCtx() {
    if (!this.ctx && typeof window !== 'undefined') {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  public setMuted(muted: boolean) {
    this.isMuted = muted;
  }

  public getMuted(): boolean {
    return this.isMuted;
  }

  /**
   * High-tech tactical UI chirp
   */
  public playClick(freq = 1200, duration = 0.04) {
    if (this.isMuted) return;
    try {
      this.initCtx();
      if (!this.ctx) return;

      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, this.ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(freq * 1.5, this.ctx.currentTime + duration);

      gain.gain.setValueAtTime(0.08, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + duration);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start();
      osc.stop(this.ctx.currentTime + duration);
    } catch {
      // Audio context might be restricted before interaction
    }
  }

  /**
   * Arc Reactor Overdrive surge sound
   */
  public playOverdrive() {
    if (this.isMuted) return;
    try {
      this.initCtx();
      if (!this.ctx) return;

      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const subOsc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(140, now);
      osc.frequency.exponentialRampToValueAtTime(680, now + 0.6);

      subOsc.type = 'sine';
      subOsc.frequency.setValueAtTime(70, now);
      subOsc.frequency.linearRampToValueAtTime(220, now + 0.6);

      gain.gain.setValueAtTime(0.01, now);
      gain.gain.linearRampToValueAtTime(0.12, now + 0.3);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.7);

      osc.connect(gain);
      subOsc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(now);
      subOsc.start(now);
      osc.stop(now + 0.7);
      subOsc.stop(now + 0.7);
    } catch {
      // Ignore
    }
  }

  /**
   * Repulsor charging & discharge blast
   */
  public playRepulsor() {
    if (this.isMuted) return;
    try {
      this.initCtx();
      if (!this.ctx) return;

      const now = this.ctx.currentTime;
      // Whine ramp up
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'triangle';
      osc.frequency.setValueAtTime(400, now);
      osc.frequency.exponentialRampToValueAtTime(2400, now + 0.35);

      gain.gain.setValueAtTime(0.05, now);
      gain.gain.linearRampToValueAtTime(0.15, now + 0.3);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.4);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(now);
      osc.stop(now + 0.4);

      // Blast release at 0.35s
      setTimeout(() => {
        if (!this.ctx) return;
        const blastNow = this.ctx.currentTime;
        const blastOsc = this.ctx.createOscillator();
        const blastGain = this.ctx.createGain();

        blastOsc.type = 'sine';
        blastOsc.frequency.setValueAtTime(120, blastNow);
        blastOsc.frequency.exponentialRampToValueAtTime(30, blastNow + 0.3);

        blastGain.gain.setValueAtTime(0.2, blastNow);
        blastGain.gain.exponentialRampToValueAtTime(0.001, blastNow + 0.35);

        blastOsc.connect(blastGain);
        blastGain.connect(this.ctx.destination);

        blastOsc.start(blastNow);
        blastOsc.stop(blastNow + 0.35);
      }, 350);
    } catch {
      // Ignore
    }
  }

  /**
   * Speech synthesis for JARVIS lines
   */
  public speak(text: string) {
    if (typeof window === 'undefined' || !window.speechSynthesis) return;
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = 0.95;
    utterance.pitch = 0.9;
    const voices = window.speechSynthesis.getVoices();
    const ukVoice = voices.find(v => v.lang.includes('en-GB') || v.name.includes('British') || v.name.includes('Daniel') || v.name.includes('Arthur'));
    if (ukVoice) {
      utterance.voice = ukVoice;
    }
    window.speechSynthesis.speak(utterance);
  }
}

export const starkAudio = new StarkAudioEngine();
