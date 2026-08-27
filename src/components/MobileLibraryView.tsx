import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Search, 
  BookOpen, 
  ChevronRight, 
  X, 
  Sparkles,
  Compass,
  Scroll
} from 'lucide-react';
import { getGuanyinLotById } from '../data/guanyinLots';
import { GuanyinLot } from '../types';
import { playWoodenFish, triggerHaptic } from '../utils/audio';

interface MobileLibraryViewProps {
  onSelectLotToReveal: (lot: GuanyinLot) => void;
}

export const MobileLibraryView: React.FC<MobileLibraryViewProps> = ({
  onSelectLotToReveal
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedQuality, setSelectedQuality] = useState('all');
  const [activeLotDetail, setActiveLotDetail] = useState<GuanyinLot | null>(null);

  // 1 to 100 lots
  const allLots = Array.from({ length: 100 }, (_, i) => getGuanyinLotById(i + 1));

  const filteredLots = allLots.filter((lot) => {
    const matchesSearch =
      lot.title.includes(searchTerm) ||
      lot.poemLines.some(l => l.includes(searchTerm)) ||
      lot.storyAllusion.includes(searchTerm) ||
      lot.verseMeaning.includes(searchTerm) ||
      lot.id.toString() === searchTerm.trim();

    const matchesQuality = selectedQuality === 'all' || lot.quality === selectedQuality;

    return matchesSearch && matchesQuality;
  });

  const getFortuneTypeBadge = (quality: string) => {
    switch (quality) {
      case '上上':
      case '大吉':
      case '上吉':
        return 'border-[#D92D20] text-[#D92D20] bg-[#D92D20]/10';
      case '中吉':
      case '中平':
        return 'border-amber-700 text-amber-800 bg-amber-50';
      default:
        return 'border-stone-600 text-stone-700 bg-stone-100';
    }
  };

  return (
    <div className="w-full max-w-lg mx-auto px-4 py-3 flex flex-col min-h-[calc(100dvh-135px)] text-stone-900 font-serif">
      {/* Top Search & Stats */}
      <div className="space-y-2.5 mb-3">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-bold tracking-wider text-stone-900 flex items-center gap-1.5">
            <BookOpen className="w-4 h-4 text-[#D92D20]" />
            <span>观音灵签 · 百签宝库</span>
          </h2>
          <span className="text-xs text-stone-500 italic">
            共收录 100 签
          </span>
        </div>

        {/* Search Input Bar */}
        <div className="relative w-full">
          <Search className="w-4 h-4 text-stone-500 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="搜索签号 (如: 1)、典故 (如: 姜太公)、诗句..."
            className="w-full bg-white/85 border border-stone-400 focus:border-stone-900 rounded-sm pl-9 pr-8 py-2 text-xs text-stone-900 placeholder-stone-400 focus:outline-none transition-colors shadow-inner"
          />
          {searchTerm && (
            <button
              onClick={() => setSearchTerm('')}
              className="absolute right-2.5 top-1/2 -translate-y-1/2 text-stone-400 hover:text-stone-700 p-0.5"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          )}
        </div>

        {/* Quality Filter Chips */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 no-scrollbar text-xs">
          {['all', '上上', '大吉', '上吉', '中吉', '中平', '下下'].map((q) => (
            <button
              key={q}
              onClick={() => {
                setSelectedQuality(q);
                playWoodenFish();
                triggerHaptic(10);
              }}
              className={`px-2.5 py-1 rounded-sm border whitespace-nowrap transition-colors cursor-pointer text-xs ${
                selectedQuality === q
                  ? 'border-stone-900 bg-[#1a1a1a] text-stone-100 font-bold shadow-xs'
                  : 'border-stone-400/80 bg-white/70 text-stone-700 hover:bg-stone-200'
              }`}
            >
              {q === 'all' ? '全部' : q}
            </button>
          ))}
        </div>
      </div>

      {/* Lot List Grid */}
      <div className="flex-1 overflow-y-auto space-y-2 pb-6">
        <span className="text-[11px] text-stone-500 block mb-1">
          检索到 {filteredLots.length} 支签（点击查阅全本解签）：
        </span>

        {filteredLots.map((lot) => (
          <motion.button
            key={lot.id}
            onClick={() => {
              setActiveLotDetail(lot);
              playWoodenFish();
              triggerHaptic(15);
            }}
            className="w-full text-left p-3 rounded-sm border border-stone-300 bg-[#EBE8DF] hover:border-stone-400/90 active:bg-stone-200 transition-all flex items-center justify-between cursor-pointer shadow-2xs"
          >
            <div className="flex-1 pr-2">
              <div className="flex items-center gap-2 mb-1">
                <span className="font-bold text-sm text-stone-900">
                  第{lot.id}签 · {lot.title}
                </span>
                <span className={`text-[10px] px-1.5 py-0.5 rounded-sm border font-semibold ${getFortuneTypeBadge(lot.quality)}`}>
                  {lot.quality}
                </span>
              </div>
              <p className="text-xs text-stone-600 line-clamp-1 italic">
                {lot.poemLines[0]}，{lot.poemLines[1]}
              </p>
            </div>

            <ChevronRight className="w-4 h-4 text-stone-400 shrink-0" />
          </motion.button>
        ))}
      </div>

      {/* Mobile Lot Detail Bottom Sheet / Modal */}
      <AnimatePresence>
        {activeLotDetail && (
          <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-stone-900/60 backdrop-blur-xs p-0 sm:p-4">
            <motion.div
              initial={{ opacity: 0, y: '100%' }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 280 }}
              className="w-full max-w-lg max-h-[88vh] bg-[#EBE8DF] border-t sm:border border-stone-400 rounded-t-xl sm:rounded-sm shadow-2xl flex flex-col overflow-hidden text-stone-900 font-serif"
            >
              {/* Sheet Drag Bar on mobile */}
              <div className="sm:hidden w-12 h-1 bg-stone-400 rounded-full mx-auto my-2" />

              {/* Detail Header */}
              <div className="p-4 border-b border-stone-300 bg-[#F2F0E9] flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-bold text-stone-900">
                    第{activeLotDetail.id}签 · {activeLotDetail.title}
                  </h3>
                  <span className="text-xs text-[#D92D20] font-bold">
                    【 {activeLotDetail.quality} 】 · {activeLotDetail.solarTermOrGua || '观音感应'}
                  </span>
                </div>

                <button
                  onClick={() => setActiveLotDetail(null)}
                  className="w-8 h-8 rounded-sm flex items-center justify-center text-stone-500 hover:text-stone-900 hover:bg-stone-200 transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Scrollable Lot Text */}
              <div className="flex-1 overflow-y-auto p-4 space-y-3.5 bg-[#f8f6f0]">
                {/* Poem Box */}
                <div className="p-4 rounded-sm bg-white/80 border border-stone-300 text-center shadow-2xs">
                  <span className="text-xs text-[#D92D20] font-bold tracking-widest block mb-2">
                    【 签 诗 】
                  </span>
                  <div className="text-base sm:text-lg text-stone-900 font-bold space-y-1.5">
                    {activeLotDetail.poemLines.map((line, idx) => (
                      <div key={idx}>{line}</div>
                    ))}
                  </div>
                </div>

                {/* Classical Explanations */}
                <div className="space-y-2.5 text-xs">
                  <div className="p-3 bg-white/70 border border-stone-300 rounded-sm">
                    <strong className="text-stone-900 block mb-0.5 font-bold">【 诗意 】</strong>
                    <p className="text-stone-700 leading-relaxed">{activeLotDetail.verseMeaning}</p>
                  </div>

                  <div className="p-3 bg-white/70 border border-stone-300 rounded-sm">
                    <strong className="text-[#D92D20] block mb-0.5 font-bold">【 解曰 】</strong>
                    <p className="text-stone-700 leading-relaxed">{activeLotDetail.explanation}</p>
                  </div>

                  <div className="p-3 bg-white/70 border border-stone-300 rounded-sm">
                    <strong className="text-stone-800 block mb-0.5 font-bold">【 典故 】</strong>
                    <p className="text-stone-700 leading-relaxed">{activeLotDetail.storyAllusion}</p>
                  </div>

                  <div className="p-3 bg-stone-100 border border-stone-300 rounded-sm">
                    <strong className="text-stone-900 block mb-0.5 font-bold">【 观音心性箴言 】</strong>
                    <p className="text-stone-700 leading-relaxed italic">{activeLotDetail.zenAdvice}</p>
                  </div>
                </div>
              </div>

              {/* Bottom Action */}
              <div className="p-3.5 border-t border-stone-300 bg-[#F2F0E9] flex items-center gap-2">
                <button
                  onClick={() => {
                    const lotToUse = activeLotDetail;
                    setActiveLotDetail(null);
                    onSelectLotToReveal(lotToUse);
                  }}
                  className="flex-1 py-3 px-4 rounded-sm bg-[#1a1a1a] hover:bg-stone-800 text-stone-100 text-xs sm:text-sm font-bold tracking-wider transition-all shadow-md flex items-center justify-center gap-1.5 border border-stone-900 cursor-pointer"
                >
                  <Sparkles className="w-4 h-4 text-[#D92D20]" />
                  <span>以此签文作为当前求签揭示</span>
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};
