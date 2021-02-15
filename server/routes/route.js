const express = require('express');

const ticketController = require('../controllers/controller.js');

const router = express.Router();

router.post('/create',
  ticketController.addTicket,
  ticketController.getAll,
  (req, res) => {
    res.status(200).json(res.locals.tickets);
  });

router.get('/tickets',
  ticketController.getAll,
  (req, res) => {
    // console.log('ROUTER.GET res.locals.tickets ---------->', res.locals.tickets);
    res.status(200).json(res.locals.tickets);
  });

module.exports = router;
