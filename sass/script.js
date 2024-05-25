const form = document.getElementById("form-content");
const fields = document.querySelectorAll(".required");
const spans = document.querySelectorAll(".span-required");
const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const celRegex = /\(\d\d\)\s\d\d\d\d\d-\d\d\d\d/;
const passwordRegex =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&#])[A-Za-z\d$@$!%*?&#]{8,}/;

form.addEventListener("submit", (event) => {
  event.preventDefault();
  validatingName();
  validatingSurname();
  validatingEmail();
  validatingWhatsApp();
  validatingMainPassword();
  comparePassword();
  if (Array.from(spans).every((span) => span.style.display === "none")) {
    openPopup();
  }
});

function setError(index) {
  spans[index].style.display = "block";
}

function removeError(index) {
  spans[index].style.display = "none";
}

function validatingName() {
  if (fields[0].value.length >= 1) {
    removeError(0);
  } else {
    setError(0);
  }
}

function validatingSurname() {
  if (fields[1].value.length >= 1) {
    removeError(1);
  } else {
    setError(1);
  }
}

function validatingEmail() {
  if (emailRegex.test(fields[2].value)) {
    removeError(2);
  } else {
    setError(2);
  }
}

function validatingWhatsApp() {
  if (celRegex.test(fields[3].value)) {
    removeError(3);
  } else {
    setError(3);
  }
}

function validatingMainPassword() {
  if (passwordRegex.test(fields[4].value)) {
    removeError(4);
    comparePassword();
  } else {
    setError(4);
  }
}

function comparePassword() {
  if (
    passwordRegex.test(fields[4].value) === passwordRegex.test(fields[5].value)
  ) {
    removeError(5);
  } else {
    setError(5);
  }
}

let readPassword = document.getElementById("password");
let show = document.getElementById("eye");
function showPassword() {
  if (readPassword.type === "password") {
    readPassword.setAttribute("type", "text");
    show.classList.replace("bi-eye", "bi-eye-slash");
  } else {
    readPassword.setAttribute("type", "password");
    show.classList.replace("bi-eye-slash", "bi-eye");
  }
}

let readPassConfirmed = document.getElementById("confirmpassword");
let showPassConfirmed = document.getElementById("eye-slash");
function showPasswordConfirmed() {
  if (readPassConfirmed.type === "password") {
    readPassConfirmed.setAttribute("type", "text");
    showPassConfirmed.classList.replace("bi-eye", "bi-eye-slash");
  } else {
    readPassConfirmed.setAttribute("type", "password");
    showPassConfirmed.classList.replace("bi-eye-slash", "bi-eye");
  }
}
let popup = document.getElementById("popup");

function openPopup() {
  popup.classList.add("active");
}

function closePopup() {
  popup.classList.remove("active");
  for (let i = 0; i < fields.length; i++) {
    fields[i].value = "";
  }
}
