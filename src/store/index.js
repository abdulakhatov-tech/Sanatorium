import { configureStore } from '@reduxjs/toolkit';

import locale from './localSlice';
import modal from './modalSlice';

export const store = configureStore({
  reducer: { locale, modal },
});
