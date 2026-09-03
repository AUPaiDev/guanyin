# 翻译脚本说明

## 功能

把《观音灵签》100 签的固定签文字段翻译成**英文 (EN)** 和**日文 (JA)**，结果写入 `src/data/lotsTranslations.ts`，随代码一起部署。

**不翻译**：签文标题（title）和签诗四句（poemLines）—— 保持中文原文。

**翻译字段**：
- `verseMeaning` — 诗意
- `storyAllusion` — 典故
- `explanation` — 解曰
- `aspects` — 百事占验（家宅/自身/求财等的标签和结果）
- `keywords` — 关键词
- `zenAdvice` — 禅心开示

## 文件说明

| 文件 | 说明 | 上传 GitHub |
|------|------|-------------|
| `extract-lots-to-json.mjs` | 从 TS 源码提取签文数据 | ✅ 是 |
| `translate-lots.mjs` | 调 MiniMax API 翻译 | ✅ 是 |
| `build-translations-ts.mjs` | 把 JSON 合并进 TS 文件 | ✅ 是 |
| `raw_lots_source.json` | 中间产物（签文原文 JSON） | ❌ gitignored |
| `../src/data/lotsTranslations.json` | 中间产物（翻译结果 JSON） | ❌ gitignored |
| `../src/data/lotsTranslations.ts` | **最终翻译数据（代码部署）** | ✅ 是 |

## 使用方法

### 1. 首次生成翻译

```bash
# 第一步：提取签文原始数据
node scripts/extract-lots-to-json.mjs

# 第二步：调 MiniMax API 翻译（支持断点续传，出错后重跑自动跳过已完成的签）
MINIMAX_API_KEY=<your_key> node scripts/translate-lots.mjs

# 第三步：把翻译结果合并进 TypeScript 文件
node scripts/build-translations-ts.mjs
```

或者一键运行：

```bash
MINIMAX_API_KEY=<your_key> npm run translate
```

### 2. 更新/重新翻译

直接删除 `src/data/lotsTranslations.json` 中需要重新翻译的签，然后重跑步骤 2 和 3（已有翻译的签会自动跳过）。

## MiniMax API

- 文档：https://platform.minimaxi.com/
- 模型：`MiniMax-Text-01`
- Key 仅在本地使用，不存入代码或 GitHub
