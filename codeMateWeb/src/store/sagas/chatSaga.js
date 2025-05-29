import { takeLatest, put, call, select } from 'redux-saga/effects';
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
  sendMessageFailure,
} from '../slices/chatSlice';

function* handleFetchConnections() {
  try {
    yield put(fetchConnectionsRequest());
    const response = yield call(api.get, '/connections');
    yield put(fetchConnectionsSuccess(response.data));
  } catch (error) {
    yield put(fetchConnectionsFailure(error.response?.data?.message || 'Failed to fetch connections'));
  }
}

function* handleFetchMessages(action) {
  try {
    yield put(fetchMessagesRequest());
    const { connectionId } = action.payload;
    const response = yield call(api.get, `/messages/${connectionId}`);
    yield put(fetchMessagesSuccess({ connectionId, messages: response.data }));
  } catch (error) {
    yield put(fetchMessagesFailure(error.response?.data?.message || 'Failed to fetch messages'));
  }
}

function* handleSendMessage(action) {
  try {
    yield put(sendMessageRequest());
    const { connectionId, content } = action.payload;
    const response = yield call(api.post, `/messages/${connectionId}`, { content });
    yield put(sendMessageSuccess({ connectionId, message: response.data }));
  } catch (error) {
    yield put(sendMessageFailure(error.response?.data?.message || 'Failed to send message'));
  }
}

export default function* chatSaga() {
  yield takeLatest('chat/fetchConnectionsRequest', handleFetchConnections);
  yield takeLatest('chat/fetchMessagesRequest', handleFetchMessages);
  yield takeLatest('chat/sendMessageRequest', handleSendMessage);
} 