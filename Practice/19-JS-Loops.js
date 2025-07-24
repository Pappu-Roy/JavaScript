// Pappu Roy
// CSE SUST

// JavaScript Loops Practice 
// For Loop Example
console.log("Using Loop Example:"); 
let num = [5, 10, 15, 20, 25, 30];
for (let i = 0; i < num.length; i++) {
  console.log(num[i]); // Loop through array and print each number
}

// for in Loop Example
console.log("Using for in Loop Example:");
let person = {name: "Pappu", age: 25, city: "Sylhet"};
for (let key in person) {
    console.log(person[key]); // Loop through object properties and print values
}

// for of Loop Example
console.log("Using for of Loop Example:");
let colors = ["Red", "Green", "Blue"];
for (let color of colors) {
    console.log(color); // Loop through array and print each color
}

// for each Loop Example
console.log("Using for each Loop Example:");
colors.forEach(function(color) {
    console.log(color); // Loop through array and print each color using forEach
});

// while Loop Example
console.log("Using while Loop Example:");
let i = 0;
while (i < num.length) {
    console.log(num[i]); // Loop through array and print each number
    i++;
}

// do while Loop Example
let code = ["JavaScript", "Python", "Java"];
console.log("Using do while Loop Example:");
let j = 0;
do {
    console.log(code[j]); // Loop through array and print each number
    j++;
} while (j < code.length);

// Nested Loop Example
console.log("Using Nested Loop Example:");
let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[row].length; col++) {
        console.log(matrix[row][col]); // Loop through 2D array and print each element
    }
}
