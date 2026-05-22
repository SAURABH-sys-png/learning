// a js function can be given a execution context, which is the environment in which the function is executed.
// the execution context is created when the function is called, and it is destroyed when the function returns.
// the execution context is created in two phases: the creation phase and the execution phase.  
// but for variables declared with var, they are hoisted to the top of their scope and initialized with undefined.
// this means that you can access a variable declared with var before it is declared, but it will have the value of undefined.

console.log(x);
var x = 5; // undefined
