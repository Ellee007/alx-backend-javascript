export default function createInt8TypedArray(length, position, value) {
  try {
    const buffer = new ArrayBuffer(length);
    const dv = new DataView(buffer);
    dv.setInt8(position, value);
    return dv;
  } catch (error) {
    throw new Error('Position outside range');
  }
}
