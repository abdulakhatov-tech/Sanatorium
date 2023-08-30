import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  lang: localStorage.getItem('locale') || 'en',
};

const localeSlice = createSlice({
  name: 'locale',
  initialState,
  reducers: {
    switchLocale: (state, action) => {
      state.lang = action.payload;
      localStorage.setItem('locale', action.payload);
    },
  },
});

export const { switchLocale } = localeSlice.actions;

export default localeSlice.reducer;
