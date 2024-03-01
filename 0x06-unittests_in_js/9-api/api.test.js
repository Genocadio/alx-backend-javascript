const { expect } = require('chai');
const request = require('request');

describe('Api test', () => {
  const API_URL = 'http://localhost:7865';

  it('Test root endpoint', (done) => {
    request.get(`${API_URL}/`, (_err, res, body) => {
      expect(res.statusCode).to.be.equal(200);
      expect(body).to.be.equal('Welcome to the payment system');
      done();
    });
  });

  it('Correct status code when :id is a number', (done) => {
    const id = 123;
    request.get(`${API_URL}/cart/${id}`, (_err, res, _body) => {
      expect(res.statusCode).to.be.equal(404);
      done();
    });
  });

  it('Correct status code when :id is NOT a number (=> 404)', (done) => {
    const id = 'abc';
    request.get(`${API_URL}/cart/${id}`, (_err, res, _body) => {
      expect(res.statusCode).to.be.equal(404);
      done();
    });
  });
});