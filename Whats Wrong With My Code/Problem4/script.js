// PROBLEM: Change the background color of a paragraph when the button is clicked.

function changeBackgroundColor() {
  let paragraph = document.getElementById("highlight"); 
  paragraph.style.backgroundColor = "lightgreen";
}


document.getElementById("btnBackground").addEventListener("click", changeBackgroundColor);