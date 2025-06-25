import { takeLatest, put, call } from 'redux-saga/effects';
import api from '../../services/api';
import {
  fetchConnectionsRequest,
  fetchConnectionsSuccess,
  fetchConnectionsFailure,
  fetchMessagesRequest,
  fetchMessagesSuccess,
  fetchMessagesFailure,
  sendMessageRequest,
  sendMessageSuccess,
  sendMessageFailure
} from '../slices/chatSlice';

function* handleFetchConnections() {
  try {
    const response = yield call(api.get, '/connection/accepted');
    if (response.data.status) {
      yield put(fetchConnectionsSuccess(response.data.data));
    } else {
      yield put(fetchConnectionsFailure(response.data.message || 'Failed to fetch connections'));
    }
  } catch (error) {
    yield put(fetchConnectionsFailure(error.message || 'Failed to fetch connections'));
  }
}

function* handleFetchMessages(action) {
  try {
    const { connectionId } = action.payload;
    const response = yield call(api.get, `/chat/messages/${connectionId}`);
    if (response.data.status) {
      yield put(fetchMessagesSuccess(response.data.data));
    } else {
      yield put(fetchMessagesFailure(response.data.message || 'Failed to fetch messages'));
    }
  } catch (error) {
    yield put(fetchMessagesFailure(error.message || 'Failed to fetch messages'));
  }
}

function* handleSendMessage(action) {
  try {
    const { connectionId, message } = action.payload;
    const response = yield call(api.post, `/chat/send/${connectionId}`, { message });
    if (response.data.status) {
      yield put(sendMessageSuccess(response.data.data));
    } else {
      yield put(sendMessageFailure(response.data.message || 'Failed to send message'));
    }
  } catch (error) {
    yield put(sendMessageFailure(error.message || 'Failed to send message'));
  }
}

export default function* chatSaga() {
  yield takeLatest(fetchConnectionsRequest.type, handleFetchConnections);
  yield takeLatest(fetchMessagesRequest.type, handleFetchMessages);
  yield takeLatest(sendMessageRequest.type, handleSendMessage);
} 