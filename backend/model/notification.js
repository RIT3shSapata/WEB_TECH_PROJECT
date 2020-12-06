const mongoose = require('mongoose');
const NotificationSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },

  purpose: {
    type: String,
    required: true,
  },

  phoneNumber: {
    type: String,
    required: true,
  },

  flatNo: {
    type: String,
    required: true,
  },

  visitorNo: {
    type: String,
  },
});

const notifications = mongoose.model('notification', NotificationSchema);

module.exports = notifications;
