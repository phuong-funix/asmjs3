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
