const express = require('express');

const router = express.Router();
const formController = require('../controllers/formController.js');

router.post('/user-validation',
  formController.validateUser,
  (req, res) => res.redirect('/main'));

module.exports = router;
