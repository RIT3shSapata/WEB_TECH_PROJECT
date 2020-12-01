//jshint esversion:8

const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now(),
    }
});

const Services = mongoose.Schema({
    //servicename
    //resident name
    //date of booking 
    //date of service
    //description
})

module.exports = mongoose.model("user", UserSchema);