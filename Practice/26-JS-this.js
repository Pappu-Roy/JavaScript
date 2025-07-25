// Pappu Roy
// CSE SUST

// JavaScript 'this' keyword
// 'this' refers to the object that is executing the current function
// In the global context, 'this' refers to the global object
// In a browser, the global object is 'window'
// In strict mode, 'this' is undefined in the global context
// In a function, 'this' refers to the object that called the function
// In an object method, 'this' refers to the object itself
// In a constructor function, 'this' refers to the new object being created
// In an event handler, 'this' refers to the element that triggered the event
// In arrow functions, 'this' is lexically bound and does not refer to the object that called the function

// Example of 'this' in the global context
function showThis() {
    console.log(this); // 'this' refers to the global object in non-strict mode
}
showThis(); // In a browser, this will log the Window object

// Example of 'this' in an object method
const person = {
    name: 'Pappu',
    Info: function() {
        console.log(`Hello, ${this.name}`); // 'this' refers to obj
    }
};
person.Info(); // Output: Hello, Pappu

// Example of 'this' in a constructor function
function Person(name) {
    this.name = name;
    this.greet = function() {
        console.log(`Hello, ${this.name}`);
    };
}
const pappu = new Person('Pappu Roy');
pappu.greet(); // Output: Hello, Pappu

{
    "use strict";
    let x = this;
    console.log(x); // In strict mode, 'this' is undefined in the global context
}

{
    let x = this;
    console.log(x); // In non-strict mode, 'this' refers to the global object Output: Window object in browsers
}


// Example of 'this' in an object method
const men = {  
  firstName: "Leo",
  lastName : "Messi",
  id       : 5566,
  fullName : function() {
    return this.firstName + " " + this.lastName;
  }
};
console.log(men.fullName()); // Output: Leo Messi

// Using 'this' with call() method
// The call() method calls a function with a given 'this' value and arguments
const person1 = {
  fullName: function() {
    return this.firstName + " " + this.lastName;
  }
}
const person2 = {
  firstName:"MS",
  lastName: "Dhoni",
}
console.log(person1.fullName.call(person2)); // Output: MS Dhoni

// Using 'this' with apply() method
// The apply() method calls a function with a given 'this' value and an array of arguments
const person3 = {
  fullName: function() {
    return this.firstName + " " + this.lastName;
  }
}
const person4 = {
  firstName:"Sachin",
  lastName: "Tendulkar",
}
console.log(person3.fullName.apply(person4)); // Output: Sachin Tendulkar

// Using 'this' with bind() method
// The bind() method creates a new function that, when called, has its 'this' set to the provided value
const person5 = {
    firstName: "Virat",
    lastName: "Kohli",
    fullName: function() {
        return this.firstName + " " + this.lastName;
    }
}
const person6 = {
    firstName: "Rohit",
    lastName: "Sharma"
}
const boundFunction = person5.fullName.bind(person6);
console.log(boundFunction()); // Output: Rohit Sharma   


