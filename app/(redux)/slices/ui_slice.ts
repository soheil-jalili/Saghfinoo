import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "ui_slice",
  initialState: {
    login: false,
    accept: false,
  },
  reducers: {
    login: (state, _) => {
      state.login = true;
    },
    accept: (state, action) => {
      state.accept = true;
    },
  },
});

const { accept, login } = uiSlice.actions;

export default uiSlice;
