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

//CORS
/**
 * why did we never encounter CORS error when we use postman?
 * POSTMAN is just a testing tools, it's not a browser.
 * keep it mind that CORS error are security mechanism and forced by the browsers, thats why we can override them with headers, the browsers then knows to ignore that
 */
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*'); //if you want to protect your api from another webpages, this will work, but you can still get accessed from tools like that (POSTMAN).
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization'
  );
  if (req.method === 'OPTIONS') {
    res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, PATCH, DELETE');
    return res.status(200).json({});
  }
  next(); //this will called if the method not immediately returning due to us getting options request, so that the other routes can take over
});

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
