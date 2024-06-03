export default function getStudentsByLocation(slist, city) {
  return slist.filter((student) => student.location === city);
}
