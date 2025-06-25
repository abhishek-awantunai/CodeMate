import { createSlice } from '@reduxjs/toolkit';

// Get initial state from localStorage if available
const getInitialState = () => {
  const user = localStorage.getItem('user');
  
  return {
    user: user ? JSON.parse(user) : null,
    loading: false,
    error: null,
    message: null
  };
};

const authSlice = createSlice({
  name: 'auth',
  initialState: getInitialState(),
  reducers: {
    loginRequest: (state) => {
      state.loading = true;
      state.error = null;
      state.message = null;
    },
    loginSuccess: (state, action) => {
      state.loading = false;
      state.user = action.payload.user;
      state.message = action.payload.message;
      state.error = null;
    },
    loginFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
      state.message = null;
    },
    signupRequest: (state) => {
      state.loading = true;
      state.error = null;
      state.message = null;
    },
    signupSuccess: (state, action) => {
      state.loading = false;
      state.user = action.payload.user;
      state.message = action.payload.message;
      state.error = null;
    },
    signupFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
      state.message = null;
    },
    logout: (state) => {
      state.user = null;
      state.error = null;
      state.message = null;
      // Clear localStorage
      localStorage.removeItem('user');
    },
  },
});

export const {
  loginRequest,
  loginSuccess,
  loginFailure,
  signupRequest,
  signupSuccess,
  signupFailure,
  logout,
} = authSlice.actions;

export default authSlice.reducer; 