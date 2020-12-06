const express = require('express');
const router = new express.Router();

const Announcement = require('../model/announcements');

router.post('/announcements', async (req, res) => {
  const announcement = new Announcement(req.body);

  try {
    await announcement.save();
    res.status(201).send(announcement);
  } catch (error) {
    res.status(400).send(error);
  }
});

router.get('/announcements', async (req, res) => {
  try {
    const announcements = await Announcement.find({});
    res.send(announcements);
  } catch (error) {
    res.status(500).send();
  }
});

module.exports = router;
