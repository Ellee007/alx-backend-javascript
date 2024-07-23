import { readFile } from 'fs';

function readDatabase(path) {
  return new Promise((resolve, reject) => {
    readFile(path, 'utf8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
      }
      if (data) {
        const obj = {};
        let lineNo = 0;
        for (const line of data.trim().split('\n')) {
          if (lineNo !== 0) {
            const tokens = line.split(',');
            if (tokens[3] in obj) {
              obj[tokens[3]].counts += 1;
              obj[tokens[3]].students.push(tokens[0]);
            } else {
              obj[tokens[3]] = {};
              obj[tokens[3]].counts = 1;
              obj[tokens[3]].students = [tokens[0]];
            }
          }
          lineNo += 1;
        }
        resolve(obj);
      }
    });
  });
}

module.exports = readDatabase;
