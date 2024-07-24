const request = require('request');
const chai = require('chai');
const { expect } = chai;

describe('Express app endpoints', () => {
  const BASE_URL = 'http://localhost:7865';

  it('GET / returns correct response', (done) => {
    request.get(`${BASE_URL}`, (err, res, body) => {
      expect(res.statusCode).to.equal(200);
      expect(res.body).to.equal('Welcome to the payment system');
      done();
    });
  });

  it('GET /cart/:id returns correct response', (done) => {
    request.get(`${BASE_URL}/cart/12`, (err, res, body) => {
      expect(res.statusCode).to.equal(200);
      expect(res.body).to.equal('Payment methods for cart 12');
      done();
    });
  });

  it('GET /cart/:id returns 404 response for negative number values in :id', (done) => {
    request.get(`${BASE_URL}/cart/-47`, (err, res, body) => {
      expect(res.statusCode).to.be.equal(404);
      done();
    });
  });

  it('GET /cart/:id returns 404 response for non-numeric values in :id', (done) => {
    request.get(`${BASE_URL}/cart/abc-42frd5-9de6`, (err, res, body) => {
      expect(res.statusCode).to.be.equal(404);
      done();
    });
  });

  it('POST /login posts json data', (done) => {
    const payload = { userName: 'Bob' };
    request.post(`${BASE_URL}/login`, { json: payload }, (err, res, body) => {
      expect(res.statusCode).to.equal(200);
      expect(body).to.equal('Welcome Bob');
      done();
    });
  });

  it('GET /available_payments returns valid response', (done) => {
    request.get(`${BASE_URL}/available_payments`, (err, res, body) => {
      expect(res.statusCode).to.be.equal(200);
      expect(JSON.parse(body)).to.be.deep.equal({
        payment_methods: { credit_cards: true, paypal: false },
      });
      done();
    });
  });
});
