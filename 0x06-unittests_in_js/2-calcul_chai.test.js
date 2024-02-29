const { expect } = require('chai');
const calculateNumber = require('./2-calcul_chai');

describe('calculateNumber function', () => {
    describe('SUM operation', () => {
        it('should return the rounded sum of two numbers', () => {
            expect(calculateNumber('SUM', 1.4, 4.5)).to.equal(6);
        });
    });

    describe('SUBTRACT operation', () => {
        it('should return the rounded subtraction of two numbers', () => {
            expect(calculateNumber('SUBTRACT', 1.4, 4.5)).to.equal(-4);
        });
    });

    describe('DIVIDE operation', () => {
        it('should return the rounded division of two numbers', () => {
            expect(calculateNumber('DIVIDE', 1.4, 4.5)).to.equal(0.2);
        });

        it('should return "Error" if the second number is 0', () => {
            expect(calculateNumber('DIVIDE', 1.4, 0)).to.equal('Error');
        });
    });

    describe('Invalid operation', () => {
        it('should throw an error for invalid operation type', () => {
            expect(() => {
                calculateNumber('INVALID_OPERATION', 1.4, 4.5);
            }).to.throw(Error);
        });
    });
});

