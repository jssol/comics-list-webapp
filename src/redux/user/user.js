import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import BASE_URL from '../api';

const initialState = {
  status: 'idle',
  user: {},
  error: '',
};

export const login = createAsyncThunk('user/login', async (user) => {
  const response = await axios.post(
    `${BASE_URL}/login`,
    {
      params: { user },
    },
    {
      headers: {
        Authorization: `${localStorage.getItem('token')}`,
      },
    },
  );
  return response.data;
});

export const fetchCurrentUser = createAsyncThunk('user/profile', async () => {
  const response = await axios.post(
    `${BASE_URL}/login`,
    {},
    {
      headers: {
        Authorization: `${localStorage.getItem('token')}`,
      },
    },
  );
  return response.data;
});

export const signup = createAsyncThunk('user/signup', async (user) => {
  const response = await axios.post(
    `${BASE_URL}/signup`,
    {
      params: { user },
    },
    {
      headers: {
        Authorization: `${localStorage.getItem('token')}`,
      },
    },
  );
  return response.data;
});

export const deleteAccount = createAsyncThunk('user/delete-account', async () => {
  const response = await axios.post(`${BASE_URL}/delete-account`);
  return response.data;
});

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logout: (state) => {
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      return {
        ...state,
        status: 'idle',
        user: {},
        error: '',
      };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(signup.pending, (state) => ({
      ...state,
      status: 'loading',
      user: {},
      error: '',
    }));
    builder.addCase(signup.fulfilled, (state, action) => {
      localStorage.setItem('token', action.payload.token);
      localStorage.setItem('user', JSON.stringify(action.payload.user));
      return {
        ...state,
        status: 'completed',
        user: action.payload.user,
        error: '',
      };
    });
    builder.addCase(signup.rejected, (state, action) => ({
      ...state,
      status: 'failed',
      user: {},
      error: action.error.message,
    }));
    builder.addCase(login.pending, (state) => ({
      ...state,
      status: 'loading',
      user: {},
      error: '',
    }));
    builder.addCase(login.fulfilled, (state, action) => {
      localStorage.setItem('token', action.payload.token);
      localStorage.setItem('user', JSON.stringify(action.payload.user));
      return {
        ...state,
        status: 'completed',
        user: action.payload.user,
        error: '',
      };
    });
    builder.addCase(login.rejected, (state, action) => ({
      ...state,
      status: 'failed',
      user: {},
      error: action.error.message,
    }));
    builder.addCase(deleteAccount.pending, (state) => ({
      ...state,
      status: 'loading',
      user: {},
      error: '',
    }));
    builder.addCase(deleteAccount.fulfilled, (state, action) => ({
      ...state,
      status: 'completed',
      user: {},
      error: action.error.message,
    }));
    builder.addCase(deleteAccount.rejected, (state, action) => ({
      ...state,
      status: 'failed',
      user: {},
      error: action.error.message,
    }));
  },
});

export const { logout } = userSlice.actions;

export default userSlice.reducer;
