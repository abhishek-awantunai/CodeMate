import { takeLatest, put, call } from 'redux-saga/effects';
import api from '../../services/api';
import {
  fetchProfilesSuccess,
  fetchProfilesFailure
} from '../slices/profileSlice';

function* handleFetchProfiles() {
  try {
    const response = yield call(api.get, '/profile/view');
    
    if (response.data.status && response.data.data) {
      yield put(fetchProfilesSuccess(response.data.data));
    } else {
      yield put(fetchProfilesFailure(response.data.message || 'Invalid response from server'));
    }
  } catch (error) {
    yield put(fetchProfilesFailure(error.response?.data?.message || 'Failed to fetch profile'));
  }
}

export default function* profileSaga() {
  yield takeLatest('profile/fetchProfilesRequest', handleFetchProfiles);
} 