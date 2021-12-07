const button = document.querySelector("button");
button.addEventListener("click", () => {
  alert("you clicked on the button");
});

// type cases

// camel case - myFunction (first word lowercase) (next word is connected and Capitalized)

// Pascal case - MyFunction (first word is Capitalized) (next word is connected and Capitalized) signifying that it is a class

// snake case - my_function (first word lowercase) (next word is connected with _ and lowercase)

// kebab case - my-function (first word lowercase) (next word is connected with - and lowercase)

// upper case snake case - MY_FUNCTION (first word is Capitalized) (next word is connected with _ and lowercase)

const string = "hello world";
const dataTypes = {
  primitives: {
    boolean: true || false || new Boolean(true) || new Boolean(false),

    string: `${string + 27}` || "string" || "string" || new String("string"),
    symbol: Symbol("my symbol"),

    number: 27 || 27.1 || -27.2 || new Number("21"), // number
    bigInt: BigInt(27), // bigInt (number)
    Infinity: Infinity, // Infinity (number)

    NaN: NaN, // NaN (number)

    null: null,
    undefined: undefined,
  },
  compound: {
    object: {} || new Object(), // key value pairs
    array: [] || new Array(), // ordered list
  },
};
console.log(dataTypes);

const variableTypes = {
  var: "var", // function scope, re-assigned re-declared
  let: "let", // block scope re-assigned but not redefined
  const: "const", // block scope not be re-assigned or redefined
};

const operators = {
  arithmetic: {
    addition: "+",
    subtraction: "-",
    multiplication: "*",
    division: "/",
    modulus: "%",
  },
  assignment: {
    addition: "+=",
    subtraction: "-=",
    multiplication: "*=",
    division: "/=",
    modulus: "%=",
  },
  comparison: {
    equal: "==", // 1 == "1" -> true
    doubleEqual: "===", // 1 === "1" -> false
    notEqual: "!=", // 1 != "1" -> false
    notDoubleEqual: "!==", // 1 !== "1" -> true
    greaterThan: ">",
    greaterThanOrEqual: ">=",
    lessThan: "<",
    lessThanOrEqual: "<=",
  },
  logical: {
    and: "&&",
    or: "||",
    not: "!",
  },
};
