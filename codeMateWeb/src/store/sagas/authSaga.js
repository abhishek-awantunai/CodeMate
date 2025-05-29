import { takeLatest, put, call } from 'redux-saga/effects';
import axios from 'axios';
import { loginRequest, loginSuccess, loginFailure } from '../slices/authSlice';

// API configuration
const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL || 'http://localhost:3000/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

// Login saga
function* handleLogin(action) {
  try {
    yield put(loginRequest());
    const { email, password } = action.payload;
    
    const response = yield call(api.post, '/auth/login', {
      email,
      password,
    });

    yield put(loginSuccess(response.data));
  } catch (error) {
    yield put(loginFailure(error.response?.data?.message || 'Login failed'));
  }
}

export default function* authSaga() {
  yield takeLatest('auth/loginRequest', handleLogin);
} 