const db = require('../models/mainModel.js');

const formController = {};

formController.validateUser = (req, res, next) => {
  return next();
}

module.exports = formController;
