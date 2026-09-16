// PROBLEM: Update the text in a paragraph with the value from an input field.

document.getElementById("btn").addEventListener("click", updateParagraph)
function updateParagraph() {
  
  let input = document.getElementById("inputField");
  let paragraph = document.getElementById("paragraph1");
  paragraph.innerText = input.innerText; 
}
