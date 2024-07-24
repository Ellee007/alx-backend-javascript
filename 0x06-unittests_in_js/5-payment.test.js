const sendPaymentRequestToApi = require('./5-payment');
const sinon = require('sinon');
const chai = require('chai');
const { expect } = chai;

describe('sendPaymentRequestToApi', function () {
  let consoleSpy;

  beforeEach(() => {
    if (!consoleSpy) {
      consoleSpy = sinon.spy(console);
    }
  });

  afterEach(() => {
    consoleSpy.log.resetHistory();
  });

  it('sendPaymentRequestToApi(100, 20) called once and logs `The total is: 120`', function () {
    sendPaymentRequestToApi(100, 20);

    expect(consoleSpy.log.callCount).to.equal(1);
    expect(consoleSpy.log.calledWith('The total is: 120'));
  });

  it('sendPaymentRequestToApi(10, 10) called once and logs `The total is: 20`', function () {
    sendPaymentRequestToApi(10, 10);

    expect(consoleSpy.log.callCount).to.equal(1);
    expect(consoleSpy.log.calledWith('The total is: 20'));
  });
});
