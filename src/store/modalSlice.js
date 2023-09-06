import { createSlice } from '@reduxjs/toolkit';

const modalSlice = createSlice({
  name: 'modalSlice',
  initialState: {
    settingModalVisibility: false,
    langModalVisibility: false,
    logoutModalVisibility: false,
    parameterModalVisibility: false,
    userModalVisibility: false,
    moveUserModalVisibility: false,
    addUserModalVisibility: false,
    bookedPlacesModalVisibility: false,
    bookedDetailedModalVisibility: false,
  },
  reducers: {
    setSettingModalVisibility(state) {
      state.settingModalVisibility = !state.settingModalVisibility;
    },
    setLangModalVisibility(state) {
      state.langModalVisibility = !state.langModalVisibility;
    },
    setLogoutModalVisibility(state) {
      state.logoutModalVisibility = !state.logoutModalVisibility;
    },
    setParameterModalVisibility(state) {
      state.parameterModalVisibility = !state.parameterModalVisibility;
    },
    setUserModalVisibility(state) {
      state.userModalVisibility = !state.userModalVisibility;
    },
    setMoveUserModalVisibility(state) {
      state.moveUserModalVisibility = !state.moveUserModalVisibility;
    },
    setAddUserModalVisibility(state) {
      state.addUserModalVisibility = !state.addUserModalVisibility;
    },
    setBookedPlacesModalVisibility(state) {
      state.bookedPlacesModalVisibility = !state.bookedPlacesModalVisibility;
    },
    setBookedDetailedModalVisibility(state) {
      state.bookedDetailedModalVisibility =
        !state.bookedDetailedModalVisibility;
    },
  },
});

export const {
  setSettingModalVisibility,
  setLangModalVisibility,
  setLogoutModalVisibility,
  setParameterModalVisibility,
  setUserModalVisibility,
  setMoveUserModalVisibility,
  setAddUserModalVisibility,
  setBookedPlacesModalVisibility,
  setBookedDetailedModalVisibility,
} = modalSlice.actions;
export default modalSlice.reducer;
