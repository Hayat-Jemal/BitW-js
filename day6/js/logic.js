// logic

// if, else if, else, switch, case, default (ternary operator)

// forks in the road

const number = 3;

if (number === 0) {
    console.log('if runs');
}

if (number > 0) {
    console.log('if runs');
}

if (number <= 0) {
    console.log('if runs');
}

if (number > 0 || number < 20) {
    console.log('if runs');
}


if (number !== 0 || number < 20) {
    console.log('if runs');
}

if (number !== 0) {
    console.log('if runs');
} else {
    console.log('else runs');
}


if (number === 0) {
    console.log('it is zero');
} else if (number > 0) {
    console.log('greater');
} else {
    console.log('less than zero')
}

// ternary operator
// number === 0 ? console.log('it is zero') : console.log('it is not zero');