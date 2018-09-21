const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  console.log(req.url);

  if(req.url === '/about'){
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('I\'m an About Page\n');
  }else if(req.url === '/contact'){
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('I\'m an Contact Page\n');
  }else{
    res.statusCode = 400;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Sorry Page Not Found, try access our homesite. \n');
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});