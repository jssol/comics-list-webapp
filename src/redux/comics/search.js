import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import BASE_URL from '../api';

const initialState = {
  status: 'idle',
  comics: [],
  error: '',
};

export const searchComics = createAsyncThunk('comics/searchComics', async (query) => {
  const response = await axios.get(`${BASE_URL}/search`, {
    params: { query },
  });
  return response.data;
});

const searchSlice = createSlice({
  name: 'search',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(searchComics.pending, (state) => {
      let { status, comics, error } = state;
      status = 'loading';
      comics = [];
      error = '';
      return {
        ...state,
        status,
        comics,
        error,
      };
    });
    builder.addCase(searchComics.fulfilled, (state, action) => {
      let { status, comics, error } = state;
      status = 'completed';
      comics = action.payload;
      error = '';
      return {
        ...state,
        status,
        comics,
        error,
      };
    });
    builder.addCase(searchComics.rejected, (state, action) => {
      let { status, comics, error } = state;
      status = 'failed';
      comics = [];
      error = action.error.message;
      return {
        ...state,
        status,
        comics,
        error,
      };
    });
  },
});

export default searchSlice.reducer;
