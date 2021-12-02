let userAnswers = [];
let compAnswers = [];

const colors = ["red", "blue", "yellow", "green"]; //  array of colors

const div = createGameBoard();

colors.forEach((color) => {
  // loop
  console.log(color);
  createColorBox(color);
});

createStartButton();

function createGameBoard() {
  const div = document.createElement("div"); // create a div element for the dom
  document.body.appendChild(div); // append the div to the body of the document
  div.classList.add("game-board");
  return div;
}
function checkIfCorrect() {
  console.log(userAnswers.join(""), compAnswers.join(""));
  if (userAnswers.join("") === compAnswers.join("")) {
    // alert('You got it right lets add more!');
    pickRandomColor();
  } else {
    if (compAnswers.join("").startsWith(userAnswers.join(""))) {
      console.log("your doing great");
    } else {
      alert("You got it wrong. try again!");
      alert(`Your score is ${compAnswers.length - 1}`);
      userAnswers = [];
      compAnswers = [];
    }
  }
}
