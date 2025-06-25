import { takeLatest, put, call } from 'redux-saga/effects';
import api from '../../services/api';
import {
  loginSuccess,
  loginFailure,
  signupSuccess,
  signupFailure,
} from '../slices/authSlice';

function* handleLogin(action) {
  try {
    const { email, password } = action.payload;
    const response = yield call(api.post, '/auth/login', {
      email,
      password
    });
    
    if (response.data.status && response.data.data) {
      // Store user data in localStorage
      localStorage.setItem('user', JSON.stringify(response.data.data));
      
      // Update Redux state
      yield put(loginSuccess({
        user: response.data.data,
        message: response.data.message
      }));
      
      // Navigate to feed page
      window.location.href = '/feed';
    } else {
      yield put(loginFailure('Invalid response from server'));
    }
  } catch (error) {
    yield put(loginFailure(error.response?.data?.message || 'Login failed'));
  }
}

function* handleSignup(action) {
  try {
    const response = yield call(api.post, '/auth/signup', action.payload);
    
    if (response.data.status && response.data.data) {
      // Store user data in localStorage
      localStorage.setItem('user', JSON.stringify(response.data.data));
      
      // Update Redux state
      yield put(signupSuccess({
        user: response.data.data,
        message: response.data.message
      }));
      
      // Navigate to feed page
      window.location.href = '/feed';
    } else {
      yield put(signupFailure('Invalid response from server'));
    }
  } catch (error) {
    yield put(signupFailure(error.response?.data?.message || 'Signup failed'));
  }
}

export default function* authSaga() {
  yield takeLatest('auth/loginRequest', handleLogin);
  yield takeLatest('auth/signupRequest', handleSignup);
} 