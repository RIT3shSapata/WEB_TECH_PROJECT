//Connecting the application to MongoDB Atlas
const mongoose = require("mongoose");

const MONGOURI = "mongodb+srv://Shreyas:bacteria1234@apnacomplex.rfjfj.mongodb.net/user?retryWrites=true&w=majority";



const InitiateMongoServer = async() => {
    try {
        await mongoose.connect(MONGOURI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("Connected to database!!");
    } catch (e) {
        console.log(e);
        throw e;
    }
};

module.exports = InitiateMongoServer;
