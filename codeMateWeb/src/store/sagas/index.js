import { all } from 'redux-saga/effects';
import authSaga from './authSaga';
import profileSaga from './profileSaga';
import feedSaga from './feedSaga';
import connectionSaga from './connectionSaga';
import chatSaga from './chatSaga';

export default function* rootSaga() {
  yield all([
    authSaga(),
    profileSaga(),
    feedSaga(),
    connectionSaga(),
    chatSaga()
  ]);
} 