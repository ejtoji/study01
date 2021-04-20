const toDoForm = document.querySelector(".js-toDoForm");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector(".js-toDoList");
const TODOS_LS = "toDos";
let toDos = [];

function deleteTodo(event){
    const btn = event.target;
    const li = btn.parentNode;
    toDoList.removeChild(li);
    const cleanToDos = toDos.filter(function(toDo){
        //console.log(toDo.id, li.id);
        return toDo.id !== parseInt(li.id);
    })
    //console.log(cleanToDos);
    toDos = cleanToDos;
    saveToDos();
}

function saveToDos(){
    //localStorage.setItem(TODOS_LS, toDos); //localStorage에 object object로 저장이됨. 데이터를 string로으로 저장
    localStorage.setItem(TODOS_LS, JSON.stringify(toDos)); //object를 string로 바꿔줌(스토리지는 string을 받음)
}

function paintToDo(text){
    //console.log(text)
    const li = document.createElement("li");
    const delbtn = document.createElement("button");
    delbtn.value = "close";
    const span = document.createElement("span");
    span.innerText = text;
    li.appendChild(span);
    li.appendChild(delbtn);
    toDoList.appendChild(li);

    //object를 배열에 넣음. li에 id값 부여 삭제 버튼을 위해서.
    const newId = toDos.length + 1;
    li.id = newId;
    const todoObj = {
        text : text,
        id : newId
    }
    toDos.push(todoObj);
    saveToDos();

    //btn del
    delbtn.addEventListener("click", deleteTodo);
}

function handleSumit(event){
    event.preventDefault();
    const currentValue = toDoInput.value;
    paintToDo(currentValue);
    toDoInput.value = "";
}

function lodeToDos(){
    const loadedToDos = localStorage.getItem(TODOS_LS);
    if(loadedToDos !== null) {
        //console.log(loadedToDos);
        const parsedToDos = JSON.parse(loadedToDos);//string을 object로 변환
        //console.log(parsedToDos);

        //object를 보여줘야함. 지금까진 배열이 비어있음
        parsedToDos.forEach(function(toDo){
            //console.log(toDo.text);
            paintToDo(toDo.text);
        })
    } 
}

function init(){
    lodeToDos();
    toDoForm.addEventListener("submit", handleSumit)
}
init();

