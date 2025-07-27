// JavaScript addEventListener() using event.html

const x = document.getElementById("h1");
x.style.color = "#6f38e7ff"; 
const p = document.getElementById("h3");
p.style.color = "#c80ce9ff";
const p2 = document.getElementById('see');
const but = document.getElementById('but');
but.addEventListener("click", clicked);
but.addEventListener("mouseover", mouseover);
but.addEventListener("mouseout", mouseout);
function clicked(){
    p2.innerHTML += "Clicked!<br>";
    p2.style.color = "green";
}
function mouseover(){
    p2.innerHTML += "Moused Over!<br>"
    p2.style.color = "red";
}
function mouseout(){
    p2.innerHTML += "Moused Out!<br>"
    p2.style.color = "blue";
}
