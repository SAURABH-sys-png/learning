// {} this is global execution context i.e why window object renders the global variables and functions as its properties and methods respectively.


// eval execution context is created when eval function is called. It is used to execute a string of JavaScript code. The code is executed in the context of the caller, which means that it has access to the variables and functions of the caller.

// module execution context is created when a module is imported. It is used to execute the code of the module. The code is executed in the context of the module, which means that it has access to the variables and functions of the module.

// { } memory creation phase
// execution phase
// in the memory creation phase, the variables and functions are hoisted to the top of their scope. This means that they are created in memory before the code is executed. The variables are initialized with undefined, and the functions are initialized with their function definition.
// in the memory phase every variable is created and assigned a value of undefined,
//  and every function is created and assigned a value of the function definition.
//  This is why you can access a variable or a function before it is declared in the code, 
// but it will have the value of undefined or the function definition respectively.