// Index DOM CSS
document.getElementById("h2").style.color="#620dffff";
const p1 = document.getElementById("p1");
p1.innerHTML="<b>Hello there, welcome to Javascript DOM CSS</b>";
p1.style.color="#f208dbff";
p1.style.fontFamily = "Georgia";
p1.style.fontSize = "20px";
document.getElementById("p2").innerHTML = "Goodbye!"
document.getElementById("p2").style.color = "#8e3aedff"
document.getElementById("p2").style.fontSize = "larger";


// DOM CSS Using Events
function button(){
    let x = document.getElementById("h2");
    x.style.color = "#ed0af5ff";
    x.style.fontSize = "40px";
}