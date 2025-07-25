// Pappu Roy
// CSE SUST

// JavaScript Scope Practices
// JavaScript has three types of scope:
// 1. Global Scope
// 2. Function Scope    
// 3. Block Scope

// Global Scope
let globalVar = "I am a global variable";
function Global() {
    console.log(globalVar); // Accessible here
}
Global(); // Output: I am a global variable

let person = "Pappu Roy"; // Global variable
console.log(person); // Output: Pappu Roy
function displayName() {
    console.log(person); // Accessible here
    person = "Leo Messi"; // Reassigning global variable
    console.log(person);  // Output: Leo Messi // Updated global variable 
}
displayName(); // Call the function to see the output
console.log(person); // Output: Leo Messi // Global variable is updated

{
    person = "Pappu Roy"; // Reassigning global variable again
    console.log(person); // Output: Pappu Roy // Global variable is updated again
}
console.log(person); // Output: Pappu Roy // Global variable remains updated


// 2. Function Scope
function functionScope() {
    let localVar = "I am a local variable"; // Local variable
    console.log(localVar); // Accessible here
    localVar = "I am updated local variable"; // Reassigning local variable
    console.log(localVar); // Output: I am updated local variable // Updated local variable
}
functionScope(); // Call the function to see the output
// console.log(localVar); // Uncaught ReferenceError: localVar is not defined // Not accessible outside the function    


// 3. Block Scope
{
    let blockVar = "I am a block variable"; // Block scoped variable
    console.log(blockVar); // Accessible here
    blockVar = "I am updated block variable"; // Reassigning block scoped variable
    console.log(blockVar); // Output: I am updated block variable // Updated block scoped variable
    let me = "Pappu Roy"; // Block scoped variable
    console.log(me); // Output: Pappu Roy // Block scoped variable
}
me = "Leo Messi"; // Uncaught ReferenceError: me is not defined // Not accessible outside the block
// console.log(blockVar); // Uncaught ReferenceError: blockVar is not defined // Not accessible outside the block