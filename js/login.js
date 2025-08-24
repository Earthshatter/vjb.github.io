"use strict";
const loginForm = document.querySelector("#loginForm");
const loginInput = loginForm.querySelector("input");
const loginSubmit = loginForm.querySelector("button");
const userName = document.querySelector(".title_font");

const USERNAME_CLASS = "username";
const HIDDEN_CLASS = "hidden";

// 로그인 폼 숨김
loginForm.classList.remove(HIDDEN_CLASS);

// 로컬스토리지 저장 확인
const saveName = localStorage.getItem(USERNAME_CLASS);

// 자주 사용?
function userNameInfo(username) {
  loginForm.classList.add(HIDDEN_CLASS);
  userName.innerHTML = `만나서 반가워요! <span>${username}~</span>`;
}

// username이 있다면 로그인 폼 숨김
if (saveName) {
  userNameInfo(saveName);
}

function onLoginBtn(event) {
  event.preventDefault();
  const inputName = loginInput.value;
  if (!inputName) {
    alert("누구인지 알려주세요");
    loginInput.focus();
  } else {
    localStorage.setItem(USERNAME_CLASS, inputName);
    userNameInfo(inputName);
  }
}

loginForm.addEventListener("submit", onLoginBtn);
