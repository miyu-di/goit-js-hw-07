'use strict';

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function changeBackgroundColor() {
  const body = document.querySelector("body");
  const color = document.querySelector(".color");

  const randomColor = getRandomHexColor();
  body.style.backgroundColor = randomColor;
  color.textContent = randomColor;
}

const changeBtn = document.querySelector(".change-color");
changeBtn.addEventListener("click", changeBackgroundColor);