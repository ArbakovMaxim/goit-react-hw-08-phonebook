import axios from 'axios';
import { BASE_URL } from 'constants/baseUrl';

const instance = axios.create({
  baseURL: BASE_URL,
});

const setToken = (token = '') => {
  if (token) {
    return (instance.defaults.headers.authorization = `Bearer ${token}`);
  }
  instance.defaults.headers.authorization = '';
};

export const signup = async data => {
  const { data: result } = await instance.post('/users/signup', data);
  setToken(result.token);
  return result;
};

export const login = async data => {
  const { data: result } = await instance.post('/users/login', data);
  setToken(result.token);
  return result;
};

export const logout = async data => {
  const { data: result } = await instance.post('/users/logout', data);
  setToken('');
  return result;
};

export const getCurrentUser = async token => {
  try {
    setToken(token);
    const result = await instance.get('/users/current');

    return result.data;
  } catch (error) {
    setToken('');
    throw error;
  }
};

export default instance;
