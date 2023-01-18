import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import BASE_URL from '../api';

const initialState = {
  status: 'idle',
  comics: [],
  error: '',
};

export const fetchComics = createAsyncThunk('comics/fetchComics', async () => {
  const response = await axios.get(`${BASE_URL}/comics`);
  return response.data;
});

const comicsSlice = createSlice({
  name: 'comics',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchComics.pending, (state) => {
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
    builder.addCase(fetchComics.fulfilled, (state, action) => {
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
    builder.addCase(fetchComics.rejected, (state, action) => {
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

export default comicsSlice.reducer;
