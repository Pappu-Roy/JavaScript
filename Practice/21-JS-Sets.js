// Pappu Roy
// CSE SUST

// Javascript Sets Practice
console.log("Using Sets:");
let mySet = new Set(); // Create a new Set
mySet.add(1); // Add elements to the Set
mySet.add(2);
mySet.add(3);
mySet.add(4);
console.log(mySet); // Print the Set

//  New Set with initial values 
const letters = new Set(["a","b","c"]);

console.log(mySet.size); // size of set

let text = "";
for (const x of letters) {
  text += x;
}
console.log(text); // Output: "abc"

console.log(typeof letters); // Output: "object" // Check the type of letters set
console.log(letters instanceof Set); // Output: true // Check if letters is an instance of Set

// Check if a value exists in the Set
console.log(letters.has("a")); // Output: true
console.log(letters.has("d")); // Output: false

// Remove an element from the Set
letters.delete("b");
console.log(letters);

// Clear all elements from the Set
letters.clear();
console.log(letters); // Output: Set(0) {}

// Check if the Set is empty
console.log(letters.size === 0); // Output: true

// Iterate through the Set
console.log("Finding elements in a Set by iterations:");
for (const letter of mySet) {
    console.log(letter); // Output: 1, 2, 3, 4
    }

// Set logic Methods
const A = new Set(['a','b','c']);
const B = new Set(['b','c','d']);
const C = A.union(B);  // Set union method
console.log(C);

const D = A.intersection(B); // Set intersection method
console.log(D);

const E = A.difference(B); // Set difference method
console.log(E);

// Set symmetric difference method
const F = A.symmetricDifference(B); 
console.log(F); // Output: Set with elements in A or B but not in both

// Set subset method
let answer = A.isSubsetOf(B);
console.log(answer); // Output: false, since A is not a subset of B

// Set superset method
answer = A.isSupersetOf(B);
console.log(answer); // Output: false, since A is not a superset of B

// Set disjoint method
answer = A.isDisjointFrom(B);
console.log(answer); // Output: false, since A and B have common elements






