const calculateNumber = require('./0-calcul.js');
const assert = require('assert');

describe('calcul.js', () => {
  it('add two positive numbers', () => {
    const result = calculateNumber(1, 3);
    assert.strictEqual(result, 4);
  });

  it('add one positive integer with decimal', () => {
    const result = calculateNumber(1, 3.7);
    assert.strictEqual(result, 5);
  });

  it('add two decimal integers', () => {
    const result = calculateNumber(1.2, 3.7);
    assert.strictEqual(result, 5);
  });

  it('add two negative numbers', () => {
    const result = calculateNumber(-1, -3);
    assert.strictEqual(result, -4);
  });

  it('add one negative integer with decimal', () => {
    const result = calculateNumber(-1, -3.7);
    assert.strictEqual(result, -5);
  });

  it('add one negative and one positive number', () => {
    const result = calculateNumber(-1.2, 3.7);
    assert.strictEqual(result, 3);
  });

  it('add zero to a positive number', () => {
    const result = calculateNumber(0, 3);
    assert.strictEqual(result, 3);
  });

  it('add zero to a negative number', () => {
    const result = calculateNumber(0, -3);
    assert.strictEqual(result, -3);
  });

  it('add two large positive numbers', () => {
    const result = calculateNumber(1000000000, 2000000000);
    assert.strictEqual(result, 3000000000);
  });

  it('add two large negative numbers', () => {
    const result = calculateNumber(-1000000000, -2000000000);
    assert.strictEqual(result, -3000000000);
  });

  it('add a large positive and a large negative number', () => {
    const result = calculateNumber(1000000000, -2000000000);
    assert.strictEqual(result, -1000000000);
  });
});
