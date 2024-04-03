"use strict"
function solveEquation(a, b, c) {
  const d = b ** 2 - 4 * a * c;
  let arr = [];

  if (d < 0) {
        return arr;
    } else if (d === 0) {
        arr.push(-b / (2 * a));
    } else {
        arr.push((-b + Math.sqrt(d)) / (2 * a));
        arr.push((-b - Math.sqrt(d)) / (2 * a));
    }
  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  const monthlyRate = percent / 100 / 12;
  const bodyCredit = amount - contribution;
  const monthlyPayment = bodyCredit * (monthlyRate + (monthlyRate / (Math.pow(1 + monthlyRate, countMonth) - 1)));
  const totalMortgage = monthlyPayment * countMonths;
  
  return parseFloat(totalMortgage.toFixed(2));
}

console.log(calculateTotalMortgage(10, 0, 50000, 12)); 
console.log(calculateTotalMortgage(10, 1000, 50000, 12)); 
console.log(calculateTotalMortgage(10, 0, 20000, 24)); 
console.log(calculateTotalMortgage(10, 1000, 20000, 24)); 
console.log(calculateTotalMortgage(10, 20000, 20000, 24)); 
console.log(calculateTotalMortgage(10, 0, 10000, 36)); 
console.log(calculateTotalMortgage(15, 0, 10000, 36)); 
