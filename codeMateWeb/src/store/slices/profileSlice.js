import { createSlice } from '@reduxjs/toolkit';

const profileSlice = createSlice({
  name: 'profile',
  initialState: {
    userProfile: null,
    loading: false,
    error: null
  },
  reducers: {
    fetchProfilesRequest: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchProfilesSuccess: (state, action) => {
      state.loading = false;
      state.userProfile = action.payload;
      state.error = null;
    },
    fetchProfilesFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    }
  }
});

export const {
  fetchProfilesRequest,
  fetchProfilesSuccess,
  fetchProfilesFailure
} = profileSlice.actions;

export default profileSlice.reducer; 