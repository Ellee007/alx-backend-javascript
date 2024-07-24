const sendPaymentRequestToApi = require('./3-payment');
const Utils = require('./utils');
const sinon = require('sinon');
const chai = require('chai');
const { expect } = chai;

describe('sendPaymentRequestToApi', function () {
  it('Verify that Utils.calculNumber always returns 10', function () {
    const consoleSpy = sinon.spy(console);

    // Stub the calculateNumber property in Utils module
    const calcStub = sinon.stub(Utils, 'calculateNumber');

    // Define the behavior of the stubbed function
    calcStub.returns(10);

    sendPaymentRequestToApi(100, 20);

    expect(calcStub.calledWith('SUM', 100, 20)).to.be.true;
    expect(calcStub.callCount).to.equal(1);
    expect(consoleSpy.log.calledWith('The total is: 10'));
    expect(consoleSpy.log.callCount).to.equal(1);
    // Restore the original implemetation of the stored function
    calcStub.restore();
  });
});
