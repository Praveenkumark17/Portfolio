import { createSlice } from "@reduxjs/toolkit";

const getInitialTheme = () => {
  const saved = localStorage.getItem("theme");
  if (saved) {
    try {
      const { theme } = JSON.parse(saved);
      return theme;
    } catch (e) {
      return false;
    }
  }
  return window.matchMedia("(prefers-color-scheme: dark)").matches;
};

const initialState = {
  isTheme: getInitialTheme(),
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleTheme(state) {
      state.isTheme = !state.isTheme;
      const themeValue = state.isTheme ? 'dark' : 'light';
      localStorage.setItem("theme", JSON.stringify({ theme: state.isTheme }));
      document.documentElement.setAttribute('data-theme', themeValue);
      document.documentElement.setAttribute('data-bs-theme', themeValue);
    },
    setTheme(state, action) {
      state.isTheme = action.payload;
      const themeValue = state.isTheme ? 'dark' : 'light';
      localStorage.setItem("theme", JSON.stringify({ theme: state.isTheme }));
      document.documentElement.setAttribute('data-theme', themeValue);
      document.documentElement.setAttribute('data-bs-theme', themeValue);
    }
  }
});

export const { toggleTheme, setTheme } = themeSlice.actions;
export default themeSlice.reducer;