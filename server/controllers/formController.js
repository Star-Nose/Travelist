const db = require('../models/mainModel.js');

const formController = {};

formController.validateUser = (req, res, next) => {
  const { username, password } = req.body;
  console.log('REQ BODY', req.body);
  console.log('USERNAME', username);
  console.log('PASSWORD', password);
  const values = [username, password];
  const queryString = `
    SELECT * FROM users
    WHERE username = $1
    AND password = $2;
  `;
  db.query(queryString, values, (err, result) => {
    if (err) return next(err);
    console.log('SQL DB Result', result.rows);
    // if (result.rows.length === 0) return res.redirect('/signup');
    res.locals.user = result.rows;
    // return res.redirect('/main');
    return next();
  });
};

module.exports = formController;
