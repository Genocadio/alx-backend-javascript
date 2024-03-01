const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', function() {
    it('should return the sum of two numbers', function() {
            assert.equal(calculateNumber(1, 2), 3);
        });
    it('should handle negative numbers', function() {
            assert.equal(calculateNumber(-1, -2), -3);
        }
    );
    it('should round floats', function() {
            assert.equal(calculateNumber(1.2, 3.7), 5);
        }
    );
    it('should handle zero', function() {
            assert.equal(calculateNumber(0, 0), 0);
        }
    );
});
