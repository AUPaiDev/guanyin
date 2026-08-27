import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Sparkles, 
  BookOpen, 
  Scroll, 
  RotateCcw,
  Flame,
  Volume2
} from 'lucide-react';
import { OrientalBackground } from './components/OrientalBackground';
import { Step1Meditation } from './components/Step1Meditation';
import { Step2InkCanvas } from './components/Step2InkCanvas';
import { Step3Result } from './components/Step3Result';
import { ShareModal } from './components/ShareModal';
import { LotBrowserModal } from './components/LotBrowserModal';
import { AudioToggle } from './components/AudioToggle';
import { MobileWoodenFish } from './components/MobileWoodenFish';
import { MobileLibraryView } from './components/MobileLibraryView';
import { FortuneHistoryView } from './components/FortuneHistoryView';
import { RitualStep, GuanyinLot, AIInterpretation, AppTab, FortuneRecord } from './types';
import { getRandomGuanyinLot, QUESTION_CATEGORIES } from './data/guanyinLots';
import { playLotRevealSound, playSingingBowl, playWoodenFish, triggerHaptic } from './utils/audio';

const STORAGE_KEY_RECORDS = 'guanyin_fortune_records';

export default function App() {
  const [activeTab, setActiveTab] = useState<AppTab>('divine');
  const [step, setStep] = useState<RitualStep>('meditation');
  const [questionCategory, setQuestionCategory] = useState<string>('general');
  const [customQuestion, setCustomQuestion] = useState<string>('');
  const [drawnSymbolDataUrl, setDrawnSymbolDataUrl] = useState<string | null>(null);
  const [selectedLot, setSelectedLot] = useState<GuanyinLot | null>(null);
  
  // History Records
  const [fortuneRecords, setFortuneRecords] = useState<FortuneRecord[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY_RECORDS);
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // AI Interpretation State
  const [aiInterpretation, setAiInterpretation] = useState<AIInterpretation | null>(null);
  const [isInterpretingAI, setIsInterpretingAI] = useState<boolean>(false);

  // Modals
  const [isShareModalOpen, setIsShareModalOpen] = useState(false);
  const [isLotBrowserOpen, setIsLotBrowserOpen] = useState(false);

  // Save records to localStorage
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY_RECORDS, JSON.stringify(fortuneRecords));
    } catch (e) {
      console.warn('Failed to save fortune records:', e);
    }
  }, [fortuneRecords]);

  // Step 1 -> Step 2
  const handleProceedToDrawing = () => {
    setStep('drawing');
    triggerHaptic(20);
  };

  // Step 2 -> Step 3 (After drawing & bamboo cylinder shaking)
  const handleSymbolDrawn = async (dataUrl: string) => {
    setDrawnSymbolDataUrl(dataUrl);
    
    // Pick an authentic lot
    const lot = getRandomGuanyinLot();
    setSelectedLot(lot);
    setStep('result');
    playLotRevealSound();
    triggerHaptic(40);

    const questionText = customQuestion.trim() || QUESTION_CATEGORIES.find(c => c.id === questionCategory)?.name || "心中所惑";

    // Add to history records
    const newRecord: FortuneRecord = {
      id: Date.now().toString(),
      lot,
      drawnSymbolDataUrl: dataUrl,
      question: questionText,
      category: questionCategory,
      timestamp: Date.now(),
      dateStr: new Date().toLocaleDateString('zh-CN', {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric'
      })
    };

    setFortuneRecords(prev => [newRecord, ...prev.slice(0, 49)]);

    // Trigger AI interpretation in background
    fetchAIInterpretation(lot, dataUrl, questionText);
  };

  const fetchAIInterpretation = async (lot: GuanyinLot, symbolUrl: string | null, qText?: string) => {
    setIsInterpretingAI(true);
    const categoryObj = QUESTION_CATEGORIES.find(c => c.id === questionCategory);
    const finalQuestion = qText || customQuestion.trim() || categoryObj?.defaultPrompt || "心中所惑";

    try {
      const response = await fetch('/api/interpret-lot', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          lot,
          drawnSymbolDataUrl: symbolUrl,
          question: finalQuestion,
          category: categoryObj?.name || "心中所念 / 决疑"
        })
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      setAiInterpretation(data);
    } catch (err) {
      console.error('Failed to get AI interpretation:', err);
      // High-quality Classical Fallback
      setAiInterpretation({
        symbolInsight: "符印笔势蕴含定力与向善之气，心意至诚，感通自然。",
        questionAnalysis: `所问之事与此【${lot.title}】相应。《观音灵签》示曰：“${lot.verseMeaning}”。顺势而为，心正道顺。`,
        philosophicalWisdom: lot.zenAdvice,
        favorableAction: ["修持善念", "顺应时机", "沉着应变"],
        unfavorableAction: ["心急求成", "猜忌生隙", "自乱阵脚"],
        blessingVerse: "一念至诚通法界\n观音慈光照灵台\n洗尽尘劳随缘过\n春风拂处百花开"
      });
    } finally {
      setIsInterpretingAI(false);
    }
  };

  // Redraw from scratch
  const handleRedraw = () => {
    playSingingBowl(432);
    triggerHaptic(20);
    setStep('meditation');
    setDrawnSymbolDataUrl(null);
    setSelectedLot(null);
    setAiInterpretation(null);
  };

  // History item selected
  const handleSelectHistoryRecord = (record: FortuneRecord) => {
    setSelectedLot(record.lot);
    setDrawnSymbolDataUrl(record.drawnSymbolDataUrl);
    setCustomQuestion(record.question);
    setStep('result');
    setActiveTab('divine');
    fetchAIInterpretation(record.lot, record.drawnSymbolDataUrl, record.question);
  };

  const handleClearHistory = () => {
    setFortuneRecords([]);
    localStorage.removeItem(STORAGE_KEY_RECORDS);
  };

  // From library view select lot to reveal
  const handleSelectLotFromLibrary = (lot: GuanyinLot) => {
    setSelectedLot(lot);
    setStep('result');
    setActiveTab('divine');
    fetchAIInterpretation(lot, drawnSymbolDataUrl);
  };

  const currentCategoryName = QUESTION_CATEGORIES.find(c => c.id === questionCategory)?.name || '心中所念';

  // Navigation Items
  const navTabs = [
    { id: 'divine', label: '求签', icon: Sparkles, badge: step === 'result' ? '已揭' : undefined },
    { id: 'wooden_fish', label: '木鱼', icon: Flame, badge: undefined },
    { id: 'library', label: '百签', icon: BookOpen, badge: '100' },
    { id: 'history', label: '存录', icon: Scroll, badge: fortuneRecords.length > 0 ? fortuneRecords.length : undefined }
  ];

  return (
    <div className="relative min-h-[100dvh] w-full flex flex-col font-serif bg-[#F2F0E9] text-[#2C2C2C] selection:bg-[#D92D20]/20 selection:text-[#D92D20] overflow-x-hidden">
      {/* 1. Atmospheric Background Texture */}
      <OrientalBackground />

      {/* Pure Mobile App Container: locked to standard smartphone viewport width */}
      <div className="flex-1 flex flex-col w-full max-w-md mx-auto relative bg-[#F2F0E9]/95 shadow-xl sm:border-x sm:border-stone-300/80 min-h-[100dvh]">

        {/* 2. Native Mobile Header Bar */}
        <header className="sticky top-0 z-30 w-full border-b border-stone-300/70 bg-[#F2F0E9]/90 backdrop-blur-md px-4 py-3 flex items-center justify-between shadow-2xs">
          {/* Logo & Brand */}
          <div 
            onClick={() => {
              setActiveTab('divine');
              handleRedraw();
            }}
            className="flex items-center gap-2 cursor-pointer active:opacity-80 transition-opacity"
          >
            <div className="w-8 h-8 border-2 border-[#D92D20] text-[#D92D20] rounded-xs flex items-center justify-center font-calligraphy text-base font-bold shadow-2xs">
              签
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <h1 className="text-base font-bold tracking-widest text-stone-900 leading-none font-serif">
                  观音灵签
                </h1>
                <span className="text-[9px] px-1 py-0.2 rounded-xs bg-[#D92D20] text-white tracking-wider font-sans font-medium">
                  普陀 · v1.0.1 (CI/CD)
                </span>
              </div>
              <p className="text-[10px] text-stone-500 italic font-serif leading-none mt-0.5">
                一念至诚 · 百签解惑
              </p>
            </div>
          </div>

          {/* Right Action Tools: Audio Switch */}
          <div className="flex items-center gap-2">
            <AudioToggle />
          </div>
        </header>

        {/* 3. Main Touch Content Area */}
        <main className="flex-1 flex flex-col px-3 py-2 pb-24 overflow-y-auto">
          <AnimatePresence mode="wait">
            {/* TAB 1: RITUAL DIVINATION (求签) */}
            {activeTab === 'divine' && (
              <motion.div
                key="tab-divine"
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -4 }}
                transition={{ duration: 0.2 }}
                className="w-full flex-1 flex flex-col justify-center"
              >
                {step === 'meditation' && (
                  <Step1Meditation
                    questionCategory={questionCategory}
                    setQuestionCategory={setQuestionCategory}
                    customQuestion={customQuestion}
                    setCustomQuestion={setCustomQuestion}
                    onProceed={handleProceedToDrawing}
                  />
                )}

                {step === 'drawing' && (
                  <Step2InkCanvas
                    question={customQuestion || currentCategoryName}
                    onSymbolDrawn={handleSymbolDrawn}
                    onBack={() => setStep('meditation')}
                  />
                )}

                {step === 'result' && selectedLot && (
                  <Step3Result
                    lot={selectedLot}
                    drawnSymbolDataUrl={drawnSymbolDataUrl}
                    question={customQuestion || currentCategoryName}
                    category={currentCategoryName}
                    aiInterpretation={aiInterpretation}
                    isInterpretingAI={isInterpretingAI}
                    onOpenShareModal={() => setIsShareModalOpen(true)}
                    onRedraw={handleRedraw}
                    onOpenLotBrowser={() => setIsLotBrowserOpen(true)}
                  />
                )}
              </motion.div>
            )}

            {/* TAB 2: WOODEN FISH (木鱼) */}
            {activeTab === 'wooden_fish' && (
              <motion.div
                key="tab-wooden-fish"
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -4 }}
                transition={{ duration: 0.2 }}
                className="w-full flex-1"
              >
                <MobileWoodenFish />
              </motion.div>
            )}

            {/* TAB 3: LOT LIBRARY (百签) */}
            {activeTab === 'library' && (
              <motion.div
                key="tab-library"
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -4 }}
                transition={{ duration: 0.2 }}
                className="w-full flex-1"
              >
                <MobileLibraryView onSelectLotToReveal={handleSelectLotFromLibrary} />
              </motion.div>
            )}

            {/* TAB 4: FORTUNE HISTORY (存录) */}
            {activeTab === 'history' && (
              <motion.div
                key="tab-history"
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -4 }}
                transition={{ duration: 0.2 }}
                className="w-full flex-1"
              >
                <FortuneHistoryView
                  records={fortuneRecords}
                  onSelectRecord={handleSelectHistoryRecord}
                  onClearHistory={handleClearHistory}
                  onGoToDivination={() => {
                    setActiveTab('divine');
                    handleRedraw();
                  }}
                />
              </motion.div>
            )}
          </AnimatePresence>
        </main>

        {/* 4. Bottom Native App Tab Navigation Bar */}
        <nav className="fixed bottom-0 left-0 right-0 z-40 max-w-md mx-auto border-t border-stone-300/90 bg-[#F2F0E9]/95 backdrop-blur-md pt-1 pb-[max(env(safe-area-inset-bottom),0.5rem)] px-2 flex items-center justify-around shadow-lg">
          {navTabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => {
                  setActiveTab(tab.id as AppTab);
                  playWoodenFish();
                  triggerHaptic(15);
                }}
                className={`flex-1 flex flex-col items-center justify-center py-1 rounded-sm relative transition-all cursor-pointer ${
                  isActive
                    ? 'text-[#D92D20] font-bold'
                    : 'text-stone-500 hover:text-stone-800'
                }`}
              >
                <div className="relative">
                  <Icon className={`w-5 h-5 transition-transform ${isActive ? 'scale-110 stroke-[2.2]' : 'scale-100 stroke-[1.8]'}`} />
                  {tab.badge && (
                    <span className="absolute -top-1 -right-2.5 px-1 py-0.2 bg-[#D92D20] text-white text-[9px] font-sans font-bold rounded-full leading-none">
                      {tab.badge}
                    </span>
                  )}
                </div>
                <span className="text-[11px] font-serif mt-0.5 tracking-wider">
                  {tab.label}
                </span>

                {isActive && (
                  <motion.div
                    layoutId="activeTabIndicator"
                    className="absolute -bottom-0.5 w-5 h-0.5 bg-[#D92D20] rounded-full"
                  />
                )}
              </button>
            );
          })}
        </nav>
      </div>

      {/* 5. Modals */}
      {selectedLot && (
        <ShareModal
          isOpen={isShareModalOpen}
          onClose={() => setIsShareModalOpen(false)}
          lot={selectedLot}
          drawnSymbolDataUrl={drawnSymbolDataUrl}
          question={customQuestion || currentCategoryName}
        />
      )}

      <LotBrowserModal
        isOpen={isLotBrowserOpen}
        onClose={() => setIsLotBrowserOpen(false)}
        onSelectLot={(lot) => {
          setSelectedLot(lot);
          setStep('result');
          fetchAIInterpretation(lot, drawnSymbolDataUrl);
        }}
      />
    </div>
  );
}
