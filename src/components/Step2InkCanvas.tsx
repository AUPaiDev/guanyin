import React, { useRef, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  RotateCcw, 
  Eraser, 
  Sparkles, 
  Check, 
  Flame, 
  Compass, 
  Info,
  ChevronLeft,
  PenTool
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { playBrushStroke, playShakingCylinder, playLotRevealSound, playWoodenFish } from '../utils/audio';

interface Step2Props {
  question: string;
  onSymbolDrawn: (symbolDataUrl: string) => void;
  onBack: () => void;
}

// Preset mystical symbols for quick inspiration / selection
const SYMBOL_PRESETS = [
  { name: '太极生两仪', symbol: '☯' },
  { name: '万字吉祥印', symbol: '卐' },
  { name: '梵心清净符', symbol: 'ॐ' },
  { name: '福寿安康印', symbol: '福' },
  { name: '观音甘露印', symbol: '莲' },
  { name: '诸事如意印', symbol: '吉' },
];

export const Step2InkCanvas: React.FC<Step2Props> = ({
  question,
  onSymbolDrawn,
  onBack
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [hasDrawnSomething, setHasDrawnSomething] = useState(false);
  const [strokeColor, setStrokeColor] = useState('#1a1a1a'); // Sumi Black
  const [brushSize, setBrushSize] = useState(4.5);
  const [isShakingCylinder, setIsShakingCylinder] = useState(false);
  const [shakeCount, setShakeCount] = useState(0);

  // Initialize Canvas with Rice Paper background
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set high DPI scaling
    const rect = canvas.getBoundingClientRect();
    const dpr = window.devicePixelRatio || 1;
    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
    ctx.scale(dpr, dpr);

    // Fill rice paper parchment tone
    ctx.fillStyle = '#f8f6f0';
    ctx.fillRect(0, 0, rect.width, rect.height);

    // Draw subtle guide watermark (Chinese Bagua / Lotus seal watermark)
    ctx.save();
    ctx.strokeStyle = 'rgba(120, 113, 108, 0.12)';
    ctx.lineWidth = 1;
    ctx.setLineDash([4, 4]);

    // Center circular guideline
    ctx.beginPath();
    ctx.arc(rect.width / 2, rect.height / 2, rect.height * 0.38, 0, Math.PI * 2);
    ctx.stroke();

    // Cross hair lines
    ctx.beginPath();
    ctx.moveTo(rect.width / 2, 20);
    ctx.lineTo(rect.width / 2, rect.height - 20);
    ctx.moveTo(20, rect.height / 2);
    ctx.lineTo(rect.width - 20, rect.height / 2);
    ctx.stroke();
    ctx.restore();
  }, []);

  // Drawing event handlers with mobile touch prevention
  const startDrawing = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    if ('touches' in e) {
      // Prevent scrolling while drawing on mobile
      e.stopPropagation();
    }

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    setIsDrawing(true);
    setHasDrawnSomething(true);
    playBrushStroke();

    const rect = canvas.getBoundingClientRect();
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;

    const x = clientX - rect.left;
    const y = clientY - rect.top;

    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    ctx.strokeStyle = strokeColor;
    ctx.lineWidth = brushSize;
  };

  const draw = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    if (!isDrawing) return;
    if ('touches' in e) {
      e.stopPropagation();
    }

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const rect = canvas.getBoundingClientRect();
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;

    const x = clientX - rect.left;
    const y = clientY - rect.top;

    ctx.lineTo(x, y);
    ctx.stroke();
  };

  const stopDrawing = () => {
    if (!isDrawing) return;
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    ctx.closePath();
    setIsDrawing(false);
  };

  // Clear Canvas
  const handleClearCanvas = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const rect = canvas.getBoundingClientRect();
    ctx.fillStyle = '#f8f6f0';
    ctx.fillRect(0, 0, rect.width, rect.height);

    // Redraw subtle guideline
    ctx.save();
    ctx.strokeStyle = 'rgba(120, 113, 108, 0.12)';
    ctx.lineWidth = 1;
    ctx.setLineDash([4, 4]);
    ctx.beginPath();
    ctx.arc(rect.width / 2, rect.height / 2, rect.height * 0.38, 0, Math.PI * 2);
    ctx.stroke();
    ctx.restore();

    setHasDrawnSomething(false);
    playWoodenFish();
  };

  // Stamp Preset Glyph
  const handleStampPreset = (symbol: string) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const rect = canvas.getBoundingClientRect();
    
    // Draw character in the center with calligraphy styling
    ctx.save();
    ctx.font = `bold ${rect.height * 0.45}px "Ma Shan Zheng", "Noto Serif SC", serif`;
    ctx.fillStyle = strokeColor;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.shadowColor = 'rgba(26, 26, 26, 0.2)';
    ctx.shadowBlur = 4;
    ctx.fillText(symbol, rect.width / 2, rect.height / 2 + 8);
    ctx.restore();

    setHasDrawnSomething(true);
    playBrushStroke();
  };

  // Step into Shaking the Bamboo Cylinder Ritual
  const handleInitiateShaking = () => {
    setIsShakingCylinder(true);
    setShakeCount(0);
    playShakingCylinder();

    // Auto-shake count progress
    const interval = setInterval(() => {
      setShakeCount((prev) => {
        if (prev >= 3) {
          clearInterval(interval);
          setTimeout(() => {
            finishRitual();
          }, 800);
          return 3;
        }
        playShakingCylinder();
        return prev + 1;
      });
    }, 750);
  };

  const finishRitual = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const dataUrl = canvas.toDataURL('image/png');
    
    // Confetti effect for blessing
    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.6 },
      colors: ['#D92D20', '#1a1a1a', '#b45309', '#e5e0d8']
    });

    onSymbolDrawn(dataUrl);
  };

  return (
    <div className="w-full max-w-md mx-auto px-2 py-2 flex flex-col items-center">
      {/* 1. Header with Question Context */}
      <div className="w-full flex items-center justify-between mb-2">
        <button
          onClick={onBack}
          className="flex items-center gap-1 text-xs text-stone-700 hover:text-stone-900 border border-stone-400/80 bg-white/70 px-2 py-1 rounded-sm transition-all cursor-pointer shadow-2xs font-serif"
        >
          <ChevronLeft className="w-3.5 h-3.5" />
          <span>返回</span>
        </button>

        <div className="text-center flex-1 mx-2">
          <span className="text-[9px] text-[#D92D20] font-bold tracking-widest uppercase block">
            心念所系 · 感通天地
          </span>
          <h2 className="text-sm font-bold tracking-wider text-stone-900 truncate">
            {question ? `「${question}」` : '心中所求之事'}
          </h2>
        </div>

        <div className="text-right">
          <span className="text-[10px] text-stone-500 italic">第二步 · 画符</span>
        </div>
      </div>

      {/* 2. Main Drawing Slate (Rice Paper Canvas Container) */}
      <div className="w-full bg-[#EBE8DF] border border-stone-300/80 rounded-sm p-3 shadow-sm flex flex-col gap-2.5 items-center">
        {/* Canvas Area */}
        <div className="w-full flex flex-col items-center">
          <div className="w-full relative rounded-sm overflow-hidden border-2 border-stone-400 shadow-inner bg-[#f8f6f0]">
            <canvas
              ref={canvasRef}
              className="w-full h-56 touch-none cursor-crosshair block"
              onMouseDown={startDrawing}
              onMouseMove={draw}
              onMouseUp={stopDrawing}
              onMouseLeave={stopDrawing}
              onTouchStart={startDrawing}
              onTouchMove={draw}
              onTouchEnd={stopDrawing}
            />

            {/* Instruction Overlay when not yet drawn */}
            {!hasDrawnSomething && (
              <div className="absolute inset-0 pointer-events-none flex flex-col items-center justify-center text-stone-400 p-4 text-center">
                <PenTool className="w-6 h-6 mb-1 text-stone-400 opacity-60 animate-bounce" />
                <p className="text-sm font-bold text-stone-700 tracking-wider">
                  在此处手绘心印、符号或随心挥毫
                </p>
                <p className="text-[11px] text-stone-500 mt-0.5 italic">
                  画一个心愿符号、一笔一划，或选用下方古篆吉印
                </p>
              </div>
            )}

            {/* Red Seal watermark on corner */}
            <div className="absolute bottom-2 right-2 pointer-events-none opacity-80">
              <div className="w-7 h-7 border border-[#D92D20] text-[#D92D20] rounded-xs flex items-center justify-center font-calligraphy text-xs font-bold rotate-6">
                印
              </div>
            </div>
          </div>

          {/* Canvas Bottom Tool Bar */}
          <div className="w-full mt-2.5 flex flex-wrap items-center justify-between gap-2 text-xs">
            {/* Ink Color Selection */}
            <div className="flex items-center gap-1.5">
              <span className="text-stone-600 text-[11px] font-serif">墨色：</span>
              {[
                { name: '松烟墨黑', color: '#1a1a1a' },
                { name: '朱砂赤红', color: '#D92D20' },
                { name: '泥金神采', color: '#b45309' },
                { name: '苍黛云青', color: '#475569' }
              ].map((c) => (
                <button
                  key={c.color}
                  onClick={() => setStrokeColor(c.color)}
                  className={`w-5 h-5 rounded-full border-2 transition-transform cursor-pointer shadow-xs ${
                    strokeColor === c.color ? 'scale-115 border-stone-900 ring-1 ring-stone-400' : 'border-white'
                  }`}
                  style={{ backgroundColor: c.color }}
                  title={c.name}
                />
              ))}
            </div>

            {/* Brush Thickness & Clear */}
            <div className="flex items-center gap-1.5">
              <span className="text-stone-600 text-[11px] font-serif">笔锋：</span>
              {[
                { label: '细', size: 2.5 },
                { label: '中', size: 5 },
                { label: '粗', size: 8 }
              ].map((b) => (
                <button
                  key={b.size}
                  onClick={() => setBrushSize(b.size)}
                  className={`px-1.5 py-0.5 rounded-sm border cursor-pointer text-[11px] font-serif ${
                    brushSize === b.size
                      ? 'border-stone-900 bg-[#1a1a1a] text-stone-100'
                      : 'border-stone-400/80 bg-white/70 text-stone-700'
                  }`}
                >
                  {b.label}
                </button>
              ))}

              <button
                onClick={handleClearCanvas}
                className="flex items-center gap-1 px-2 py-0.5 rounded-sm border border-stone-400/80 bg-white/70 text-stone-700 hover:bg-stone-200 transition-all cursor-pointer text-[11px] font-serif ml-1"
              >
                <Eraser className="w-3 h-3" />
                <span>清台</span>
              </button>
            </div>
          </div>
        </div>

        {/* Presets Row for Mobile */}
        <div className="w-full border-t border-stone-300/80 pt-2.5">
          <div className="flex items-center justify-between mb-1.5">
            <span className="text-[11px] font-bold text-stone-800 flex items-center gap-1">
              <Sparkles className="w-3 h-3 text-[#D92D20]" />
              <span>快捷古篆灵符 (点按落印)：</span>
            </span>
            <span className="text-[10px] text-stone-500 italic">一触即成</span>
          </div>

          <div className="grid grid-cols-6 gap-1.5">
            {SYMBOL_PRESETS.map((item) => (
              <button
                key={item.name}
                onClick={() => handleStampPreset(item.symbol)}
                className="flex flex-col items-center justify-center p-1.5 rounded-sm border border-stone-400/80 bg-white/70 hover:bg-stone-200 hover:border-stone-900 transition-all cursor-pointer shadow-xs active:scale-95"
              >
                <span className="font-calligraphy text-xl text-stone-900">
                  {item.symbol}
                </span>
                <span className="text-[9px] text-stone-600 mt-0.5 font-serif">
                  {item.name.slice(0, 2)}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <div className="w-full pt-1">
          <button
            onClick={handleInitiateShaking}
            disabled={!hasDrawnSomething}
            className={`w-full py-3 px-4 rounded-sm font-bold text-sm tracking-widest flex items-center justify-center gap-1.5 shadow-md transition-all font-serif ${
              hasDrawnSomething
                ? 'bg-[#1a1a1a] text-stone-100 hover:bg-stone-800 cursor-pointer border border-stone-900 active:scale-[0.99]'
                : 'bg-stone-300 text-stone-500 cursor-not-allowed border border-stone-300'
            }`}
          >
            <Flame className="w-4 h-4 text-[#D92D20]" />
            <span>封符 · 诚心摇签求指引</span>
          </button>
        </div>
      </div>

      {/* 3. Modal / Overlay: Bamboo Lot Cylinder Shaking Ritual (摇签仪式动画) */}
      <AnimatePresence>
        {isShakingCylinder && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-[#1a1a1a]/70 backdrop-blur-md flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.85, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.85, y: 20 }}
              className="w-full max-w-md bg-[#EBE8DF] border border-stone-400 rounded-sm p-8 text-center shadow-2xl relative overflow-hidden"
            >
              {/* Cinnabar Seal Header */}
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-sm border border-[#D92D20] text-[#D92D20] text-xs font-bold tracking-widest uppercase mb-4">
                <span>观音座前 · 灵签出筒</span>
              </div>

              <h3 className="text-2xl font-bold tracking-widest text-stone-900 mb-2 font-serif">
                正在虔心摇签...
              </h3>
              <p className="text-xs text-stone-600 mb-6 italic font-serif">
                心无旁骛 · 待灵签落地 · 第 {shakeCount}/3 阵
              </p>

              {/* Shaking Bamboo Cylinder Animation */}
              <div className="relative w-40 h-56 mx-auto my-4 flex items-center justify-center">
                {/* Bamboo Cylinder SVG Body */}
                <motion.div
                  className="relative w-28 h-48 bg-gradient-to-b from-[#8c6239] via-[#654321] to-[#4a2e12] rounded-t-xl rounded-b-md border-2 border-stone-800 shadow-2xl flex flex-col items-center justify-between p-2 overflow-hidden"
                  animate={{
                    rotate: [-12, 12, -10, 10, -6, 6, 0],
                    y: [-8, 8, -6, 6, -2, 2, 0],
                  }}
                  transition={{
                    duration: 0.7,
                    repeat: Infinity,
                    ease: 'easeInOut'
                  }}
                >
                  {/* Bamboo lots protruding */}
                  <div className="absolute -top-6 flex justify-center gap-1 w-full">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <motion.div
                        key={i}
                        className={`w-3.5 bg-gradient-to-b from-[#e3caa5] to-[#c5a880] border border-stone-800 rounded-t-sm ${
                          i === 3 ? 'h-16 -translate-y-4 bg-[#D92D20] text-stone-100' : 'h-12'
                        }`}
                        animate={{
                          y: i === 3 ? [-8, -2, -12, -4] : [-2, 2, -2]
                        }}
                        transition={{ duration: 0.6, repeat: Infinity }}
                      />
                    ))}
                  </div>

                  {/* Bamboo cylinder bands */}
                  <div className="w-full h-3 border-y border-[#d4af37]/60 bg-[#2b1d0c]" />
                  
                  {/* Seal on Bamboo Cylinder */}
                  <div className="w-12 h-12 rounded-sm border-2 border-[#D92D20] bg-[#D92D20]/20 flex items-center justify-center text-[#D92D20] font-calligraphy text-lg font-bold">
                    观音
                  </div>

                  <div className="w-full h-3 border-y border-[#d4af37]/60 bg-[#2b1d0c]" />
                </motion.div>
              </div>

              {/* Progress dots */}
              <div className="flex justify-center gap-2 mt-4">
                {[1, 2, 3].map((s) => (
                  <span
                    key={s}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      shakeCount >= s ? 'bg-[#D92D20] shadow-sm' : 'bg-stone-300'
                    }`}
                  />
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
