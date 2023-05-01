describe("Payments test (with setup and tear-down)", function() {
    beforeEach(function () {
        billAmtInput.value = "100";
        tipAmtInput.value = "10";
    });

    it('should add a new payment to allPayments on submitPaymentInfo()', function () {
        submitPaymentInfo();
    
        expect(Object.keys(allPayments).length).toEqual(1);
        expect(allPayments['payment' + paymentId].billAmt).toEqual('100');
        expect(allPayments['payment' + paymentId].tipAmt).toEqual('10');
        expect(allPayments['payment' + paymentId].tipPercent).toEqual(10);
      });

      it('should update summary on submitPaymentInfo()', function () {
        submitPaymentInfo();
        billAmtInput.value = "100";
        tipAmtInput.value = "20";
        submitPaymentInfo();

        expect(summaryTds[0].innerText).toEqual('$200');
        expect(summaryTds[1].innerText).toEqual('$30');
        expect(summaryTds[2].innerText).toEqual('15%');
      });

      it('submitting empty info should not update payments table', function () {
        billAmtInput.value = "";
        tipAmtInput.value = "10";
        submitPaymentInfo();

        billAmtInput.value = "10";
        tipAmtInput.value = "";
        submitPaymentInfo();
    
        expect(Object.keys(allPayments).length).toEqual(0);
        expect(summaryTds[2].innerText).toEqual('0%');
      });

  afterEach(function() {
    paymentTbody.innerHTML = '';
    allPayments = {};
    updateSummary();
    updateServerTable();
    paymentId = 0;
    billAmtInput.value = '';
    tipAmtInput.value = '';
  });
});