const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', function() {
    it('should return the sum of two numbers', function() {
            assert.equal(calculateNumber('SUM', 1, 2), 3);
        });
    it('should handle negative numbers', function() {
            assert.equal(calculateNumber('SUM', -1, -2), -3);
        }
    );
    it('should round two floats', function() {
            assert.equal(calculateNumber('SUM', 1.2, 3.7), 5);
        }
    );
    it('should handle one first float', function() {
            assert.equal(calculateNumber('SUM', 1.5, 3), 5);
        }
    );
    it('should handle last floats', function() {
            assert.equal(calculateNumber('SUM', 1, 3.5), 5);
        }
    );
    it('should handle zero', function() {
            assert.equal(calculateNumber('SUM', 0, 0), 0);
        }
    );
    it('should return the difference of two numbers', function() {
            assert.equal(calculateNumber('SUBTRACT', 1, 2), -1);
        });
    it('should handle negative numbers', function() {
            assert.equal(calculateNumber('SUBTRACT', -1, -2), 1);
        }
    );
    it('should round two floats', function() {
            assert.equal(calculateNumber('SUBTRACT', 1.2, 3.7), -3);
        }
    );
    it('should handle one first float', function() {
            assert.equal(calculateNumber('SUBTRACT', 1.5, 3), -1);
        }
    );
    it('should handle last floats', function() {
            assert.equal(calculateNumber('SUBTRACT', 1, 3.5), -3);
        }
    );
    it('should return the division of two numbers', function() {
            assert.equal(calculateNumber('DIVIDE', 1, 2), 0.5);
        });
    it('should handle negative numbers', function() {
            assert.equal(calculateNumber('DIVIDE', -1, -2), 0.5);
        }
    );
    it('should round two floats', function() {
            assert.equal(calculateNumber('DIVIDE', 1.2, 3.7), 0.25);
        }
    );
    it('shpuld handle zero denominator', function() {
            assert.equal(calculateNumber('DIVIDE', 1, 0), 'Error');
        }
    );
}
);