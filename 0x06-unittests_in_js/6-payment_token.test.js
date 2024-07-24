const sinon = require('sinon');
const getPaymentTokenFromAPI = require('./6-payment_token');
const chai = require('chai');
const { expect } = chai;

describe('getPaymentTokenFromAPI', () => {
  it('getPaymentTokenFromAPI(true) -> obj', (done) => {
    getPaymentTokenFromAPI(true).then((result) => {
      expect(result).to.deep.equal({
        data: 'Successful response from the API',
      });
      done();
    });
  });
});
