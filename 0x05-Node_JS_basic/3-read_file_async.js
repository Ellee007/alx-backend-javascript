const { readFile } = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    readFile(path, 'utf8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
      }
      if (data) {
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
        const result = [`Number of students: ${totalStudents}`];
        for (const key of Object.keys(obj)) {
          result.push(`Number of students in ${key}: ${obj[key].counts}. List: ${obj[key].students.join(', ')}`);
        }
        console.log(result.join('\n'));
        resolve(result);
      }
    });
  });
}

module.exports = countStudents;
