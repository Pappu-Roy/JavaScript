const fruits = ["Apple", "Orange", "Apple", "Mango"];
let position = fruits.indexOf("Apple") + 1; // Find the position of "Orange" and add 1 to it 
console.log(position);
position = fruits.lastIndexOf("Apple") + 1; // Find the last position of "Apple" and add 1 to it
console.log(position);

console.log(fruits.includes("Mango")); // it check "Mango" exiz=st or not in the array, it Returns true or false

const numbers = [4, 9, 16, 25, 29];
let first = numbers.find(myFunction);

function myFunction(value, index, array) {
  return value > 18;
}
console.log(first); // It returns the first element that satisfies the condition

let index = numbers.findIndex(myFunction); // It returns the index of the first element that satisfies the condition
console.log(index);

const temp = [27, 28, 30, 40, 42, 35, 30, 50];
let high = temp.findLast(x => x > 40); // It returns the last element that satisfies the condition
console.log(high);
console.log(temp.length); // It returns the length of the array

let pos = temp.findLastIndex(x => x > 40); // It returns the index of the last element that satisfies the condition
console.log(pos);