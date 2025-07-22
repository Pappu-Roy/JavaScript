/* Pappu Roy
   CSE,SUST
*/
// JavaScript Math
// If need a round figure
console.log("Using Math.round():");
console.log(Math.round(Math.PI)); // 3.14 => 3
console.log(Math.round(3.9)); // 3.9 => 4 

// Using Math.ceil() and Math.floor()
console.log("Using Math.ceil() and Math.floor():");
console.log(Math.ceil(8.00001)); // 8.00001 => 9
console.log(Math.floor(8.00001)); // 8.00001 => 8

//Math.trunc(x) returns the integer part of x
console.log("Using Math.trunc():");
console.log(Math.trunc(4.4)); // 4.4 => 4
console.log(Math.trunc(4.9)); // 4.9 => 4

// If you want power like 2^2 = 4
console.log("Using Math.pow(base, exponent):");
console.log(Math.pow(2, 2)); // 2^2 = 4
console.log(Math.pow(4, 2)); // 4^2 = 16

// If need square root value
console.log("Using Math.sqrt():");
console.log(Math.sqrt(64)); // 8

// If need to ignore negative value or Absolute value
console.log(Math.abs(-5));

// Max or Min value
console.log("Using Math.max() and Math.min():");
console.log(Math.max(0, 5, 8, 9, 55, 87));
console.log(Math.min(0, 5, 8, 9, 55, 87));

// If you want to show PI value
console.log(Math.PI);

// Algebra sin, cos value
console.log("Using Math.sin() and Math.cos():");
console.log(Math.sin((90 * Math.PI) / 180));
console.log(Math.cos((0 * Math.PI) / 180)); 

console.log("Using Math.random():");
// If need to show a random value
console.log(Math.random()); // 0 - 1
console.log(Math.random().toFixed(2)); // 0.00 - 0.99
console.log(Math.random().toFixed(2) * 10); // 0.00 - 9.99
console.log(Math.random().toFixed(2) * 10 + 1); // 1.00 - 10.99 
console.log(Math.ceil(Math.random())); // 0 - 1 => 1
console.log(Math.ceil(Math.random() * 10)); // 1 - 10

// !Math.sign(x) returns if x is negative, null or positive.
// If x is positive it returns 1
// If x is negative it returns -1
// If x is zero, it returns 0
console.log("Using Math.sign(x):");
console.log(Math.sign(5)); // 1
console.log(Math.sign(0)); // 0
console.log(Math.sign(-5)); // -1

// Math.log(x) returns the natural logarithm(ln) or base (e) of x.
console.log("Using Math.log(x):");
console.log(Math.log(1)); // 0
console.log(Math.log(Math.E)); // 1
console.log(Math.log(10)); // 2.302585092994046

// Math.log10(x) returns the base 10 logarithm of x.
console.log("Using Math.log10(x):");
console.log(Math.log10(10)); // 1
console.log(Math.log10(1000)); // 3

// Math.log2(x) returns the base 2 logarithm of x.
console.log("Using Math.log2(x):");
console.log(Math.log2(2)); // 1
console.log(Math.log2(8)); // 3
