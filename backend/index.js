//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const user = require("./routes/user");
const InitiateMongoServer = require("./config/db");

//User Authentication and Verification
InitiateMongoServer();

const app = express();

const port = process.env.port || 3000;

app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

mongoose.connect('mongodb://localhost/test', { useNewUrlParser: true, useUnifiedTopology: true });

app.get("/", (req, res) => {
    res.send("Hello there!");
});

app.get("/login", (req, res) => {
    //Login Page
});

app.get("/home", (req, res) => {
    //Landing Page
});

app.use("/user", user);

app.listen(port, () => {
    console.log("Server is up and running at port 3000!");
});