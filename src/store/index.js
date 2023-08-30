import { configureStore } from '@reduxjs/toolkit';

import locale from './localSlice';

export const store = configureStore({
  reducer: { locale },
});
