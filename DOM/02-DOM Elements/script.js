// Finding HTML Element by Id
document.getElementById("h1").innerHTML = "Welcome to JavaScript HTML DOM Elements";
document.getElementById("hi").innerHTML = "Here we learn about JS HTML DOM Elements...";

const element1= document.getElementById("intro");
document.getElementById("demo").innerHTML = "The text from the intro paragraph is: " + element1.innerHTML;

// Finding HTML Elements by Tag Name
let first = document.getElementsByTagName("p");
first[4].innerHTML = "JavaScript bro...";

// Finding HTML Elements by Class Name
let cls = document.getElementsByClassName("js");
cls[0].innerHTML = "Learning JavaScript HTML DOM";

// Finding HTML Elements by CSS Selectors
const css = document.querySelector("#color");
css.style.backgroundColor = "#ABCDEF";
css.innerHTML = "Using CSS Selector";
