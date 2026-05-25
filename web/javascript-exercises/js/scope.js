/**
 * SCOPE — revision
 * HTML: ../html/functions-scope.html
 *
 * Global — entire program
 * Function — inside function body (var, function declarations)
 * Block — let/const inside { } (if, for, etc.)
 */

if (true) {
  let a = 10; // block-scoped — only exists inside this block
  console.log("inside block, a =", a);
}

// Uncomment to see ReferenceError (a is not in outer scope):
// console.log(a);

// Example: var is function-scoped, not block-scoped (legacy — prefer let/const)
function demoVar() {
  if (true) {
    var b = 20;
  }
  console.log("var inside if, readable outside block:", b);
}
demoVar();
