import { GuanyinLot } from '../types';

/**
 * Generate a high-DPI exportable Chinese ink calligraphy share card
 */
export async function generateShareCard(
  lot: GuanyinLot,
  drawnSymbolDataUrl: string | null,
  question: string,
  drawnDate: string
): Promise<string> {
  const canvas = document.createElement('canvas');
  const width = 900;
  const height = 1400;
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext('2d');
  if (!ctx) return '';

  // 1. Ancient Rice Paper Background (宣纸底色)
  const bgGrad = ctx.createLinearGradient(0, 0, width, height);
  bgGrad.addColorStop(0, '#f9f6ef');
  bgGrad.addColorStop(0.5, '#f4ede0');
  bgGrad.addColorStop(1, '#ebe1ce');
  ctx.fillStyle = bgGrad;
  ctx.fillRect(0, 0, width, height);

  // Add subtle rice paper grain texture
  ctx.fillStyle = 'rgba(120, 95, 60, 0.035)';
  for (let x = 0; x < width; x += 12) {
    for (let y = 0; y < height; y += 12) {
      if ((x + y) % 5 === 0) {
        ctx.fillRect(x, y, 3, 3);
      }
    }
  }

  // 2. Ink Wash Mountain Silhouette at the bottom (水墨远山)
  drawInkMountains(ctx, width, height);

  // 3. Classical Double Border with Cloud Motifs (双线回纹边框)
  ctx.save();
  ctx.strokeStyle = '#2d241e';
  ctx.lineWidth = 4;
  ctx.strokeRect(36, 36, width - 72, height - 72);

  ctx.strokeStyle = 'rgba(184, 59, 50, 0.6)';
  ctx.lineWidth = 1.5;
  ctx.strokeRect(46, 46, width - 92, height - 92);

  // Corner decorations
  drawCornerAccents(ctx, 46, 46, width - 92, height - 92);
  ctx.restore();

  // 4. Header: Temple Title & Seal (观音灵签 · 普陀山大士殿)
  ctx.save();
  ctx.fillStyle = '#1c1917';
  ctx.font = 'bold 38px "Ma Shan Zheng", "Noto Serif SC", serif';
  ctx.textAlign = 'center';
  ctx.fillText('南海普陀 · 观音灵签', width / 2, 115);

  ctx.fillStyle = '#6b5d52';
  ctx.font = '18px "Noto Serif SC", serif';
  ctx.letterSpacing = '3px';
  ctx.fillText('一念至诚 · 感应道交 · 逢凶化吉', width / 2, 150);

  // Header Cinnabar Seal (朱砂顶印)
  drawSeal(ctx, width - 130, 80, 52, '观音\n灵感');
  ctx.restore();

  // 5. Lot Quality Badge & Title (签名与签品)
  ctx.save();
  ctx.fillStyle = '#1c1917';
  ctx.font = 'bold 44px "Noto Serif SC", serif';
  ctx.textAlign = 'center';
  ctx.fillText(lot.title, width / 2, 230);

  // Quality Tag (e.g. 上上、大吉)
  const qualityColor = lot.quality.includes('上') || lot.quality.includes('大') ? '#b83b32' : '#2b4c7e';
  ctx.fillStyle = qualityColor;
  ctx.font = 'bold 24px "Noto Serif SC", serif';
  ctx.fillText(`【 ${lot.quality} 】 · ${lot.solarTermOrGua || '感应宫'}`, width / 2, 275);
  ctx.restore();

  // Decorative divider line
  ctx.save();
  ctx.strokeStyle = 'rgba(120, 95, 60, 0.4)';
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.moveTo(width / 2 - 200, 305);
  ctx.lineTo(width / 2 + 200, 305);
  ctx.stroke();

  // Little lotus/diamond in center of divider
  ctx.fillStyle = '#b83b32';
  ctx.beginPath();
  ctx.arc(width / 2, 305, 4, 0, Math.PI * 2);
  ctx.fill();
  ctx.restore();

  // 6. Classical Vertical Poetry Display (诗曰：竖排右起排版)
  ctx.save();
  const poemStartY = 355;
  const poemHeight = 310;
  
  // Outer poem paper panel
  ctx.fillStyle = 'rgba(255, 255, 255, 0.65)';
  ctx.fillRect(width / 2 - 280, poemStartY, 560, poemHeight);
  ctx.strokeStyle = 'rgba(180, 150, 110, 0.5)';
  ctx.lineWidth = 1;
  ctx.strokeRect(width / 2 - 280, poemStartY, 560, poemHeight);

  // Draw vertical red gridlines (乌丝栏)
  ctx.strokeStyle = 'rgba(184, 59, 50, 0.15)';
  for (let i = 0; i < 5; i++) {
    const colX = width / 2 + 180 - i * 90;
    ctx.beginPath();
    ctx.moveTo(colX, poemStartY + 15);
    ctx.lineTo(colX, poemStartY + poemHeight - 15);
    ctx.stroke();
  }

  // Draw vertical lines of the 4-line poem (Right-to-left: col 0 = line 1, col 1 = line 2, etc.)
  ctx.fillStyle = '#1c1917';
  ctx.font = '32px "Ma Shan Zheng", "Noto Serif SC", serif';
  ctx.textAlign = 'center';

  lot.poemLines.forEach((line, colIndex) => {
    const colX = width / 2 + 135 - colIndex * 90;
    const chars = line.split('');
    chars.forEach((char, charIndex) => {
      const charY = poemStartY + 52 + charIndex * 38;
      ctx.fillText(char, colX, charY);
    });
  });

  // "诗曰" Vertical label on the far right
  ctx.fillStyle = '#b83b32';
  ctx.font = 'bold 20px "Noto Serif SC", serif';
  ctx.fillText('诗', width / 2 + 225, poemStartY + 110);
  ctx.fillText('曰', width / 2 + 225, poemStartY + 145);
  ctx.restore();

  // 7. Poem Meaning & Explanation (诗意与解曰)
  ctx.save();
  const meaningY = 700;
  
  // Small Header
  ctx.fillStyle = '#8c2d19';
  ctx.font = 'bold 20px "Noto Serif SC", serif';
  ctx.textAlign = 'left';
  ctx.fillText('【 诗 意 】', 90, meaningY);

  ctx.fillStyle = '#2d241e';
  ctx.font = '19px "Noto Serif SC", serif';
  wrapText(ctx, lot.verseMeaning, 195, meaningY, width - 290, 28);

  ctx.fillStyle = '#8c2d19';
  ctx.font = 'bold 20px "Noto Serif SC", serif';
  ctx.fillText('【 典 故 】', 90, meaningY + 60);

  ctx.fillStyle = '#3d322a';
  ctx.font = '18px "Noto Serif SC", serif';
  wrapText(ctx, lot.storyAllusion, 195, meaningY + 60, width - 290, 26);
  ctx.restore();

  // 8. User's Hand-drawn Talisman / Symbol & Inquiry Section (心意符印与所求)
  ctx.save();
  const talismanY = 860;

  // Background frame for the drawn symbol
  ctx.fillStyle = 'rgba(255, 255, 255, 0.75)';
  ctx.fillRect(80, talismanY, width - 160, 260);
  ctx.strokeStyle = '#c4b5a0';
  ctx.lineWidth = 1.5;
  ctx.strokeRect(80, talismanY, width - 160, 260);

  // Left: Drawn Talisman Canvas
  const sealBoxSize = 200;
  const sealBoxX = 110;
  const sealBoxY = talismanY + 30;

  ctx.fillStyle = '#0f141c';
  ctx.fillRect(sealBoxX, sealBoxY, sealBoxSize, sealBoxSize);
  ctx.strokeStyle = '#d4af37';
  ctx.lineWidth = 2;
  ctx.strokeRect(sealBoxX, sealBoxY, sealBoxSize, sealBoxSize);

  // Draw user's symbol image if provided
  if (drawnSymbolDataUrl) {
    try {
      const img = await loadImage(drawnSymbolDataUrl);
      ctx.drawImage(img, sealBoxX + 10, sealBoxY + 10, sealBoxSize - 20, sealBoxSize - 20);
    } catch {
      // fallback
    }
  }

  // Label under symbol box
  ctx.fillStyle = '#6b5d52';
  ctx.font = '16px "Noto Serif SC", serif';
  ctx.textAlign = 'center';
  ctx.fillText('✦ 亲绘灵符感应 ✦', sealBoxX + sealBoxSize / 2, sealBoxY + sealBoxSize + 22);

  // Right: Heart Inquiry & Zen Guidance
  const infoX = sealBoxX + sealBoxSize + 35;
  ctx.textAlign = 'left';

  ctx.fillStyle = '#b83b32';
  ctx.font = 'bold 20px "Noto Serif SC", serif';
  ctx.fillText('【 所 念 之 事 】', infoX, talismanY + 60);

  ctx.fillStyle = '#1c1917';
  ctx.font = 'bold 21px "Noto Serif SC", serif';
  const displayQ = question.trim() ? question : '默念之事 · 顺从自心指引';
  wrapText(ctx, displayQ, infoX, talismanY + 95, width - infoX - 100, 30);

  ctx.fillStyle = '#7a6858';
  ctx.font = 'bold 18px "Noto Serif SC", serif';
  ctx.fillText('【 心 性 点 拨 】', infoX, talismanY + 165);

  ctx.fillStyle = '#3d322a';
  ctx.font = '17px "Noto Serif SC", serif';
  wrapText(ctx, lot.zenAdvice, infoX, talismanY + 195, width - infoX - 100, 25);
  ctx.restore();

  // 9. Footer: Red Stamps & Blessings (福印与日期)
  ctx.save();
  const footerY = 1200;

  drawSeal(ctx, 95, footerY, 60, '心诚\n则灵');
  drawSeal(ctx, 175, footerY, 60, '吉祥\n如意');

  ctx.textAlign = 'right';
  ctx.fillStyle = '#4a3d33';
  ctx.font = '18px "Noto Serif SC", serif';
  ctx.fillText(`求签吉旦：${drawnDate}`, width - 95, footerY + 25);

  ctx.font = '16px "Noto Serif SC", serif';
  ctx.fillStyle = '#8a7765';
  ctx.fillText('观音大士慈悲护佑 · 积善自得天佑', width - 95, footerY + 52);
  ctx.restore();

  return canvas.toDataURL('image/png', 0.95);
}

// Helpers
function drawInkMountains(ctx: CanvasRenderingContext2D, width: number, height: number) {
  ctx.save();
  // Faint background mountain
  ctx.fillStyle = 'rgba(70, 85, 105, 0.08)';
  ctx.beginPath();
  ctx.moveTo(0, height - 120);
  ctx.bezierCurveTo(width * 0.25, height - 280, width * 0.45, height - 320, width * 0.7, height - 200);
  ctx.bezierCurveTo(width * 0.85, height - 140, width * 0.95, height - 260, width, height - 210);
  ctx.lineTo(width, height);
  ctx.lineTo(0, height);
  ctx.fill();

  // Closer darker mountain
  ctx.fillStyle = 'rgba(40, 48, 60, 0.12)';
  ctx.beginPath();
  ctx.moveTo(0, height - 60);
  ctx.bezierCurveTo(width * 0.2, height - 180, width * 0.5, height - 130, width * 0.75, height - 220);
  ctx.bezierCurveTo(width * 0.88, height - 160, width * 0.95, height - 110, width, height - 140);
  ctx.lineTo(width, height);
  ctx.lineTo(0, height);
  ctx.fill();
  ctx.restore();
}

function drawCornerAccents(ctx: CanvasRenderingContext2D, x: number, y: number, w: number, h: number) {
  const size = 18;
  const corners = [
    [x, y, 1, 1],
    [x + w, y, -1, 1],
    [x, y + h, 1, -1],
    [x + w, y + h, -1, -1]
  ];

  ctx.strokeStyle = '#b83b32';
  ctx.lineWidth = 2.5;

  corners.forEach(([cx, cy, sx, sy]) => {
    ctx.beginPath();
    ctx.moveTo(cx + sx * size, cy);
    ctx.lineTo(cx, cy);
    ctx.lineTo(cx, cy + sy * size);
    ctx.stroke();
  });
}

function drawSeal(ctx: CanvasRenderingContext2D, x: number, y: number, size: number, text: string) {
  ctx.save();
  ctx.fillStyle = '#b83b32';
  ctx.fillRect(x, y, size, size);

  ctx.strokeStyle = '#fbf7ee';
  ctx.lineWidth = 1.5;
  ctx.strokeRect(x + 3, y + 3, size - 6, size - 6);

  ctx.fillStyle = '#fbf7ee';
  ctx.font = `bold ${Math.floor(size * 0.32)}px "Noto Serif SC", serif`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';

  const lines = text.split('\n');
  if (lines.length === 2) {
    ctx.fillText(lines[0], x + size / 2, y + size * 0.33);
    ctx.fillText(lines[1], x + size / 2, y + size * 0.69);
  } else {
    ctx.fillText(text, x + size / 2, y + size / 2);
  }
  ctx.restore();
}

function wrapText(
  ctx: CanvasRenderingContext2D,
  text: string,
  x: number,
  y: number,
  maxWidth: number,
  lineHeight: number
) {
  const chars = text.split('');
  let line = '';
  let currentY = y;

  for (let n = 0; n < chars.length; n++) {
    const testLine = line + chars[n];
    const metrics = ctx.measureText(testLine);
    if (metrics.width > maxWidth && n > 0) {
      ctx.fillText(line, x, currentY);
      line = chars[n];
      currentY += lineHeight;
    } else {
      line = testLine;
    }
  }
  ctx.fillText(line, x, currentY);
}

function loadImage(src: string): Promise<HTMLImageElement> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.onload = () => resolve(img);
    img.onerror = reject;
    img.src = src;
  });
}
