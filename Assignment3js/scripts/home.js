"use strict";
const blockModal = document.querySelector("#login-modal");
const mainContent = document.querySelector("#main-content");
const inputLogout = document.querySelector("#btn-logout");
const textWelcome = document.querySelector("#welcome-message");

console.log(currentUser);
homePage();
function homePage() {
  if (currentUser) {
    blockModal.style.display = "none";
    textWelcome.textContent = `Welcome ${currentUser.username}`;
  } else {
    mainContent.style.display = "none";
  }
}

inputLogout.addEventListener("click", function () {
  const Confirm = confirm("Ban co chac logout");
  if (Confirm) {
    localStorage.removeItem("currentUser");
    window.location.href = "./index.html";
  }
});
