const sum = require('../sum');
const assert = require('assert');

describe('Sum', () => {
  it('should handle positive numbers', () => {
    assert.equal(sum(3, 5), 8);
  });
  it('should handle negative numbers', () => {
    assert.equal(sum(3, -4), -1);
  });
  it('should handle decimals', () => {
    assert.equal(sum(3.5, 7.1), 10.6);
  });
});
