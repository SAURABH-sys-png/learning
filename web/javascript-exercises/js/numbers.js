/**
 * NUMBERS — revision
 * HTML: ../html/basics.html
 *
 * Primitives: number literals (42, 3.14)
 * Wrapper: new Number(n) — object with .valueOf() for primitive
 */

// Example: Number object vs primitive
const balance = new Number(1000);
console.log(balance);           // [Number: 1000] (object)
console.log(balance.valueOf()); // 1000 (primitive)

// Prefer plain literals for everyday code: const x = 1000;
