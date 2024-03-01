const { expect } = require('chai');

describe('Testing numbers', () => {
  it('true', () => {
    expect('q' === 'q').to.be.true;
  });

  it('equal', () => {
    expect(2 === 2).to.be.true;
  });

  it.skip(' true', () => {
    expect('b' === 'b').to.be.true;
  });

  it('equal', () => {
    expect(3 === 3).to.be.true;
  });

  it('true', () => {
    expect(7 === 7).to.be.true;
  });

  it('true', () => {
    expect(4 === 4).to.be.true;
  });

  it('true', () => {
    expect(9 === 9).to.be.true;
  });

  it('true', () => {
    expect(5 === 5).to.be.true;
  });
});