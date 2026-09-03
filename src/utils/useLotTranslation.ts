/**
 * useLotTranslation — Hook for multilingual lot field display
 *
 * Returns the correct field text based on the selected language.
 * Falls back gracefully to Chinese (zh) if a translation is missing.
 */

import type { GuanyinLot, GuanyinAspectPrediction, LotLanguage, LotFieldTranslation } from '../types';
import { LOT_TRANSLATIONS } from '../data/lotsTranslations';

type AspectItem = { label: string; result: string };

/** A simple translation function that resolves the right language field */
export function useLotTranslation(lot: GuanyinLot | null, lang: LotLanguage) {
  const trans = lot ? LOT_TRANSLATIONS[String(lot.id)] : undefined;
  const hasTranslation = !!trans && !!(trans.en || trans.ja);

  function t(field: 'meaning' | 'allusion' | 'explanation' | 'zenAdvice', zhValue: string): string;
  function t(field: 'keywords', zhValue: string[]): string[];
  function t(field: 'aspects', zhValue: GuanyinAspectPrediction[]): AspectItem[];
  function t(
    field: keyof LotFieldTranslation,
    zhValue: string | string[] | GuanyinAspectPrediction[]
  ): string | string[] | AspectItem[] {
    if (lang === 'zh' || !trans) return zhValue as any;
    const langData = lang === 'en' ? trans.en : trans.ja;
    if (!langData) return zhValue as any;
    const translated = langData[field];
    return (translated !== undefined ? translated : zhValue) as any;
  }

  return { t, hasTranslation };
}
