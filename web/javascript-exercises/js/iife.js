/**
 * IIFE — Immediately Invoked Function Expression (revision)
 * HTML: ../html/functions-scope.html
 *
 * (function () { ... })();
 * Runs once at load; creates private scope; avoids global pollution.
 */

(function () {
  var x = 10; // private to IIFE — not on window
  console.log("IIFE private x:", x);
})();

// Example: pass argument into IIFE
(function (greeting) {
  console.log(greeting);
})("IIFE with argument");
