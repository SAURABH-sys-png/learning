// singleton object
// object literal

const jsUser = {
    name: 'Saurabh',
    age: 30,
    emails: ["saurabh@example.com","harshi@example.com"],
}

console.log(jsUser.name);
console.log(jsUser.age);
console.log(jsUser.emails);

// use of syymbol

const mySym = Symbol("mySymbol");

const myObj = {
    [mySym]: "This is a symbol property",
    regularProp: "This is a regular property"
};
 

console.log(myObj[mySym]); // Accessing the symbol property
console.log(myObj.regularProp); // Accessing the regular property

// freezing an object

const frozenObj = {
    name: "Frozen Object",
    value: 42
};

Object.freeze(frozenObj);

frozenObj.name = "Changed Name"; // This will not change the name property
frozenObj.value = 100; // This will not change the value property

console.log(frozenObj.name);