import { combineReducers } from 'redux';
import announcementsReducer from './announcementsReducer';
import notificationReducer from './notificatonReducer';
import serviceReducer from './serviceReducer';
import userReducer from './userReducer';

export default combineReducers({
  user: userReducer,
  notifications: notificationReducer,
  services: serviceReducer,
  announcements: announcementsReducer,
});
