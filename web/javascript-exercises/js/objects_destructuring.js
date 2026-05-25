/**
 * DESTRUCTURING — revision
 * HTML: ../html/basics.html
 *
 * Pull properties from objects (or items from arrays) into variables.
 * Property name must match unless you rename: { pric3: price }
 */

const course = {
  coursename: "js in hindi",
  pric3: "999",
};

// Example: destructure pric3 from course
const { pric3 } = course;
console.log("destructured pric3:", pric3);

// Example: rename while destructuring
const { coursename: title } = course;
console.log("renamed coursename → title:", title);
