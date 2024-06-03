export default function getStudentIdsSum(slist) {
  return slist.reduce((sum, element) => sum + element.id, 0);
}
