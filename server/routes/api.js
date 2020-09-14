const express = require('express');

const router = express.Router();
const formController = require('../controllers/formController.js');

router.post('/user-validation',
  formController.findUser,
  formController.checkPassword,
  (req, res) => res.status(200).json(res.locals.validated));

module.exports = router;
