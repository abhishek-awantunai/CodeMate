import { combineReducers } from '@reduxjs/toolkit';
import authReducer from '../slices/authSlice';
import profileReducer from '../slices/profileSlice';
import feedReducer from '../slices/feedSlice';
import connectionReducer from '../slices/connectionSlice';
import chatReducer from '../slices/chatSlice';

const rootReducer = combineReducers({
  auth: authReducer,
  profile: profileReducer,
  feed: feedReducer,
  connection: connectionReducer,
  chat: chatReducer
});

export default rootReducer; 