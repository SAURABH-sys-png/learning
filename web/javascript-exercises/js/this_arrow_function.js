/**
 * this & ARROW FUNCTIONS — revision
 * HTML: ../html/functions-scope.html
 *
 * Regular function as method: this = object that called the method
 * Arrow function: no own this — inherits from enclosing lexical scope
 */

const obj = {
  name: "John",
  greet: function () {
    console.log("regular fn this.name:", this.name); // "John"
  },
  greetArrow: () => {
    console.log("arrow fn this (lexical):", this); // not obj — often undefined in modules
  },
};
obj.greet();
obj.greetArrow();
