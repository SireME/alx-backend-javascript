const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber function', () => {
    describe('SUM operation', () => {
        it('should return the rounded sum of two numbers', () => {
            assert.strictEqual(calculateNumber('SUM', 1.4, 4.5), 6);
        });
    });

    describe('SUBTRACT operation', () => {
        it('should return the rounded subtraction of two numbers', () => {
            assert.strictEqual(calculateNumber('SUBTRACT', 1.4, 4.5), -4);
        });
    });

    describe('DIVIDE operation', () => {
        it('should return the rounded division of two numbers', () => {
            assert.strictEqual(calculateNumber('DIVIDE', 1.4, 4.5), 0.2);
        });

        it('should return "Error" if the second number is 0', () => {
            assert.strictEqual(calculateNumber('DIVIDE', 1.4, 0), 'Error');
        });
    });

    describe('Invalid operation', () => {
        it('should throw an error for invalid operation type', () => {
            assert.throws(() => {
                calculateNumber('INVALID_OPERATION', 1.4, 4.5);
            }, Error);
        });
    });
});

