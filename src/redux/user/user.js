import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import BASE_URL from '../api';

const initialState = {
  loggedIn: false,
  user: {},
  message: '',
};

export const login = createAsyncThunk('user/login', async (user) => {
  const response = await axios.post(
    `${BASE_URL}/login`,
    {
      user,
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
  const response = await axios.get(
    `${BASE_URL}/authorized`,
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
      user,
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
        loggedIn: false,
        user: {},
        message: '',
      };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(signup.pending, (state) => ({
      ...state,
      loggedIn: false,
      user: {},
      message: '',
    }));
    builder.addCase(signup.fulfilled, (state, action) => {
      localStorage.setItem('token', action.payload.jwt);
      localStorage.setItem('user', JSON.stringify(action.payload.user));
      return {
        ...state,
        loggedIn: true,
        user: action.payload.user,
        message: 'Account created successfully!',
      };
    });
    builder.addCase(signup.rejected, (state) => ({
      ...state,
      loggedIn: false,
      user: {},
      message: 'Account could not be created. Try again!',
    }));
    builder.addCase(login.pending, (state) => ({
      ...state,
      loggedIn: false,
      user: {},
      message: '',
    }));
    builder.addCase(login.fulfilled, (state, action) => {
      localStorage.setItem('token', action.payload.jwt);
      localStorage.setItem('user', JSON.stringify(action.payload.user));
      return {
        ...state,
        loggedIn: true,
        user: action.payload.user,
        message: '',
      };
    });
    builder.addCase(login.rejected, (state) => ({
      ...state,
      loggedIn: false,
      user: {},
      message: 'Invalid email or password',
    }));
    builder.addCase(deleteAccount.pending, (state) => ({
      ...state,
      loggedIn: false,
      user: {},
      message: '',
    }));
    builder.addCase(deleteAccount.fulfilled, (state) => ({
      ...state,
      loggedIn: false,
      user: {},
      message: 'Account deleted successfully!',
    }));
    builder.addCase(deleteAccount.rejected, (state) => ({
      ...state,
      loggedIn: false,
      user: {},
      message: 'Account could not be deleted. Try again!',
    }));
  },
});

export const { logout } = userSlice.actions;

export default userSlice.reducer;
