import { Storage } from '../utils/Storage';
// const axios = require('axios');
import axios from 'axios'


const TOKEN_KEY = 'accessToken';
const SIGN_IN_REDIRECT_KEY = 'signInRedirect';

const getAccessToken = () => {
  return Storage.get(TOKEN_KEY);
};

const setAccessToken = (accessToken) => {
  return Storage.set(TOKEN_KEY, accessToken);
};

const removeAccessToken = () => {
  return Storage.remove(TOKEN_KEY);
};

const getSignInRedirectPath = () => {
  return Storage.get(SIGN_IN_REDIRECT_KEY, '/');
};

const setSignInRedirectPath = (path) => {
  return Storage.set(SIGN_IN_REDIRECT_KEY, path);
};

const removeSignInRedirectPath = () => {
  return Storage.remove(SIGN_IN_REDIRECT_KEY);
};

// const fetchUser = async (): Promise<User | undefined> => {
//   const token = Storage.get(TOKEN_KEY);
//   if (!token) return;

//   try {
//     const resp = await axios.get('/auth/me');
//     return resp.data;
//   } catch (e) {
//     throw new Error(formatHttpError(e));
//   }
// };

const signIn = async (signInInput) => {
  try {
    const resp = await axios.post('/api/auth/login', signInInput);
    
    const { token ,data} = resp.data;
    setAccessToken(token)
    return data;
  } catch (e) {
    console.log('Error', e)
  }
}


const signUp = async (signUpInput) => {
  try {
    const resp = await axios.post('/api/auth/register', signUpInput);
    
    const { token,data } = resp.data;
    setAccessToken(token)

    return data
  } catch (e) {
    console.log('Error', e)
  }
}
const forgotPassword = async (forgotPasswordInput) => {
  try {
    const resp = await axios.post('/api/auth/forgot-password', forgotPasswordInput);
    
    console.log("response", resp)
    
    return resp.data;
  } catch (e) {
    console.log('Error', e)
  }
}
export const AuthService = {
  signUp,
  signIn,
  forgotPassword
}