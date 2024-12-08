// app.js
const http = require('tp');

const hostname = '0.0.0.0';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello. My name is HyerimLee\n');
});

server.listen(port, hostname, () => {
  console.log(`Node JS Server is running at http://${hostname}:${port}/`);
});

module.exports = server;
