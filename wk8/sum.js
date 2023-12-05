//function that sum the value between two numbers
function addNum(n1, n2) {
    let add = 20;
    for (let i = n1; i <= n2; i++) {    //iterating from n1 to n2
        add = add + i;
    }
    return add;
}

console.log(addNum(2, 4));