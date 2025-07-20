const num = [5, 10, 15, 20, 12, 40, 55, 30];
num.sort(); // Sorts the array as strings
console.log(num); // Output will be incorrect for numbers

num.sort((a, b) => a - b); // Sort numbers in ascending order
console.log(num);  

/* If numbers are sorted as strings, "25" is bigger than "100", because "2" is bigger than "1".
Because of this, the sort() method will produce incorrect result when sorting numbers.
You can fix this by providing a compare function to the sort() method: 
This tells JavaScript:
If a - b < 0, keep a before b
If a - b > 0, move a after b
If a - b === 0, they’re equal  */ 

num.sort((a, b) => b - a); // Sort numbers in descending order
console.log(num); 

const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.sort(); // Sorts the array alphabetically
console.log(fruits); // Output: ["Apple", "Banana", "Mango", "Orange"]

fruits.reverse(); // Reverses the order of the array 
console.log(fruits); // Output: ["Orange", "Mango", "Banana", "Apple"]

const months = ["Jan", "Feb", "Mar", "Apr"];
months.sort();
months.reverse(); // Sorts the array alphabetically and then reverses it i.e short with descending order
// months.sort().reverse(); // You can also do it in one line
console.log(months); // Output: ["Mar", "Jan", "Feb", "Apr"]

const sorted = months.toSorted(); // Returns a new sorted array without modifying the original array
console.log(sorted); // Output: ["Apr", "Feb", "Jan", "Mar"]

//Sorting an array of objects
const people = [ { name: "Pappu", age: 24 }, 
                 { name: "Poly", age: 22 } ];
people.sort((a, b) => a.name - b.name); // Sorts by name in ascending order
console.log(people);  
people.sort((a, b) => a.age - b.age); // Sorts by age in descending order
console.log(people);

//Findig max and min in an array Using Math.max() and Math.min() with the Spread Operator
const numbers = [5, 10, 15, 20, 12, 40, 55, 30];
const max = Math.max(...numbers); // Using spread operator to find max
const min = Math.min(...numbers); // Using spread operator to find min
console.log(`Max: ${max}, Min: ${min}`); // Output: Max: 55, Min: 5

//Another way to find max and min value from an array Using reduce()
const mx = numbers.reduce((a, b) => a > b ? a : b);
const mn = numbers.reduce((a, b) => a < b ? a : b);
console.log("Max:"+mx);  
console.log("Min:", mn); 
