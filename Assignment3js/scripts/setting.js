"use strict";
const newsPageInput = document.querySelector("#input-page-size");
const newsCategoryInput = document.querySelector("#input-category");
const btnSubmit = document.querySelector("#btn-submit");

// check da dang nhap chua
if (currentUser === null) {
  alert("ban can dang nhap");
  window.location.href = "../index.html";
}

// kiêm tra du lieu da  co  chua  neu  chua  co  thi  gan  mac  dinh

if (newsSetting[currentUser.username]) {
  newsPageInput.value = Number(newsSetting[currentUser.username].pagesize);
  newsCategoryInput.value = newsSetting[currentUser.username].category;
} else {
  newsPageInput.value = 5;
  newsCategoryInput.value = "General";
}

// lấy dữ  liệu  từ  input  luu  xuong  storage
btnSubmit.addEventListener("click", function () {
  const pagesize = Math.round(newsPageInput.value);
  const category = newsCategoryInput.value;
  if (!pagesize || !category || pagesize <= 0) {
    alert("ban can nhap day du");
  }
  newsSetting[currentUser.username] = { pagesize, category };
  saveToStorage(newsSettingKey, newsSetting);

  location.reload();
});
