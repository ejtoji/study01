/* click - style */
const btnClick01 = document.querySelector("#button1");
const basisColor = "rgb(0, 0, 0)";
const actionColor = "#d40ea8";
function handleClick01(){
    if (btnClick01.style.color === basisColor){
        btnClick01.style.color = actionColor
    } else {
        btnClick01.style.color = basisColor
    }
}
function init() {
    //btnClick01.style.color = basisColor
    btnClick01.addEventListener("click", handleClick01);
}
init();



/* click - css (질문 init에서 btnClickA 초기화 안됨????)*/
const btnClickA = document.querySelector("#button2");
const btnOn = "clicked";

function handleClick02(){
    const currentClass = btnClickA.className;
    if(currentClass !== btnOn ){
        btnClickA.className = btnOn
    } else {
        btnClickA.className = "";
    }
}
function init() {
    btnClickA.addEventListener("click", handleClick02);
}
init();



/*
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
*/

/* 작성법 1
const title = document.querySelector("#title");
const CLICKED_CLASS = "clicked";
function handleClick(){
    const currentClass = title.className;
    if(currentClass !== CLICKED_CLASS ){
        title.className = CLICKED_CLASS
    } else {
        title.className = "";
    }
}
title.addEventListener("click", handleClick);

/* 작성법 2
const title = document.querySelector("#title");
const CLICKED_CLASS = "clicked";
function handleClick(){
    const hasClass = title.classList.contains(CLICKED_CLASS);
    if(!hasClass){
        title.classList.add(CLICKED_CLASS);
    } else {
        title.classList.remove(CLICKED_CLASS);
    }
}
title.addEventListener("click", handleClick);
*/

/* 작성법 3
const title = document.querySelector("#title");
const CLICKED_CLASS = "clicked";
function handleClick(){
    title.classList.toggle(CLICKED_CLASS);
}
title.addEventListener("click", handleClick);
*/


