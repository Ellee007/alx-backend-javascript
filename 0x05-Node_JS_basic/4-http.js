const http = require('http');

const PORT = 1245;
const app = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello Holberton School!');
}).listen(PORT);

module.exports = app;
