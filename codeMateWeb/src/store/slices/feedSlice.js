import { createSlice } from '@reduxjs/toolkit';

const feedSlice = createSlice({
  name: 'feed',
  initialState: {
    users: [],
    currentUserIndex: 0,
    currentPage: 0,
    loading: false,
    error: null,
    hasMore: true
  },
  reducers: {
    fetchFeedRequest: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchFeedSuccess: (state, action) => {
      state.loading = false;
      state.users = [...state.users, ...action.payload.users];
      state.currentPage = state.currentPage + 1;
      state.hasMore = action.payload.users.length > 0;
      state.error = null;
    },
    fetchFeedFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    nextProfile: (state) => {
      if (state.currentUserIndex < state.users.length - 1) {
        state.currentUserIndex += 1;
      }
    },
    previousProfile: (state) => {
      if (state.currentUserIndex > 0) {
        state.currentUserIndex -= 1;
      }
    },
    resetFeed: (state) => {
      state.users = [];
      state.currentUserIndex = 0;
      state.currentPage = 0;
      state.hasMore = true;
    }
  }
});

export const {
  fetchFeedRequest,
  fetchFeedSuccess,
  fetchFeedFailure,
  nextProfile,
  previousProfile,
  resetFeed
} = feedSlice.actions;

export default feedSlice.reducer; 