/**
 * REST PARAMETERS (...args) — revision
 * HTML: ../html/functions-scope.html
 *
 * Collects remaining arguments into a real Array.
 * Must be last parameter in the list.
 */

function printing(val1, val2, ...nums) {
  console.log("first two:", val1, val2);
  console.log("rest as array:", nums); // [3,4,5,6,7,8]
}
printing(1, 2, 3, 4, 5, 6, 7, 8);

function print(num) {
  console.log("single arg:", num);
}
print(90);
