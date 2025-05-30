import { takeLatest, put, call } from 'redux-saga/effects';
import api from '../../services/api';
import {
  sendConnectionSuccess,
  sendConnectionFailure,
  fetchPendingConnectionsSuccess,
  fetchPendingConnectionsFailure,
  acceptConnectionSuccess,
  acceptConnectionFailure,
  rejectConnectionSuccess,
  rejectConnectionFailure
} from '../slices/connectionSlice';

function* handleFetchPendingConnections() {
  try {
    const response = yield call(api.get, '/connection/requests/received');
    
    if (response.data.status) {
      yield put(fetchPendingConnectionsSuccess(response.data));
    } else {
      yield put(fetchPendingConnectionsFailure(response.data.message || 'Failed to fetch pending connections'));
    }
  } catch (error) {
    yield put(fetchPendingConnectionsFailure(error.response?.data?.message || 'Failed to fetch pending connections'));
  }
}

function* handleAcceptConnection(action) {
  try {
    const { connectionId } = action.payload;
    const response = yield call(api.post, `/connection/receive/accepted/${connectionId}`);
    
    if (response.data.status) {
      yield put(acceptConnectionSuccess({ message: response.data.message, connectionId }));
    } else {
      yield put(acceptConnectionFailure(response.data.message || 'Failed to accept connection'));
    }
  } catch (error) {
    yield put(acceptConnectionFailure(error.response?.data?.message || 'Failed to accept connection'));
  }
}

function* handleRejectConnection(action) {
  try {
    const { connectionId } = action.payload;
    const response = yield call(api.post, `/connection/receive/rejected/${connectionId}`);
    
    if (response.data.status) {
      yield put(rejectConnectionSuccess({ message: response.data.message, connectionId }));
    } else {
      yield put(rejectConnectionFailure(response.data.message || 'Failed to reject connection'));
    }
  } catch (error) {
    yield put(rejectConnectionFailure(error.response?.data?.message || 'Failed to reject connection'));
  }
}

function* handleSendConnection(action) {
  try {
    const { status, connectionId } = action.payload;
    const response = yield call(api.post, `/connection/send/${status}/${connectionId}`);
    
    if (response.data.status) {
      yield put(sendConnectionSuccess(response.data.message));
    } else {
      yield put(sendConnectionFailure(response.data.message || 'Failed to send connection request'));
    }
  } catch (error) {
    yield put(sendConnectionFailure(error.response?.data?.message || 'Failed to send connection request'));
  }
}

export default function* connectionSaga() {
  yield takeLatest('connection/fetchPendingConnectionsRequest', handleFetchPendingConnections);
  yield takeLatest('connection/acceptConnectionRequest', handleAcceptConnection);
  yield takeLatest('connection/rejectConnectionRequest', handleRejectConnection);
  yield takeLatest('connection/sendConnectionRequest', handleSendConnection);
} 