const add = function(addend1, addend2) {
	return addend1+addend2;
};

const subtract = function(minuend, subtrahend) {
	return minuend - subtrahend;
};

const sum = function(addendList) {
	let total = 0;
  for (let index = 0; index < addendList.length; index++) {
    total = total + addendList[index];
  }
  return total;
};

const multiply = function(factorList) {
  let total = 1;
  for (let index = 0; index < factorList.length; index++) {
    total = total * factorList[index];
  }
  return total;
};

const power = function(base, exponent) {
	return base ** exponent;
};

const factorial = function(number) {
	let total = 1;
  for (let i = number; i > 0; i--) {
    total = total * i;
  }
  return total;
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
