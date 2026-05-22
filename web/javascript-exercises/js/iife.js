// imedietely invoked function expression (IIFE) is a JavaScript function that runs as soon as it is defined. It is a design pattern that is also known as a self-executing anonymous function and contains two major parts. The first part is the anonymous function with lexical scope enclosed within the Grouping Operator (). This prevents accessing variables within the IIFE idiom as well as polluting the global scope. The second part creates the immediately invoked function expression () through which the JavaScript engine will directly interpret the function.

// IIFE is a common JavaScript pattern that is used to create a new scope and avoid polluting the global namespace. It is often used to create a private scope for variables and functions, and to execute code immediately without having to call a function.

(function() {
    // code here is executed immediately
    var x = 10;
    console.log(x); // 10
})();