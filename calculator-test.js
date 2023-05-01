
it('should calculate the monthly rate correctly', function () {
  expect(calculateMonthlyPayment({amount: 100, years: 1, rate: 0.10})).toEqual(8.79);
  expect(calculateMonthlyPayment({amount: 10000000, years: 100, rate: 0.001})).toEqual(8757.29);
});


it("should return a result with 2 decimal places", function() {
  expect(calculateMonthlyPayment({amount: Math.PI, years: Math.PI, rate: (Math.E/100)})).toEqual(0.09);
  expect(calculateMonthlyPayment({amount: 5555, years: 10, rate: 0.0155})).toEqual(50.00);
});

