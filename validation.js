const form = document.getElementById("form");
const email = document.getElementById("email");
const password = document.getElementById("password");
const passwordConfirm = document.getElementById("pw-confirm");
const submit = document.getElementById("submit");
const emailError = document.querySelector("#email + span.error");
const passwordError = document.querySelector("#password + span.error");
const passwordConfirmError = document.querySelector("#pw-confirm + span.error");

email.addEventListener("input", (event) => {
    if (email.validity.valid) {
        emailError.textContent = "";
        email.className = "";
    }else {
        showError("email");
    }
});

password.addEventListener("input", (event) => {
    if (password.validity.valid) {
        passwordError.textContent = "";
        password.className = "";
    }else {
        showError("password");
    }
});

passwordConfirm.addEventListener("input", (event) => {
    if (passwordConfirm.value == password.value) {
        passwordConfirmError.textContent = "";
        passwordConfirm.className = "";
    }else {
        showError("pw-confirm");
    }
});

submit.addEventListener("click", (event) => {
    if (!email.validity.valid) {
        showError("email");
        event.preventDefault();
    }else if (!password.validity.valid) {
        showError("password");
        event.preventDefault();
    }else if (!passwordConfirm.validity.valid) {
        showError("pw-confirm");
        event.preventDefault();
    }
});

function showError(input) {
    if (input == "email") {
        if (email.validity.valueMissing) {
            emailError.textContent = "Please enter an email address."
        }else if (email.validity.typeMismatch) {
            emailError.textContent = "Please enter a valid email address."
        }
        email.className = "invalid";
    }else if (input == "password") {
        if (password.validity.valueMissing) {
            passwordError.textContent = "Please enter a password."
        }else if (password.validity.tooShort) {
            passwordError.textContent = "Your password should be at least 8 characters long."
        }
        password.className = "invalid";
    }else if (input == "pw-confirm") {
        passwordConfirmError.textContent = "Please make sure passwords match.";
        if (passwordConfirm.validity.valueMissing) {
            passwordConfirmError.textContent = "Please confirm your password."
        }
        passwordConfirm.className = "invalid";
    }
    
}