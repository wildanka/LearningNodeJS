const http = require('http');
const app = require('./app');
const port = process.env.PORT || 3000; //if there is some environment variables use env.PORT else 3000

//create listener
const server = http.createServer(app);

server.listen(port);
