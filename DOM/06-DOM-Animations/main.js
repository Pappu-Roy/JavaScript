function myMove() {
  let id = null;
  const elem = document.getElementById("animate");   
  let pos = 0;
  clearInterval(id);
  id = setInterval(frame, 5);
  function frame() {
    if (pos == 350) {
      elem.style.backgroundColor = "red";
      clearInterval(id);
    } 
    else {
      pos++; 
      elem.style.top = pos + "px"; 
      elem.style.left = pos + "px"; 
      elem.style.backgroundColor = "blue";
    }
  }
}