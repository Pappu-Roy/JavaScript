//! Pappu Roy
//! CSE SUST

// JavaScript Number Methods 
let x = 123;
console.log(x);
x = x.toString();
console.log(typeof x); // Convert Number to String 
console.log((123).toString());

// Number to String Conversion
console.log((100 + 23).toString()); // Convert to String
console.log((100 + 23).toString(2)); // Convert to Binary
console.log((100 + 23).toString(8)); // Convert to Octal
console.log((100 + 23).toString(16)); // Convert to Hexadecimal

// Number to Exponential Notation
console.log("Exponential Notation:");
let y = 4;
console.log(y.toExponential(2)); // Convert to Exponential Notation
console.log(y.toExponential(4)); // More precision in Exponential Notation
console.log(y.toExponential(6)); // Even more precision in Exponential Notation

// tofixed() Method
let a= 3.14159;
console.log(a.toFixed(2)); // Convert to Fixed Point Notation with 2 decimal places
console.log(a.toFixed(4)); // Convert to Fixed Point Notation with 4 decimal places
console.log(a.toFixed(6)); // Convert to Fixed Point Notation with 6 decimal

//toPrecision() Method
console.log(a.toPrecision(2)); // Convert to Precision with 2 significant digits   
console.log(a.toPrecision(4)); // Convert to Precision with 4 significant digits
console.log(a.toPrecision(6)); // Convert to Precision with 6 significant digits

// Number Methods
console.log("Number Methods:");
console.log(Number(true)); // Convert Boolean to Number
console.log(Number(false)); // Convert Boolean to Number
console.log(Number("123")); // Convert String to Number
console.log(Number("123abc")); // Invalid String to Number // NaN
console.log(Number(" 10  ")); // Convert String with Spaces to Number // 10
console.log(Number("")); // Convert Empty String to Number // 0

console.log(Number(new Date("1970-01-01"))); // Convert Date to Number (Unix Epoch Time)
console.log(Number("2023-10-01")); // Convert Date String to Number (NaN)
 
// Parse Methods
console.log("Parse Methods:"); 
console.log(parseInt("120")); // Parse String to Integer
console.log(parseInt("123abc")); // Parse String with Non-numeric Characters to Integer // 123
console.log(parseInt("  -123  ")); // Parse String with Spaces to Integer // 123
console.log(parseFloat("3.14")); // Parse String to Float
console.log(parseFloat("3.14abc")); // Parse String with Non-numeric Characters to Float // 3.14

// isNaN() Method
console.log("isNaN Method:");   
console.log(isNaN("Hello")); // Check if String is NaN // true
console.log(isNaN("123")); // Check if String is NaN // false

// isFinite() Method
console.log("isFinite Method:");    
console.log(isFinite(123)); // Check if Number is Finite // true
console.log(isFinite(Infinity)); // Check if Infinity is Finite // false
console.log(isFinite(NaN)); // Check if NaN is Finite // false

// isInteger() Method
console.log("isInteger Method:");
console.log(Number.isInteger(123)); // Check if Number is Integer // true
console.log(Number.isInteger(123.45)); // Check if Float is Integer // false
console.log(Number.isInteger("123")); // Check if String is Integer // false

// isSafeInteger() Method
// A safe integer is an integer that can be exactly represented as a double precision number.
// Safe integers are all integers from -(2^53 - 1) to +(2^53 - 1).
console.log("isSafeInteger Method:");
console.log(Number.isSafeInteger(123)); // Check if Number is Safe Integer // true
console.log(Number.isSafeInteger(9007199254740991)); // Check if Large Number is Safe Integer // true
console.log(Number.isSafeInteger(9007199254740992)); // Check if Larger Number is Safe Integer // false

// Number.MAX_SAFE_INTEGER and Number.MIN_SAFE_INTEGER
console.log("MAX_SAFE_INTEGER and MIN_SAFE_INTEGER:");
console.log(Number.MAX_SAFE_INTEGER); // Maximum Safe Integer
console.log(Number.MIN_SAFE_INTEGER); // Minimum Safe Integer

// Number.EPSILON
console.log("Number.EPSILON:");
console.log(Number.EPSILON); // Smallest difference between two representable numbers

// Min and Max values
console.log("Min and Max values:");
console.log(Number.MIN_VALUE); // Smallest positive number representable in JavaScript
console.log(Number.MAX_VALUE); // Largest positive number representable in JavaScript

// Number.POSITIVE_INFINITY and Number.NEGATIVE_INFINITY
console.log("POSITIVE_INFINITY and NEGATIVE_INFINITY:");
console.log(Number.POSITIVE_INFINITY); // Positive Infinity
console.log(Number.NEGATIVE_INFINITY); // Negative Infinity




