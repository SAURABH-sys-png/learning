/**
 * STRINGS — revision
 * HTML: ../html/basics.html
 *
 * Ways to build / work with strings:
 *  1. + concatenation
 *  2. Template literals (backticks) + ${interpolation}
 *  3. String object wrapper (rare in practice; primitives auto-box)
 */

// ─── Example 1: primitive string + concatenation ───
let str1 = "hello world";
let str2 = "hello";
let combined = str1 + " " + str2;
console.log("concat (+):", combined); // "hello world hello"

// ─── Example 2: template literal ───
let withTemplate = `Hello — template literal: ${str1} ${str2}`;
console.log("template literal:", withTemplate);

// ─── Example 3: String wrapper object ───
const mystr = new String("hello world");
console.log("String object:", mystr);       // [String: "hello world"]
console.log("valueOf():", mystr.valueOf()); // primitive "hello world"
