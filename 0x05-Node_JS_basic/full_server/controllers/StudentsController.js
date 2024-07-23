import readDatabase from '../utils';

const DATABASE = process.argv[2];

class StudentsController {
  static async getAllStudents(request, response) {
    let result;
    try {
      result = await readDatabase(DATABASE);
    } catch (err) {
      response.status(500).send('Cannot load the database');
    }
    if (result) {
      let content = 'This is the list of our students';
      for (const key of Object.keys(result)) {
        content += `\nNumber of students in ${key}: ${result[key].counts}. List: ${result[key].students.join(', ')}`;
      }
      response.status(200).send(content);
    }
  }

  static async getAllStudentsByMajor(request, response) {
    const { major } = request.params;
    const acceptedMajors = ['CS', 'SWE'];
    if (!acceptedMajors.includes(major)) {
      response.status(500).send('Major parameter must be CS or SWE');
    }
    let result;
    try {
      result = await readDatabase(DATABASE);
    } catch (err) {
      response.status(500).send('Cannot load the database');
    }
    if (result) {
      for (const key of Object.keys(result)) {
        if (key === major) {
          response.status(200).send(`List: ${result[key].students.join(', ')}`);
        }
      }
    }
  }
}

module.exports = StudentsController;
