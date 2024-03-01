const sinon = require('sinon');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./3-payment');

describe('sendPaymentRequestToApi', () => {
  it('should use the correct math for sendPaymentRequestToApi(100, 20)', () => {
    const calculateNumberStub = sinon.stub(Utils, 'calculateNumber').returns(10);
    const consoleLogSpy = sinon.spy(console, 'log');
    
    sendPaymentRequestToApi(100, 20);
    
    sinon.assert.calledWith(calculateNumberStub, 'SUM', 100, 20);
    sinon.assert.calledWith(consoleLogSpy, 'The total is: 10');
    
    calculateNumberStub.restore();
    consoleLogSpy.restore();
  });
});
