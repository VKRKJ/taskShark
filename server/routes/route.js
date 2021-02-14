const express = require('express');

const ticketController = require('../controllers/controller.js');

const router = express.Router();

router.post('/create',
  ticketController.addTicket,
  ticketController.getAll,
  (req, res) => {
    res.status(200).send(res.locals.tickets);
  });

router.get('/',
  ticketController.getAll,
  (req, res) => {
    res.status(200).send(res.locals.tickets);
  });

module.exports = router;
