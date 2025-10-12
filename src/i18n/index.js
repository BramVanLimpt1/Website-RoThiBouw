// @project
export { default as useTranslation } from '@/hooks/useTranslation';
export { translations as enTranslations } from './translations/en';
export { translations as nlTranslations } from './translations/nl';

// Supported languages
export const SUPPORTED_LANGUAGES = [
  { code: 'en', name: 'English', nativeName: 'English' },
  { code: 'nl', name: 'Dutch', nativeName: 'Nederlands' }
];

export const DEFAULT_LANGUAGE = 'en';
