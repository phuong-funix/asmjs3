"use strict";

const inputUser = document.querySelector("#input-username");
const inputPassword = document.querySelector("#input-password");
const inputBtn = document.querySelector("#btn-submit");

let flag = true;

inputBtn.addEventListener("click", function () {
  validate();
  if (flag) {
    // check user dang nhap co trong mang userArr
    const currentUser = userArr.find(
      (user) =>
        inputUser.value === user.username &&
        inputPassword.value === user.password
    );

    if (currentUser) {
      alert("dang nhap thanh cong");
      saveToStorage("currentUser", currentUser); // luu vao storage
      window.location.href = "../index.html"; // dang nhap thanh cong ve trang index
    } else {
      alert("ten user hoac password khong dung");
    }
  }
});

// check cac truong input co rong khoong
function validate() {
  if (inputUser.value === "") {
    alert(" hay dien username");
    flag = false;
  } else if (inputPassword.value === "") {
    alert(" hay dien password");
    flag = false;
  }
  return flag;
}
