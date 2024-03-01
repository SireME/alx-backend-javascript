const express = require('express');
const app = express();

const PORT = 7865;

// Route for the index page
app.get('/', (req, res) => {
  res.send('Welcome to the payment system');
});

// Listen to port 7865
const server = app.listen(PORT, () => {
  console.log(`API available on localhost port ${PORT}`);
});

module.exports = server;
