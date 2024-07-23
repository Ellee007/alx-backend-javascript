const express = require('express');
const countStudents = require('./3-read_file_async');

const DATABASE = process.argv[2];
const PORT = 1245;
const app = express();

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  countStudents(DATABASE)
    .then((students) => {
      res.send(students.join('\n'));
    }).catch((err) => res.send(err));
});

app.listen(PORT);

module.exports = app;
