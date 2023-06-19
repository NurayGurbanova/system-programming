var todoInput = document.getElementById("todo-input");
var addButton = document.getElementById("add-button");
var todoList = document.getElementById("todo-list");

addButton.addEventListener("click", addTodo);

function addTodo() {
  var todoText = todoInput.value.trim();

  if (todoText !== "") 
  {
    var listItem = document.createElement("li");
    listItem.innerText = todoText;

    listItem.addEventListener("click", toggleCompleted);

    todoList.appendChild(listItem);

    todoInput.value = "";
  }
}

function toggleCompleted() 
{
  this.classList.toggle("completed");
}

