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