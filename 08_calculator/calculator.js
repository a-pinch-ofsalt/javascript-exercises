const add = function(addend1, addend2) {
	return addend1+addend2;
};

const subtract = function(minuend, subtrahend) {
	return minuend - subtrahend;
};

const sum = function(addendList) {
	return addendList.reduce((currentSum, currentElement) => {
    return currentSum + currentElement
  }, 0);
};

const multiply = function(factorList) {
  return factorList.reduce((product, currentNumber) => {
    return product * currentNumber;
  }, 1);
};

const power = function(base, exponent) {
	return base ** exponent;
};

const factorial = function(number) {
  const integersUpto_Number = Array.from(Array(number).keys()); // [0, 1, 2, ... number]
  return integersUpto_Number.reduce((product, currentNumber) => {
    return product * (currentNumber + 1);
  }, 1);
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
