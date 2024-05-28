export default function createIteratorObject(report) {
  const employees = [...Object.values(report.allEmployees)];
  const array = [];
  for (const name of employees) {
    array.push(name);
  }
  return array;
}
