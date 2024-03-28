"use strict";

const input = document.querySelector(".search");
const button = document.querySelector(".submit");
const myTasks = document.querySelector("#tasks");

const todoList = localStorage.getItem("stored")
  ? JSON.parse(localStorage.getItem("stored"))
  : [];

window.addEventListener("load", (e) => {
  e.preventDefault();

  todoList.forEach((todoItems) => {
    createTaskElements(todoItems);
  });
});

button.addEventListener("click", () => {
  let todo = input.value;
  if (!todo) {
    alert(`Please enter a todo!`);
    return;
  } else {
    todoList.push(todo);
    localStorage.setItem("stored", JSON.stringify(todoList));
  }
});

function createTaskElements(todo) {
  const task = document.createElement("div");
  task.classList.add("task");

  const taskContent = document.createElement("div");
  taskContent.classList.add("content");

  const taskInput = document.createElement("input");
  taskInput.classList.add("text");
  taskInput.type = "text";
  taskInput.value = todo;
  taskInput.setAttribute("readonly", "readonly");

  task.append(taskContent, taskInput);

  myTasks.appendChild(task);

  const taskActions = document.createElement("div");
  taskActions.classList.add("actions");

  const actionEdit = document.createElement("button");
  actionEdit.classList.add("edit");
  actionEdit.innerHTML = "Edit";

  const actionDelete = document.createElement("button");
  actionDelete.classList.add("delete");
  actionDelete.innerHTML = "Delete";

  taskActions.append(actionEdit, actionDelete);
  task.appendChild(taskActions);

  input.value = "";

  actionEdit.addEventListener("click", () => {
    if (actionEdit.innerText == "Edit") {
      taskInput.removeAttribute("readonly");
      taskInput.focus();
      actionEdit.innerHTML = "Save";
    } else {
      taskInput.setAttribute("readonly", "readonly");
      actionEdit.innerHTML = "Edit";
    }
  });

  actionDelete.addEventListener("click", () => {
    if (actionDelete.innerText == "Delete") {
      myTasks.removeChild(task);
    }
  });
}
