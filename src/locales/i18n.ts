import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import TranslationEn from './en/index.ts';
import TranslationFr from './fr/index.ts';

const resources = {
  en: {
    translation: TranslationEn
  },
  fr: {
    translation: TranslationFr
  }
};

i18n.use(initReactI18next).init({
  compatibilityJSON: 'v3',
  resources: resources,
  lng: 'fr',
  interpolation: {
    escapeValue: false
  }
});
export default i18n;

export const changeCurrentLanguage = (language: 'fr' | 'en') => {
  i18n.changeLanguage(language);
};

export const strings = (word: string) => {
  return i18n.t(`${word}`);
};
