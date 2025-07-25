// Pappu Roy
// CSE SUST

// JavaScript Hoisting Practices
// JavaScript Hoisting is a behavior where variable and function declarations are 
// moved to the top of their containing scope during the compile phase.
// This means that you can use variables and functions before they are declared in the code.
// Hoisting is JavaScript's default behavior of moving declarations to the top. 

// JavaScript Hosing Examples

let x;
x = 10;
console.log(x);  // General correct steps => Variable declarations, initialization and access or others

y = 100;
console.log(y);
console.log(typeof y);

console.log("Using hoisting: ");
p = "Papu Roy";
console.log(p);
var p;        // here the JS compiler take this declarations top of the initialization which is called hoisting

// Hosing is not allowed in let and const keywords
num = 10;
console.log(num);
// let num;  // it give ReferenceError in the runtime
// const num;   // it also give syntax error



// JavaScript Function Hoisting

car('R15'); // Everything is fine
function car(bike) {
  console.log(`I love to have a ${bike}.`);
}

/*
student('Ali'); // ReferenceError
let student = function (fname) {
  console.log(`My name is ${fname}`);
};

*/