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
    it('should round two floats', function() {
            assert.equal(calculateNumber(1.2, 3.7), 5);
        }
    );
    it('should handle one first float', function() {
            assert.equal(calculateNumber(1.5, 3), 5);
        }
    );
    it('should handle last floats', function() {
            assert.equal(calculateNumber(1, 3.5), 5);
        }
    );
    it('should handle zero', function() {
            assert.equal(calculateNumber(0, 0), 0);
        }
    );
});
