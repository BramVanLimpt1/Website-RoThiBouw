import { useMemo } from 'react';

// @project
import useConfig from './useConfig';
import { translations as enTranslations } from '@/i18n/translations/en';
import { translations as nlTranslations } from '@/i18n/translations/nl';

const translationMap = {
  en: enTranslations,
  nl: nlTranslations
};

/***************************  HOOK - TRANSLATION  ***************************/

export default function useTranslation() {
  const { language } = useConfig();

  const translations = useMemo(() => {
    return translationMap[language] || translationMap.en;
  }, [language]);

  // Helper function to get nested translation by dot notation
  const t = (key, fallback = '') => {
    const keys = key.split('.');
    let result = translations;

    for (const k of keys) {
      if (result && typeof result === 'object' && k in result) {
        result = result[k];
      } else {
        // Return fallback or the key itself if translation not found
        return fallback || key;
      }
    }

    return result || fallback || key;
  };

  return {
    t,
    language,
    translations
  };
}
