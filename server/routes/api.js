const express = require('express');

const router = express.Router();
const formController = require('../controllers/formController.js');

router.post('/user-validation',
  formController.validateUser,
  (req, res) => res.status(200).json(res.locals.user));

module.exports = router;
