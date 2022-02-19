"use strict";

const btn = document.getElementById("btn");

const square = document.getElementById("square");

const rangeElem = document.getElementById("range");

const circle = document.getElementById("circle");

const rangeSpan = document.getElementById("range-span");

circle.style.width = rangeElem.value;
// circle.style.height = "100%";

// const toggler = function (event) {
//   event.target.classList.toggle("green");
// };

// const logger = function (event) {
//   console.dir(event.target.value);
//   btn.textContent = event.target.value;
// };

btn.addEventListener("click", function () {
  let text = document.getElementById("text").value;
  document.getElementById("square").style.backgroundColor = text;
});

document.getElementById("e_btn").style.display = "none";

function myFunc() {
  rangeSpan.textContent = rangeElem.value + "%";
  circle.style.width = rangeElem.value + "%";
  circle.style.height = rangeElem.value + "%";
}
myFunc();

rangeElem.addEventListener("input", myFunc); //{
// let inputRange = document.getElementById("range").value;
// document.getElementById("circle").style.width = rangeElem.value;
// circle.style.width = rangeElem.value + "%";
// circle.style.height = rangeElem.value + "%";
// document.getElementById("circle").style.width = range;
// rangeSpan.textContent = rangeElem.value + "%";
// });
// rangeSpan.textContent = rangeElem.value + "%";

console.log(rangeSpan);
console.log(window.getComputedStyle(circle).width);
console.log(circle);
// let onButtonClick = function () {
//   btn.textContent = "жопа";
// };

// btn.addEventListener("click", onButtonClick);

// text.addEventListener("input", logger);
// square.addEventListener("click", toggler);

// function myFunc() {
//   let text = document.getElementById("text").value;
//   document.getElementById("text-span").innerHTML = text;
// }

console.log(btn);
console.log(square);
console.log(rangeElem);
