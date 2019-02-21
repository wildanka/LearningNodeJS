const express = require('express');
const app = express();

//import product.js route
const productRoutes = require('./api/routes/products');
const orderRoutes = require('./api/routes/orders');
//any incoming request has to go through app.use method
// next is a function which can be used to move the request to the next middleware inline
// create a middleware
app.use('/products', productRoutes);
app.use('/orders', orderRoutes);

module.exports = app;
