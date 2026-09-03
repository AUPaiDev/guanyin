/**
 * 把 src/data/lotsTranslations.json 的翻译结果合并进 lotsTranslations.ts
 * 运行：node scripts/build-translations-ts.mjs
 */
import { readFileSync, writeFileSync, existsSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, '..');

const JSON_PATH = resolve(ROOT, 'src/data/lotsTranslations.json');
const TS_PATH   = resolve(ROOT, 'src/data/lotsTranslations.ts');

if (!existsSync(JSON_PATH)) {
  console.error('❌  lotsTranslations.json not found. Run translate-lots.mjs first.');
  process.exit(1);
}

const data = JSON.parse(readFileSync(JSON_PATH, 'utf-8'));
const count = Object.keys(data).length;
console.log(`📦  Loaded ${count} translations from JSON`);

const tsContent = `/**
 * 观音灵签 · 多语言翻译数据
 * ─────────────────────────────────────────────────────────────────────────────
 * ⚠️  此文件由 scripts/build-translations-ts.mjs 自动生成，请勿手动编辑。
 *     如需更新翻译，请重新运行翻译脚本：
 *     MINIMAX_API_KEY=<your_key> node scripts/translate-lots.mjs
 *     然后运行合并脚本：node scripts/build-translations-ts.mjs
 *
 * 包含内容：${count} 签的 EN（英文）和 JA（日文）翻译
 * 不包含：title（签文标题）、poemLines（签诗）— 这两个字段保持中文原文
 * ─────────────────────────────────────────────────────────────────────────────
 */

import type { LotTranslationMap } from '../types';

export const LOT_TRANSLATIONS: LotTranslationMap = ${JSON.stringify(data, null, 2)};
`;

writeFileSync(TS_PATH, tsContent, 'utf-8');
console.log(`✅  Written to ${TS_PATH}`);
