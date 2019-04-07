const express = require('express');
const app = express();
const morgan = require('morgan'); //morgan will logs your middleware

//import product.js route
const productRoutes = require('./api/routes/products');
const orderRoutes = require('./api/routes/orders');

//before we use any of those function, we call the morgan first
app.use(morgan('dev'));

//any incoming request has to go through app.use method
// next is a function which can be used to move the request to the next middleware inline
// create a middleware (this is a router)
app.use('/products', productRoutes);
app.use('/orders', orderRoutes);


module.exports = app;
