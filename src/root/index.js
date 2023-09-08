import i18n from 'i18next';
import { lazy, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { initReactI18next } from 'react-i18next';
import { Routes, Route, Navigate } from 'react-router-dom';
import { RequireAuth, useIsAuthenticated } from 'react-auth-kit';

import { paths } from '../utils/paths';
import { en } from '../utils/locales/en';
import { ru } from '../utils/locales/ru';
import Navbar from '../components/Navbar';
import { uzKrill } from '../utils/locales/uzb (krill)';
import { uzLotin } from '../utils/locales/uzb (lotin)';
import Error from '../pages/error';

// const Error = lazy(() => import('../components/Error'));
const Login = lazy(() => import('../pages/login'));
const NotFound = lazy(() => import('../pages/not-found'));

const Root = () => {
  const { lang } = useSelector((state) => state.locale);
  const isAuthenticated = useIsAuthenticated();

  useEffect(() => {
    if (!localStorage.getItem('locale'))
      localStorage.setItem('locale', 'uzLotin');
  }, []);

  i18n.use(initReactI18next).init({
    resources: {
      en: { translation: en },
      ru: { translation: ru },
      uzKrill: { translation: uzKrill },
      uzLotin: { translation: uzLotin },
    },
    lang,
    fallbackLng: lang,
    interpolation: { escapeValue: false },
  });

  return (
    <Routes>
      <Route
        path="/"
        element={
          <RequireAuth loginPath="/login">
            <Navbar />
          </RequireAuth>
        }
      >
        {paths.map(({ path, RenderComp, _id, hasChild, children }) =>
          !hasChild ? (
            <Route path={path} element={<RenderComp />} key={_id} />
          ) : (
            <Route path={path} element={<RenderComp />} key={_id}>
              {children?.map(({ path, RenderComp: ChildRenderComp, _id }) => (
                <Route key={_id} path={path} element={<ChildRenderComp />} />
              ))}
            </Route>
          )
        )}
      </Route>
      {isAuthenticated() ? (
        <Route path="/login" element={<Navigate to={`/`} />} />
      ) : (
        <Route path="/login" element={<Login />} />
      )}
      <Route path="*" element={<NotFound />} />
      <Route path="/error" element={<Error />} />
    </Routes>
  );
};

export default Root;
