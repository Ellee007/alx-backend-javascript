const http = require('http');
const countStudents = require('./3-read_file_async');

const PORT = 1245;
const database = process.argv[2];

const app = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/plain');
  if (req.url === '/') {
    res.end('Hello Holberton School!');
  }
  if (req.url === '/students') {
    res.write('This is the list of our students\n');
    countStudents(database)
      .then((result) => {
        res.end(`${result.join('\n')}`);
      }).catch((err) => {
        // console.log(err);
        res.end(err);
      });
  }
}).listen(PORT);

module.exports = app;
