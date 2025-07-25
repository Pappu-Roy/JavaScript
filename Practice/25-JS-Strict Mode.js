// Pappu Roy
// CSE SUST

// JavaScript Strict Mode Practices
// JavaScript Strict Mode is a way to opt in to a restricted variant of JavaScript.
// It helps in catching common coding mistakes and "unsafe" actions such as defining global variables.
// Strict mode can be enabled by adding "use strict"; at the beginning of a script or function.
// It helps in writing cleaner code and avoiding potential pitfalls.
// It can be applied to entire scripts or individual functions.

"use strict"; // Enable strict mode
// Example of Strict Mode

num = 10;
console.log(num); // This will throw an error in strict mode because num is not declared


function strictGlobalScope() {
    //"use strict"; // Enable strict mode for this function
    globalVar = "This will cause an error"; // This will throw an error in strict mode
    console.log(globalVar);
}
strictGlobalScope(); // Call the function to see the error

function x(p1, p1) {};   // This will cause an error


//Keywords reserved for future JavaScript versions can NOT be used as variable names in strict mode.
// These keywords include: implements, interface, let, package, private, protected, public, static, yield

let public = "This is a public variable"; // This will throw an error in strict mode
console.log(public); // This will not execute due to the error above