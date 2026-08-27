import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Sparkles, 
  Volume2, 
  RotateCcw, 
  Play, 
  Pause, 
  Heart, 
  Flame,
  ShieldCheck
} from 'lucide-react';
import { playWoodenFish, triggerHaptic } from '../utils/audio';

interface Particle {
  id: number;
  text: string;
  x: number;
  y: number;
}

const CHANT_MANTRAS = [
  '功德 +1',
  '烦恼 -1',
  '福报 +1',
  '善念 +1',
  '心净 +1',
  '诸事顺遂 +1',
  '观音保佑 +1'
];

export const MobileWoodenFish: React.FC = () => {
  const [meritCount, setMeritCount] = useState<number>(() => {
    const saved = localStorage.getItem('guanyin_merit_count');
    return saved ? parseInt(saved, 10) : 108;
  });

  const [particles, setParticles] = useState<Particle[]>([]);
  const [isAutoTapping, setIsAutoTapping] = useState(false);
  const [tapEffect, setTapEffect] = useState(false);
  const [selectedMantra, setSelectedMantra] = useState('唵嘛呢叭咪吽');
  const particleIdRef = useRef(0);

  // Save merit count
  useEffect(() => {
    localStorage.setItem('guanyin_merit_count', meritCount.toString());
  }, [meritCount]);

  // Auto tapping effect
  useEffect(() => {
    if (!isAutoTapping) return;
    const interval = setInterval(() => {
      handleTap();
    }, 900);
    return () => clearInterval(interval);
  }, [isAutoTapping]);

  const handleTap = (e?: React.MouseEvent | React.TouchEvent) => {
    playWoodenFish();
    triggerHaptic(25);
    setMeritCount(prev => prev + 1);
    setTapEffect(true);
    setTimeout(() => setTapEffect(false), 120);

    // Random floating merit label
    const randomText = CHANT_MANTRAS[Math.floor(Math.random() * CHANT_MANTRAS.length)];
    const id = ++particleIdRef.current;

    // Slight random offset
    const offsetX = (Math.random() - 0.5) * 60;
    const offsetY = (Math.random() - 0.5) * 30;

    setParticles(prev => [
      ...prev.slice(-6),
      { id, text: randomText, x: offsetX, y: offsetY }
    ]);

    setTimeout(() => {
      setParticles(prev => prev.filter(p => p.id !== id));
    }, 1200);
  };

  const handleResetMerit = () => {
    if (window.confirm('是否重置今日功德计数？')) {
      setMeritCount(0);
      triggerHaptic(15);
    }
  };

  return (
    <div className="w-full max-w-lg mx-auto px-4 py-4 flex flex-col items-center justify-between min-h-[calc(100dvh-135px)] text-stone-900 font-serif">
      {/* Top Banner / Stat */}
      <div className="w-full text-center mt-2">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-sm border border-stone-400/80 bg-white/70 backdrop-blur-sm text-stone-800 text-xs tracking-widest shadow-xs">
          <Sparkles className="w-3.5 h-3.5 text-[#D92D20]" />
          <span>南海普陀 · 电子木鱼积福</span>
        </div>
        
        {/* Large Merit Display */}
        <div className="mt-3 flex flex-col items-center">
          <span className="text-xs text-stone-500 tracking-wider">今日累积善念功德</span>
          <div className="flex items-baseline gap-1.5 mt-0.5">
            <span className="text-3xl md:text-4xl font-bold tracking-widest text-[#D92D20] font-serif">
              {meritCount.toLocaleString()}
            </span>
            <span className="text-xs font-bold text-stone-600">次</span>
          </div>
        </div>
      </div>

      {/* Center Interactive Wooden Fish */}
      <div className="relative my-auto flex flex-col items-center justify-center py-6 select-none">
        {/* Floating Text Particles */}
        <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
          {particles.map((p) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 1, y: p.y, x: p.x, scale: 0.8 }}
              animate={{ opacity: 0, y: p.y - 90, x: p.x + (Math.random() * 20 - 10), scale: 1.25 }}
              transition={{ duration: 1.1, ease: 'easeOut' }}
              className="absolute text-sm md:text-base font-bold text-[#D92D20] font-calligraphy drop-shadow-sm whitespace-nowrap"
            >
              {p.text}
            </motion.div>
          ))}
        </div>

        {/* Ambient Halo behind wooden fish */}
        <motion.div
          animate={{
            scale: isAutoTapping ? [1, 1.08, 1] : 1,
            opacity: isAutoTapping ? [0.3, 0.7, 0.3] : 0.3
          }}
          transition={{ duration: 0.9, repeat: Infinity }}
          className="absolute w-56 h-56 rounded-full bg-radial from-[#D92D20]/20 via-amber-500/10 to-transparent pointer-events-none"
        />

        {/* Wooden Fish Main Button */}
        <motion.button
          onClick={handleTap}
          animate={{
            scale: tapEffect ? 0.92 : 1,
            rotate: tapEffect ? -2 : 0
          }}
          transition={{ type: 'spring', stiffness: 500, damping: 15 }}
          className="relative w-48 h-44 sm:w-56 sm:h-52 rounded-3xl bg-gradient-to-b from-[#704828] via-[#4d3019] to-[#331e0e] border-4 border-[#2b180a] shadow-2xl flex items-center justify-center cursor-pointer active:brightness-110 transition-all p-4 group"
          title="轻触敲木鱼"
        >
          {/* Wooden Fish Carved Pattern */}
          <div className="w-full h-full rounded-2xl border border-[#966b43]/30 flex flex-col items-center justify-between p-3 relative overflow-hidden">
            {/* Top Fish Eyes */}
            <div className="flex justify-between w-full px-4">
              <div className="w-4 h-4 rounded-full bg-[#1e1005] border border-[#a77c53]/40 shadow-inner" />
              <div className="w-4 h-4 rounded-full bg-[#1e1005] border border-[#a77c53]/40 shadow-inner" />
            </div>

            {/* Central Lotus & Sanskrit Motif */}
            <div className="w-16 h-16 rounded-full border-2 border-[#a77c53]/30 bg-[#241307]/60 flex items-center justify-center shadow-inner">
              <span className="font-calligraphy text-2xl text-[#d4a373] font-bold">
                禅
              </span>
            </div>

            {/* Bottom Fish Mouth Opening */}
            <div className="w-24 h-2.5 rounded-full bg-[#120902] border-t border-[#8f623a]/40 shadow-inner" />
          </div>

          {/* Golden Highlight Rim */}
          <div className="absolute top-2 left-6 right-6 h-4 rounded-t-2xl bg-white/10 pointer-events-none blur-xs" />
        </motion.button>

        <p className="text-xs text-stone-500 mt-4 tracking-widest italic text-center">
          轻触木鱼 · 静心凝神 · 积善去燥
        </p>
      </div>

      {/* Bottom Controls */}
      <div className="w-full bg-[#EBE8DF] border border-stone-300/80 rounded-sm p-4 shadow-sm space-y-3 mb-2">
        {/* Mantra Selector */}
        <div className="flex items-center justify-between text-xs">
          <span className="text-stone-600 font-bold">念诵真言：</span>
          <div className="flex gap-1">
            {['唵嘛呢叭咪吽', '南无观世音菩萨', '心平气和'].map((m) => (
              <button
                key={m}
                onClick={() => {
                  setSelectedMantra(m);
                  playWoodenFish();
                }}
                className={`px-2 py-1 rounded-sm border text-[11px] transition-colors cursor-pointer ${
                  selectedMantra === m
                    ? 'border-stone-900 bg-[#1a1a1a] text-stone-100 font-bold'
                    : 'border-stone-400/80 bg-white/70 text-stone-700 hover:bg-stone-200'
                }`}
              >
                {m}
              </button>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-2 pt-1">
          <button
            onClick={() => setIsAutoTapping(!isAutoTapping)}
            className={`flex-1 py-2.5 px-4 rounded-sm font-bold text-xs tracking-wider flex items-center justify-center gap-1.5 transition-all shadow-xs cursor-pointer border ${
              isAutoTapping
                ? 'bg-[#D92D20] text-white border-[#D92D20]'
                : 'bg-[#1a1a1a] text-stone-100 hover:bg-stone-800 border-stone-900'
            }`}
          >
            {isAutoTapping ? (
              <>
                <Pause className="w-4 h-4" />
                <span>停止自动敲击</span>
              </>
            ) : (
              <>
                <Play className="w-4 h-4" />
                <span>开启自动念经敲击</span>
              </>
            )}
          </button>

          <button
            onClick={handleResetMerit}
            className="p-2.5 rounded-sm border border-stone-400 bg-white/70 text-stone-600 hover:bg-stone-200 transition-colors cursor-pointer"
            title="重置计数"
          >
            <RotateCcw className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
