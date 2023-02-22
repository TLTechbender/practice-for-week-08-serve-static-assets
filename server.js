const http = require('http');
const fs = require("fs");

const server = http.createServer((req, res) => {
  // Your code here
  const staticPage= fs.readFileSync('index.html');
  res.statusCode=200;
  res.setHeader=('Content-Type', 'text/html');
  return res.end(staticPage);
});

const port = 5000;

server.listen(port, () => console.log('Server is listening on port', port));