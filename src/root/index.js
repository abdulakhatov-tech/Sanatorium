// ------------------------------ External Imports ------------------------------
import { useEffect } from 'react';
import { RequireAuth } from 'react-auth-kit';
import { Route, Routes } from 'react-router-dom';

// ------------------------------ Internal Imports ------------------------------
import { useI18Next } from '../i18n';
import { paths } from '../utils/paths';
import Navbar from '../components/Navbar';
import { LoginPage, RegisterPage } from '../pages';

const Root = () => {
  // ------------------------------ Set default language to LocalStorage ------------------------------
  useEffect(() => {
    if (!localStorage.getItem('locale')) {
      localStorage.setItem('locale', 'en');
    }
  }, []);

  // ------------------------------ Language config ------------------------------
  useI18Next();

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
