// this keyword in arrow functions
const obj = {
    name: "John",
    greet: function() {
        console.log(this);
    },
    greetArrow: () => {
        console.log(this);
    }
};
obj.greet(); // "John"
obj.greetArrow(); // undefined