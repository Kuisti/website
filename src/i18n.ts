import i18n, { Resource } from 'i18next';
import LanguageDetector, { DetectorOptions } from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

import commonEn from './locales/en/common.json';
import commonFi from './locales/fi/common.json';
import commonDe from './locales/de/common.json';
import commonRu from './locales/ru/common.json';

const detection: DetectorOptions = {
  order: [ 'navigator' ],
};

const resources: Resource = {
  en: { common: commonEn },
  fi: { common: commonFi },
  de: { common: commonDe },
  ru: { common: commonRu },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    detection,
    resources,
    ns: [ 'common' ],
    fallbackLng: 'en',
    supportedLngs: [ 'en', 'fi', 'de', 'ru' ],
    interpolation: {
      escapeValue: false,
    },
    debug: false,
  });

export default i18n;
