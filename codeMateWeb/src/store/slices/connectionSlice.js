import { createSlice } from '@reduxjs/toolkit';

const connectionSlice = createSlice({
  name: 'connection',
  initialState: {
    pendingConnections: [],
    message: null,
    loading: false,
    error: null
  },
  reducers: {
    fetchPendingConnectionsRequest: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchPendingConnectionsSuccess: (state, action) => {
      state.loading = false;
      console.clear();
      console.log(action.payload.data);
      state.pendingConnections = action.payload.data.map(connection => ({
        connectionId: connection.connectionId,
        status: connection.status,
        createdAt: connection.createdAt,
        ...connection.userId,
        _id: connection._id,
      }));
      state.error = null;
    },
    fetchPendingConnectionsFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    acceptConnectionRequest: (state) => {
      state.loading = true;
      state.error = null;
      state.message = null;
    },
    acceptConnectionSuccess: (state, action) => {
      state.loading = false;
      state.message = action.payload.message;
      state.pendingConnections = state.pendingConnections.filter(
        conn => conn._id !== action.payload.connectionId
      );
      state.error = null;
    },
    acceptConnectionFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
      state.message = null;
    },
    rejectConnectionRequest: (state) => {
      state.loading = true;
      state.error = null;
      state.message = null;
    },
    rejectConnectionSuccess: (state, action) => {
      state.loading = false;
      state.message = action.payload.message;
      state.pendingConnections = state.pendingConnections.filter(
        conn => conn._id !== action.payload.connectionId
      );
      state.error = null;
    },
    rejectConnectionFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
      state.message = null;
    },
    sendConnectionRequest: (state) => {
      state.loading = true;
      state.error = null;
      state.message = null;
    },
    sendConnectionSuccess: (state, action) => {
      state.loading = false;
      state.message = action.payload;
      state.error = null;
    },
    sendConnectionFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
      state.message = null;
    },
    clearConnectionMessage: (state) => {
      state.message = null;
      state.error = null;
    }
  }
});

export const {
  fetchPendingConnectionsRequest,
  fetchPendingConnectionsSuccess,
  fetchPendingConnectionsFailure,
  acceptConnectionRequest,
  acceptConnectionSuccess,
  acceptConnectionFailure,
  rejectConnectionRequest,
  rejectConnectionSuccess,
  rejectConnectionFailure,
  sendConnectionRequest,
  sendConnectionSuccess,
  sendConnectionFailure,
  clearConnectionMessage
} = connectionSlice.actions;

export default connectionSlice.reducer; 