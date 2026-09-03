import express from "express";
import path from "path";
import dotenv from "dotenv";
import helmet from "helmet";
import compression from "compression";
import rateLimit from "express-rate-limit";
import { GoogleGenAI, Type } from "@google/genai";

dotenv.config();

const app = express();
const PORT = 3000;

// Trust reverse proxy (Docker, Nginx, ALB) for accurate client IP detection
app.set("trust proxy", 1);

// 1. Security Headers (disabled HSTS and upgradeInsecureRequests for HTTP IP deployment)
app.use(
  helmet({
    contentSecurityPolicy: {
      directives: {
        defaultSrc: ["'self'"],
        scriptSrc: ["'self'", "'unsafe-inline'"],
        styleSrc: ["'self'", "'unsafe-inline'", "https://fonts.googleapis.com"],
        fontSrc: ["'self'", "https://fonts.gstatic.com"],
        imgSrc: ["'self'", "data:", "blob:", "https://*"],
        connectSrc: ["'self'"],
        upgradeInsecureRequests: null,
      },
    },
    hsts: false,
    crossOriginEmbedderPolicy: false,
  })
);

// 2. Performance: Gzip compression for faster asset delivery
app.use(compression());

// 3. Security: Reasonable JSON payload limit (reduced from 15MB to 2MB to prevent DoS)
app.use(express.json({ limit: "2mb" }));

// 4. Security: Rate Limiter for API endpoints (avoid throttling static assets)
const globalLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 300, // Limit each IP to 300 requests per 15 minutes
  standardHeaders: true,
  legacyHeaders: false,
  message: { error: "请求过于频繁，请稍后再试。" },
});
app.use("/api/", globalLimiter);

// 5. Security: Strict Rate Limiter for AI Interpretation (protect Gemini API quotas & costs)
const aiInterpretationLimiter = rateLimit({
  windowMs: 1 * 60 * 1000, // 1 minute
  max: 10, // Max 10 spiritual interpretations per IP per minute
  standardHeaders: true,
  legacyHeaders: false,
  message: {
    error: "解签感应过于频繁，请静心片刻后再试。",
    symbolInsight: "心若浮躁，难窥机玄。宜定心宁神，少顷再求大士指点。",
    questionAnalysis: "所求之事需以诚心待之，稍事休息，心定则灵。",
    philosophicalWisdom: "急躁难成事，心定自安然。",
    favorableAction: ["静心调息", "安定心神"],
    unfavorableAction: ["急功近利", "心浮气躁"],
    blessingVerse: "静坐常思自心定\n浮尘散去见明心\n待得云开冰解后\n清风送吉照前程",
  },
});

// Lazy initialize Gemini client safely
function getGeminiClient(): GoogleGenAI | null {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    console.warn("GEMINI_API_KEY is not set. Spiritual interpretation will use fallback traditional wisdom.");
    return null;
  }
  return new GoogleGenAI({
    apiKey,
    httpOptions: {
      headers: {
        "User-Agent": "aistudio-build",
      },
    },
  });
}

// Health check
app.get("/api/health", (req, res) => {
  res.json({ status: "ok", app: "guanyin-fortune" });
});

// API route for AI Guanyin Master spiritual interpretation
app.post("/api/interpret-lot", aiInterpretationLimiter, async (req, res) => {
  try {
    const { lot, drawnSymbolDataUrl, question, category } = req.body;

    if (!lot || typeof lot !== "object") {
      return res.status(400).json({ error: "Lot data is required" });
    }

    // Input sanitization & bounds checking (Prompt Injection & length defense)
    const sanitizedQuestion = typeof question === "string" 
      ? question.slice(0, 120).replace(/[\r\n\t]/g, " ").trim() 
      : "心中默念之事";
    const sanitizedCategory = typeof category === "string" 
      ? category.slice(0, 30).trim() 
      : "决疑";

    const ai = getGeminiClient();
    if (!ai) {
      // Return rich default Zen interpretation if API key not present
      return res.json({
        symbolInsight: "符印笔触圆润内敛，如静水深流。印契中显露纯善与持重之气，心意至诚，感通自然。",
        questionAnalysis: `所问【${sanitizedQuestion}】，此签为【${lot.title} · ${lot.quality}】。《观音灵签》示曰：“${lot.verseMeaning}”。机缘正应于心意之间，顺天应人自获吉祥。`,
        philosophicalWisdom: `${lot.zenAdvice || "顺时应机，修善积福。"} 观音大士慈眼视众生，当下宜安顿心神，不为外境所扰，以清净心待时成事。`,
        favorableAction: ["静心养性", "持正念", "广结善缘", "沉稳谋划"],
        unfavorableAction: ["心浮气躁", "急功近利", "妄信谗言", "固执己见"],
        blessingVerse: "一念至诚通法界\n观音慈光照灵台\n洗尽尘劳随缘过\n春风拂处百花开"
      });
    }

    const promptText = `
你是一位精通《观音灵签一百签》、佛道禅宗易理、心学智慧的高德解签大师。
请针对求签者的具体信息，进行极具东方水墨玄学意境、深邃慈悲且极富实修启发性的解签批断。

【求签人信息】：
- 所问事由分类：${sanitizedCategory}
- 具体所问心事：${sanitizedQuestion}
- 抽得签文：${lot.title}（${lot.quality}）
- 签诗四句：${Array.isArray(lot.poemLines) ? lot.poemLines.join(" / ") : ""}
- 传统诗意：${lot.verseMeaning || ""}
- 传统典故：${lot.storyAllusion || ""}
- 传统解曰：${lot.explanation || ""}

请结合求签者在观音菩萨座前亲手所绘之灵符印契（如附图），以及所问之事和抽中的签诗，给出深度的禅理批断。
语气温润典雅、充满东方禅意与慈悲大智慧，给人以定心明志的力量。

请严格返回以下 JSON 格式：
{
  "symbolInsight": "对手绘灵符/笔势印契的象意解读与气韵感应（约60-100字，充满玄学与笔墨气韵）",
  "questionAnalysis": "结合所求之事与观音签诗的精妙拆解（约100-150字，直击问题核心）",
  "philosophicalWisdom": "大士点拨之禅理行动指引与时节因缘（约80-120字）",
  "favorableAction": ["宜行之事1", "宜行之事2", "宜行之事3"],
  "unfavorableAction": ["忌行之事1", "忌行之事2", "忌行之事3"],
  "blessingVerse": "赠与求签者的四言或七言绝句回向诗（四句，用换行隔开）"
}
`;

    const contents: any[] = [];

    // If drawn image is provided, sanitize & validate base64 size before sending to LLM
    if (
      typeof drawnSymbolDataUrl === "string" &&
      drawnSymbolDataUrl.startsWith("data:image/") &&
      drawnSymbolDataUrl.length < 2 * 1024 * 1024 // Validate max image string length (2MB)
    ) {
      const match = drawnSymbolDataUrl.match(/^data:([^;]+);base64,(.+)$/);
      if (match) {
        const mimeType = match[1];
        const base64Data = match[2];
        contents.push({
          inlineData: {
            mimeType,
            data: base64Data,
          },
        });
      }
    }

    contents.push({ text: promptText });

    const response = await ai.models.generateContent({
      model: "gemini-3.7-flash",
      contents: contents.length === 1 ? contents[0].text : { parts: contents },
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            symbolInsight: { type: Type.STRING },
            questionAnalysis: { type: Type.STRING },
            philosophicalWisdom: { type: Type.STRING },
            favorableAction: {
              type: Type.ARRAY,
              items: { type: Type.STRING }
            },
            unfavorableAction: {
              type: Type.ARRAY,
              items: { type: Type.STRING }
            },
            blessingVerse: { type: Type.STRING }
          },
          required: [
            "symbolInsight",
            "questionAnalysis",
            "philosophicalWisdom",
            "favorableAction",
            "unfavorableAction",
            "blessingVerse"
          ]
        },
        systemInstruction: "你是一位慈悲深邃、精通观音灵签与东方玄学的禅修长者。言辞典雅文润、玄妙而抚慰人心，杜绝说教，启发顿悟。"
      }
    });

    const resultText = response.text?.trim();
    if (!resultText) {
      throw new Error("Empty response from AI model");
    }

    const parsed = JSON.parse(resultText);
    return res.json(parsed);
  } catch (error: any) {
    console.error("Error interpreting lot with AI:", error);
    // Graceful fallback
    return res.json({
      symbolInsight: "符印笔触刚柔并济，蕴藏灵动气机。心诚则灵契，笔走龙蛇处自有吉兆护佑。",
      questionAnalysis: "所问之事应在此签之中。观音慈航指引，当前局面虽有波折，然心存善念、持之以恒，终见明朗。",
      philosophicalWisdom: "万事万物皆随时节因缘而转。静下心来，理顺根本，顺势而为，莫为浮云遮望眼。",
      favorableAction: ["守正待时", "宽厚待人", "沉心静虑", "审时度势"],
      unfavorableAction: ["急躁妄动", "斤斤计较", "偏听偏信", "自怨自艾"],
      blessingVerse: "水墨生光通妙境\n观音庇佑定心神\n前程锦绣何须问\n自有清风送顺人"
    });
  }
});

async function startServer() {
  if (process.env.NODE_ENV !== "production") {
    const { createServer: createViteServer } = await import("vite");
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Guanyin Fortune server running at http://0.0.0.0:${PORT}`);
  });
}

startServer();
