//function that generates a random number between 1 and 100.

function RandomNumberGuessing(userNumber) { 
    
    let randomNum = Math.floor(Math.random() * 100) + 1; // This will generate a random number between 1 and 100

    if (userNumber < randomNum) {
        return `Number guessed ${userNumber} is too low`; 
    } else if (userNumber > randomNum) {
        return `Number guessed: ${userNumber} is too high`; 
    } else { 
        return `Number guessed: ${userNumber} is correct`; 
    }
 
}

    console.log(RandomNumberGuessing(55));