// Pappu Roy
// CSE SUST

//JavaScript Break and Continue Practice 
console.log("Using Break and Continue:");
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] === 5) {
        console.log("Breaking at number:", numbers[i]);
        break; // Exit the loop when number is 5
    }
    console.log(numbers[i]); // Print numbers until 5
}

// Using continue to skip even numbers
console.log("Using Continue:"); 
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
        console.log("Skipping even number:", numbers[i]);
        continue; // Skip even numbers
    }
    console.log(numbers[i]); // Print only odd numbers
}
