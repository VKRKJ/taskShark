const db = require('../models/models.js');

const ticketController = {};

ticketController.addTicket = (req, res, next) => {
  const {
    details,
    person,
    phases,
  } = req.body;
  // stretch add phases to have a specified number instead of 1
  const queryStringAddTicket = `INSERT INTO tasks (_id, details, person, phases) VALUES (DEFAULT, ${details}, ${person}, ${phases} )`;
  db.query(queryStringAddTicket)
    .then((data) => next())
    .catch((err) => next({
      log: `Error on controller addTicket : ${err}`,
      message: { err: 'Error occurred in ticketController.addTicket. Check server logs for more details.' },
    }));
};

ticketController.getAll = (req, res, next) => {
  console.log("getAll response")
  const queryStringGetAll = 'SELECT * FROM tasks';
  db.query(queryStringGetAll)
    .then((data) => {
      // console.log('TICKETCONTROLLER DATA.ROWS ---------->', data.rows);
      res.locals.tickets = data.rows;
      // console.log('TICKETCONTROLLER DATA.ROWS ------>', res.locals.tickets);
      return next();
    })
    .catch((err) => next({
      log: `Error on controller getAll : ${err}`,
      message: { err: 'Error occurred in ticketController.getAll. Check server logs for more details.' },
    }));
};

module.exports = ticketController;
