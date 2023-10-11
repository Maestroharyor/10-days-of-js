// Functions

// Function Declaration
// function greet(name = "Maestro") {
//   // Function body
//   console.log("Good morning", name);
// }

// greet("John");
// greet();

// Function Expression
// const greet2 = function (name = "Maestro") {
//   console.log("Good afternoon", name);
// };

// greet2("John");
// greet2();

// Arrow Function
// const greet3 = (name = "Maestro") => {
//   console.log("Good evening", name);
// };

// greet3("John");
// greet3();
// const multiply = (num1, num2) => {
//   console.log(num1 * num2);
// };

// multiply(2, 3);

// IIFE (Immediately Invoked Function Expression)
// (function () {
//   console.log("Fetch data from the server");
//   console.log("Welcome message to user");
// })();

// Arguments and Parameters
const addresses = ["123 Main St", "456 Elm St", "789 Oak St"];

// const deliverPizza = (addresses = []) => {
//   if (addresses.length) {
//     for (let i = 0; i < addresses.length; i++) {
//       console.log(`Delivering pizza to ${addresses[i]}`);
//     }
//   } else {
//     console.log("No addresses provided");
//   }
// };

// deliverPizza(addresses);
// deliverPizza();

// Returning Values
// 1. Gives back the result of a computation to save in a variable
// 2. Stops the function
// const multiply1 = (num1, num2) => {
//   return;
//   console.log(num1 * num2);
// };

// const multiply2 = (num1, num2) => {
//   return num1 * num2;
// };

// const variable1 = multiply1(2, 3);
// const variable2 = multiply2(2, 3);
// const variable3 = multiply2(2, 5);

// console.log(variable1);
// console.log(variable2);
// console.log(variable3);

// Functions vs Methods
// const person = {
//   name: "Alice",
//   greet: function () {
//     return `Hello, ${this.name}!`;
//   },
// };

// console.log(person.greet());

// const personName = "Alice";
// console.log(personName.toUpperCase());

// Callback Functions

// const deliverPizza = (address) => {
//   console.log(`Delivering pizza to ${address}`);
//   console.log("Delivered");
// };
// addresses.forEach(deliverPizza);

// setTimeout(() => {
//   console.log("Delivered");
// }, 3000);

// Higher Order Functions
function multiplyBy(factor) {
  return function (number) {
    return number * factor;
  };
}

const double = multiplyBy(2);
const triple = multiplyBy(3);
const quadruple = multiplyBy(4);

console.log(double(10));
console.log(triple(10));
console.log(quadruple(10));
