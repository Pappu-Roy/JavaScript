// JavaScript Arrays

// const language2 = new Array('HTML', 'CSS', 'JavaScript', 'PHP', true, 50);

const language = ['HTML', 'CSS', 'JavaScript', 'PHP', true, 50];
language[4] = 'Tailwind CSS';
language[5] = 'react.js';
language[6] = 'vue.js';
language[7] = 'laravel';
language[10] = 'Bootstrap';

// First Item
// console.log(language[0]);
// Last Item
console.log(language[language.length - 1]);
// Delete or Remove Last Item
language.pop();
// ADD last item
language.push('Angular.js');
// Add first
language.unshift('Basic Computing');
// Delete first item
language.shift();

console.log(language);
// console.log(language.at(5));
// console.log(language.toString()); 
console.log(language.join(' * ')); // Join array elements into a string with a separator
console.log(language.indexOf('PHP')); // Find index of an item
// console.log(language.length);
// console.log(language[2]);

const person = [];
person['firstName'] = 'Pappu'; // Adding properties to an array
person['lastName'] = 'Roy';
person[2] = 24;
person[3] = 'Bangladesh';
 console.log(person.length);  // Length of the array
 console.log(person.firstName); // Accessing property by key
 console.log(person);
 console.log(person[2]);

const num = [20];
console.log(num[0]);
//const num = new Array(20);

// console.log(num);

const x = [1, 2, 3, 4]; 
const y = [1, 2, 3, 4];
const p = [2, 3, 4];
const z = x.concat(y, p); // Concatenating arrays
// console.log(z);

const a = [
  [1, 2, 3, [3, 5, 8]],
  [4, 5, 6],
  [2, 4, 6],
];
console.log(a); // Nested Array
console.log(a[0][3][1]); // Accessing nested array element
console.log(a.flat());
language.splice(2, 0, 'info', 'info2'); // Add 2 items at index 2 
language.splice(2, 2);   // Remove 2 items from index 2 
/*The first parameter (2) defines the position where new elements should be added (spliced in).
The second parameter (0) defines how many elements should be removed.
The rest of the parameters ("Lemon" , "Kiwi") define the new elements to be added.
The splice() method returns an array with the deleted items: */
console.log(language);