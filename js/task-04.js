'use strict';

const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
    event.preventDefault();
    const email = loginForm.elements.email.value;
    const password = loginForm.elements.password.value;

    if (email === "" || password === "") {
        return window.alert('All form fields must be filled in');
    }  

    const formData = {
        email: email,
        password: password
    };   

    console.log(formData);
    loginForm.reset();
}


    