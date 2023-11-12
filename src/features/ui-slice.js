import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "ui",
  initialState: {
    openMenu: false,
  },
  reducers: {
    toggleMenu: (state) => {
      state.openMenu = !state.openMenu;
    },
  },
});

export const { toggleMenu } = uiSlice.actions;

export default uiSlice.reducer;
