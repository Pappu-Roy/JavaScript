//! Pappu Roy
//! CSE SUST 
// String Methods Practice

let me = "Hello there, I'm Pappu Roy"; // String variable declaration
console.log(me);
console.log(me.length); // Output: 26 // Length of the string // space is also counted

// String character access
me = "Pappu Roy";
console.log(me[0]); // Output: P
console.log(me.charAt(0)); // Output: P
console.log(me.charCodeAt(0)); // Output: 80 (ASCII value of 'P')
console.log(me[me.length - 1]); // Output: y (last character)
console.log(me.at(2)); // Output: p (using at() method)

// Accessing characters beyond the string length 
console.log(me[12]); // Output: undefined (index out of bounds)
console.log(me.charAt(12)); // Output: '' (empty string for out of bounds)

// !String concatenation

let firstName = "Pappu";
let lastName = "Roy";
let fullName = firstName + " " + lastName; // Concatenating strings
console.log(fullName); // Output: Pappu Roy
fulllName = firstName.concat(" ", lastName); // Using concat() method
console.log(fulllName); // Output: Pappu Roy

// Extracting substrings
let text = "Hello, World!"; 
console.log(text.slice(0, 5)); // Output: Hello (extracts from index 0 to 4)
console.log(text.substring(0, 5)); // Output: Hello (similar to slice)

console.log(text.slice(7)); // Output: World! (extracts from index 7 to end)
console.log(text.substring(7)); // Output: World! (similar to slice)
console.log(text.slice(-6)); // Output: World! (negative index counts from end)
console.log(text.substring(-6,5)); // Output: Hello, World! (negative index treated as 0)
console.log(text.slice(-10, -1)); // Output: World (negative indices count from the end) 

//!The substr() method is removed (deprecated) in the latest JavaScript standard.
//Use substring() or slice() instead.

console.log(text.substr(0, 5)); // Output: Hello (deprecated, use substring or slice) 

// uppercase and lowercase conversion
let str = "Hello, World!"; 
console.log(str.toUpperCase()); // Output: HELLO, WORLD! (converts to uppercase)
console.log(str.toLowerCase()); // Output: hello, world! (converts to lowercase)   

// Trimming whitespace
let spacedStr = "   Hello, World!   ";
console.log(spacedStr); // Output: "   Hello, World!   " (with leading and trailing whitespace) 
console.log(spacedStr.trim()); // Output: Hello, World! (removes leading and trailing whitespace)
console.log(spacedStr.trimStart()); // Output: "Hello, World!   " (removes leading whitespace)
console.log(spacedStr.trimEnd()); // Output: "   Hello, World!" (removes trailing whitespace)  

// padding strings
let paddedStr = "5";   
console.log(paddedStr.padStart(3, '0')); // Output: 005 (pads with '0' at the start)
console.log(paddedStr.padEnd(3, '0')); // Output: 500 (pads with '0' at the end)
console.log("Hello".padStart(10, '*')); // Output: *****Hello (pads with '*' at the start)
console.log("Hello".padEnd(10, '*')); // Output: Hello***** (pads with '*' at the end)

let num = 5;
let nums = num.toString();
let padded = nums.padEnd(4,"0");
console.log(padded); // Output: 5000 (pads with '0' at the end)

// repeating strings
let repeatStr = "Hello";   
console.log(repeatStr.repeat(3)); // Output: HelloHelloHello (repeats the string 3 times) 

// Replacing substrings
let originalStr = "Hello, World!";
console.log(originalStr.replace("World", "JavaScript")); // Output: Hello, JavaScript! (replaces first occurrence)
console.log(originalStr.replaceAll("o", "0")); // Output: Hell0, W0rld! (replaces all occurrences of 'o' with '0')

let txt = "Please visit Microsoft and Microsoft!";
let newText = txt.replace("Microsoft", "W3Schools"); // Replaces first occurrence only
console.log(newText); // Output: Please visit W3Schools and Microsoft! 
console.log(txt.replaceAll("Microsoft", "W3Schools")); // Replaces all occurrences
console.log(txt.replace(/Microsoft/g, "W3Schools")); // Using regex to replace all  

console.log(txt.replace(/microsoft/i, "W3Schools")); // Case-insensitive replacement
console.log(txt.replace(/microsoft/gi, "W3Schools")); // Case-insensitive replacement with global flag

// Splitting strings
let splitStr = "Hello, World! How are you?";
console.log(splitStr.split(" ")); // Output: ['Hello,', 'World!', 'How', 'are', 'you?'] (splits by space)
console.log(splitStr.split(", ")); // Output: ['Hello', 'World! How are you?'] (splits by comma and space)
console.log(splitStr.split("o")); // Output: ['Hell', ', W', 'rld! H', 'w are y', 'u?'] (splits by 'o')
console.log(splitStr.split(" ", 3)); // Output: ['Hello,', 'World!', 'How'] (splits by space, limit to 3 parts) 

text = "Pappu";
console.log(text.split("")); // Output: ['P', 'a', 'p', 'p', 'u'] (splits into individual characters)   


//! THE END
//! Pappu Roy