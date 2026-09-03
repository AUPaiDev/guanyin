/**
 * 提取原始签文数据为 JSON（供翻译脚本使用）
 * 运行：node --import=tsx/esm scripts/extract-lots-to-json.mjs
 * 或者：npx tsx scripts/extract-lots-to-json.mjs
 */
import { writeFileSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, '..');

// Import via tsx (project already has tsx installed)
const { COMPLETE_GUANYIN_100_LOTS, getGuanyinLotById } = await import('../src/data/hundredLotsData.ts');

// Transform to consistent shape
const lots = Array.from({ length: 100 }, (_, i) => {
  const raw = COMPLETE_GUANYIN_100_LOTS.find(l => l.id === i + 1);
  if (raw) {
    return {
      id: raw.id,
      verseMeaning:  raw.meaning,
      storyAllusion: raw.allusion,
      explanation:   raw.explanation,
      aspects:       raw.aspects,
      keywords:      raw.keywords,
      zenAdvice:     raw.zenAdvice,
    };
  }
  // Fallback via getGuanyinLotById for generated lots
  const lot = getGuanyinLotById(i + 1);
  return {
    id:            lot.id,
    verseMeaning:  lot.verseMeaning,
    storyAllusion: lot.storyAllusion,
    explanation:   lot.explanation,
    aspects:       lot.aspects,
    keywords:      lot.keywords,
    zenAdvice:     lot.zenAdvice,
  };
});

writeFileSync(
  resolve(ROOT, 'scripts/raw_lots_source.json'),
  JSON.stringify(lots, null, 2),
  'utf-8'
);
console.log(`✅ Extracted ${lots.length} lots to scripts/raw_lots_source.json`);
