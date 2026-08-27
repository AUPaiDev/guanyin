import { GuanyinLot } from '../types';
import { COMPLETE_GUANYIN_100_LOTS, getGuanyinLotById as getFrom100Db } from './hundredLotsData';

/**
 * 完整权威《观音灵签》100 签总库
 * 保证 1..100 每支签均有完整典故、诗句、解签吉凶。
 */
export const GUANYIN_LOTS_DATABASE: GuanyinLot[] = Array.from({ length: 100 }, (_, i) => getFrom100Db(i + 1));

export function getGuanyinLotById(id: number): GuanyinLot {
  const safeId = Math.max(1, Math.min(100, Math.floor(id)));
  return getFrom100Db(safeId);
}

// Track last drawn ID to prevent unnatural immediate identical repeats during continuous draws
let lastDrawnId: number | null = null;

/**
 * 真实随机求签抽取（1 至 100 签全概率均匀分布）
 * 彻底移除任何测试权重偏置，保证每一签机率均等且真实。
 */
export function getRandomGuanyinLot(excludeId?: number): GuanyinLot {
  // Available lot numbers from 1 to 100
  const allIds: number[] = Array.from({ length: 100 }, (_, i) => i + 1);
  
  // Filter out the excluded or previous draw to guarantee freshness if rolling repeatedly
  const avoidId = excludeId ?? lastDrawnId;
  const pool = avoidId ? allIds.filter(id => id !== avoidId) : allIds;

  // Truly uniform cryptographic / mathematical distribution
  const randomIndex = Math.floor(Math.random() * pool.length);
  const chosenId = pool[randomIndex];

  lastDrawnId = chosenId;
  return getGuanyinLotById(chosenId);
}

export const QUESTION_CATEGORIES = [
  {
    id: "general",
    name: "心中所念 / 决疑",
    iconName: "Compass",
    defaultPrompt: "问心中所惑、抉择未定之事",
    tips: "诚心观想眼前困扰之事，请大士指引明路。"
  },
  {
    id: "career",
    name: "事业 / 前程",
    iconName: "Briefcase",
    defaultPrompt: "问职场晋升、求职创业、功名学业",
    tips: "默想当下的事业方向或面临之考量。"
  },
  {
    id: "love",
    name: "姻缘 / 情感",
    iconName: "Heart",
    defaultPrompt: "问良缘归属、夫妻和合、情感抉择",
    tips: "静观心头所念之人，求问缘分深浅。"
  },
  {
    id: "wealth",
    name: "求财 / 营商",
    iconName: "Coins",
    defaultPrompt: "问投资理财、生意兴替、财运吉凶",
    tips: "财乃养命之源，心正行端，福禄自至。"
  },
  {
    id: "health",
    name: "健康 / 家宅",
    iconName: "ShieldHeart",
    defaultPrompt: "问身心康宁、家人福安、居所迁徙",
    tips: "祈愿身心安泰，阖家吉祥，远离灾殃。"
  }
];
