"use strict";

const todoForm = document.querySelector("#todoForm");
const todoInput = todoForm.querySelector("input");
const todoList = document.querySelector(".todoList");
todoForm.classList.remove(HIDDEN_CLASS);

const TODOS_KEY = "todos";
const savedToDos = localStorage.getItem(TODOS_KEY);
let toDos = [];

function toDoInput(event) {
  event.preventDefault();
  const newTodo = todoInput.value; // todoListVal 변수에 저장
  todoInput.value = ""; // 변수에 저장된 값과 상관없이 빈값
  localStorage.setItem("text_help", newTodo); // 변수 내용을 로컬 스토리지에 저장
  console.log(newTodo, todoInput.value); // 콘솔로그로 저장값 확인
  ////////////
  const newTodoObj = {
    id: Date.now(),
    text: newTodo,
  };
  toDos.push(newTodoObj); // 새로 입력한 내용을 newTodo 뒤에 추가한다.
  paintToDo(newTodoObj); // 요소에 추가 함수를 실행
  saveToDos(newTodo); // 로컬 스토리지에 배열로 저장
}

todoForm.addEventListener("submit", toDoInput);

function paintToDo(newTodo) {
  const li = document.createElement("li");
  li.id = newTodo.id;
  const span = document.createElement("span");
  const button = document.createElement("button");
  li.appendChild(span);
  li.appendChild(button);
  span.innerText = newTodo.text;
  button.innerText = " X ";
  todoList.append(li);
  button.addEventListener("click", deleteTodo);
}

function deleteTodo(event) {
  const li = event.target.parentElement;
  li.remove();
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
  saveToDos();
}

function saveToDos() {
  // 로컬스토리지를 배열로 변경
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

if (savedToDos !== null) {
  const pasredToDos = JSON.parse(savedToDos);
  toDos = pasredToDos;
  pasredToDos.forEach(paintToDo);
}
