/* eslint-disable no-param-reassign */
export default function updateStudentGradeByCity(slist, city, newGrades) {
  return slist.filter((student) => student.location === city).map((student) => {
    let a = 0;
    for (const elem of newGrades) {
      if (elem.studentId === student.id) {
        student.grade = elem.grade;
        a = 1;
      }
    }
    if (a === 0) {
      student.grade = 'N/A';
    }
    return student;
  });
}
