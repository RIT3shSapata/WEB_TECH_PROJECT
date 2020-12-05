const express = require('express');
const router = new express.Router();

const Notification = require('../model/notification');

router.post('/notification', async (req, res) => {
  const notification = new Notification(req.body);

  try {
    await notification.save();
    res.status(201).send(notification);
  } catch (error) {
    res.status(400).send(error);
  }
});

router.get('/notification/:id', async (req, res) => {
  const id = req.params.id;
  try {
    const notifications = await Notification.find({ flatNo: id });
    res.send(notifications);
  } catch (error) {
    res.status(500).send();
  }
});

module.exports = router;
