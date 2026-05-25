/**
 * EXECUTION CONTEXT — revision (conceptual; no runtime output required)
 * HTML: ../html/functions-scope.html
 *
 * Types:
 *  - Global (browser: associated with window)
 *  - Function — each function call
 *  - eval — code run via eval() in caller scope
 *  - Module — ES module has own top-level scope
 *
 * Phases: (1) Memory creation — hoist vars/fns (2) Execution — run line by line
 */

console.log("Global context: typeof window:", typeof window);
console.log("In browser, global vars become window properties when not in module.");

// Memory phase recap:
//   let/const → temporal dead zone until their line
//   var       → undefined until assignment
//   function declaration → full body hoisted
