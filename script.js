const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const nameError = document.getElementById("name-error");
const emailError = document.getElementById("email-error");

function validateName() {
  if (nameInput.value.trim() === "") {
    nameError.textContent = "Name cannot be empty.";
    nameError.style.display = "block";
  } else {
    nameError.style.display = "none";
  }
}

function validateEmail() {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (emailInput.value.trim() === "") {
    emailError.textContent = "Email cannot be empty.";
    emailError.style.display = "block";
  } else if (!emailPattern.test(emailInput.value.trim())) {
    emailError.textContent = "Invalid email format.";
    emailError.style.display = "block";
  } else {
    emailError.style.display = "none";
  }
}

nameInput.addEventListener("input", validateName);
emailInput.addEventListener("input", validateEmail);

document.getElementById("signup-form").addEventListener("submit", function (event) {
  event.preventDefault();
  validateName();
  validateEmail();

  if (!nameError.style.display && !emailError.style.display) {
    alert("Thank you for subscribing!");
    nameInput.value = "";
    emailInput.value = "";
  }
});
