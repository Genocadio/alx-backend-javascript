const { expect } = require('chai')
const calculateNumber = require('./2-calcul_chai');

describe('calculateNumber', function() {
    it('should return the sum of two numbers', function() {
        expect(calculateNumber('SUM', 1, 2)).to.equal(3);
    });

    it('should handle negative numbers', function() {
        expect(calculateNumber('SUM', -1, -2)).to.equal(-3);
    });

    it('should round two floats', function() {
        expect(calculateNumber('SUM', 1.2, 3.7)).to.equal(5);
    });

    it('should handle one first float', function() {
        expect(calculateNumber('SUM', 1.5, 3)).to.equal(5);
    });

    it('should handle last floats', function() {
        expect(calculateNumber('SUM', 1, 3.5)).to.equal(5);
    });

    it('should handle zero', function() {
        expect(calculateNumber('SUM', 0, 0)).to.equal(0);
    });

    it('should return the difference of two numbers', function() {
        expect(calculateNumber('SUBTRACT', 1, 2)).to.equal(-1);
    });

    it('should handle negative numbers', function() {
        expect(calculateNumber('SUBTRACT', -1, -2)).to.equal(1);
    });

    it('should round two floats', function() {
        expect(calculateNumber('SUBTRACT', 1.2, 3.7)).to.equal(-3);
    });

    it('should handle one first float', function() {
        expect(calculateNumber('SUBTRACT', 1.5, 3)).to.equal(-1);
    });

    it('should handle last floats', function() {
        expect(calculateNumber('SUBTRACT', 1, 3.5)).to.equal(-3);
    });

    it('should return the division of two numbers', function() {
        expect(calculateNumber('DIVIDE', 1, 2)).to.equal(0.5);
    });

    it('should handle negative numbers', function() {
        expect(calculateNumber('DIVIDE', -1, -2)).to.equal(0.5);
    });

    it('should round two floats', function() {
        expect(calculateNumber('DIVIDE', 1.2, 3.7)).to.equal(0.25);
    });

    it('should handle zero denominator', function() {
        expect(calculateNumber('DIVIDE', 1, 0)).to.equal('Error');
    });
});
