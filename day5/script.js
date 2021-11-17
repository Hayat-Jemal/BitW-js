function evenOrOdd(x) {
    if (x % 2 === 0) {
        alert(`${x} "is even number"`)
    }else  alert(`${x} "is even number"`);
}
evenOrOdd();

const isEven = (y) => {
    if (y % 2 == 0) return true;
    else return false;
}
alert(isEven(2));

//FUNCTIONS
//Function — a set of instructions that perform a task.
////Let’s also consider a function that receives inputs and returns outputs:
// Named aka Function Declaration-------------

//A method, like a function, is a set of instructions that perform a task. The difference is that a method is associated with an object, while a function is not. Let’s explore some of JavaScript’s built-in methods.

console.log(brag(3)); // Can be called before because this function gets saved in memory

function brag(count) {
    return("I can do " + count + " pushups");
} 

(brag(3)); // I can do 3 pushups

//Declared functions are not executed immediately. They are "saved for later use", and will be executed later, when they are invoked (called upon).

//Function Expression-------ANONYMOUS------------------------
const brag = function(count) {
    return("I can do " + count + " pushups");
} 

brag(3) // I can do 3 pushups


//Arrow Function--------------------------------------
const brag = (count) => {
    return("I can do " + count + " pushups")
};

brag(3) // I can do 3 pushups

console.log(function(count) {
    return("I can do " + count + " pushups");
} (3)) // I can do 3 pushup
