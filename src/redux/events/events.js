import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import BASE_URL from '../api';

const initialState = {
  status: 'idle',
  events: [],
  error: '',
};

export const fetchEvents = createAsyncThunk('events/fetchEvents', async () => {
  const response = await axios.get(`${BASE_URL}/events`);
  return response.data;
});

const eventsSlice = createSlice({
  name: 'events',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchEvents.pending, (state) => {
      let { status, events, error } = state;
      status = 'loading';
      events = [];
      error = '';
      return {
        ...state, status, events, error,
      };
    });
    builder.addCase(fetchEvents.fulfilled, (state, action) => {
      let { status, events, error } = state;
      status = 'completed';
      events = action.payload;
      error = '';
      return {
        ...state, status, events, error,
      };
    });
    builder.addCase(fetchEvents.rejected, (state, action) => {
      let { status, events, error } = state;
      status = 'failed';
      events = [];
      error = action.error.message;
      return {
        ...state, status, events, error,
      };
    });
  },
});

export default eventsSlice.reducer;
