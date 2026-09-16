// PROBLEM: When an image is selected in the drop down, the image should change to the new filename.

let imgStitch = document.getElementById("eats")
let path = "imgs/"
document.getElementById("imagePick",  changeImage);
function changeImage() {
    let food = document.getElementById("imagePick");
    console.log(food)
    imgStitch.src = path + food.value;
}
