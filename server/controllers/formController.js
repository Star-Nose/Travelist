const bcrypt = require('bcrypt');
const db = require('../models/mainModel.js');

const formController = {};

formController.findUser = (req, res, next) => {
  const { username, password } = req.body;
  res.locals.password = password;
  // console.log('REQ BODY', req.body);
  // console.log('USERNAME', username);
  // console.log('PASSWORD', password);
  const values = [username];
  const queryString = `
    SELECT * FROM users
    WHERE username = $1;
  `;
  db.query(queryString, values, (err, result) => {
    if (err) return next(err);
    console.log('SQL DB Result', result.rows);
    res.locals.user = result.rows;
    return next();
  });
};

formController.checkPassword = (req, res, next) => {
  const { password, user } = res.locals;
  res.locals.validated = false;
  if (user.length === 0) return next();
  const dBHashedPassword = user[0].password;
  bcrypt.compare(password, dBHashedPassword)
    .then((result) => {
      res.locals.validated = result;
      return next();
    })
    .catch((err) => next(err));
};

module.exports = formController;
