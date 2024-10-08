"use strict";

// Ham lay va luu data tu Storage
function getFromStorage(key, defaultVal) {
  return JSON.parse(localStorage.getItem(key)) ?? defaultVal;
}

function saveToStorage(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

const KEY = "userArr";
const userObjArr = getFromStorage(KEY) || [];
console.log(userObjArr);

const userArr = userObjArr.map((user) => parseUser(user));
console.log(userArr);

function parseUser(userData) {
  const user = new User(
    userData.firstname,
    userData.lastname,
    userData.username,
    userData.password
  );
  return user;
}

const currentUser = getFromStorage("currentUser")
  ? parseUser(getFromStorage("currentUser"))
  : null;

const todoObjArr = getFromStorage("todoArr") || [];
console.log(todoObjArr);

const todoArr = todoObjArr.map((todo) => parseToDoList(todo));
console.log(todoArr);

function parseToDoList(todoData) {
  const todo = new Task(todoData.task, todoData.owner, todoData.isDone);
  return todo;
}

const newsSettingKey = "newsSetting";
const newsSetting = getFromStorage(newsSettingKey) || {};
console.log(newsSetting);

let isSetting = false;
