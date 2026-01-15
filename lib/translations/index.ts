import { en } from './en';
import { tr } from './tr';
import { de } from './de';
import { fr } from './fr';
import { es } from './es';

export const translations = {
  en,
  tr,
  de,
  fr,
  es,
};

export type Language = keyof typeof translations;
export type TranslationKeys = typeof en;
