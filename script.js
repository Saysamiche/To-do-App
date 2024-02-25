"use strict";

window.addEventListener("load", () => {
  const form = document.querySelector(".container");
  const input = document.querySelector(".search");
  const list_el = document.querySelector("#tasks");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const task = input.value;

    if (!task) {
      alert("please input a to do!");
      return;
    }

    const task_el = document.createElement("div");
    task_el.classList.add("task");

    const task_content_el = document.createElement("div");
    task_content_el.classList.add("content");

    // task_content_el.innerText = task;

    task_el.appendChild(task_content_el);

    const task_input_el = document.createElement("input");
    task_input_el.classList.add("text");
    task_input_el.type = "text";
    task_input_el.value = task;
    task_input_el.setAttribute("readonly", "readonly");

    task_content_el.appendChild(task_input_el);

    const task_actions_el = document.createElement("div");
    task_actions_el.classList.add("actions");

    const task_edit_el = document.createElement("button");
    task_edit_el.classList.add("edit");
    task_edit_el.innerHTML = "Edit";

    const task_delete_el = document.createElement("button");
    task_delete_el.classList.add("delete");
    task_delete_el.innerHTML = "Delete";

    task_actions_el.appendChild(task_edit_el);
    task_actions_el.appendChild(task_delete_el);

    task_el.appendChild(task_actions_el);

    list_el.appendChild(task_el);

    input.value = "";

    task_edit_el.addEventListener("click", () => {
      if (task_edit_el.innerText == "Edit") {
        task_input_el.removeAttribute("readonly");
        task_input_el.focus();
        task_edit_el.innerText = "Save";
      } else {
        task_input_el.setAttribute("readonly", "readonly");
        task_edit_el.innerText = "Edit";
      }
    });

    task_delete_el.addEventListener("click", () => {
      list_el.removeChild(task_el);
    });
  });
});

// const search = document.querySelector(".search");
// const display = document.querySelector(".display");
// const submitButton = document.querySelector(".submit");
// const edit = document.querySelector('.edit');
// const delBtn = document.querySelector('.delete');

// submitButton.addEventListener("click", function () {
//   var paragraph = document.createElement("p");
//   paragraph.classList.add("styling");
//   paragraph.innerText = search.value;
//   display.appendChild(paragraph);
//   search.value = "";

//   edit.addEventListener('click', function(){
//     search.value = paragraph.innerText;
//   })

//   delBtn.addEventListener('click', function(){
//     paragraph.innerText = '';
//   })
//   // paragraph.addEventListener("click", function () {
//   //   paragraph.style.textDecoration = "edit";
//   // });
//   // paragraph.addEventListener("dblclick", function () {
//   //   display.removeChild(paragraph);
//   // });

//   // if(search.value !== '') {
//   //   const newList = document.createElement('li');
//   //   newList.classList.add("styling");
//   //   newList.innerText = search.value;
//   //   display.appendChild(newList);
//   //   newList.appendChild(edit).search.value;
//   //   newList.appendChild(delBtn);
//   //   search.value = '';

//   // }

//   // edit.innerHTML = <button class="submit edit">Edit</button>;
//   // delBtn.innerHTML= <button class="submit delete">Delete</button>;

// });
