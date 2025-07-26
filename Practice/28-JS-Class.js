// PappU Roy
// CSE SUST

// JavaScript Classes Practice

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Hi, I am ${this.name} and I am in ${this.age} years old.`);
  }
}

// Create objects
const p1 = new Person("Pappu", 24);
const p2 = new Person("Messi", 38);

p1.greet(); // Hi, I am Pappu and I am in 24 years old.
p2.greet(); // Hi, I am Messi and I am in 22 years old.


// JS Class Inheritance (Extends)
class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} makes a sound.`);
  }
}

class Dog extends Animal {
  speak() {
    console.log(`${this.name} barks!`);
  }
}

const dog = new Dog("Tommy");
dog.speak(); // Tommy barks!



