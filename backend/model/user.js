const mongoose = require("mongoose");

//User Information
const UserSchema = mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
    },

    password: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now()
    },

    contactNumber: {
        type: Number,
    },

    doorNumber: {
        type: Number,
    },

    services: {

        serviceName: {
            type: String,
            //required: true
        },

        residentName: {
            type: String,
            //required: true
        },

        bookingDate: {
            type: Date,
            //required: true
        },

        serviceDate: {
            type: Date,
            //required: true
        },

        Description: {
            type: String
        }

    }
});


//Notification Information
const NotificationSchema = mongoose.Schema({
    notificationdesc: {
        type: String
    },

    name: {
        type: String
    },

    purpose: {
        type: String
    },

    phoneNumber: {
        type: Number
    }
});

module.exports = { User: mongoose.model("user", UserSchema), Notification: mongoose.model("notification", NotificationSchema) };
