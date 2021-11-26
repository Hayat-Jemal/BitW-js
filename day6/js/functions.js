// reason to use functions (do stuff)
// * do stuff
// * reuse code
// * easy to read
// * use it later


// function declaration
function getRandomIntBetweenRange(min, max) { // 2 parameters
    return Math.floor(Math.random() * (max - min + 1)) + min; // return a value
}

// console.log(getRandomIntBetweenRange(1, 5));
// console.log(getRandomIntBetweenRange(11, 15));
// console.log(getRandomIntBetweenRange(10, 25));

// console.log(Math.floor(Math.random() * (5 - 1 + 1)) + 1);
// console.log(Math.floor(Math.random() * (15 - 11 + 1)) + 11);
// console.log(Math.floor(Math.random() * (25 - 15 + 1)) + 15);
