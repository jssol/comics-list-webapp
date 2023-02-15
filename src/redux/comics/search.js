import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import BASE_URL from '../api';

const initialState = {
  status: 'idle',
  comics: [],
  message: '',
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
      let { status, comics } = state;
      status = 'loading';
      comics = [];
      return {
        ...state,
        status,
        comics,
      };
    });
    builder.addCase(searchComics.fulfilled, (state, action) => {
      let { status, comics, message } = state;
      status = 'completed';
      comics = action.payload;
      if (comics.length === 0) {
        status = 'failed';
        message = 'No Comics Found :(';
      }
      return {
        ...state,
        status,
        comics,
        message,
      };
    });
    builder.addCase(searchComics.rejected, (state) => {
      let { status, comics } = state;
      status = 'failed';
      comics = [];
      return {
        ...state,
        status,
        comics,
        message: 'No Comics Found :(',
      };
    });
  },
});

export default searchSlice.reducer;
