//function that calculates the factorial of a given number

function calculateFactorial(n) {
    let factResult = 1;

    if (n >= 0) {
        for (i = 1; i <= n; i++) {
            factResult = factResult * i //multiply factResult by i in each iteration
        }
        return factResult;
    } else { return "invalid number";}
}

console.log(calculateFactorial(4));