//function that calculates the greatest common divisor (GCD) of two numbers.

function greatestDivisor(num1, num2) {

    let result; //variable declaration 

if (num1 > num2) {
    while (num2 !== 0) {
        result = num1 % num2; //result variable stores the remainder from the modulus operation
        num1 = num2;
        num2 = result;
    }
console.log('GCD =', num1);

} else if (num2 > num1) {
    while (num1 !== 0) {
        result = num2 % num1; //result variable stores the remainder from the modulus operation
        num2 = num1; 
        num1 = result; 
    }
console.log('GCD =', num2);
}

}

greatestDivisor(15, 25);
greatestDivisor(36, 16);