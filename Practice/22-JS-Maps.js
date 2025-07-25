// Pappu Roy
// CSE SUST

// Javascript Maps Practice
console.log("Using Maps:");
// Create a Map
const fruits = new Map([
  ["apples", 500],
  ["bananas", 300],
  ["oranges", 200]
]);
console.log(fruits);

// Create a Map
const fruit = new Map();

// Set Map Values
fruit.set("apples", 800);
fruit.set("bananas", 600);
fruit.set("oranges", 400);
console.log(fruit);

fruit.set("apples", 200); // Change map values
console.log(fruit);

console.log(fruit.get("apples"));    // Using get method which Returns 200

console.log(typeof fruit);  // type of fruit which returns: object

console.log(fruit instanceof Map); // which returns true, cause fruit is a Map

console.log(fruit.size);  // Size of Map output : 3

fruit.delete("apples");  // delete an element from map
console.log(fruit.size);  // after deleting the size of map is 2

fruit.clear();   // removes all elements from fruit map

console.log(fruit.size);  // after applying clear() method it returns size 0

console.log(fruits.has("apples"));  // it returns true if maps key exist

fruits.forEach(function(value,key){
    console.log(key+" : "+value);   // printing key and values of fruits map
})

