const express = require('express');
const app = express();
const path = require('path');
const port = process.env.PORT || 3000;
const { syncAndSeed } = require('./db');

syncAndSeed();

app.use('/dist', express.static(path.join(__dirname, 'dist')))
// app.use(express.json());

app.get('/', (req, res, next) => {
  res.sendFile(path.join(__dirname, './index.html'));
})

app.listen(port, () => `Listening on port ${port}`);
