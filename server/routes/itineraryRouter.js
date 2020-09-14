const express = require('express');

const router = express.Router();

const itineraryController = require('../controllers/itineraryController.js')

router.post('/new-plan',
  // itineraryController.newPlan,
  (req, res) => {
  console.log(req.body);
  res.status(200).send('post successful');
});

module.exports = router;
