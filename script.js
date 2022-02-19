"use strict";

const btn = document.getElementById("btn");

const square = document.getElementById("square");

const rangeElem = document.getElementById("range");

const circle = document.getElementById("circle");

const rangeSpan = document.getElementById("range-span");

circle.style.width = rangeElem.value;

btn.addEventListener("click", function () {
  let text = document.getElementById("text").value;
  document.getElementById("square").style.backgroundColor = text;
});

document.getElementById("e_btn").style.display = "none";

function circleSize() {
  rangeSpan.textContent = rangeElem.value + "%";
  circle.style.width = rangeElem.value + "%";
  circle.style.height = rangeElem.value + "%";
}
circleSize();

rangeElem.addEventListener("input", circleSize);

console.log(rangeSpan);
console.log(window.getComputedStyle(circle).width);
console.log(circle);

console.log(btn);
console.log(square);
console.log(rangeElem);
