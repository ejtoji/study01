//if else
/*
const age = prompt("How old are you?");

if(age >= 18 && age < 21){
    console.log("18~21 you can drink")
} else if(age > 21){
    console.log("21이상 you heaad")
} else {
    console.log("18미만 too young")
}
*/

const title = document.querySelector("#title");
const oldColor = "rgb(136, 136, 136)";
const newColor = "#000";
function handleClick() {
    const currentColor = title.style.color;
    if(currentColor === oldColor) {
        title.style.color = newColor;
    } else {
        title.style.color = oldColor;
    }
}
function init(){
    title.style.color = oldColor;
    title.addEventListener("click", handleClick)
}
init();
