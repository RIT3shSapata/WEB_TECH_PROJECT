const express = require('express');
const router = new express.Router();

const Service = require('../model/services');

router.post('/service', async (req, res) => {
  const service = new Service(req.body);

  try {
    await service.save();
    res.status(201).send(service);
  } catch (error) {
    res.status(400).send(error);
  }
});

module.exports = router;
