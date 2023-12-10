'use strict';

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const inputAmount = document.querySelector("#controls input"); 
const btnCreate = document.querySelector("[data-create]")
const btnDestroy = document.querySelector("[data-destroy]")
const newBoxes = document.querySelector("#boxes")

function createBoxes(amount) {
  if (amount <= 100) {
    newBoxes.innerHTML = '';

    for (let i = 0; i < amount; i++) {
      const newElements = document.createElement('div');
      newElements.classList.add('newElements');
      newElements.style.width = `${30 + i * 10}px`;
      newElements.style.height = `${30 + i * 10}px`;
      newElements.style.backgroundColor = getRandomHexColor();
      newBoxes.appendChild(newElements);
    }
  }
  
}

btnCreate.addEventListener("click", () => {
  const amount = inputAmount.value;
  createBoxes(amount);
  inputAmount.value = '';
});

btnDestroy.addEventListener("click", () => {
newBoxes.innerHTML = ""
})
