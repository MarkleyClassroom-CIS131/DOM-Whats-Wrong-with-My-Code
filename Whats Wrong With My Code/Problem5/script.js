//PROBLEM: Update the text of the second paragraph when the user leaves the text box. *** Not the first paragraph
// HINT: Don't change the methods provided. If you don't know what a method does, look it up to understand its useage!

function updateSpecificParagraph() {
  let paragraph = document.querySelector("p"); 
  let inputText = document.getElementById('newText').value;
  paragraph.innerText = inputText;
}


document.getElementById('newText').addEventListener("blur", updateSpecificParagraph);