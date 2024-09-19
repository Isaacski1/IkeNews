// Form validation error message
const nameError = document.getElementById("name-error");
const emailError = document.getElementById("email-error");
const websiteError = document.getElementById("website-error");
const subjectError = document.getElementById("subject-error");
const messageError = document.getElementById("message-error");
const submitError = document.getElementById("submit-error");
const userNameError = document.getElementById("user-name-error");
const passwordError = document.getElementById("password-error");

// Name Validation Message
function validateName() {
  const name = document.getElementById("contact-name").value;
  // Conditional Statement
  if (name.length == 0) {
    nameError.innerHTML = "Name is required";
    return false;
  }

  if (!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {
    nameError.innerHTML = "<i class='wrong bx bxs-x-circle'></i>";
    return false;
  }

  nameError.innerHTML = "<i class='correct bx bxs-check-circle'></i>";
  return true;
}

// Email Validate Message
function validateEmail() {
  const email = document.getElementById("contact-email").value;

  // Conditional Statement
  if (email.length == 0) {
    emailError.innerHTML = "Email is required";
    return false;
  }

  if (!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{3}$/)) {
    emailError.innerHTML = "<i class='wrong bx bxs-x-circle'></i>";
    return false;
  }

  emailError.innerHTML = "<i class='correct bx bxs-check-circle'></i>";
  return true;
}

// Validate Error Message
function validateMessage() {
  const message = document.getElementById("contact-message").value;
  const required = 30;
  const remaining = required - message.length;

  // Conditional Statement
  if (remaining > 0) {
    messageError.innerHTML = remaining + " More characters required";
    return false;
  }

  messageError.innerHTML = "<i class='correct bx bxs-check-circle'></i>";
  return true;
}

// Submit Validation Message
function validateSubmit() {
  // Conditional Message
  if (!validateName() || !validateEmail() || !validateMessage()) {
    submitError.style.display = "block";
    submitError.innerHTML = "Please fix all errors";
    setTimeout(function () {
      submitError.style.display = "none";
    }, 3000);
    return false;
  }
}

// Subject Validation Message
function validateSubject() {
const subject = document.getElementById("contact-subject").value;
// Condtional Statement
if (subject.length == 0) {
  subjectError.innerHTML = "Enter your subject";
  return false;
}

if (!subject.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {
  subjectError.innerHTML = "<i class='wrong bx bxs-x-circle'></i>";
  return false;
}

subjectError.innerHTML = "<i class='correct bx bxs-check-circle'></i>";
return true;
}

// User name Validation Messgae
function validateUserName() {
  const userName = document.getElementById("contact-userName").value;

  // Conditional Statements
  if (userName.length == 0) {
    userNameError.innerHTML = "Username is required";
    return false;
  }

  if (!userName.match(/^[A-Za-z[0-9]*$/)) {
    userNameError.innerHTML = "<i class='wrong bx bxs-x-circle'></i>";
    return false;
  }

  userNameError.innerHTML = "<i class='correct bx bxs-check-circle'></i>";
  return true;
}

// Password Validation Message
function validatePassword() {
  const password = document.getElementById("contact-password").value;
  const minLength = 6;
  const hasUpperCase = /[A-Z]/.test(password);
  const hasNumber = /\d/.test(password);

  // Conditional Statements
  if (password.length == 0) {
    passwordError.innerHTML = "Password is required";
    return false;
  }

  if (password.length < minLength) {
    passwordError.innerHTML = "at least 6 characters long.";
    return false;
  }

  if (!hasUpperCase) {
    passwordError.innerHTML = "at least one uppercase letter.";
    return false;
  }

  if (!hasNumber) {
    passwordError.innerHTML = "at least one number.";
    return false;
  }

  passwordError.innerHTML = "<i class='correct bx bxs-check-circle'></i>";
  return true;
}

// To Top
const goTopBtn = document.querySelector("[data-go-top]");
window.addEventListener("scroll", function () {
  window.scrollY >= 500
    ? goTopBtn.classList.add("active")
    : goTopBtn.classList.remove("active");
});