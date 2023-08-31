// ------------------------------ External Imports ------------------------------
import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { initReactI18next } from 'react-i18next';
import { useSelector } from 'react-redux';
import i18next from 'i18next';

// ------------------------------ Internal Imports ------------------------------
import Login from '../components/Login';
import { en, ru, uzKrill, uzLotin } from '../utils/locales';
import Navbar from '../components/Navbar';
import { RequireAuth } from 'react-auth-kit';
import { paths } from '../utils/locales/paths';

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
      <Route path="/login" element={<Login />} />
      <Route path="*" element={<h1>Not found</h1>} />
    </Routes>
  );
};

export default Root;
