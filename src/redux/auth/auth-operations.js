import * as api from '../../api/auth';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

const register = createAsyncThunk('auth/signup', async data => {
  try {
    const result = await api.signup(data);
    return result;
  } catch (error) {
    toast.error(`Sorry, Register failed. Try again.`);
  }
});

const logIn = createAsyncThunk('auth/login', async data => {
  try {
    const result = await api.login(data);
    return result;
  } catch (error) {
    toast.error(`Sorry, login failed. Check email and password. Try again.`);
  }
});

const logOut = createAsyncThunk('auth/logout', async data => {
  try {
    const result = await api.logout(data);
    return result;
  } catch (error) {
    toast.error(`Sorry, logout failed. Try again.`);
  }
});

const fetchCurrentUser = createAsyncThunk(
  'auth/getCurrentUser',
  async (_, thunkAPI) => {
    try {
      const { auth } = thunkAPI.getState();
      const result = await api.getCurrentUser(auth.token);

      return result;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error,
        toast.error('Sorry, your token is dead or time is out ')
      );
    }
  },
  {
    condition: (_, thunkAPI) => {
      const { auth } = thunkAPI.getState();
      if (!auth.token) return false;
    },
  }
);

const operations = {
  register,
  logOut,
  logIn,
  fetchCurrentUser,
};
export default operations;
