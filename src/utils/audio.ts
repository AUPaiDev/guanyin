/**
 * Web Audio API synthesizer for Zen temple sounds (Singing bowl, Wooden fish, Bamboo sticks, Temple chime, Brush stroke)
 * Pure synthesized audio without external audio file dependencies.
 */

let audioCtx: AudioContext | null = null;
let isMuted = false;

function getAudioContext(): AudioContext | null {
  if (typeof window === 'undefined') return null;
  if (!audioCtx) {
    const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    if (AudioContextClass) {
      audioCtx = new AudioContextClass();
    }
  }
  if (audioCtx && audioCtx.state === 'suspended') {
    audioCtx.resume();
  }
  return audioCtx;
}

export function setSoundMuted(muted: boolean) {
  isMuted = muted;
}

export function getSoundMuted(): boolean {
  return isMuted;
}

export function triggerHaptic(duration = 15) {
  if (typeof window !== 'undefined' && 'navigator' in window && 'vibrate' in navigator) {
    try {
      navigator.vibrate(duration);
    } catch {
      // Ignore vibration error on unsupported browsers
    }
  }
}

/**
 * Play sacred singing bowl / bronze bell chime (铜磬禅音)
 */
export function playSingingBowl(freq = 432) {
  if (isMuted) return;
  const ctx = getAudioContext();
  if (!ctx) return;

  const now = ctx.currentTime;
  const masterGain = ctx.createGain();
  masterGain.connect(ctx.destination);
  masterGain.gain.setValueAtTime(0.45, now);
  masterGain.gain.exponentialRampToValueAtTime(0.0001, now + 4.5);

  // Fundamental and harmonics
  const harmonics = [
    { f: freq, g: 0.6 },
    { f: freq * 2.02, g: 0.3 },
    { f: freq * 2.98, g: 0.15 },
    { f: freq * 4.2, g: 0.08 }
  ];

  harmonics.forEach(({ f, g }) => {
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(f, now);

    // Subtle pitch vibration
    osc.frequency.exponentialRampToValueAtTime(f * 0.998, now + 4.0);

    gain.gain.setValueAtTime(g, now);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + 4.0);

    osc.connect(gain);
    gain.connect(masterGain);

    osc.start(now);
    osc.stop(now + 4.5);
  });
}

/**
 * Play sacred wooden fish percussion (木鱼声)
 */
export function playWoodenFish() {
  triggerHaptic(20);
  if (isMuted) return;
  const ctx = getAudioContext();
  if (!ctx) return;

  const now = ctx.currentTime;
  const osc = ctx.createOscillator();
  const gain = ctx.createGain();

  osc.type = 'triangle';
  osc.frequency.setValueAtTime(280, now);
  osc.frequency.exponentialRampToValueAtTime(110, now + 0.12);

  gain.gain.setValueAtTime(0.6, now);
  gain.gain.exponentialRampToValueAtTime(0.001, now + 0.14);

  // Bandpass filter for hollow wood resonance
  const filter = ctx.createBiquadFilter();
  filter.type = 'bandpass';
  filter.frequency.setValueAtTime(450, now);
  filter.Q.setValueAtTime(4.0, now);

  osc.connect(gain);
  gain.connect(filter);
  filter.connect(ctx.destination);

  osc.start(now);
  osc.stop(now + 0.16);
}

/**
 * Play shaking bamboo fortune cylinder (摇签筒竹签碰撞声)
 */
export function playBambooShake() {
  triggerHaptic(25);
  if (isMuted) return;
  const ctx = getAudioContext();
  if (!ctx) return;

  const now = ctx.currentTime;
  
  // Rapid sequence of 3-5 gentle wooden clicks
  for (let i = 0; i < 4; i++) {
    const clickTime = now + i * 0.05 + Math.random() * 0.02;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    
    osc.type = 'sine';
    const pitch = 350 + Math.random() * 200;
    osc.frequency.setValueAtTime(pitch, clickTime);
    osc.frequency.exponentialRampToValueAtTime(180, clickTime + 0.04);
    
    gain.gain.setValueAtTime(0.25, clickTime);
    gain.gain.exponentialRampToValueAtTime(0.001, clickTime + 0.05);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start(clickTime);
    osc.stop(clickTime + 0.06);
  }
}

export const playShakingCylinder = playBambooShake;

/**
 * Subtle brush stroke sound (毛笔落墨微声)
 */
export function playBrushStroke() {
  if (isMuted) return;
  const ctx = getAudioContext();
  if (!ctx) return;

  const now = ctx.currentTime;
  const osc = ctx.createOscillator();
  const gain = ctx.createGain();

  osc.type = 'sine';
  osc.frequency.setValueAtTime(220, now);
  osc.frequency.exponentialRampToValueAtTime(180, now + 0.08);

  gain.gain.setValueAtTime(0.08, now);
  gain.gain.exponentialRampToValueAtTime(0.001, now + 0.08);

  osc.connect(gain);
  gain.connect(ctx.destination);

  osc.start(now);
  osc.stop(now + 0.09);
}

/**
 * Play high celestial shimmer / lot reveal chime (祥瑞仙音)
 */
export function playLotRevealSound() {
  if (isMuted) return;
  const ctx = getAudioContext();
  if (!ctx) return;

  const now = ctx.currentTime;
  const pitches = [528, 660, 792, 1056]; // Solfeggio / pentatonic harmonic chime

  pitches.forEach((freq, idx) => {
    const startTime = now + idx * 0.08;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(freq, startTime);

    gain.gain.setValueAtTime(0.25, startTime);
    gain.gain.exponentialRampToValueAtTime(0.0001, startTime + 2.8);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start(startTime);
    osc.stop(startTime + 3.0);
  });
}
