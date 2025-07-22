let aboutMe = "Hello there, I'm Pappu Roy"; // String variable declaration
console.log(aboutMe);

let me1 = "Hello there, I'm 'Pappu Roy'"; // String with single quotes
console.log(me1);

let me2 = 'Hello there, I\'m "Pappu Roy"'; // String with escaped double quotes
console.log(me2);

let me3 = `Hello there, I'm "Pappu Roy"`; // String with template literals
console.log(me3);
let me4 = "Hello there, I'm \"Pappu Roy\""; // String with escaped double quotes
console.log(me4);

// Finding String length
let text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let length = text.length;  // Getting the length of the string
console.log(length); // Output: 26

let text1 = "Pappu Roy";
let text2 = " CSE SUST";
let text3 = text1 + text2; // Concatenating strings
console.log(text3); // Output: Pappu Roy CSE SUST

// JS String as object
let strObj = new String("Hello World"); // Creating a string object 
console.log(strObj); // Output: [String: 'Hello World']

// Accessing characters in a string
let str = "Hello World";    
console.log(str[0]); // Output: H
console.log(str.charAt(0)); // Output: H

// Strign comparison
let str1 = "apple";
let str2 = "banana";
console.log(str1 == str2); // Output: false
console.log(str1 < str2); // Output: true (compares lexicographically)
console.log(str1 > str2); // Output: false (compares lexicographically)

str2 = "apple";
console.log(str1 == str2); // Output: true (same content)
console.log(str1 === str2); // Output: true (same content and type)

let str3 = new String("apple");
console.log(str1 == str3); // Output: true (content is the same)
console.log(str1 === str3); // Output: false (different types, str3 is an object)

let str4 = new String("apple");
console.log(str3 == str4); // Output: false (different object instances) and 
// Comparing two JavaScript objects always returns false.
