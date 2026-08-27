import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Search, BookOpen, Sparkles, ChevronRight } from 'lucide-react';
import { GUANYIN_LOTS_DATABASE, getGuanyinLotById } from '../data/guanyinLots';
import { GuanyinLot } from '../types';
import { playWoodenFish } from '../utils/audio';

interface LotBrowserModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectLot: (lot: GuanyinLot) => void;
}

export const LotBrowserModal: React.FC<LotBrowserModalProps> = ({
  isOpen,
  onClose,
  onSelectLot
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedQuality, setSelectedQuality] = useState<string>('all');
  const [viewingLot, setViewingLot] = useState<GuanyinLot | null>(null);

  // Generate complete list of 1 to 100
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

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 md:p-6 bg-stone-900/60 backdrop-blur-md">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="relative w-full max-w-4xl h-[85vh] bg-[#EBE8DF] border border-stone-400 rounded-sm shadow-2xl flex flex-col overflow-hidden text-stone-900 font-serif"
          >
            {/* Header */}
            <div className="p-4 md:p-5 border-b border-stone-300 bg-[#F2F0E9] flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xs border-2 border-[#D92D20] text-[#D92D20] flex items-center justify-center font-calligraphy text-lg font-bold shadow-xs">
                  百
                </div>
                <div>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 tracking-wider">
                    《观音灵签》百签全典宝库
                  </h3>
                  <p className="text-xs text-stone-500 italic">
                    收录完整一百签文 · 签诗 · 诗意 · 典故 · 圣意
                  </p>
                </div>
              </div>

              <button
                onClick={onClose}
                className="w-8 h-8 rounded-sm flex items-center justify-center text-stone-500 hover:text-stone-900 hover:bg-stone-200 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Search & Filter Bar */}
            <div className="p-3 md:p-4 border-b border-stone-300 bg-[#EBE8DF]/90 flex flex-wrap items-center justify-between gap-3">
              {/* Search input */}
              <div className="relative flex-1 min-w-[200px]">
                <Search className="w-4 h-4 text-stone-500 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="搜索签号、典故（如：姜太公、孔明、钟离）、诗句..."
                  className="w-full bg-white/80 border border-stone-400 focus:border-stone-900 rounded-sm pl-9 pr-4 py-2 text-xs md:text-sm text-stone-900 placeholder-stone-400 focus:outline-none transition-colors shadow-inner"
                />
              </div>

              {/* Quality Filters */}
              <div className="flex items-center gap-1.5 overflow-x-auto text-xs">
                {['all', '上上', '大吉', '上吉', '中吉', '中平', '下下'].map((q) => (
                  <button
                    key={q}
                    onClick={() => {
                      setSelectedQuality(q);
                      playWoodenFish();
                    }}
                    className={`px-2.5 py-1 rounded-sm border transition-colors whitespace-nowrap cursor-pointer ${
                      selectedQuality === q
                        ? 'border-stone-900 bg-[#1a1a1a] text-stone-100 font-bold shadow-xs'
                        : 'border-stone-400/80 bg-white/60 text-stone-700 hover:bg-stone-200'
                    }`}
                  >
                    {q === 'all' ? '全部签品' : q}
                  </button>
                ))}
              </div>
            </div>

            {/* Content Split (List / Detail) */}
            <div className="flex-1 overflow-hidden flex flex-col md:flex-row">
              {/* Left Lots Grid */}
              <div className="w-full md:w-1/2 overflow-y-auto p-3 border-r border-stone-300 space-y-2 bg-[#f8f6f0]">
                <span className="text-[11px] text-stone-500 px-1 block mb-2 italic">
                  共找到 {filteredLots.length} 支灵签（点击查看详情）：
                </span>

                {filteredLots.map((lot) => {
                  const isSelected = viewingLot?.id === lot.id;
                  return (
                    <button
                      key={lot.id}
                      onClick={() => {
                        setViewingLot(lot);
                        playWoodenFish();
                      }}
                      className={`w-full text-left p-3 rounded-sm border transition-all flex items-center justify-between cursor-pointer ${
                        isSelected
                          ? 'border-stone-900 bg-white shadow-md'
                          : 'border-stone-300/80 bg-white/60 hover:border-stone-400 hover:bg-stone-100'
                      }`}
                    >
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <span className="font-bold text-base text-stone-900">
                            第{lot.id}签 · {lot.title}
                          </span>
                          <span className={`text-[10px] px-1.5 py-0.5 rounded-sm border font-semibold ${
                            lot.quality.includes('上') || lot.quality.includes('大')
                              ? 'border-[#D92D20] text-[#D92D20] bg-[#D92D20]/10'
                              : 'border-stone-600 text-stone-700 bg-stone-100'
                          }`}>
                            {lot.quality}
                          </span>
                        </div>
                        <p className="text-xs text-stone-600 line-clamp-1 italic">
                          {lot.poemLines[0]}，{lot.poemLines[1]}
                        </p>
                      </div>

                      <ChevronRight className="w-4 h-4 text-stone-400" />
                    </button>
                  );
                })}
              </div>

              {/* Right Detail Pane */}
              <div className="w-full md:w-1/2 overflow-y-auto p-4 md:p-6 bg-[#EBE8DF]">
                {viewingLot ? (
                  <div className="space-y-4">
                    <div className="flex items-center justify-between border-b border-stone-300 pb-3">
                      <div>
                        <h4 className="text-xl font-bold text-stone-900">
                          第{viewingLot.id}签 · {viewingLot.title}
                        </h4>
                        <span className="text-xs text-[#D92D20] font-bold">
                          【 {viewingLot.quality} 】 · {viewingLot.solarTermOrGua}
                        </span>
                      </div>

                      <button
                        onClick={() => {
                          onSelectLot(viewingLot);
                          onClose();
                        }}
                        className="py-1.5 px-3 rounded-sm bg-[#1a1a1a] text-stone-100 text-xs font-bold hover:bg-stone-800 transition-colors shadow-xs cursor-pointer border border-stone-900"
                      >
                        以此签揭示
                      </button>
                    </div>

                    {/* Poem */}
                    <div className="p-3.5 rounded-sm bg-white/70 border border-stone-300 text-center">
                      <span className="text-xs text-[#D92D20] font-bold block mb-2">【 签 诗 】</span>
                      <div className="text-lg text-stone-900 font-bold space-y-1">
                        {viewingLot.poemLines.map((line, idx) => (
                          <div key={idx}>{line}</div>
                        ))}
                      </div>
                    </div>

                    {/* Meaning & Allusion */}
                    <div className="space-y-2.5 text-xs">
                      <div className="p-3 bg-white/60 border border-stone-300 rounded-sm">
                        <strong className="text-stone-900 block mb-0.5 font-bold">【 诗意 】</strong>
                        <p className="text-stone-700 leading-relaxed">{viewingLot.verseMeaning}</p>
                      </div>

                      <div className="p-3 bg-white/60 border border-stone-300 rounded-sm">
                        <strong className="text-[#D92D20] block mb-0.5 font-bold">【 解曰 】</strong>
                        <p className="text-stone-700 leading-relaxed">{viewingLot.explanation}</p>
                      </div>

                      <div className="p-3 bg-white/60 border border-stone-300 rounded-sm">
                        <strong className="text-stone-800 block mb-0.5 font-bold">【 典故 】</strong>
                        <p className="text-stone-700 leading-relaxed">{viewingLot.storyAllusion}</p>
                      </div>

                      <div className="p-3 bg-stone-100 border border-stone-300 rounded-sm">
                        <strong className="text-stone-900 block mb-0.5 font-bold">【 观音心性箴言 】</strong>
                        <p className="text-stone-700 leading-relaxed italic">{viewingLot.zenAdvice}</p>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="h-full flex flex-col items-center justify-center text-center text-stone-500 py-12">
                    <BookOpen className="w-10 h-10 text-stone-400 mb-2 opacity-70" />
                    <p className="text-sm">在左侧列表中点击任意灵签查看全本解析</p>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
