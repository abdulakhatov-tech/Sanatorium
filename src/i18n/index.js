import i18next from 'i18next';
import { useSelector } from 'react-redux';
import { initReactI18next } from 'react-i18next';

import { en, ru, uzKrill, uzLotin } from '../utils/locales';

export const useI18Next = () => {
  const { lang } = useSelector((state) => state.locale);

  i18next
    .use(initReactI18next) // passes i18n down to react-i18next
    .init({
      resources: {
        en: {
          translation: en,
        },
        ru: {
          translation: ru,
        },
        uzLotin: {
          translation: uzLotin,
        },
        uzKrill: {
          translation: uzKrill,
        },
      },
      lng: lang,
      fallback: lang,
      interpolation: {
        escapeValue: false, // react already safes from xss
      },
    });
};
