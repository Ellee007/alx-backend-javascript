export default function hasValuesFromArray(set, array) {
  const set1 = new Set(array);
  for (const elem of set1) {
    if (!set.has(elem)) {
      return false;
    }
  }
  return true;
}
