import React, { useMemo } from 'react';
import { motion } from 'motion/react';

export const OrientalBackground: React.FC = () => {
  // Generate random subtle floating dust / ember particles
  const particles = useMemo(() => {
    return Array.from({ length: 18 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2.5 + 1,
      duration: Math.random() * 14 + 10,
      delay: Math.random() * 6,
      opacity: Math.random() * 0.35 + 0.1
    }));
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0 bg-[#F2F0E9]">
      {/* 1. Ink Wash Radial Gradient Backdrop (Immersive UI specification) */}
      <div 
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          background: 'radial-gradient(circle at 70% 30%, #555 0%, transparent 40%), radial-gradient(circle at 20% 80%, #333 0%, transparent 50%), radial-gradient(circle at 50% 50%, #999 0%, transparent 100%)',
          filter: 'contrast(120%) brightness(90%)'
        }}
      />

      {/* 2. Soft Zen Aura Halo */}
      <div className="absolute top-10 right-16 md:top-14 md:right-28 w-36 h-36 md:w-56 md:h-56 rounded-full bg-radial from-[#d4af37]/15 via-[#D92D20]/5 to-transparent blur-2xl pointer-events-none" />

      {/* 3. Bottom Layered Ink Mountains & Gradient (Immersive UI specification) */}
      <div 
        className="absolute bottom-0 left-0 w-full h-72 opacity-35 select-none pointer-events-none flex items-end"
        style={{
          background: 'linear-gradient(to top, rgba(26, 26, 26, 0.4), transparent)',
          maskImage: 'radial-gradient(ellipse at 50% 100%, black 30%, transparent 95%)'
        }}
      >
        <svg viewBox="0 0 1000 200" preserveAspectRatio="none" className="w-full h-full fill-current text-stone-600">
          <path d="M0,200 L0,150 C100,100 200,180 300,140 C400,100 500,160 600,120 C700,80 850,150 1000,100 L1000,200 Z" opacity="0.55"/>
          <path d="M0,200 L0,120 C150,180 300,80 450,140 C600,200 800,100 1000,160 L1000,200 Z" opacity="0.35"/>
          <path d="M0,200 L0,170 C200,140 380,190 520,150 C720,110 880,180 1000,130 L1000,200 Z" opacity="0.25"/>
        </svg>
      </div>

      {/* 4. Drifting Cloud & Mist Layers */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
        <motion.div
          className="absolute -bottom-10 left-[-20%] w-[140%] h-64 bg-radial from-stone-400/20 via-stone-300/10 to-transparent blur-3xl"
          animate={{ x: [-30, 30, -30] }}
          transition={{ duration: 25, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-32 left-[-10%] w-[120%] h-48 bg-radial from-stone-400/15 via-transparent to-transparent blur-2xl"
          animate={{ x: [25, -25, 25] }}
          transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      {/* 5. Flying Cranes (仙鹤剪影) */}
      <motion.div
        className="absolute top-20 left-[12%] opacity-30"
        animate={{
          x: [0, 90, 180],
          y: [0, -10, -20],
          opacity: [0.15, 0.35, 0.1]
        }}
        transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
      >
        <svg width="38" height="24" viewBox="0 0 42 28" fill="none" className="text-stone-700">
          <path
            d="M2 14 C12 6, 20 2, 28 8 C34 12, 38 10, 41 8 C37 13, 31 16, 24 16 C17 16, 10 20, 2 26 C6 20, 5 16, 2 14 Z"
            fill="currentColor"
          />
        </svg>
      </motion.div>

      {/* 6. Subtle Floating Dust / Ink Sparkles */}
      <div className="absolute inset-0 pointer-events-none">
        {particles.map((p) => (
          <motion.div
            key={p.id}
            className="absolute rounded-full bg-stone-600 blur-[0.5px]"
            style={{
              left: `${p.x}%`,
              top: `${p.y}%`,
              width: `${p.size}px`,
              height: `${p.size}px`,
            }}
            animate={{
              y: [0, -40, -80],
              opacity: [0, p.opacity, 0],
              scale: [0.8, 1.1, 0.6]
            }}
            transition={{
              duration: p.duration,
              delay: p.delay,
              repeat: Infinity,
              ease: 'easeInOut'
            }}
          />
        ))}
      </div>
    </div>
  );
};
