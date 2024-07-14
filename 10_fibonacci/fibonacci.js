const fibonacci = function(fibonacciIndex) {
    fibonacciIndex = Number(fibonacciIndex);
    if (fibonacciIndex < 0) return "OOPS";
    else if (fibonacciIndex == 0) return 0;
    else if (fibonacciIndex == 1) return 1;
    else return fibonacci(fibonacciIndex - 1) + fibonacci(fibonacciIndex - 2);
};

// Do not edit below this line
module.exports = fibonacci;
