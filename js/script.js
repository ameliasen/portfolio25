function validateForm() {
    const name = document.getElementById("name").value;
    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const agree = document.getElementById("agree").checked;
    const nameError = document.getElementById("name-error");
    const usernameError = document.getElementById("username-error");
    const emailError = document.getElementById("email-error");
    const passwordError = document.getElementById("password-error");
    const agreeError = document.getElementById("agree-error");

    nameError.textContent = "";
    usernameError.textContent = "";
    emailError.textContent = "";
    passwordError.textContent = "";
    agreeError.textContent = "";

    let isValid = true;

    if (name === "" || /\d/.test(name)) {
        nameError.textContent = "Please enter your name properly.";
        isValid = false;
    }

    if (!/^[A-Za-z]\w{5,29}$/.test(username)) {
        usernameError.textContent = "Please enter a valid username (letters and numbers, 6-30 characters).";
        isValid = false;
    }

    if (email === "" || !email.includes("@")) {
        emailError.textContent = "Please enter a valid email address.";
        isValid = false;
    }

    if (password === "" || password.length < 6) {
        passwordError.textContent = "Please enter a password with at least 6 characters.";
        isValid = false;
    }

    if (!agree) {
        agreeError.textContent = "Please agree to the above information.";
        isValid = false;
    }

    return isValid;
}



document.addEventListener("DOMContentLoaded", function() {
    const pathName = window.location.pathname; 
    const pageName = pathName.split("/").pop();

    if (pageName === "index.html" || pageName === "") {
        document.querySelector(".home").classList.add("activeLink");
    }

    if (pageName === "about.html") {
        document.querySelector(".about").classList.add("activeLink");
    }

    if (pageName === "contact.html") {
        document.querySelector(".contact").classList.add("activeLink");
    }

    if (pageName === "project.html") {
        document.querySelector(".project").classList.add("activeLink");
    }
});





document.querySelector('.search-icon').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent default anchor behavior
    document.querySelector('.box').classList.toggle('active');
});







document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', function() {
      document.querySelector('.nav-links a.active')?.classList.remove('active');
      this.classList.add('active');
    });
  });
  