/**
 * FUNCTIONS — revision
 * HTML: ../html/functions-scope.html
 *
 * Parameters, return values, template returns.
 * undefined is falsy (useful in guards: if (!username) …)
 */

function addtwonums(num1, num2) {
  console.log("sum:", num1 + num2);
}
addtwonums(2897346, 23);

function login(username) {
  return `${username} just logged in`;
}
const name = login("SAurabh");
console.log(name);

// Example: undefined is falsy
let maybe;
if (!maybe) {
  console.log("undefined is falsy — good default check");
}
