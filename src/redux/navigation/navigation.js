import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  open: false,
};

const navSlice = createSlice({
  name: 'navigation',
  initialState,
  reducers: {
    navOpened: (state) => ({
      ...state,
      open: true,
    }),
    navClosed: (state) => ({
      ...state,
      open: false,
    }),
  },
});

export const { navOpened, navClosed } = navSlice.actions;

export default navSlice.reducer;
