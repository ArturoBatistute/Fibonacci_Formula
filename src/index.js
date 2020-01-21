'use strict'
//Fibonacci Formula => FN = (FN-1 + FN-2)

const fibonacciTo = (x) => {
    let result = [0,1];
    let interator = 1;
    while (interator <= x) {
        result.push(interator);
        interator += result[result.length - 2];
    }
    return result;
};

const fibonacci = () => {
    let fibonacciNumbers = fibonacciTo(350);
    return fibonacciNumbers;
}

const isFibonnaci = (num) => {
    let result = fibonacciTo(num);
    return result.includes(num);
}

module.exports = {
    fibonacci,
    isFibonnaci
}
