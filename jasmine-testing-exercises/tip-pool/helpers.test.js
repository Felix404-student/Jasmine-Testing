describe("Helpers test (with setup and tear-down)", function() {
    beforeEach(function () {
        billAmtInput.value = "1000";
        tipAmtInput.value = "500";
    });

    it("sumPaymentTotal should return correct tip, bill, and tipPercent totals", function() {
        submitPaymentInfo();
        billAmtInput.value = "1000";
        tipAmtInput.value = "50";
        submitPaymentInfo();
    
        expect(sumPaymentTotal('billAmt')).toEqual(2000);
        expect(sumPaymentTotal('tipAmt')).toEqual(550);
        expect(sumPaymentTotal('tipPercent')).toEqual(55);
      });

      it("calculateTipPercent should return correct percent of tip", function() {
        expect(calculateTipPercent(1000, 500)).toEqual(50);
        expect(calculateTipPercent(0, 50)).toEqual(Infinity);
        expect(calculateTipPercent(50, 0)).toEqual(0);
      });

      it("appendTd should add a row to appropriate table", function() {
        submitPaymentInfo();
    
        expect(paymentTbody.children.length).toEqual(1);
        expect(paymentTbody.children[0].children[0].textContent).toEqual('$1000');
      });

      it("appendDeleteBtn should add an 'X' delete td to each row", function() {
        submitPaymentInfo();
    
        expect(paymentTbody.children[0].children[3].textContent).toEqual('X');
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