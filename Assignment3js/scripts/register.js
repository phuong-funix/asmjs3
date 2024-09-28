"use strict";

const form = document.querySelector(".container form");
const inputFirstName = document.querySelector("#input-firstname");
const inputLastName = document.querySelector("#input-lastname");
const inputUserName = document.querySelector("#input-username");
const inputPassWord = document.querySelector("#input-password");
const inputPassWordConfirm = document.querySelector("#input-password-confirm");
const inputBtn = document.querySelector("#btn-submit");

let flag = true;

// bat su kien click submit
inputBtn.addEventListener("click", function () {
  const user = new User(
    inputFirstName.value,
    inputLastName.value,
    inputUserName.value,
    inputPassWord.value,
    inputPassWordConfirm.value
  );
  validate();

  console.log(userArr);

  if (flag) {
    userArr.push(user);
    saveToStorage("userArr", userArr); // luu vao storage
    window.location.href = "../pages/login.html"; // khi dang ki thanh cong thi chuyen qua trang login
  }
});

// kiem tra cac truong input
function validate() {
  if (
    inputFirstName.value === "" ||
    inputLastName.value === "" ||
    inputUserName.value === "" ||
    inputPassWord.value === "" ||
    inputPassWordConfirm.value === ""
  ) {
    alert("hay dien day du");
    flag = false;
  } else if (inputPassWord.value !== inputPassWordConfirm.value) {
    alert(" confirm password chua dung");
    flag = false;
  } else if (inputPassWord.value.length <= 8) {
    alert("password phai co it nhat 8 ki tu");
    flag = false;
  }
  // check ten user da ton tai chua
  for (let i = 0; i < userArr.length; i++) {
    if (inputUserName.value === userArr[i].username) {
      alert("username da ton tai");
      flag = false;
    }
  }
  return flag;
}
