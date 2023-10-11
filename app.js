//  CONTROL FLOW
const addresses = [
  "123 Main St",
  "456 Elm St",
  "789 Oak St",
  "101 Pine St",
  "121 Maple St",
  "141 Birch St",
];
// 1. For Loop
// for (let i = 0; i < addresses.length; i++) {
//   console.log(`I am delivering pizza to ${addresses[i]}`);
// }

// 2. While Loop
// let i = 0;
// while (i < addresses.length) {
//   console.log(`I am delivering pizza to ${addresses[i]}`);
//   i++;
// }

// 3. Do-While Loop
// let i = 10;
// do {
//   console.log(i);
//   i++;
// } while (i < 10);

// 4. For Each Loop
// addresses.forEach((address) => {
//   console.log(`Delivering pizza to ${address}`);
// });

// 5. If Statement
// const hasCustomerPaid = false;
// if (hasCustomerPaid) {
//   console.log("Delivering pizza");
// }

// const userName = "";
// const age = 12;
// if (userName && age >= 18) {
//   console.log("Welcome");
// }

// 6. Else and Else If
// if (userName && age >= 18) {
//   console.log("Welcome");
// } else {
//   console.log("Sorry, you are not old enough");
// }
// if (userName && age >= 18) {
//   console.log("Welcome");
// } else if (userName && age < 18) {
//   console.log("Sorry, you are not old enough");
// } else {
//   console.log("Sorry, we don't know you");
// }

// 7. Switch Statement
// const grade = "A";
// switch (grade) {
//   case "A":
//     console.log("Excellent");
//     break;
//   case "B":
//     console.log("Good Job");
//     break;
//   case "C":
//     console.log("Not bad!");
//     break;
//   case "D":
//     console.log("You can do better!");
//     break;
//   case "F":
//     console.log("You Failed");
//     break;
//   default:
//     console.log("Invalid grade");
// }

// 8. Break and Continue
// for (let i = 0; i < addresses.length; i++) {
//   if (addresses[i] === "101 Pine St") {
//     continue;
//   }
//   console.log(`I am delivering pizza to ${addresses[i]}`);
// }

// 9. Try Catch Finally

// try {
//   // Code that might throw an error
//   const result = undefinedVariable / 10; // This will throw an error
//   console.log(result); // This will not be executed
// } catch (error) {
//   // Code to handle the error
//   alert("An error occurred", error.message);
//   console.error("An error occurred", error.message);
// } finally {
//   console.log("Next thing to do in the app");
// }

// 10. Variable Scope
let userName = "Maestro";

if (userName) {
  let userName = "Goku";
  let prince = "Vegeta";
  console.log("Inside code block", userName);
  console.log("Inside code block", prince);
}

console.log("Outside code block", userName);
// console.log("Outside code block", prince);
