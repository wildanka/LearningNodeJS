const express = require('express');
const app = express();
const morgan = require('morgan'); //morgan will logs your middleware
const bodyParser = require('body-parser'); //body parser doesn't support files, but it does support url encoded, bodies, and also JSON data

//import product.js route
const productRoutes = require('./api/routes/products');
const orderRoutes = require('./api/routes/orders');

//before we use any of those function, we call the morgan first
app.use(morgan('dev'));
//this will extract json and urlencoded data  and make it easily readable to us
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

/**
 * any incoming request has to go through app.use method
 * next is a function which can be used to move the request to the next middleware inline
 * create a middleware (this is a router)
 */
app.use('/products', productRoutes);
app.use('/orders', orderRoutes);

/* if the request is not meet the requirements in any of the route above, we handle it (the errors) here  all of those router */
app.use((req, res, next) => {
  const error = new Error('Sorry the request seems to be not found');
  error.status = 404;
  next(error);
});

/**
 * Another Error Handlers
 * 500 : Internal Server Errors
 */
app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message
    }
  });
});
module.exports = app;
