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

router.get('/service', async (req, res) => {
  try {
    const services = await Service.find({});
    res.send(services);
  } catch (error) {
    res.status(500).send();
  }
});

module.exports = router;
