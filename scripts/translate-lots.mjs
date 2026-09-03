/**
 * 观音灵签 · 离线预翻译脚本
 * ────────────────────────────────────────────────────────────────────────
 * 用途：调用 MiniMax API，把 100 签的固定字段翻译成英文(EN)和日文(JA)，
 *       结果写入 src/data/lotsTranslations.json，随代码一起部署。
 *
 * 不翻译：title（签文标题）、poemLines（签诗四句）
 * 翻译字段：verseMeaning / storyAllusion / explanation / aspects / keywords / zenAdvice
 *
 * 使用方法（本机运行，不上传 GitHub）：
 *   MINIMAX_API_KEY=<your_key> node scripts/translate-lots.mjs
 *
 * 先运行提取脚本生成原始数据：
 *   node scripts/extract-lots-to-json.mjs
 *
 * 依赖：Node.js >= 18（内置 fetch），无需安装额外包
 * ────────────────────────────────────────────────────────────────────────
 */

import { readFileSync, writeFileSync, existsSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, '..');

// ─── Config ───────────────────────────────────────────────────────────────────
const MINIMAX_API_KEY = process.env.MINIMAX_API_KEY;
const MODEL           = 'MiniMax-Text-01';
const OUTPUT_PATH     = resolve(ROOT, 'src/data/lotsTranslations.json');
const SOURCE_PATH     = resolve(ROOT, 'scripts/raw_lots_source.json');

// ─── Batch settings ───────────────────────────────────────────────────────────
const BATCH_SIZE  = 2;    // lots per API call (batch 2 strictly prevents token overflow truncation)
const DELAY_MS    = 1000; // ms between calls to avoid rate-limiting

if (!MINIMAX_API_KEY) {
  console.error('❌  Missing env: MINIMAX_API_KEY');
  console.error('    Usage: MINIMAX_API_KEY=<your_key> node scripts/translate-lots.mjs');
  process.exit(1);
}

// ─── Load source data ─────────────────────────────────────────────────────────
function loadSourceLots() {
  if (!existsSync(SOURCE_PATH)) {
    console.error('❌  Source data not found. Please first run:');
    console.error('       node scripts/extract-lots-to-json.mjs');
    process.exit(1);
  }
  return JSON.parse(readFileSync(SOURCE_PATH, 'utf-8'));
}

// ─── MiniMax API call ──────────────────────────────────────────────────────────
async function callMinimax(prompt) {
  const url = 'https://api.minimax.chat/v1/text/chatcompletion_v2';
  const body = {
    model: MODEL,
    messages: [
      {
        role: 'system',
        content: `You are a professional translator specializing in Chinese classical literature, Buddhist/Taoist texts, and fortune-telling traditions. 
Translate accurately while preserving the mystical, elegant tone. Output ONLY valid JSON, no markdown code blocks, no extra text.`
      },
      { role: 'user', content: prompt }
    ],
    temperature: 0.1,
    max_tokens: 8000,
  };

  const resp = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type':  'application/json',
      'Authorization': `Bearer ${MINIMAX_API_KEY}`,
    },
    body: JSON.stringify(body),
  });

  if (!resp.ok) {
    const errText = await resp.text();
    throw new Error(`MiniMax API error ${resp.status}: ${errText}`);
  }

  const data = await resp.json();
  const content = data?.choices?.[0]?.message?.content;
  if (!content) throw new Error(`Empty response: ${JSON.stringify(data)}`);
  return content;
}

// ─── Build prompt for a batch of lots ─────────────────────────────────────────
function buildBatchPrompt(lots) {
  const lotsPayload = lots.map(lot => ({
    id:          lot.id,
    meaning:     lot.verseMeaning,
    allusion:    lot.storyAllusion,
    explanation: lot.explanation,
    aspects:     lot.aspects,
    keywords:    lot.keywords,
    zenAdvice:   lot.zenAdvice,
  }));

  return `Translate the following Guanyin Fortune lots from Chinese to both English (en) and Japanese (ja).

IMPORTANT RULES:
1. Do NOT include "title" or "poemLines" in your output — only translate the fields provided.
2. Keep the meaning and cultural context of Buddhist/Daoist references intact.
3. For "aspects", translate both "label" (category name, e.g. 家宅→Home/家) and "result" (e.g. 大吉→Great Fortune/大吉).
4. For "keywords", translate each keyword phrase naturally.
5. For Japanese, use traditional shrine/temple fortune style (格調高い寺社おみくじの文語調・和漢混交文体), not overly modern casual speech.
6. In Japanese, NEVER output furigana readings in parentheses (do not write "家宅（かたく）" or "安泰（あんたい）" - use clean kanji/kana only).
7. Respond ONLY with a JSON array. No markdown, no explanations, no code fences.

Output format (array of objects):
[
  {
    "id": <number>,
    "en": {
      "meaning": "...",
      "allusion": "...",
      "explanation": "...",
      "aspects": [{ "label": "...", "result": "..." }],
      "keywords": ["...", "..."],
      "zenAdvice": "..."
    },
    "ja": {
      "meaning": "...",
      "allusion": "...",
      "explanation": "...",
      "aspects": [{ "label": "...", "result": "..." }],
      "keywords": ["...", "..."],
      "zenAdvice": "..."
    }
  }
]

Source lots to translate:
${JSON.stringify(lotsPayload, null, 2)}`;
}

// ─── Parse response ────────────────────────────────────────────────────────────
function parseResponse(text) {
  // Strip possible markdown code fences
  const cleaned = text
    .replace(/^```(?:json)?\s*/m, '')
    .replace(/\s*```$/m, '')
    .trim();
  return JSON.parse(cleaned);
}

// ─── Main ──────────────────────────────────────────────────────────────────────
async function main() {
  console.log('🔮 观音灵签翻译脚本启动...\n');

  const sourceLots = loadSourceLots();
  console.log(`📚 加载了 ${sourceLots.length} 支签的原始数据`);

  // Load existing translations if any (for resume support)
  let translations = {};
  if (existsSync(OUTPUT_PATH)) {
    try {
      translations = JSON.parse(readFileSync(OUTPUT_PATH, 'utf-8'));
      const done = Object.keys(translations).length;
      if (done > 0) {
        console.log(`♻️  已有 ${done} 支签的翻译，将跳过已完成的签`);
      }
    } catch {
      translations = {};
    }
  }

  // Filter lots that still need translation
  const pending = sourceLots.filter(lot => !translations[lot.id]);
  console.log(`📋 待翻译：${pending.length} 支签\n`);

  if (pending.length === 0) {
    console.log('✅  全部翻译已完成！输出文件：', OUTPUT_PATH);
    return;
  }

  let successCount = 0;
  let errorCount   = 0;

  for (let i = 0; i < pending.length; i += BATCH_SIZE) {
    const batch = pending.slice(i, i + BATCH_SIZE);
    const ids   = batch.map(l => l.id).join(', ');

    process.stdout.write(`⏳ 翻译签 [${ids}]... `);

    try {
      const prompt  = buildBatchPrompt(batch);
      const rawText = await callMinimax(prompt);
      const results = parseResponse(rawText);

      for (const item of results) {
        if (item.id && item.en && item.ja) {
          translations[item.id] = { en: item.en, ja: item.ja };
          successCount++;
        } else {
          console.warn(`\n⚠️  签 ${item.id} 响应格式异常，已跳过`);
          errorCount++;
        }
      }

      // Incremental save after every successful batch (supports resume)
      writeFileSync(OUTPUT_PATH, JSON.stringify(translations, null, 2), 'utf-8');
      console.log(`✅  (已完成 ${successCount}/${pending.length})`);

    } catch (err) {
      console.error(`\n❌  批次出错 [签 ${ids}]: ${err.message}`);
      errorCount++;
    }

    // Rate limiting delay between API calls
    if (i + BATCH_SIZE < pending.length) {
      await new Promise(r => setTimeout(r, DELAY_MS));
    }
  }

  console.log('\n────────────────────────────────────────────');
  console.log(`🏁  翻译完成！成功：${successCount}，失败：${errorCount}`);
  console.log(`📄  结果已写入：${OUTPUT_PATH}`);

  if (errorCount > 0) {
    console.log('\n💡  提示：可重新运行脚本，已完成的签将自动跳过（支持断点续传）');
  }
}

main().catch(err => {
  console.error('\nFatal error:', err);
  process.exit(1);
});
