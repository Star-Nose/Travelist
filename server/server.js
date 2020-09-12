const express = require('express');

const path = require('path');

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());

// serving our bundle.js from webpack
app.use('/dist', express.static(path.resolve(__dirname, '../dist')));

// serving our basic html file
app.get('/', (req, res) => {
  res.status(200).sendFile(path.resolve(__dirname, '../client/index.html'));
});

app.listen(PORT, () => console.log('listeniiiiing'));
