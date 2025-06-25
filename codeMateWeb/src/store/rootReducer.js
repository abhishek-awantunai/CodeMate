import { combineReducers } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice';
import profileReducer from './slices/profileSlice';
import connectionsReducer from './slices/connectionsSlice';
import chatReducer from './slices/chatSlice';

const rootReducer = combineReducers({
  auth: authReducer,
  profile: profileReducer,
  connections: connectionsReducer,
  chat: chatReducer,
});

export default rootReducer; 