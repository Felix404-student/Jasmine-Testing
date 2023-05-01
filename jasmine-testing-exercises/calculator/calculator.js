/*
Author: Justin Brown
Assignment: Jasmine Testing Exercises for UMass/Springboard Bootcamp
Loan Calculator
You are given the HTML, CSS, and JavaScript for a loan calculator. Your goal is to fill in the 
JavaScript to make the loan calculator functional. The calculator takes an amount to loan (the 
  principle), a term in years, and a yearly rate. The output should be the monthly payment of 
  the loan.
To calculate the monthly payment, use the following formula:
monthly payment=𝑃×𝑖1−(1+𝑖)−𝑛
Where:
P = Amount of principle
i = periodic interest rate (in our case yearly rate ÷ 12)
n = total number of payments (years × 12)
There is also a jasmine test file (calculator-test.js). Your goal is to write tests for the 
calculateMontlyPayment function. There are a few suggested tests, but if you can think of more, 
feel free to add to it.
*/

window.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      update();
    });
  }
});

function getCurrentUIValues() {
  return {
    amount: +(document.getElementById("loan-amount").value),
    years: +(document.getElementById("loan-years").value),
    rate: +(document.getElementById("loan-rate").value / 100),
  }
}

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues() {
  document.getElementById("loan-amount").value = 1000;
  document.getElementById("loan-years").value = 10;
  document.getElementById("loan-rate").value = 1.5;

  update();
}

// Get the current values from the UI
// Update the monthly payment
function update() {
  updateMonthly(calculateMonthlyPayment(getCurrentUIValues()));
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {
  let num = values.amount * (values.rate / 12);
  let exp = values.years * -12;
  let denom = 1 - Math.pow((1 + (values.rate / 12)), exp);

  let answer = (Math.round(100 * (num/denom)))/100;

  return answer;
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
  if (isNaN(monthly)) {
    document.getElementById("monthly-payment").textContent = "Invalid Input";
  } else {
    let displayValue = monthly + "";

    if (displayValue.includes(".")) {
      document.getElementById("monthly-payment").textContent = "$" + displayValue;
    } else {
      document.getElementById("monthly-payment").textContent = "$" + displayValue + ".00";
    }
  }
}
