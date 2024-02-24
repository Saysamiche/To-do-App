"use strict";

const search = document.querySelector(".search");
const display = document.querySelector(".display");
const submitButton = document.querySelector(".submit");

submitButton.addEventListener("click", function () {
  var paragraph = document.createElement("p");
  paragraph.classList.add("styling");
  paragraph.innerText = search.value;
  display.appendChild(paragraph);
  search.value = "";
  // paragraph.addEventListener("click", function () {
  //   paragraph.style.textDecoration = "line-through";
  // });
  // paragraph.addEventListener("dblclick", function () {
  //   display.removeChild(paragraph);
  // });
});

// let search = document.querySelector('.search');
// let display = document.querySelector('.display');
// let buttonSubmit = document.querySelector('.submit');

// buttonSubmit.addEventListener('click', function (){
//   var paragraph = document.createElement('p');
//   paragraph.classList.add('styling');
//   paragraph.innerText = search.value;
//   display.appendChild(paragraph);
//   search.value = '';
  
//   paragraph.addEventListener('click', function(){
//     paragraph.style.textDecoration = "line-through";
//   })
//   paragraph.addEventListener('dblclick', function(){
//     display.removeChild(paragraph);
//   })
// })