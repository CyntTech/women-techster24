//function that sum the value between two numbers
function addNum(n1, n2) {
    let add = 20;   //initial value

    for (let i = n1; i <= n2; i++) {    //iterating from n1 to n2
        add = add + i;              /*In the loop:
                                add = add + 2 = 22 (when i = 2)
                                add = add + 3 = 25 (when i = 3)
                                add = add + 4 = 29 (when i = 4)*/
                            
        console.log(`${i} + ${add-i} = ${add}`); //prints the looping process on the console
    }
    return add;
}

console.log(addNum(2, 4));


