function largerNumber() {
    let fNumber = parseInt(prompt("please choise a number b/n 1-100"));
    let lNumber = parseInt(prompt("please add another number b/n 1-100"));
    if (fNumber > lNumber) {
        alert(`${fNumber} is the large number`);
    } else {
        alert(`${lNumber} is the larger number`);
    }

}
largerNumber()

function askForNumber(whichNumber) {
  const number = parseInt(prompt("Give me a number for number" + whichNumber));
  if (isNaN(number)) {
    return askForNumber(whichNumber);
  }
  return number;
}

const number1 = askForNumber(1);
const number2 = askForNumber(2);

if (number1 > number2) {
  alert("number 1 is greater: " + number1 + " > " + number2);
} else if (number2 > number1) {
  alert("number 2 is greater: " + number1 + " < " + number2);
} else {
  alert("they are equal: " + number1 + " === " + number2);
}


function test() {
    alert("hello every one")
}

test()