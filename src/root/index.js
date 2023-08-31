// ------------------------------ External Imports ------------------------------
import i18next from 'i18next';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RequireAuth } from 'react-auth-kit';
import { Route, Routes } from 'react-router-dom';
import { initReactI18next } from 'react-i18next';

// ------------------------------ Internal Imports ------------------------------
import { paths } from '../utils/paths';
import Navbar from '../components/Navbar';
import { LoginPage, RegisterPage } from '../pages';
import { en, ru, uzKrill, uzLotin } from '../utils/locales';

const Root = () => {
  const { lang } = useSelector((state) => state.locale);

  useEffect(() => {
    if (!localStorage.getItem('locale')) {
      localStorage.setItem('locale', 'en');
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
      <Route
        path="/"
        element={
          <RequireAuth loginPath={'/login'}>
            <Navbar />
          </RequireAuth>
        }
      >
        {paths?.map(({ id, Component, path, hasChild, children }) => {
          return !hasChild ? (
            <Route key={id} path={path} element={<Component />} />
          ) : (
            <Route key={id} path={path} element={<Component />}>
              {children.map(({ id, Component, path, hasChild, children }) => {
                return !hasChild ? (
                  <Route key={id} path={path} element={<Component />} />
                ) : (
                  <Route Route key={id} path={path} element={<Component />}>
                    {children.map(
                      ({ id, Component, path, hasChild, children }) => (
                        <Route key={id} path={path} element={<Component />} />
                      )
                    )}
                  </Route>
                );
              })}
            </Route>
          );
        })}
      </Route>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="*" element={<h1>Not found</h1>} />
    </Routes>
  );
};

export default Root;
