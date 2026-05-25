/**
 * MAP — revision
 * HTML: ../html/control-flow.html
 *
 * Key-value store where keys can be any type (objects, primitives).
 * Keys are unique; insertion order is remembered.
 */

const mp = new Map();

mp.set("name", "Saurabh");
mp.set(1, "numeric key");
mp.set({ id: 1 }, "object key");

console.log("map size:", mp.size);
console.log("get name:", mp.get("name"));

// Example: iterate
for (const [key, value] of mp) {
  console.log("entry:", key, "→", value);
}
