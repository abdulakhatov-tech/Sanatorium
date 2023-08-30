// ------------------------------ External Imports ------------------------------
import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { initReactI18next } from 'react-i18next';
import { useSelector } from 'react-redux';
import i18next from 'i18next';

// ------------------------------ Internal Imports ------------------------------
import Login from '../components/Login';
import { en, ru, uzKrill, uzLotin } from '../utils/locales';

const Root = () => {
  const { lang } = useSelector((state) => state.locale);

  useEffect(() => {
    if (!localStorage.getItem('locale')) {
      localStorage.setItem('locale', 'uzLotin');
    }
  }, []);

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

  return (
    <Routes>
      <Route path="/" element={<Login />} />
    </Routes>
  );
};

export default Root;
