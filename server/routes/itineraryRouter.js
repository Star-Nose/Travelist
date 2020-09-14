const express = require('express');

const router = express.Router();

const itineraryController = require('../controllers/itineraryController.js')

router.post('/',
  // itineraryController.newPlan,
  (req, res) => {
    console.log(req.body);
    console.log('hello');
    res.status(200).send('post successful');
  });

module.exports = router;
