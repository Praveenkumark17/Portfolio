import { configureStore } from "@reduxjs/toolkit";
import blurReducer from "./reducer";
import themeSlice from './themeslice';

const store = configureStore({
  reducer: {
    blur: blurReducer,
    theme:themeSlice
  },
});

export default store;
