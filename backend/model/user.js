const mongoose = require('mongoose');

//User Information
const UserSchema = mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
  },

  password: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },

  contactNumber: {
    type: Number,
  },

  doorNumber: {
    type: Number,
  },
});

const User = mongoose.model('user', UserSchema);

module.exports = User;
