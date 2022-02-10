"use strict";

const btn = document.querySelector("button");

const text = document.getElementById("text");
const square = document.getElementById("square");

const logger = function (event) {
  console.log(event.type);
  square.style.backgroundColor = "yellow";
};

text.addEventListener("input", logger);

console.log(square);
