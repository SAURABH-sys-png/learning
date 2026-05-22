// What are scopes?
// Scopes are the contexts in which variables and functions are defined and can be accessed.
//  They determine the visibility and lifetime of variables and functions in a program. In JavaScript, 
// there are three types of scopes: global scope, function scope, and block scope.

// {} defines the scope of some function


if(true){
    let a = 10; // local scope
}
console.log(a); // ReferenceError: a is not defined

// In the above example, the variable 'a' is defined within the block scope of the 'if' statement. 
// It cannot be accessed outside of that block, resulting in a ReferenceError when we try to log it.