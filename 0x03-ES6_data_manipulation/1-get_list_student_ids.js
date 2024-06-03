export default function getListStudentIds(studentlist) {
  if (Array.isArray(studentlist)) {
    return studentlist.map((student) => student.id);
  }
  return [];
}
