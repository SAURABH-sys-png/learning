/**
 * for…of — revision (iterables: arrays, strings, Map, etc.)
 * HTML: ../html/control-flow.html
 *
 * Gives each ELEMENT (value), not the index.
 * Use for…in for object keys (or Object.keys); for…of for array values.
 */

const arr = [5, 2, 3, 4, 5, 1];

// Example: loop values directly
for (const num of arr) {
  console.log("for…of value:", num);
}

// Example: with index if needed — use entries()
for (const [index, value] of arr.entries()) {
  console.log(`arr[${index}] = ${value}`);
}
