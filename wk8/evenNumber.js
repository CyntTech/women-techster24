//A function that checks if the the input/parameter is an even number.
function evenNumber(even) {
    if (even % 2 === 0) {
        return true;
    } else {
        return false;
    }
}

console.log(evenNumber(4));
console.log(evenNumber(6));
console.log(evenNumber(8));
console.log(evenNumber(10));
