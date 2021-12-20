export function createAlphaButtons() {
  for (let i = 65; i < 91; i++) {
    console.log(String.fromCharCode(i));
    let button = document.createElement("button");
    button.innerHTML = String.fromCharCode(i);
    document.body.appendChild(button);
    button.dataset.letter = String.fromCharCode(i).toLowerCase();
  }
  document.body.appendChild(document.createElement("hr"));
}

export function createLocationButtons(location) {
  for (let i = 0; i < location.length; i++) {
    if (location[i] === ",") {
      document.body.appendChild(document.createElement("br"));
    } else {
      if (location[i] !== " ") {
        let button = document.createElement("button");
        button.innerHTML = location[i];
        document.body.appendChild(button);
        button.style.color = "transparent";
        button.dataset.answerLetter = location[i].toLowerCase();
      }
    }
  }
}
