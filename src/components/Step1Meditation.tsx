import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Sparkles, 
  HelpCircle, 
  Compass, 
  Briefcase, 
  Heart, 
  Coins, 
  ShieldCheck, 
  Check, 
  ChevronRight
} from 'lucide-react';
import { QUESTION_CATEGORIES } from '../data/guanyinLots';
import { playSingingBowl, playWoodenFish } from '../utils/audio';

interface Step1Props {
  questionCategory: string;
  setQuestionCategory: (cat: string) => void;
  customQuestion: string;
  setCustomQuestion: (q: string) => void;
  onProceed: () => void;
}

export const Step1Meditation: React.FC<Step1Props> = ({
  questionCategory,
  setQuestionCategory,
  customQuestion,
  setCustomQuestion,
  onProceed
}) => {
  const [breathPhase, setBreathPhase] = useState<'吸气 · 澄心' | '屏息 · 默念' | '呼气 · 放空'>('吸气 · 澄心');
  const [breathCount, setBreathCount] = useState(1);
  const [hasMeditated, setHasMeditated] = useState(false);
  const [isMeditatingActive, setIsMeditatingActive] = useState(true);

  // Breathing loop for guided meditation
  useEffect(() => {
    if (!isMeditatingActive) return;

    let timer: NodeJS.Timeout;
    const runCycle = () => {
      setBreathPhase('吸气 · 澄心');
      timer = setTimeout(() => {
        setBreathPhase('屏息 · 默念');
        timer = setTimeout(() => {
          setBreathPhase('呼气 · 放空');
          timer = setTimeout(() => {
            setBreathCount(c => {
              const next = c + 1;
              if (next >= 3) setHasMeditated(true);
              return next;
            });
            runCycle();
          }, 3500);
        }, 4000);
      }, 3500);
    };

    runCycle();
    return () => clearTimeout(timer);
  }, [isMeditatingActive]);

  const handleStartRitual = () => {
    playSingingBowl(432);
    onProceed();
  };

  const handleWoodenFishTap = () => {
    playWoodenFish();
  };

  const getCategoryIcon = (id: string) => {
    switch (id) {
      case 'career': return <Briefcase className="w-4 h-4" />;
      case 'love': return <Heart className="w-4 h-4 text-[#D92D20]" />;
      case 'wealth': return <Coins className="w-4 h-4 text-amber-700" />;
      case 'health': return <ShieldCheck className="w-4 h-4 text-emerald-700" />;
      default: return <Compass className="w-4 h-4 text-stone-700" />;
    }
  };

  const currentCatObj = QUESTION_CATEGORIES.find(c => c.id === questionCategory) || QUESTION_CATEGORIES[0];

  return (
    <div className="w-full max-w-md mx-auto px-2 py-2 flex flex-col items-center">
      {/* 1. Header Title & Seal */}
      <motion.div
        initial={{ opacity: 0, y: -6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="text-center mb-2.5"
      >
        <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-sm border border-stone-400 bg-white/80 text-stone-700 text-[10px] tracking-widest mb-1.5 shadow-2xs font-serif uppercase">
          <Sparkles className="w-3 h-3 text-[#D92D20]" />
          <span>南海普陀 · 净心澄意</span>
        </div>
        
        <h2 className="text-xl font-bold tracking-widest text-stone-900 mb-0.5 font-serif">
          第一步 · 净心默祷
        </h2>
        
        <p className="text-stone-500 italic text-[11px] font-serif max-w-xs mx-auto leading-relaxed">
          「心诚则灵，一念初起。」凝神默念所求之事。
        </p>
      </motion.div>

      {/* 2. Interactive Meditation Circle */}
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="relative w-44 h-44 my-1 flex items-center justify-center select-none"
      >
        {/* Outermost pulsing aura */}
        <motion.div
          className="absolute inset-0 rounded-full border border-stone-400/60 bg-radial from-stone-400/10 via-transparent to-transparent pointer-events-none"
          animate={{
            scale: breathPhase === '吸气 · 澄心' ? [1, 1.08] : breathPhase === '屏息 · 默念' ? 1.08 : [1.08, 1],
            opacity: breathPhase === '屏息 · 默念' ? 0.8 : 0.4,
          }}
          transition={{ duration: 3.5, ease: 'easeInOut' }}
        />

        {/* Middle Sanskrit / Lotus Ring */}
        <motion.div
          className="absolute inset-2 rounded-full border border-dashed border-stone-400/70 pointer-events-none"
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
        />

        {/* Inner Glowing Orb */}
        <motion.div
          className="relative w-36 h-36 rounded-full border-2 border-stone-400 bg-white/85 backdrop-blur-md flex flex-col items-center justify-center p-2.5 text-center shadow-md cursor-pointer active:scale-95 transition-transform"
          onClick={handleWoodenFishTap}
          whileTap={{ scale: 0.94 }}
        >
          {/* Subtle Guanyin lotus silhouette behind */}
          <div className="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none text-stone-900">
            <svg width="70" height="70" viewBox="0 0 100 100" fill="currentColor">
              <path d="M50 15 C45 35, 30 45, 20 60 C35 65, 45 75, 50 90 C55 75, 65 65, 80 60 C70 45, 55 35, 50 15 Z" />
            </svg>
          </div>

          <span className="text-[9px] text-[#D92D20] font-bold tracking-widest mb-0.5 border-b border-[#D92D20]/30 pb-0.5 uppercase">
            观音座前 · 诚意自感
          </span>

          <AnimatePresence mode="wait">
            <motion.div
              key={breathPhase}
              initial={{ opacity: 0, y: 3 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -3 }}
              className="text-base font-bold tracking-wider text-stone-900 my-0.5 font-serif"
            >
              {breathPhase}
            </motion.div>
          </AnimatePresence>

          <p className="text-[10px] text-stone-500 mt-0.5 italic">
            轻触圆环 · 敲木鱼定心
          </p>

          <div className="mt-1.5 flex items-center gap-1">
            {[1, 2, 3].map((num) => (
              <span
                key={num}
                className={`w-1.5 h-1.5 rounded-full transition-all duration-500 ${
                  breathCount >= num ? 'bg-[#D92D20] shadow-[0_0_5px_rgba(217,45,32,0.5)]' : 'bg-stone-300'
                }`}
              />
            ))}
          </div>
        </motion.div>
      </motion.div>

      {/* 3. Inquiry Category Selection (所求事由) */}
      <div className="w-full mt-2 sm:mt-4 bg-[#EBE8DF] border border-stone-300/80 rounded-sm p-3.5 sm:p-5 shadow-sm">
        <div className="flex items-center justify-between mb-3 border-b border-stone-300/60 pb-2">
          <div className="flex items-center gap-1.5">
            <div className="w-1.5 h-3.5 bg-[#D92D20] rounded-xs" />
            <h3 className="text-xs sm:text-sm font-bold tracking-wider text-stone-900">
              选择决疑事由
            </h3>
          </div>
          <span className="text-[11px] text-stone-500 italic">一签问一事</span>
        </div>

        {/* Category Pills Grid - Mobile 3 cols */}
        <div className="grid grid-cols-3 sm:grid-cols-5 gap-2 mb-3.5">
          {QUESTION_CATEGORIES.map((cat) => {
            const isSelected = questionCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => {
                  setQuestionCategory(cat.id);
                  playWoodenFish();
                }}
                className={`flex flex-col items-center justify-center p-2 rounded-sm border text-center transition-all cursor-pointer ${
                  isSelected
                    ? 'border-stone-900 bg-[#1a1a1a] text-stone-100 shadow-xs font-medium'
                    : 'border-stone-400/80 bg-white/70 text-stone-700 hover:bg-stone-200'
                }`}
              >
                <div className="mb-1">{getCategoryIcon(cat.id)}</div>
                <span className="text-[11px] sm:text-xs">{cat.name}</span>
              </button>
            );
          })}
        </div>

        {/* Custom Question Text Input */}
        <div className="space-y-1.5">
          <div className="flex items-center justify-between text-xs text-stone-700 font-serif">
            <span>写下具体疑问（可留空心中默念）：</span>
            <span className="text-[10px] text-stone-400">{customQuestion.length}/40字</span>
          </div>
          <div className="relative">
            <input
              type="text"
              maxLength={40}
              value={customQuestion}
              onChange={(e) => setCustomQuestion(e.target.value)}
              placeholder={`例如：${currentCatObj.defaultPrompt}`}
              className="w-full bg-white/85 border border-stone-400 focus:border-stone-900 rounded-sm px-3 py-2 text-xs sm:text-sm text-stone-900 placeholder-stone-400 focus:outline-none transition-all shadow-inner"
            />
          </div>
          <p className="text-[10px] sm:text-[11px] text-stone-500 flex items-center gap-1 mt-1 italic">
            <HelpCircle className="w-3 h-3 text-[#D92D20] shrink-0" />
            <span className="truncate">{currentCatObj.tips}</span>
          </p>
        </div>
      </div>

      {/* 4. Action Button to proceed to Step 2 (画符) */}
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="w-full mt-3 sm:mt-5 flex flex-col items-center gap-1 pb-2"
      >
        <button
          onClick={handleStartRitual}
          className="w-full py-3.5 px-6 bg-[#1a1a1a] text-stone-100 rounded-sm hover:bg-stone-800 tracking-widest transition-all font-bold text-sm sm:text-base flex items-center justify-center gap-2 shadow-md cursor-pointer active:scale-[0.99] border border-stone-900"
        >
          <span>已默念完毕 · 临座画符</span>
          <ChevronRight className="w-4 h-4" />
        </button>

        <p className="text-[11px] text-stone-400 tracking-widest mt-0.5">
          闭目冥想 · 心诚则灵 · 祈福求签
        </p>
      </motion.div>
    </div>
  );
};
