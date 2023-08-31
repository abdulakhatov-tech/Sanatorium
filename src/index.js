import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import AppProvider from './providers/app.provider';
import Root from './root';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  <Suspense fallback="loading...">
    <AppProvider>
      <Root />
    </AppProvider>
  </Suspense>
  // </React.StrictMode>
);
