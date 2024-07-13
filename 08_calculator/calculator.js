const add = function(num1, num2) {
	return (num1 + num2);
};

const subtract = function(num1, num2) {
	return (num1 - num2);
};

const sum = function(array) {
	let sum = 0;
  for(number of array) {
    sum += number
  }

  return sum;

};

const multiply = function(array) {
  let multiplied = 1;
  for(number of array) {
    multiplied *= number;
  }

  return multiplied;

};

const power = function(num1, num2) {

  return(num1 ** num2);
	
};

const factorial = function(num1) {
  let factorized = 1;
  for(let i = 1; i <= num1; i++) {
    factorized *= i
  }
  return factorized;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
