const mongoose = require('mongoose');
const AnnouncementSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  time: {
    type: Date,
    default: Date.now(),
  },
});
const announcements = mongoose.model('announcements', AnnouncementSchema);
module.exports = announcements;
