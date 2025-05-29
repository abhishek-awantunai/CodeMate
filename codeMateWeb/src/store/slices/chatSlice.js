import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  connections: [],
  selectedConnection: null,
  messages: {},
  loading: false,
  error: null,
};

const chatSlice = createSlice({
  name: 'chat',
  initialState,
  reducers: {
    fetchConnectionsRequest: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchConnectionsSuccess: (state, action) => {
      state.loading = false;
      state.connections = action.payload;
      if (action.payload.length > 0 && !state.selectedConnection) {
        state.selectedConnection = action.payload[0];
      }
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
    },
    fetchMessagesSuccess: (state, action) => {
      state.loading = false;
      const { connectionId, messages } = action.payload;
      state.messages[connectionId] = messages;
    },
    fetchMessagesFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    sendMessageRequest: (state) => {
      state.loading = true;
    },
    sendMessageSuccess: (state, action) => {
      state.loading = false;
      const { connectionId, message } = action.payload;
      if (!state.messages[connectionId]) {
        state.messages[connectionId] = [];
      }
      state.messages[connectionId].push(message);
    },
    sendMessageFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
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
  sendMessageFailure,
} = chatSlice.actions;

export default chatSlice.reducer; 