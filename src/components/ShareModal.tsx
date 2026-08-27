import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  X, 
  Download, 
  Copy, 
  Check, 
  Sparkles, 
  Share2, 
  Image as ImageIcon,
  Loader2
} from 'lucide-react';
import { GuanyinLot } from '../types';
import { generateShareCard } from '../utils/shareCard';
import { playWoodenFish } from '../utils/audio';

interface ShareModalProps {
  isOpen: boolean;
  onClose: () => void;
  lot: GuanyinLot;
  drawnSymbolDataUrl: string | null;
  question: string;
}

export const ShareModal: React.FC<ShareModalProps> = ({
  isOpen,
  onClose,
  lot,
  drawnSymbolDataUrl,
  question
}) => {
  const [cardImage, setCardImage] = useState<string | null>(null);
  const [isGenerating, setIsGenerating] = useState(true);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!isOpen) return;

    setIsGenerating(true);
    const todayStr = new Date().toLocaleDateString('zh-CN', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });

    generateShareCard(lot, drawnSymbolDataUrl, question, todayStr)
      .then((imgUrl) => {
        setCardImage(imgUrl);
        setIsGenerating(false);
      })
      .catch((err) => {
        console.error('Failed to generate share card:', err);
        setIsGenerating(false);
      });
  }, [isOpen, lot, drawnSymbolDataUrl, question]);

  const handleDownload = () => {
    if (!cardImage) return;
    playWoodenFish();
    const link = document.createElement('a');
    link.href = cardImage;
    link.download = `观音灵签_第${lot.id}签_${lot.title}.png`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleCopyText = () => {
    const text = `【南海普陀 · 观音灵签】\n第${lot.id}签：${lot.title}（${lot.quality}）\n\n${lot.poemLines.join('\n')}\n\n诗意：${lot.verseMeaning}\n解曰：${lot.explanation}\n心诚则灵，万事大吉！`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    playWoodenFish();
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-900/60 backdrop-blur-md">
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 12 }}
            className="relative w-full max-w-lg max-h-[90vh] bg-[#EBE8DF] border border-stone-400 rounded-sm shadow-2xl flex flex-col overflow-hidden text-stone-900 font-serif"
          >
            {/* Modal Header */}
            <div className="p-4 border-b border-stone-300 flex items-center justify-between bg-[#F2F0E9]/90">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-xs bg-[#D92D20]" />
                <h3 className="text-base font-bold text-stone-900 tracking-wider font-serif">
                  观音灵签 · 水墨典藏分享卡
                </h3>
              </div>
              <button
                onClick={onClose}
                className="w-8 h-8 rounded-sm flex items-center justify-center text-stone-500 hover:text-stone-900 hover:bg-stone-200 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Scrollable Preview Area */}
            <div className="flex-1 overflow-y-auto p-4 flex flex-col items-center justify-center min-h-[360px] bg-[#f8f6f0]">
              {isGenerating ? (
                <div className="py-16 flex flex-col items-center justify-center text-center">
                  <Loader2 className="w-8 h-8 text-[#D92D20] animate-spin mb-3" />
                  <p className="text-sm font-bold text-stone-900 font-serif tracking-wider">
                    正在挥毫生成高清水墨签卡...
                  </p>
                  <p className="text-xs text-stone-500 mt-1 italic font-serif">
                    融合手绘心印与竖排典雅书法
                  </p>
                </div>
              ) : cardImage ? (
                <div className="w-full flex flex-col items-center">
                  <div className="relative max-h-[55vh] rounded-sm overflow-hidden shadow-xl border-2 border-stone-400">
                    <img
                      src={cardImage}
                      alt="观音灵签分享卡"
                      className="max-h-[55vh] w-auto object-contain block"
                    />
                  </div>
                  <p className="text-[11px] text-stone-500 mt-2 font-serif text-center italic">
                    长按图片可直接保存，或点击下方按钮导出高清原图
                  </p>
                </div>
              ) : (
                <p className="text-sm text-red-600">生成签卡失败，请重试</p>
              )}
            </div>

            {/* Bottom Actions */}
            <div className="p-4 border-t border-stone-300 bg-[#F2F0E9] flex items-center justify-between gap-3">
              <button
                onClick={handleCopyText}
                className="py-2.5 px-4 rounded-sm border border-stone-400 bg-white/70 text-xs md:text-sm text-stone-700 hover:bg-stone-200 transition-colors flex items-center gap-1.5 cursor-pointer font-serif"
              >
                {copied ? <Check className="w-4 h-4 text-emerald-700" /> : <Copy className="w-4 h-4" />}
                <span>{copied ? '已复制' : '复制签语'}</span>
              </button>

              <button
                onClick={handleDownload}
                disabled={!cardImage || isGenerating}
                className="flex-1 py-2.5 px-5 rounded-sm bg-[#1a1a1a] hover:bg-stone-800 text-stone-100 text-xs md:text-sm font-medium shadow-md transition-all flex items-center justify-center gap-2 border border-stone-900 cursor-pointer disabled:opacity-50 font-serif tracking-wider"
              >
                <Download className="w-4 h-4" />
                <span>保存高清签卡 (PNG)</span>
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
