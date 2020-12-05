import { combineReducers } from 'redux';
import notificationReducer from './notificatonReducer';
import userReducer from './userReducer';

export default combineReducers({
  user: userReducer,
  notifications: notificationReducer,
});
