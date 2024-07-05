const sumAll = function(lowerBound, upperBound) {
    if (!(Number.isInteger(lowerBound) && Number.isInteger(upperBound))) return 'ERROR';
    if (!(lowerBound >= 0 && upperBound >= 0)) return 'ERROR';
    /*sum of consecutive numbers -> multiply the mean by 
    number of elements between them, inclusive*/
    let mean = (lowerBound + upperBound) / 2;
    let numberOfElementsInArithmeticSeries = (Math.abs(upperBound - lowerBound) + 1);
    return mean*numberOfElementsInArithmeticSeries
};
// Do not edit below this line
module.exports = sumAll;
