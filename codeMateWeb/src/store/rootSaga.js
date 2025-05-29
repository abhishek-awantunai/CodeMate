import { all } from 'redux-saga/effects';
import authSaga from './sagas/authSaga';
import profileSaga from './sagas/profileSaga';
import connectionsSaga from './sagas/connectionsSaga';
import chatSaga from './sagas/chatSaga';

export default function* rootSaga() {
  yield all([
    authSaga(),
    profileSaga(),
    connectionsSaga(),
    chatSaga(),
  ]);
} 