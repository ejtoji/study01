//dom function
const title = document.getElementById("title");
console.log(title);
title.innerHTML = "자바스크립트";

console.dir(title);
title.style.color = "red";
console.dir(document);
document.title = "I am eunjung";

const title2 = document.querySelector("#title");
    /*querySelector : document 가서 모든 자식중에 #title를 찾아라*/

//envent handlers
function handleResize() {
    console.log("I have been resized")
}
window.addEventListener("resize", handleResize);
    /*handleResize()사용하지 않음. ()는 바로 function을 실행하라는 뜻*/

function handleClick(){
    title.style.color = "blue";
}
title.addEventListener("click", handleClick);


//if else
//const age = prompt("How old are you?");

if(age >= 18 && age < 21){
    console.log("18~21 you can drink")
} else if(age > 21){
    console.log("21이상 you heaad")
} else {
    console.log("18미만 too young")
}

consst baseColor = "#3"
























