import { createSlice } from '@reduxjs/toolkit';

const chatSlice = createSlice({
  name: 'chat',
  initialState: {
    connections: [],
    selectedConnection: null,
    messages: [],
    loading: false,
    error: null
  },
  reducers: {
    fetchConnectionsRequest: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchConnectionsSuccess: (state, action) => {
      state.loading = false;
      state.connections = action.payload;
      state.error = null;
    },
    fetchConnectionsFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    selectConnection: (state, action) => {
      state.selectedConnection = action.payload;
    },
    fetchMessagesRequest: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchMessagesSuccess: (state, action) => {
      state.loading = false;
      state.messages = action.payload;
      state.error = null;
    },
    fetchMessagesFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    sendMessageRequest: (state) => {
      state.loading = true;
      state.error = null;
    },
    sendMessageSuccess: (state, action) => {
      state.loading = false;
      state.messages.push(action.payload);
      state.error = null;
    },
    sendMessageFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    }
  }
});

export const {
  fetchConnectionsRequest,
  fetchConnectionsSuccess,
  fetchConnectionsFailure,
  selectConnection,
  fetchMessagesRequest,
  fetchMessagesSuccess,
  fetchMessagesFailure,
  sendMessageRequest,
  sendMessageSuccess,
  sendMessageFailure
} = chatSlice.actions;

export default chatSlice.reducer; 