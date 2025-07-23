//! Pappu Roy
//! CSE SUST
// JavaScript Numbers Practice 

let x = 10; // Integer
let y = 3.14; // Float
let z = -5; // Negative number
console.log(x, y, z); // Output: 10 3.14 -5
console.log(typeof x); // Output: number (type of x)

x = 125e5; // Scientific notation (125 * 10^5)
console.log(x); // Output: 12500000
y = 125e-5; // Scientific notation (125 * 10^-5)
console.log(y); // Output: 0.00125

x = 999999999999999;   // x will be 999999999999999 // 15 digits 
y = 9999999999999999;  // y will be 10000000000000000 // 16 digits, precision lost 
console.log(x); // Output: 999999999999999
console.log(y); // Output: 10000000000000000 (precision lost) 

console.log(0.1 + 0.2); // Output: 0.30000000000000004 (floating-point precision issue)
console.log((0.1 + 0.2).toFixed(2)); // Output: 0.30 (fixed to 2 decimal places)

x = (0.2 * 10 + 0.1 * 10) / 10; // Correcting floating-point precision issue
console.log(x); // Output: 0.3 (corrected floating-point calculation) can be used to avoid precision issues
console.log(Number.isInteger(x)); // Output: false (0.3 is not an integer) 
console.log(Number.isInteger(10)); // Output: true (10 is an integer) 
console.log(Number.isInteger(10.5)); // Output: true (10 is an integer) fractional number return false 

x = 10; y = 20;
console.log(x + y); // Output: 30 (addition)
z = "50"; // String
console.log(x + z); // Output: "1050" (string concatenation, not addition)
console.log(Number(x) + Number(z)); // Output: 40 (converts string to number and adds) 
console.log(z+x+y); // Output: "5010" (string concatenation, not addition) 
console.log(x+y+z); // Output: "3050" (string concatenation, not addition)

console.log(z/x); // Output: 5 (string "50" divided by number 10) // JS will convert string to number when dividing 
console.log(z*x); // Output: 500 (string "50" multiplied by number 10) // JS will convert string to number when multiplying 
console.log(z-x); // Output: 40 (string "50" minus number 10) // JS will convert string to number when subtracting

// But + will not convert string to number when adding
console.log(x+z); // Output: "1050" (string concatenation, not addition)

console.log(10/"two"); // Output: NaN (Not a Number, invalid operation)
console.log(typeof (10/"two")); // Output: number (type of NaN is number)

console.log(2/0); // Output: Infinity (division by zero) 

x = 999999999999999; 
console.log(x);
y = 9999999999999999; 
console.log(y); // Output: 10000000000000000 (precision lost, JS converts to scientific notation)

y = 9999999999999999n; // Using BigInt for large integers
console.log(y);
console.log(typeof y); // Output: bigint (type of BigInt is bigint)

y = BigInt("1234567890123456789012345")  // Large integer using BigInt
console.log(y);
console.log(typeof y);

x = 9007199254740995n;
y = 9007199254740995n;
z = x * y;                // Multiplying two BigInts
console.log(z);

let hex = 0x20000000000003n;  // Hexadecimal BigInt
let oct = 0o400000000000000003n;  // Octal BigInt
let bin = 0b100000000000000000000000000000000000000000000000000011n;  // Binary BigInt
console.log(hex);
console.log(oct);
console.log(bin);

// !A safe integer is an integer that can be exactly represented as a double precision number.
//The Number.isSafeInteger() method returns true if the argument is a safe integer.

console.log(Number.isSafeInteger(10));  // Output: true
console.log(Number.isSafeInteger(12345678901234567890)); // Output: false