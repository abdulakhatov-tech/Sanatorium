import { configureStore } from '@reduxjs/toolkit';

import locale from './localSlice';
import modal from './modalSlice';
import parameter from './parameterSlice';
import user from './userSlice';

export const store = configureStore({
  reducer: { locale, modal, parameter, user },
});
