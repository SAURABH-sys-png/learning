const marvelHero = ["Ironman", "Captain America", "Thor", "Hulk"];
const dcHero = ["Batman", "Superman", "Wonder Woman", "Flash"];
marvelHero.push(dcHero);
console.log(marvelHero); // ["Ironman", "Captain America", "Thor", "Hulk", ["Batman", "Superman", "Wonder Woman", "Flash"]]

console.log(marvelHero.concat(dcHero)); // ["Ironman", "Captain America", "Thor", "Hulk", ["Batman", "Superman", "Wonder    