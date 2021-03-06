const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const InitiateMongoServer = require('./config/db');

const User = require('./model/User');
const Notification = require('./model/notification');
const Service = require('./model/services');
const userRouter = require('./routes/user');
const notificationRouter = require('./routes/notifications');
const serviceRouter = require('./routes/services');
const announcementRouter = require('./routes/announcements');

// Initiate Mongo Server
InitiateMongoServer();

const app = express();

// Port
const PORT = process.env.PORT || 4000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', (req, res) => {
  res.json({ message: 'Welcome to Apna Ghar!' });
});

/**
 * Router Middleware
 * Router - /user/*
 * Method - *
 */
app.use('/user', userRouter);

//Router for Notifications
app.use(notificationRouter);

//Router for Services
app.use(serviceRouter);
app.use(announcementRouter);
//Create new user
app.post('/create', async (req, res) => {
  //const { username, password } = req.body;
  const resident = new User(req.body);

  try {
    await resident.save();
    res.send(resident);
  } catch (err) {
    res.status(500).send(err);
  }
});

//Find one user
app.get('/find/:id', async (req, res) => {
  await User.find({ username: req.params.id }, (err, docs) => {
    try {
      res.send(docs);
    } catch (err) {
      res.status(500).send(err);
    }
  });
});

//Show all users
app.get('/show', async (req, res) => {
  await User.find({}, (err, docs) => {
    try {
      res.send(docs);
    } catch (err) {
      res.status(500).send(err);
    }
  });
});

app.listen(PORT, (req, res) => {
  console.log(`Server started at PORT ${PORT}`);
});
