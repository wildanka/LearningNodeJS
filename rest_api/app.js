const express = require('express');
const app = express();

//any incoming request has to go through app.use method
// next is a function which can be used to move the request to the next middlewar inline
app.use((req, res, next) => {
  res.status(200).json({
    message: 'hehehe'
  });
});

module.exports = app;
