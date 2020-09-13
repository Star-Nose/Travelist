const express = require('express');

require('dotenv').config();

const path = require('path');
const db = require('./models/mainModel');
const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());

// serving our bundle.js from webpack
app.use('/dist', express.static(path.resolve(__dirname, '../dist')));

// serving our basic html file
app.get('/', (req, res) => {
  // db.query('SELECT * FROM ACTIVITIES').then((response) => {
  //   console.log(response);
  //   res.sendStatus(200);
  // });
  res.status(200).sendFile(path.resolve(__dirname, '../client/index.html'));
});

// app.use('/api', apiRouter);

app.listen(PORT, () => console.log('listeniiiiing'));
