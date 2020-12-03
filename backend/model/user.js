//jshint esversion:8

const mongoose = require("mongoose");

//User Information
const UserSchema = mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now()
    },

    services: {
        serviceName: {
            type: String,
            required: true
        },

        residentName: {
            type: String,
            required: true
        },

        bookingDate: {
            type: Date,
            required: true
        },

        serviceDate: {
            type: Date,
            required: true
        },

        Description: {
            type: String
        }

    }
});


module.exports = mongoose.model("user", UserSchema);