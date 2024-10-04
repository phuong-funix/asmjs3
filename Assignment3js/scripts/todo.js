"use strict";
const inputTask = document.querySelector("#input-task");
const btnAdd = document.querySelector("#btn-add");
const todoList = document.querySelector("#todo-list");
let flag = true;
// check da dang nhap chua
if (currentUser === null) {
  alert("ban can dang nhap");
  window.location.href = "../index.html";
}

// bat su kien nut add
btnAdd.addEventListener("click", function () {
  const todo = new Task(inputTask.value, currentUser.username, false);
  todoArr.push(todo);

  displayTodo();
  saveToStorage("todoArr", todoArr);
  inputTask.value = "";
});

// hien thi list todo
const displayTodo = function () {
  let listTodo = "";
  todoArr
    .filter((user) => currentUser.username === user.owner)
    .forEach((element, idx) => {
      listTodo += `<li onclick="toggle('${idx}')" class="${
        element.isDone ? "checked" : ""
      }">${element.task}<span class="close" onclick="deleteTodo('${
        element.task
      }')">×</span></li>`;
    });

  todoList.innerHTML = listTodo;
};
displayTodo();

// bat su kien dau X
function deleteTodo(todo) {
  if (confirm("Are you sure ?")) {
    for (let i = 0; i < todoArr.length; i++) {
      if (todoArr[i].task === todo) {
        todoArr.splice(i, 1);
      }
    }
  }
  displayTodo();
  saveToStorage("todoArr", todoArr);
  flag = false;
  setTimeout(() => {
    flag = true;
  }, 1000);
}

function toggle(id) {
  if (flag) {
    const todos = document.querySelectorAll("#todo-list li");
    todoArr[id].isDone = !todoArr[id].isDone;
    todos[id].classList.toggle("checked");
    saveToStorage("todoArr", todoArr);
  }
}
