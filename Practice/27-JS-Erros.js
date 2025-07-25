// Pappu Roy
// CSE SUST

// JavaScript Errors practice
// JavaScript errors are issues that occur during the execution of a script
// They can be caused by syntax errors, runtime errors, or logical errors
// Syntax errors occur when the code is not written correctly
// Runtime errors occur when the code is executed but fails to run correctly
// Logical errors occur when the code runs but does not produce the expected result
// JavaScript provides a way to handle errors using try...catch blocks

// Examples of try...catch blocks
try {
    // This code may throw an error
    let result = riskyFunction();
} 
catch (error) {
    // This code runs if an error occurs in the try block
    console.error("An error occurred:", error.message); // Log the error message // Output: An error occurred: [error message]
}

// Examples of try...catch...finally blocks
try{
    const person = "Leo Messi"
    person = "Pappu Roy";   // throw an error cause of reassign of const person variable
}
catch(err){
    console.error("An error occurred:", err.message);
}
finally{
    console.log("Leo Messi");
}

// Examples of throw statement
//  In JavaScript, throw is used to manually throw an error or exception.
// The throw statement allows you to create a custom error.

try {
  let age = -5;
  if (age < 0) {
    throw "Age cannot be negative!";
  }
  console.log("Age is " + age);
} catch (error) {
  console.log("Error: " + error);
}

// Another example
function divide(a, b) {
  if (b === 0) {
    throw new Error("Division by zero is not allowed!");
  }
  return a / b;
}

try {
  console.log(divide(10, 0));
} catch (e) {
  console.log("Error: " + e.message);
}


