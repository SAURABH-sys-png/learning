/**
 * ARRAYS — revision
 * HTML: ../html/basics.html
 *
 * push(item)  — adds item to end (can nest whole array as ONE element)
 * concat(arr) — returns NEW flat array merging copies
 */

const marvelHero = ["Ironman", "Captain America", "Thor", "Hulk"];
const dcHero = ["Batman", "Superman", "Wonder Woman", "Flash"];

// Example: push entire array → nested array inside parent
const afterPush = [...marvelHero];
afterPush.push(dcHero);
console.log("after push(dcHero):", afterPush);
// ["Ironman", ..., ["Batman", ...]]

// Example: concat → flat merge
console.log("concat:", marvelHero.concat(dcHero));
