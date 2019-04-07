const express = require('express'); //setup our routes to express
const router = express.Router(); //setup the express router

/**
 * Fetch the orderlist
 * method : GET
 */
router.get('/', (req, res, next) => {
  res.status(200).json({
    message: 'orders were fetched'
  });
});

/**
 * Create a new order
 * method : POST
 */
router.post('/', (req, res, next) => {
  res.status(201).json({
    message: 'successfully created an order'
  });
});

/**
 * Get details of specific order id
 * method : GET
 */
router.get('/:orderId', (req, res, next) => {
  res.status(200).json({
    message: 'successfully created an order',
    orderId: req.params.orderId
  });
});

/**
 * Get details of specific order id
 * method : GET
 */
router.delete('/:orderId', (req, res, next) => {
  res.status(200).json({
    message: 'order with id ' + req.params.orderId + ' successfully deleted',
    orderId: req.params.orderId
  });
});
//export the router so it can be used by other files (like what we have done to our app.js files)
module.exports = router;
