import { combineReducers } from 'redux';
import notificationReducer from './notificatonReducer';
import serviceReducer from './serviceReducer';
import userReducer from './userReducer';

export default combineReducers({
  user: userReducer,
  notifications: notificationReducer,
  services: serviceReducer,
});
