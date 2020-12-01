//jshint esversion:6

const mongoose = require("mongoose");

const MONGURI = "mongodb+srv://Shreyas:bacteria1234@apnacomplex.rfjfj.mongodb.net/user?retryWrites=true&w=majority";

const InitiateMongoServer = async() => {
    try {
        await mongoose.connect('mongodb://localhost:27017/user', {
            useNewUrlParser: true
        });
        console.log("Connected to DB!!");
    } catch (e) {
        console.log(e);
        throw e;
    }
};

module.exports = InitiateMongoServer;