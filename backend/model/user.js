const mongoose = require('mongoose');

//User Information
const UserSchema = mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    phoneNo: {
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

    flatNo: {
        type: Number,
    },
});

const User = mongoose.model('user', UserSchema);

module.exports = User;