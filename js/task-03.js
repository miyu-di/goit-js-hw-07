'use strict';

const usernameInput = document.querySelector("#name-input");
const usernameSpan = document.querySelector("#name-output")

usernameInput.addEventListener("change", (event) => {
    const username = usernameInput.value.trim();
    usernameSpan.innerHTML = username;

    usernameSpan.textContent = username === "" ? "Anonymous" : username;
});
