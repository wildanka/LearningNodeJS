const express = require('express'); //setup our routes to express
const router = express.Router(); //setup the express router

//create our first method
router.get('/', (req, res, next) => {
  res.status(200).json({
    message: 'orders were fetched'
  });
});

router.post('/', (req, res, next) => {
  res.status(201).json({
    message: 'successfully created an order'
  });
});
//export the router so it can be used by other files (like what we have done to our app.js files)
module.exports = router;
