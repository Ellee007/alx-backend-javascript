export default function appendToEachArrayValue(array, appendString) {
  const arrayc = [];
  for (const idx of array) {
    arrayc.push(appendString + idx);
  }

  return arrayc;
}
