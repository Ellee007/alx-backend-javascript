const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', function () {
  it('SUM: rounding down', function () {
    result = calculateNumber('SUM', 1.2, 3.1);
    assert.strictEqual(result, 4);
  });
  it('SUM: rounding up', function () {
    result = calculateNumber('SUM', 1.7, 3.9);
    assert.strictEqual(result, 6);
  });
  it('SUM: no rounding', function () {
    result = calculateNumber('SUM', 1.0, 3.0);
    assert.strictEqual(result, 4);
  });
  it('SUBTRACT: rounding down', function () {
    result = calculateNumber('SUBTRACT', 8.2, 3.1);
    assert.strictEqual(result, 5);
  });
  it('SUBTRACT: rounding up', function () {
    result = calculateNumber('SUBTRACT', 5.7, 3.9);
    assert.strictEqual(result, 2);
  });
  it('SUBTRACT: no rounding', function () {
    result = calculateNumber('SUBTRACT', 4, 3);
    assert.strictEqual(result, 1);
  });
  it('DIVIDE: rounding down', function () {
    result = calculateNumber('DIVIDE', 1.4, 4.5);
    assert.strictEqual(result, 0.2);
  });
  it('DIVIDE: rounding up', function () {
    result = calculateNumber('DIVIDE', 1.6, 7.7);
    assert.strictEqual(result, 0.25);
  });
  it('DIVIDE: numerator is zero', function () {
    result = calculateNumber('DIVIDE', 0, 1.8);
    assert.strictEqual(result, 0);
  });
  it('DIVIDE: division by zero', function () {
    result = calculateNumber('DIVIDE', 1.4, 0);
    assert.strictEqual(result, 'Error');
  });
});
