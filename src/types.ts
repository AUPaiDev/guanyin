/**
 * Types and interfaces for Guanyin Fortune (观音灵签) application
 */

export type LotQuality = 
  | '上上' 
  | '大吉' 
  | '上吉' 
  | '中吉' 
  | '中平' 
  | '下下' 
  | '中下';

export interface GuanyinAspectPrediction {
  label: string; // e.g. "家宅", "自身", "求财", "交易", "婚姻", "六甲", "行人", "田蚕", "寻人", "官司", "移徙", "失物", "疾病", "山坟"
  result: string; // e.g. "吉庆", "平稳", "遂心", "宜缓", "成合", "生男", "未至", "熟", "见", "胜", "吉", "在", "安", "吉"
}

export interface GuanyinLot {
  id: number; // 1 to 100
  title: string; // e.g. "第一签 钟离成道"
  solarTermOrGua?: string; // e.g. "子宫 乾卦"
  quality: LotQuality; // e.g. "上上"
  poemLines: string[]; // 4 lines of classical poem
  verseMeaning: string; // 诗意 (Poem essence)
  storyAllusion: string; // 典故 (Historical legend)
  explanation: string; // 解曰 (Sacred interpretation)
  aspects: GuanyinAspectPrediction[];
  keywords: string[]; // Key guidance keywords e.g. ["开天辟地", "谋事皆通", "万物亨通"]
  zenAdvice: string; // Modern philosophical action advice
}

export type RitualStep = 
  | 'intro'         // 仪式引导
  | 'meditation'    // 步骤一：净心默念
  | 'drawing'       // 步骤二：临座画符
  | 'shaking'       // 摇签感应动效
  | 'result'        // 步骤三：揭签解惑
  | 'reading_all';  // 查阅百签典藏

export interface QuestionCategory {
  id: string;
  name: string;
  iconName: string;
  defaultPrompt: string;
  tips: string;
}

export interface RitualState {
  step: RitualStep;
  questionCategory: string;
  customQuestion: string;
  meditationSeconds: number;
  drawnSymbolDataUrl: string | null;
  drawnSymbolSvgPath?: string;
  selectedLot: GuanyinLot | null;
  aiInterpretation: AIInterpretation | null;
  isInterpretingAI: boolean;
  drawnTimestamp: string;
}

export interface AIInterpretation {
  symbolInsight: string;     // Interpretation of the user's hand-drawn mystic symbol
  questionAnalysis: string;  // Direct spiritual alignment with user's question
  philosophicalWisdom: string; // Master's advice & timing guidance
  favorableAction: string[]; // 宜 (What to do)
  unfavorableAction: string[]; // 忌 (What to avoid)
  blessingVerse: string;     // 4-line personalized blessing verse
}

export type AppTab = 'divination' | 'library' | 'woodenfish' | 'history';

export interface FortuneRecord {
  id: string;
  timestamp: number;
  dateStr: string;
  lot: GuanyinLot;
  question: string;
  category: string;
  drawnSymbolDataUrl: string | null;
  aiInterpretation?: AIInterpretation | null;
}
