const mongoose = require('mongoose');
const ServicesSchema = mongoose.Schema({
  service: {
    type: String,
    required: true,
  },

  description: {
    type: String,
    required: true,
  },

  name: {
    type: String,
    required: true,
  },

  flatNo: {
    type: String,
    required: true,
  },

  phoneNo: {
    type: String,
    required: true,
  },

  bookingDate: {
    type: Date,
    required: true,
  },

  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

const services = mongoose.model('services', ServicesSchema);

module.exports = services;
