import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  selectedUser: {},
};

export const userSlice = createSlice({
  name: 'userSlice',
  initialState,
  reducers: {
    setSelectedUser: (state, { payload }) => {
      state.selectedUser = payload;
    },
  },
});

export const { setSelectedUser } = userSlice.actions;
export default userSlice.reducer;
