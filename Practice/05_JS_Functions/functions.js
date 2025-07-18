//Basic Function
let add = function(x,y){     
    return x+y;
}
console.log("Addition: "+add(2000,25));

//Another Basic
function hello(name,age){
    console.log("Hello "+name+"\nAge: "+age);
}
hello("Pappu", 24);

// Automatic Invoked Function
(function (message) {
  console.log('I am self-Invokeing Function:', message);
})('Hello World!');

/* ===================
? Anonymous Function
===================== */
let numbers = [4, 5, 6, 7, 8];
let sqNumbers = numbers.map(function (number) {
  return number * number;
});

console.log(sqNumbers);

// Arrow Function
let sum = (x, y) => x + y;
console.log(sum(5, 6));



