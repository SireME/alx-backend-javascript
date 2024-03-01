const sinon = require('sinon');
const Utils = require('./utils');
const { expect } = require('chai');
const sendPaymentRequestToApi = require('./4-payment');

describe('sendPaymentRequestToApi', () => {
  it('sendPaymentRequestToApi calls console.log with the right arguments', () => {
    const theSpy = sinon.spy(console);
    const mock = sinon.stub(Utils, 'calculateNumber');

    mock.returns(10);
    sendPaymentRequestToApi(100, 20);
    expect(mock.calledWith('SUM', 100, 20)).to.be.true;
    expect(mock.callCount).to.be.equal(1);
    expect(theSpy.log.calledWith('The total is: 10')).to.be.true;
    expect(theSpy.log.callCount).to.be.equal(1);
    mock.restore();
    theSpy.log.restore();

  });
});
