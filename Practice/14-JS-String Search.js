//! Pappu Roy
//! CSE SUST
// String Search Practice

let text = "Hello, World! Hello, Universe!"; // Sample text for searching
console.log(text);
console.log(text.indexOf("Hello")); // Output: 0 (first occurrence of "Hello");
console.log(text.lastIndexOf("Hello")); // Output: 14 (last occurrence of "Hello")
console.log(text.indexOf("Hello", 5)); // Output: 14 (search starts from index 5)
console.log(text.indexOf("Goodbye")); // Output: -1 (not found, returns -1)

console.log(text.includes("World")); // Output: true (checks if "World" is present)
console.log(text.includes("world")); // Output: false (case-sensitive check)

console.log(text.search("Hello")); // Output: 0 (searches for "Hello", returns index)
console.log(text.search(/Hello/)); // Output: 0 (using regex to search for "Hello")
console.log(text.search(/world/i)); // Output: 7 (case-insensitive search for "world")
console.log(text.search(/Goodbye/)); // Output: -1 (not found, returns -1)

// Extracting matches using match() 
console.log(text.match(/Hello/g)); // Output: [ 'Hello', 'Hello' ]
console.log(text.match("Hello")); // Output: [ 'Hello', index: 0, input: 'Hello, World! Hello, Universe!', groups: undefined ]
console.log(text.match(/world/i)); // Output: [ 'World', index: 7, input: 'Hello, World! Hello, Universe!', groups: undefined ]

console.log(text.match(/Goodbye/)); // Output: null (not found, returns null)

text = "Hello, World! Hello, Universe! HELLO, Galaxy!"; 
console.log(text.match(/Hello/gi)); // Output: [ 'Hello', 'Hello', 'HELLO' ] (case-insensitive match for "Hello")
console.log(text.match(/lo/gi)); // Output: [ 'Hello', 'Hello', 'HELLO' ] (case-insensitive match for "Hello")

// startsWith() and endsWith()
console.log(text.startsWith("Hello")); // Output: true (checks if text starts with "Hello")
console.log(text.startsWith("World")); // Output: false (does not start with "World")
console.log(text.endsWith("Galaxy!")); // Output: true (checks if text ends with "Galaxy!")
console.log(text.endsWith("Universe!")); // Output: false (does not end with "Universe!")
console.log(text.startsWith("Hello", 7)); // Output: true (checks if text   starts with "Hello" from index 7)
console.log(text.endsWith("Hello,", 20)); // Output: true (checks if text ends with "Hello" up to index 20)
