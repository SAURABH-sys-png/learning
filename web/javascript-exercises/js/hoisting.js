/**
 * HOISTING (var & function declarations) — revision
 * HTML: ../html/functions-scope.html
 *
 * Creation phase: var → undefined; function decl → full function
 * Execution phase: assignments run in order
 */

console.log("x before line runs:", x); // undefined (not ReferenceError)
var x = 5;
console.log("x after assignment:", x);

// function declarations are fully hoisted:
sayHi();
function sayHi() {
  console.log("hoisted function runs before its line");
}
