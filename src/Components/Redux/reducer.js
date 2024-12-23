import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isBlurred: false,
};

const blurSlice = createSlice({
  name: 'blur',
  initialState,
  reducers: {
    setBlur(state, action) {
      state.isBlurred = action.payload;
    }
  }
});

export const { setBlur } = blurSlice.actions;
export default blurSlice.reducer;

