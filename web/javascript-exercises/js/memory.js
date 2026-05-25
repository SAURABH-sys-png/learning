/**
 * MEMORY — stack vs heap (revision)
 * HTML: ../html/basics.html
 *
 * Stack: primitives, references (the pointer value itself)
 * Heap:  objects & arrays (actual data lives here)
 *
 * Assigning object to another variable copies the REFERENCE, not the object.
 * Spread { ...obj } creates a shallow copy (new object in heap).
 */

let a = "saurabh"; // primitive → stack

let mtyobj = {
  name: "saurabh",
  age: 24,
  city: "delhi",
};

let usertwo = mtyobj; // same heap reference

usertwo.name = "saurabh gupta";
console.log("mtyobj.name after usertwo change:", mtyobj.name); // "saurabh gupta"

// Example: shallow copy with spread — new object in heap
let userCopy = { ...mtyobj };
userCopy.name = "copy only";
console.log("original after copy rename:", mtyobj.name); // still "saurabh gupta"
console.log("copy name:", userCopy.name);
