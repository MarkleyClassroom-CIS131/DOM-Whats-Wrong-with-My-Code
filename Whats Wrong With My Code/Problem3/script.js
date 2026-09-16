//PROBLEM: Change the color of a paragraph text when the color is chosen from the drop down.
let dropdown = document.getElementById("changeColor");
function changeParagraphColor() {
  let paragraph = document.querySelector("#myparagraph"); 
  paragraph.style.color = dropdown.value
}

dropdown.addEventListener("change", changeParagraphColor);