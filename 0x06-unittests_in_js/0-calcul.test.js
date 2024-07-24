const assert = require('assert');
const calculateNumber = require('./0-calcul');


describe('calculateNumber', function() {
    it('Does not round integers', function() {
        result = calculateNumber(1, 3);
        assert.strictEqual(result, 4);
    });
    it('Rounds up second number correctly', function() {
        result = calculateNumber(1, 3.7);
        assert.strictEqual(result, 5);
    });
    it('Rounds down first and rounds up second number', function() {
        result = calculateNumber(1.2, 3.7);
        assert.strictEqual(result, 5);
    });
    it('floating point whole numbers', () => {
        assert.strictEqual(calculateNumber(1.0, 2.0), 3);
      });
    
    it('rounding down b\'s floating point fractional number', () => {
    assert.strictEqual(calculateNumber(1.0, 2.4), 3);
    });

    it('rounding down a and b\'s floating point fractional number', () => {
    assert.strictEqual(calculateNumber(1.4, 2.4), 3);
    });
    it('Rounds up first and second number', function() {
        result = calculateNumber(1.5, 3.7);
        assert.strictEqual(result, 6);
    });
    it('Negative numbers', function() {
        result = calculateNumber(-1.5, -3.7);
        assert.strictEqual(result, -5);
    });
    it('rounding down a and b floating point fractional numbers with trailing 9\'s', () => {
        assert.strictEqual(calculateNumber(2.499999, 3.499999), 5);
      });

    it('rounding up a\'s floating point fractional numbers', () => {
    assert.strictEqual(calculateNumber(3.6, 2.0), 6);
    });
})
