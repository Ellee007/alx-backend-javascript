onst request = require('request');
const chai = require('chai');
const { expect } = chai;

describe('Index Page', () => {
  it('Correct status code and expected response', (done) => {
    request.get('http://localhost:7865', (err, res, body) => {
      expect(res.statusCode).to.equal(200);
      expect(res.body).to.equal('Welcome to the payment system');
      done();
    });
  });
});
