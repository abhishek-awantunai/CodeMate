import { takeLatest, put, call, select } from 'redux-saga/effects';
import api from '../../services/api';
import {
  fetchFeedSuccess,
  fetchFeedFailure
} from '../slices/feedSlice';

function* handleFetchFeed() {
  try {
    const { currentPage } = yield select(state => state.feed);
    const response = yield call(api.get, `/connection/find?page=${currentPage}`);
    
    if (response.data.users) {
      yield put(fetchFeedSuccess(response.data));
    } else {
      yield put(fetchFeedFailure('Invalid response from server'));
    }
  } catch (error) {
    yield put(fetchFeedFailure(error.response?.data?.message || 'Failed to fetch profiles'));
  }
}

export default function* feedSaga() {
  yield takeLatest('feed/fetchFeedRequest', handleFetchFeed);
} 