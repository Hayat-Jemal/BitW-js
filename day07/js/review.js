const variables = {
  declarations: {
    var: {
      updated: true,
      redeclared: true,
      scope: "functional",
    },
    let: {
      updated: true,
      redeclared: false,
      scope: "block",
    },
    const: {
      updated: false,
      redeclared: false,
      scope: "block",
    },
  },
  types: {
    primitives: {
      string: "string" || "string" || `string${1}`,
      number: 1 || 1.1 || 0b01 || 0o01 || 0x01,
      boolean: true || false,
    },
    compound: {
      array: [],
      object: {},
    },
    extend: {
      htmlElements: document.querySelectorAll("*"),
      Math: Math,
      Date: Date,
      RegExp: RegExp,
      Error: Error,
      Custom: "Your own class",
    },
  },
  falsey: {
    false: false,
    null: null,
    undefined: undefined,
    NaN: NaN,
    0: 0,
    "": "",
  },
};

const phone = "(559)555-5555";

const pattern = /\(\d{3}\)\d{3}-\d{4}/;

console.log(pattern.test(phone));

if (pattern.test(phone)) {
  console.log("it is a good valid number");
} else {
  throw new Error("I don't know what happened");
}

// scope of variables
// functional scope
// block scope

// scope of functions
// functional scope
function func() {
  console.log();
}

// const button = document.querySelector('button');
// button.addEventListener('click', function() {
//     console.log(this);
//     var a = 1;
//     if (this) {
//         let a = 1;

//         if ( a) {
//             let b = 2;
//             console.log(b);
//         }
//     }
// });

let a = 1;

const operators = {
  logical: {
    and: "&&",
    or: "||",
    not: "!",
  },
  arithmetic: {
    addition: { value: 1 + 2 },
    subtraction: { value: 1 - 2 },
    multiplication: { value: 1 * 2 },
    division: { value: 1 / 2 },
    modulo: { value: 1 % 2 },
  },
  comparison: {
    equal: { value: 1 == "1" }, // true
    notEqual: { value: 1 != 2 },
    greaterThan: { value: 1 > 2 },
    lessThan: { value: 1 < 2 },
    greaterThanOrEqual: { value: 1 >= 2 },
    lessThanOrEqual: { value: 1 <= 2 },
    strictEqual: { value: 1 === "1" }, // false
  },
  assignment: {
    addition: { value: (a += 2) },
    subtraction: { value: (a -= 2) },
    multiplication: { value: (a *= 2) },
    division: { value: (a /= 2) },
    modulo: { value: (a %= 2) },
    assign: { value: (a = 1) },
  },
};
