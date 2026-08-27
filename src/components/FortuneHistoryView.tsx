import React from 'react';
import { motion } from 'motion/react';
import { 
  Scroll, 
  Trash2, 
  Share2, 
  Eye, 
  Clock, 
  BookOpen, 
  Calendar,
  Sparkles,
  ChevronRight
} from 'lucide-react';
import { FortuneRecord, GuanyinLot } from '../types';
import { playWoodenFish, triggerHaptic } from '../utils/audio';

interface FortuneHistoryViewProps {
  records: FortuneRecord[];
  onSelectRecord: (record: FortuneRecord) => void;
  onClearHistory: () => void;
  onGoToDivination: () => void;
}

export const FortuneHistoryView: React.FC<FortuneHistoryViewProps> = ({
  records,
  onSelectRecord,
  onClearHistory,
  onGoToDivination
}) => {
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
    <div className="w-full max-w-lg mx-auto px-4 py-4 flex flex-col min-h-[calc(100dvh-135px)] text-stone-900 font-serif">
      {/* Header Banner */}
      <div className="flex items-center justify-between mb-4 border-b border-stone-300/80 pb-3">
        <div>
          <h2 className="text-xl font-bold tracking-wider text-stone-900 flex items-center gap-2">
            <Scroll className="w-5 h-5 text-[#D92D20]" />
            <span>历次求签心印簿</span>
          </h2>
          <p className="text-xs text-stone-500 italic mt-0.5">
            共存录 {records.length} 支灵签记录 · 心诚则灵
          </p>
        </div>

        {records.length > 0 && (
          <button
            onClick={() => {
              if (window.confirm('确定要清空全部求签历史记录吗？')) {
                onClearHistory();
                triggerHaptic(15);
              }
            }}
            className="flex items-center gap-1 text-xs text-stone-500 hover:text-red-700 px-2 py-1 rounded-sm border border-stone-400/60 hover:bg-stone-200 transition-colors cursor-pointer"
            title="清空记录"
          >
            <Trash2 className="w-3.5 h-3.5" />
            <span>清空</span>
          </button>
        )}
      </div>

      {/* Content List */}
      {records.length === 0 ? (
        <div className="flex-1 flex flex-col items-center justify-center text-center p-8 bg-[#EBE8DF]/60 border border-stone-300/80 rounded-sm my-auto">
          <div className="w-16 h-16 rounded-full border-2 border-stone-300 bg-white/60 flex items-center justify-center text-stone-400 mb-3">
            <Scroll className="w-8 h-8 opacity-60" />
          </div>
          <h3 className="text-base font-bold text-stone-800 tracking-wider">
            暂无求签记录
          </h3>
          <p className="text-xs text-stone-500 mt-1 max-w-xs leading-relaxed italic">
            每一次虔诚默祷与手绘灵符，皆会封存于此，随身查阅指引。
          </p>
          <button
            onClick={onGoToDivination}
            className="mt-5 py-2.5 px-6 rounded-sm bg-[#1a1a1a] text-stone-100 text-xs font-bold hover:bg-stone-800 transition-all shadow-md cursor-pointer border border-stone-900 flex items-center gap-1.5"
          >
            <Sparkles className="w-4 h-4 text-[#D92D20]" />
            <span>立即起念求签</span>
          </button>
        </div>
      ) : (
        <div className="space-y-3 pb-6 flex-1 overflow-y-auto">
          {records.map((record) => (
            <motion.div
              key={record.id}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              onClick={() => {
                playWoodenFish();
                onSelectRecord(record);
              }}
              className="bg-[#EBE8DF] border border-stone-300 hover:border-stone-400/90 rounded-sm p-4 shadow-sm hover:shadow-md transition-all cursor-pointer flex flex-col gap-2.5 active:scale-[0.99]"
            >
              {/* Card Top Row */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className={`px-2 py-0.5 text-[11px] font-bold rounded-sm tracking-wider ${getFortuneTypeBadge(record.lot.quality)}`}>
                    {record.lot.quality}
                  </span>
                  <h4 className="text-base font-bold text-stone-900 tracking-wide">
                    第{record.lot.id}签 · {record.lot.title}
                  </h4>
                </div>

                <span className="text-[11px] text-stone-500 flex items-center gap-1">
                  <Calendar className="w-3 h-3" />
                  <span>{record.dateStr}</span>
                </span>
              </div>

              {/* Question & First Line */}
              <div className="text-xs text-stone-700 bg-white/70 p-2.5 rounded-sm border border-stone-300/80 flex items-start justify-between gap-2">
                <div className="flex-1">
                  <span className="text-stone-500 block mb-0.5 text-[11px]">
                    所问：{record.question}
                  </span>
                  <p className="text-stone-800 font-medium italic">
                    “{record.lot.poemLines[0]}，{record.lot.poemLines[1]}”
                  </p>
                </div>

                {record.drawnSymbolDataUrl && (
                  <div className="w-10 h-10 border border-stone-400 bg-white rounded-xs p-0.5 shrink-0">
                    <img
                      src={record.drawnSymbolDataUrl}
                      alt="符印"
                      className="w-full h-full object-contain"
                    />
                  </div>
                )}
              </div>

              {/* Bottom Actions */}
              <div className="flex items-center justify-between text-xs text-stone-500 pt-1">
                <span className="text-[11px] text-[#D92D20] font-medium">
                  {record.lot.solarTermOrGua || '观音灵应'}
                </span>

                <div className="flex items-center gap-1 text-[#1a1a1a] font-bold text-xs">
                  <span>查看解签详情</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
};
