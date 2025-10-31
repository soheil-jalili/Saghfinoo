import { configureStore } from "@reduxjs/toolkit";
import uiSlice from "./slices/ui_slice";

const Store = configureStore({
  reducer: {
    uiSlice: uiSlice.reducer,
  },
});

export default Store;
