"use strict";
class User {
  constructor(firstname, lastname, username, password) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.username = username;
    this.password = password;
  }
}

class Task {
  constructor(task, owner, isDone = false) {
    this.task = task;
    this.owner = owner;
    this.isDone = isDone;
  }
}
