const form = document.querySelector(".js-form");
const input = form.querySelector(".input");
const greeting = document.querySelector(".greetings");

/*
1. 처음 셀렉트박스가 보임
2. 입력박스에 이름을 입력하면 셀렉트박스 사라짐
3. 셀렉트박스 사라지고 인사말이 나옴
4. 인사말 나오고 입력한 이름이 뒤에 붙는다
5. 그 이름은 스토리지에 저장이 된다
*/

const USER_LS = "currentUser"; /*?? 이거 어디서 오는거요??*/
const SHOWING_CN = "showing";

function loadName(){
    const currentUser = localStorage.getItem(USER_LS);
    if(currentUser === null) {
       //아무도 없으면 그냥 유지하면되구
    } else{
       //누가 들어와서 이름을 입력하면 인풋이 사라지것지.그리고 이름이 나타날꺼여. 그럼 그걸 펑션으로 맹글어보자
       paintGreeting();
    }
}

function paintGreeting(){
//
}

function init() {
   
}
init();

/*
const form = document.querySelector(".js-form");
const input = form.querySelector("input");
const greeting = document.querySelector(".js-greetings");

const USER_LS = "currentUser";
const SHOWING_CN = "showing";

function saveName(text){
    localStorage.setItem(USER_LS, text);
}

function handleSubmit(event){
    event.preventDefault();
    const currentValue = input.value;
    paintGreeting(currentValue);
    saveName(currentValue);
}

function askFormName(){
    form.classList.add(SHOWING_CN);
    form.addEventListener("submit", handleSubmit)
}

function paintGreeting(text){
    form.classList.remove(SHOWING_CN);
    greeting.classList.add(SHOWING_CN);
    greeting.innerText = `Hello ${text}`;
}

function loadName(){
    const currentUser = localStorage.getItem(USER_LS);
    if(currentUser === null){
        askFormName();
    } else{
        paintGreeting(currentUser);
    }
}

function init() {
    loadName();
}
init();
*/
