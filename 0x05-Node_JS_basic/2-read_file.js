const { readFileSync } = require('fs');

function countStudents(path) {
  let data;

  try {
    data = readFileSync(path, 'utf8');
  } catch (err) {
    throw new Error('Cannot load the database');
  }
  const obj = {};
  let totalStudents = 0;
  let lineNo = 0;
  for (const line of data.trim().split('\n')) {
    if (lineNo !== 0) {
      const tokens = line.split(',');
      if (tokens[3] in obj) {
        totalStudents += 1;
        obj[tokens[3]].counts += 1;
        obj[tokens[3]].students.push(tokens[0]);
      } else {
        obj[tokens[3]] = {};
        obj[tokens[3]].counts = 1;
        obj[tokens[3]].students = [tokens[0]];
        totalStudents += 1;
      }
    }
    lineNo += 1;
  }
  console.log(`Number of students: ${totalStudents}`);
  for (const key of Object.keys(obj)) {
    console.log(`Number of students in ${key}: ${obj[key].counts}. List: ${obj[key].students.join(', ')}`);
  }
}

module.exports = countStudents;
