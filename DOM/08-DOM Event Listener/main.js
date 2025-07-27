// The addEventListener() method attaches an event handler to the specified element.
// The addEventListener() method attaches an event handler to an element without overwriting existing event handlers.

// JavaScript addEventListener() using index.html
function Display(){
    document.getElementById("p2").innerHTML = Date();
    alert("Welcome to Bangladesh");
}
const x = document.getElementById("h1");
x.style.color = "#6f38e7ff";
const button = document.getElementById("button");
button.addEventListener("click", Display);