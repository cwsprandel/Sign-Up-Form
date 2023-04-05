const passwordInput = document.getElementById("password_input")
const passwordCheck = document.getElementById("password_confirm")
const passwordNote = document.getElementById("password_note")

passwordCheck.addEventListener("input", checkPassword);
passwordInput.addEventListener("input", checkPassword);

function checkPassword() {
    if (passwordInput.value !== passwordCheck.value) {
        passwordNote.textContent = "*Passwords do not match";
        passwordCheck.style.borderColor = "red";
        passwordCheck.style.boxShadow = "2px 2px 1px rgba(255, 0, 0, .5)";
        passwordInput.style.borderColor = "red";
        passwordInput.style.boxShadow = "2px 2px 1px rgba(255, 0, 0, .5)";
    } else {
        passwordNote.textContent = "";
        passwordCheck.style.border = "1px solid lightgrey";
        passwordCheck.style.boxShadow = "none";
        passwordInput.style.border = "1px solid lightgrey";
        passwordInput.style.boxShadow = "none";
    }
}
