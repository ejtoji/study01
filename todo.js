const todoForm = document.querySelector(".js-todoform");
const todoInput = todoForm.querySelector(".todoinput");
const todoList = document.querySelector(".js-todolist");

const list_LS = "todolist";

const todos = [];

function paintTodo(text){
    //console.log(text)
    const list = document.createElement("li");
    const delbtn = document.createElement("button");
    const span = document.createElement("span");
    delbtn.value = "close";
    span.innerText = text;
    list.appendChild(span);
    list.appendChild(delbtn);
    todoList.appendChild(list);
    const todoObj = {
        text : text,
        id : todos.length + 1
    }
    todos.push(todoObj);
}

function handleSumit(event){
    event.preventDefault();
    const currentValue = todoInput.value;
    paintTodo(currentValue);
}

function lodeTodo(){
    const toDos = localStorage.getItem(list_LS);
    if(toDos === null) {
        
    } 
}

function init2(){
    lodeTodo();
    todoForm.addEventListener("submit", handleSumit)
}
init2();