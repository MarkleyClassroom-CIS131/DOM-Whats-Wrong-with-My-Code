//PROBLEM: Change the image when the button is clicked.

document.getElementById("btn").addEventListener("click", updateImageSrc)

function updateImageSrc() {
  let img = document.querySelector("#image1");
  img.scr = "imgs/stitch.jpg"; 
}