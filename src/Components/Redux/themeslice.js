import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isTheme: false,
  };

const themeSlice = createSlice({
    name: 'dark',
    initialState,
    reducers: {
      setThemes(state, action) {
        state.isTheme = action.payload;
      }
    }
  });

  export const { setThemes } = themeSlice.actions;
  export default themeSlice.reducer;