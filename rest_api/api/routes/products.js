const express = require('express'); //setup our routes to express
const router = express.Router(); //setup the express router

//create a GET request, the first parameter is the route (sub-route/sub-Url), while the second is a handler function
router.get('/', (req, res, next) => {
  res.status(200).json({
    message: 'Handling request with GET method to /products'
  });
});

//create a POST request, the first parameter is the route (sub-route/sub-Url), while the second is a handler function
router.post('/', (req, res, next) => {
  res.status(200).json({
    message: 'Handling request with POST method to /products'
  });
});

//get with variable parameter
router.get('/:productId', (req, res, next) => {
  // productId is used in params because in the URL we wrote /:productId (means they are a references)
  const id = req.params.productId;

  if (id === 'special') {
    //send response
    res.status(200).json({
      message: 'You Discovered Special ID',
      id: id
    });
  } else {
    //send response
    res.status(200).json({
      message: 'You passed an Id'
    });
  }
});

//patch example
router.patch('/:productId', (req, res, next) => {
  const message = 'You just updated product with id ' + req.params.productId;
  res.status(200).json({
    message: message
  });
});

//patch example
router.delete('/:productId', (req, res, next) => {
  const message = 'You just deleted product with id ' + req.params.productId;
  res.status(200).json({
    message: message
  });
});

//export the router so it can be used by other files (like what we have done to our app.js files)
module.exports = router;
