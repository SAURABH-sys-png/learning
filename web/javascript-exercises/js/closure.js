/**
 * CLOSURE — revision
 * HTML: ../html/functions-scope.html
 *
 * Inner function "closes over" variables from outer function scope
 * even after the outer function has finished (if inner is returned/kept).
 */

function one() {
  const username = "John Doe";
  function displayUsername() {
    console.log("closure reads username:", username);
  }
  displayUsername();
}
one();

// Example: return inner function — closure keeps username alive
function makeGreeter(name) {
  return function greet() {
    return `Hello, ${name}`;
  };
}
const greetJohn = makeGreeter("John");
console.log(greetJohn());

function add(n) {
  return n++; // postfix: returns n, then increments (here: returns 5, n becomes 6)
}
console.log("add(5) return value:", add(5));
