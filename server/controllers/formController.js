const db = require('../models/mainModel.js');

const formController = {};

formController.validateUser = (req, res, next) => {
  const { user, password } = req.body;
  const values = [user, password];
  const queryString = `
    SELECT * FROM users
    WHERE username = $1
    AND password = $2;
  `;
  db.query(queryString, values, (err, result) => {
    if (err) return next(err);
    console.log('SQL DB Result', result);
    if (result === null) return res.redirect('/signup');
    res.locals.user = result.rows;
    return next();
  });
};

module.exports = formController;
