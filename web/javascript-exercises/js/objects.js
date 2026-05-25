/**
 * OBJECTS — revision
 * HTML: ../html/basics.html
 *
 * Object literal { } — most common
 * Symbol — unique property keys
 * Object.freeze — no new/changed properties
 */

const jsUser = {
  name: "Saurabh",
  age: 30,
  emails: ["saurabh@example.com", "harshi@example.com"],
};

console.log("literal access:", jsUser.name, jsUser.age, jsUser.emails);

// Example: Symbol as key (always unique)
const mySym = Symbol("mySymbol");
const myObj = {
  [mySym]: "symbol value",
  regularProp: "regular value",
};
console.log("Symbol key:", myObj[mySym]);
console.log("dot key:", myObj.regularProp);

// Example: freeze
const frozenObj = { name: "Frozen Object", value: 42 };
Object.freeze(frozenObj);
frozenObj.name = "Changed Name"; // silently fails in sloppy mode; TypeError in strict
console.log("frozen still:", frozenObj.name);
