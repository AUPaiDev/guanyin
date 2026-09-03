import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Sparkles, 
  Share2, 
  RotateCcw, 
  BookOpen, 
  Scroll, 
  CheckCircle2, 
  XCircle, 
  Lightbulb, 
  Compass, 
  Feather,
  Info,
  Flame,
  Volume2
} from 'lucide-react';
import { GuanyinLot, AIInterpretation, LotLanguage } from '../types';
import { playWoodenFish, playSingingBowl } from '../utils/audio';
import { useLotTranslation } from '../utils/useLotTranslation';


interface Step3Props {
  lot: GuanyinLot;
  drawnSymbolDataUrl: string | null;
  question: string;
  category: string;
  aiInterpretation: AIInterpretation | null;
  isInterpretingAI: boolean;
  onOpenShareModal: () => void;
  onRedraw: () => void;
  onOpenLotBrowser: () => void;
}

export const Step3Result: React.FC<Step3Props> = ({
  lot,
  drawnSymbolDataUrl,
  question,
  category,
  aiInterpretation,
  isInterpretingAI,
  onOpenShareModal,
  onRedraw,
  onOpenLotBrowser
}) => {
  const [activeTab, setActiveTab] = useState<'classic' | 'ai' | 'aspects'>('ai');
  const [lang, setLang] = useState<LotLanguage>('zh');
  const { t, hasTranslation } = useLotTranslation(lot, lang);



  const getFortuneTypeBadge = (quality: string) => {
    switch (quality) {
      case '上上':
      case '大吉':
      case '上吉':
        return 'bg-[#D92D20] text-white border border-[#D92D20]';
      case '中吉':
      case '中平':
        return 'bg-[#b45309] text-white border border-[#b45309]';
      default:
        return 'bg-stone-700 text-stone-100 border border-stone-600';
    }
  };

  return (
    <div className="w-full max-w-md mx-auto px-2 py-2 flex flex-col items-center">
      {/* 1. Header Banner */}
      <div className="w-full text-center mb-3">
        <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-sm border border-stone-400 bg-white/80 text-stone-800 text-[10px] tracking-widest uppercase mb-1 shadow-2xs font-serif">
          <Sparkles className="w-3 h-3 text-[#D92D20]" />
          <span>灵签感应 · 昭示机缘</span>
        </div>
        <h2 className="text-xl font-bold tracking-widest text-stone-900 font-serif">
          揭签证道 · 观音解签
        </h2>
        <p className="text-[11px] text-stone-500 italic mt-0.5 font-serif">
          所问：「{question || '心中所求'}」· 签音已至，顺应自然
        </p>
      </div>

      {/* Language Switcher — only shown when translation data is available */}
      {hasTranslation && (
        <div className="flex items-center gap-1 mb-2 self-end">
          {(['zh', 'en', 'ja'] as LotLanguage[]).map((l) => (
            <button
              key={l}
              onClick={() => { setLang(l); playWoodenFish(); }}
              className={`px-2 py-0.5 rounded-sm text-[10px] font-bold tracking-wider transition-all cursor-pointer border font-serif ${
                lang === l
                  ? 'bg-[#1a1a1a] text-stone-100 border-stone-900'
                  : 'bg-white/70 text-stone-600 border-stone-300 hover:bg-stone-200'
              }`}
            >
              {l === 'zh' ? '中文' : l === 'en' ? 'EN' : '日本語'}
            </button>
          ))}
        </div>
      )}


      <div className="w-full flex flex-col gap-3 items-stretch">
        
        {/* Mobile Top: Traditional Authentic Bamboo Scroll */}
        <div className="w-full flex flex-col items-center">
          <motion.div
            initial={{ scale: 0.96, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="w-full bg-[#f8f6f0] border-2 border-stone-400 rounded-sm p-4 shadow-md relative overflow-hidden"
          >
            {/* Corner traditional decoration */}
            <div className="absolute top-1.5 left-1.5 w-3 h-3 border-t-2 border-l-2 border-stone-400" />
            <div className="absolute top-1.5 right-1.5 w-3 h-3 border-t-2 border-r-2 border-stone-400" />
            <div className="absolute bottom-1.5 left-1.5 w-3 h-3 border-b-2 border-l-2 border-stone-400" />
            <div className="absolute bottom-1.5 right-1.5 w-3 h-3 border-b-2 border-r-2 border-stone-400" />

            {/* Lot Header */}
            <div className="flex items-center justify-between border-b-2 border-stone-300 pb-2.5 mb-2.5">
              <div>
                <span className="text-[10px] text-stone-500 tracking-widest font-serif block">
                  观音灵签 · 百签典藏
                </span>
                <h3 className="text-xl font-bold text-stone-900 font-serif">
                  第 {lot.id} 签 · {lot.title}
                </h3>
              </div>
              <div className="flex flex-col items-end gap-0.5">
                <span className={`px-2 py-0.5 text-xs font-bold rounded-sm tracking-wider shadow-2xs ${getFortuneTypeBadge(lot.quality)}`}>
                  {lot.quality}
                </span>
                <span className="text-[10px] text-stone-500 font-serif">
                  {lot.solarTermOrGua || '感应宫'}
                </span>
              </div>
            </div>

            {/* Classical Poem */}
            <div className="my-2.5 py-3 px-3 bg-[#EBE8DF]/90 border border-stone-300 rounded-sm">
              <div className="text-center mb-1.5">
                <span className="text-[10px] text-[#D92D20] font-bold tracking-widest uppercase">
                  【 签 诗 】
                </span>
              </div>
              <div className="text-center space-y-1 font-serif text-base font-bold text-stone-900 tracking-widest leading-relaxed">
                {lot.poemLines.map((line, idx) => (
                  <p key={idx} className="hover:text-[#D92D20] transition-colors">
                    {line}
                  </p>
                ))}
              </div>
            </div>

            {/* Historical Story & Palace Info */}
            <div className="space-y-1.5 text-xs text-stone-700 font-serif border-t border-stone-300 pt-2.5">
              <div className="flex items-start gap-1.5">
                <span className="text-stone-900 font-bold shrink-0">
                  {lang === 'en' ? 'Legend:' : lang === 'ja' ? '故事：' : '典故：'}
                </span>
                <span className="text-stone-800">{t('allusion', lot.storyAllusion)}</span>
              </div>
              <div className="flex items-start gap-1.5">
                <span className="text-stone-900 font-bold shrink-0">
                  {lang === 'en' ? 'Verse Meaning:' : lang === 'ja' ? '詩意：' : '诗意：'}
                </span>
                <span className="text-stone-800 leading-relaxed">{t('meaning', lot.verseMeaning)}</span>
              </div>
            </div>


            {/* Drawn Symbol Watermark / Stamp at bottom */}
            {drawnSymbolDataUrl && (
              <div className="mt-3 pt-2.5 border-t border-dashed border-stone-300 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 border border-stone-400 bg-white rounded-xs p-0.5 shadow-inner">
                    <img
                      src={drawnSymbolDataUrl}
                      alt="手绘灵符"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div>
                    <span className="text-[9px] text-stone-500 font-serif block">心愿符印</span>
                    <span className="text-[11px] text-stone-800 font-bold font-serif">已通灵加持</span>
                  </div>
                </div>

                <div className="w-8 h-8 border-2 border-[#D92D20] text-[#D92D20] rounded-xs flex items-center justify-center font-calligraphy text-xs font-bold rotate-6 shadow-2xs">
                  大吉
                </div>
              </div>
            )}
          </motion.div>
        </div>

        {/* Mobile Guidance & In-depth Interpretation */}
        <div className="w-full flex flex-col">
          {/* Tab Navigation */}
          <div className="flex items-center gap-1 mb-2.5 border-b border-stone-300/80 pb-1.5 overflow-x-auto no-scrollbar">
            {[
              { id: 'ai', label: '玄机智析', icon: Sparkles },
              { id: 'aspects', label: '百事占验', icon: Compass },
              { id: 'classic', label: '典籍释意', icon: Scroll }
            ].map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => {
                    setActiveTab(tab.id as any);
                    playWoodenFish();
                  }}
                  className={`flex-1 flex items-center justify-center gap-1 px-2.5 py-1.5 rounded-sm text-xs font-serif whitespace-nowrap transition-all cursor-pointer ${
                    isActive
                      ? 'bg-[#1a1a1a] text-stone-100 font-bold shadow-xs border border-stone-900'
                      : 'bg-white/70 text-stone-700 border border-stone-300 hover:bg-stone-200'
                  }`}
                >
                  <Icon className={`w-3 h-3 ${isActive ? 'text-[#D92D20]' : 'text-stone-500'}`} />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>

          {/* Tab 1: AI Comprehensive Interpretation */}
          {activeTab === 'ai' && (
            <motion.div
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-[#EBE8DF] border border-stone-300/80 rounded-sm p-4 sm:p-5 shadow-sm space-y-3.5"
            >
              {isInterpretingAI ? (
                <div className="py-8 flex flex-col items-center justify-center text-center space-y-3">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 2.5, repeat: Infinity, ease: 'linear' }}
                    className="w-8 h-8 border-2 border-stone-800 border-t-[#D92D20] rounded-full"
                  />
                  <div>
                    <h4 className="text-sm font-bold text-stone-900 font-serif">
                      正在参悟签意与心印...
                    </h4>
                    <p className="text-[11px] text-stone-500 mt-0.5 font-serif">
                      结合《观音解签》典籍与您所问「{question}」进行推演
                    </p>
                  </div>
                </div>
              ) : aiInterpretation ? (
                <>
                  {/* Symbol insight */}
                  <div className="p-3 bg-white/80 border border-stone-300 rounded-sm">
                    <div className="flex items-center gap-1.5 mb-1 text-stone-900 font-bold text-xs sm:text-sm font-serif">
                      <Feather className="w-3.5 h-3.5 text-[#D92D20]" />
                      <span>符印笔意解析</span>
                    </div>
                    <p className="text-xs text-stone-700 leading-relaxed font-serif">
                      {aiInterpretation.symbolInsight}
                    </p>
                  </div>

                  {/* Question specific analysis */}
                  <div className="p-3 bg-white/80 border border-stone-300 rounded-sm">
                    <div className="flex items-center gap-1.5 mb-1 text-stone-900 font-bold text-xs sm:text-sm font-serif">
                      <Compass className="w-3.5 h-3.5 text-[#D92D20]" />
                      <span>就事论签 · 破执解惑</span>
                    </div>
                    <p className="text-xs text-stone-700 leading-relaxed font-serif">
                      {aiInterpretation.questionAnalysis}
                    </p>
                  </div>

                  {/* Favorable vs Unfavorable Actions (宜 / 忌) */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    <div className="p-3 bg-emerald-50/80 border border-emerald-300/80 rounded-sm">
                      <div className="flex items-center gap-1 text-emerald-900 font-bold text-xs mb-1.5 font-serif">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700" />
                        <span>【 宜 】 行动契机</span>
                      </div>
                      <div className="flex flex-wrap gap-1">
                        {aiInterpretation.favorableAction.map((item, idx) => (
                          <span
                            key={idx}
                            className="px-1.5 py-0.5 rounded-sm bg-white/90 border border-emerald-300 text-emerald-800 text-[11px] font-serif"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="p-3 bg-rose-50/80 border border-rose-300/80 rounded-sm">
                      <div className="flex items-center gap-1 text-rose-900 font-bold text-xs mb-1.5 font-serif">
                        <XCircle className="w-3.5 h-3.5 text-rose-700" />
                        <span>【 忌 】 避让浮躁</span>
                      </div>
                      <div className="flex flex-wrap gap-1">
                        {aiInterpretation.unfavorableAction.map((item, idx) => (
                          <span
                            key={idx}
                            className="px-1.5 py-0.5 rounded-sm bg-white/90 border border-rose-300 text-rose-800 text-[11px] font-serif"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Zen Philosophical Verse */}
                  <div className="p-3.5 bg-stone-100/90 border-l-3 border-l-[#D92D20] border-y border-r border-stone-300 rounded-sm">
                    <span className="text-[10px] text-[#D92D20] font-bold tracking-widest font-serif block mb-0.5">
                      观音禅心开示
                    </span>
                    <p className="text-xs text-stone-800 font-serif leading-relaxed italic">
                      “{aiInterpretation.philosophicalWisdom}”
                    </p>
                  </div>
                </>
              ) : null}
            </motion.div>
          )}

          {/* Tab 2: Categorical Aspects (百事占验) */}
          {activeTab === 'aspects' && (
            <motion.div
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-[#EBE8DF] border border-stone-300/80 rounded-sm p-4 sm:p-5 shadow-sm"
            >
              <h4 className="text-xs sm:text-sm font-bold text-stone-900 mb-3 flex items-center gap-1.5 font-serif">
                <Compass className="w-3.5 h-3.5 text-[#D92D20]" />
                <span>
                  {lang === 'en'
                    ? 'Fortune by Life Aspect (Classic Guanyin Oracle)'
                    : lang === 'ja'
                    ? '各事の占い吉凶（観音全籤古典より）'
                    : '各事占验吉凶（依《观音全签》古本释义）'}
                </span>
              </h4>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {(() => {
                  // Use translated aspects if available, else fall back to original
                  const translatedAspects = lang !== 'zh'
                    ? (t('aspects', lot.aspects) as { label: string; result: string }[])
                    : lot.aspects;
                  const aspectsToShow = translatedAspects && translatedAspects.length > 0
                    ? translatedAspects
                    : lot.aspects;
                  return aspectsToShow.map((item, idx) => (
                    <div
                      key={idx}
                      className="p-2 bg-white/80 border border-stone-300 rounded-sm flex items-center justify-between"
                    >
                      <span className="text-xs font-bold text-stone-900 font-serif">
                        {item.label}
                      </span>
                      <span className="text-xs text-stone-700 font-serif font-medium">
                        {item.result || '平顺'}
                      </span>
                    </div>
                  ));
                })()}
              </div>
            </motion.div>
          )}

          {/* Tab 3: Classical Story & Text */}
          {activeTab === 'classic' && (
            <motion.div
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-[#EBE8DF] border border-stone-300/80 rounded-sm p-4 sm:p-5 shadow-sm space-y-3 font-serif"
            >
              <div className="p-3 bg-white/80 border border-stone-300 rounded-sm">
                <h5 className="text-[10px] text-[#D92D20] font-bold tracking-widest uppercase mb-0.5">
                  {lang === 'en' ? 'Historical Legend' : lang === 'ja' ? '故事の縁起' : '签诗典故渊源'}
                </h5>
                <p className="text-xs text-stone-700 leading-relaxed">
                  {t('allusion', lot.storyAllusion)}
                </p>
              </div>

              <div className="p-3 bg-white/80 border border-stone-300 rounded-sm">
                <h5 className="text-[10px] text-[#D92D20] font-bold tracking-widest uppercase mb-0.5">
                  {lang === 'en' ? 'Sacred Interpretation' : lang === 'ja' ? '解曰古文' : '解曰古文'}
                </h5>
                <p className="text-xs sm:text-sm font-bold text-stone-900 mb-1">
                  "{t('explanation', lot.explanation)}"
                </p>
                <p className="text-xs text-stone-600 leading-relaxed">
                  {lang === 'en'
                    ? 'This hexagram speaks to the present moment. Walk the right path with integrity; though there may be obstacles, the compassionate grace of Guanyin will ultimately prevail.'
                    : lang === 'ja'
                    ? 'この卦は現在の状況を示します。正しき道を歩み誠実であれば、観音様の慈悲によって必ず道が開かれます。'
                    : '此卦象意如春雷初动，万物苏醒。只要存心正直，不与人争一时之短长，必能受观音慈佑。'}
                </p>
              </div>

              {/* Zen Advice */}
              <div className="p-3 bg-white/80 border border-stone-300 rounded-sm border-l-2 border-l-[#D92D20]">
                <h5 className="text-[10px] text-[#D92D20] font-bold tracking-widest uppercase mb-0.5">
                  {lang === 'en' ? 'Zen Counsel' : lang === 'ja' ? '禅心の開示' : '禅心开示'}
                </h5>
                <p className="text-xs text-stone-700 leading-relaxed italic">
                  {t('zenAdvice', lot.zenAdvice)}
                </p>
              </div>
            </motion.div>
          )}


          {/* Action Buttons Toolbar (Mobile First) */}
          <div className="mt-4 flex items-center gap-2 pb-2">
            <button
              onClick={onOpenShareModal}
              className="flex-1 py-3 px-3 bg-[#1a1a1a] text-stone-100 hover:bg-stone-800 rounded-sm font-bold text-xs sm:text-sm tracking-wider flex items-center justify-center gap-1.5 shadow-md transition-all cursor-pointer font-serif border border-stone-900 active:scale-[0.99]"
            >
              <Share2 className="w-3.5 h-3.5 text-[#D92D20]" />
              <span>生成可分享签卡</span>
            </button>

            <button
              onClick={onRedraw}
              className="py-3 px-3 rounded-sm border border-stone-400 bg-white/70 text-stone-700 hover:bg-stone-200 text-xs font-serif transition-all flex items-center gap-1 cursor-pointer shadow-xs"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>重求</span>
            </button>

            <button
              onClick={onOpenLotBrowser}
              className="py-3 px-3 rounded-sm border border-stone-400 bg-white/70 text-stone-700 hover:bg-stone-200 text-xs font-serif transition-all flex items-center gap-1 cursor-pointer shadow-xs"
            >
              <BookOpen className="w-3.5 h-3.5" />
              <span>典库</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
