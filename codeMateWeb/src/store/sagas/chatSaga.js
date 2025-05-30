import { takeLatest, put, call } from 'redux-saga/effects';
import api from '../../services/api';
import {
  fetchConnectionsSuccess,
  fetchConnectionsFailure,
  fetchMessagesSuccess,
  fetchMessagesFailure,
  sendMessageSuccess,
  sendMessageFailure
} from '../slices/chatSlice';

function* handleFetchConnections() {
  try {
    const response = yield call(api.get, '/connection/accepted');
    
    if (response.data.status) {
      yield put(fetchConnectionsSuccess(response.data.connections));
    } else {
      yield put(fetchConnectionsFailure(response.data.message || 'Failed to fetch connections'));
    }
  } catch (error) {
    yield put(fetchConnectionsFailure(error.response?.data?.message || 'Failed to fetch connections'));
  }
}

function* handleFetchMessages(action) {
  try {
    const { connectionId } = action.payload;
    const response = yield call(api.get, `/chat/messages/${connectionId}`);
    
    if (response.data.status) {
      yield put(fetchMessagesSuccess({
        connectionId,
        messages: response.data.messages
      }));
    } else {
      yield put(fetchMessagesFailure(response.data.message || 'Failed to fetch messages'));
    }
  } catch (error) {
    yield put(fetchMessagesFailure(error.response?.data?.message || 'Failed to fetch messages'));
  }
}

function* handleSendMessage(action) {
  try {
    const { connectionId, content } = action.payload;
    const response = yield call(api.post, `/chat/send/${connectionId}`, { content });
    
    if (response.data.status) {
      yield put(sendMessageSuccess({
        connectionId,
        message: response.data.message
      }));
    } else {
      yield put(sendMessageFailure(response.data.message || 'Failed to send message'));
    }
  } catch (error) {
    yield put(sendMessageFailure(error.response?.data?.message || 'Failed to send message'));
  }
}

export default function* chatSaga() {
  yield takeLatest('chat/fetchConnectionsRequest', handleFetchConnections);
  yield takeLatest('chat/fetchMessagesRequest', handleFetchMessages);
  yield takeLatest('chat/sendMessageRequest', handleSendMessage);
} 