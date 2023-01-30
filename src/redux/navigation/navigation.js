import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isOpen: false,
};

const navSlice = createSlice({
  name: 'navigation',
  initialState,
  reducers: {
    navOpened: (state) => ({
      ...state,
      isOpen: true,
    }),
    navClosed: (state) => ({
      ...state,
      isOpen: false,
    }),
  },
});

export const { navOpened, navClosed } = navSlice.actions;

export default navSlice.reducer;
