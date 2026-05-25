/**
 * CONTROL FLOW & COMPARISON — revision
 * HTML: ../html/control-flow.html
 *
 * ==  — loose equality (coerces types)
 * === — strict equality (type + value)
 * Prefer === unless you explicitly need coercion.
 */

console.log("5 == '5':", 5 == "5");   // true
console.log("5 === '5':", 5 === "5"); // false

if (true) {
  console.log("block runs when condition is truthy");
}

// Example: prefer let/const over var for block scope
const score = 85;
if (score >= 60) {
  console.log("passed");
}
