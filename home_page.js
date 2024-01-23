// var cards = document.querySelectorAll(".cards");
// for (var i = 0; i < cards.length; i++) {
//   cards[i].addEventListener(
//     "click",
//     function (e) {
//       var link = this.querySelector(".place-card");
//       link.click();
//     },
//     false
//   );
// }

document.getElementById("ksd").addEventListener("click", function (event) {
  window.location.href = "./district/kasaragod.html";
  event.preventDefault();
});

document.getElementById("knr").addEventListener("click", function (event) {
  window.location.href = "./district/kannur.html";
  event.preventDefault();
});
document.getElementById("kzkd").addEventListener("click", function (event) {
  window.location.href = "./district/kozhikode.html";
  event.preventDefault();
});

document.getElementById("wynd").addEventListener("click", function (event) {
  window.location.href = "./district/wayanad.html";
  event.preventDefault();
});
document.getElementById("mlpm").addEventListener("click", function (event) {
  window.location.href = "./district/malappuram.html";
  event.preventDefault();
});
document.getElementById("plkd").addEventListener("click", function (event) {
  window.location.href = "./district/palakkad.html";
  event.preventDefault();
});

document.getElementById("kochi").addEventListener("click", function (event) {
  window.location.href = "./district/kochi.html";
  event.preventDefault();
});
document.getElementById("trsur").addEventListener("click", function (event) {
  window.location.href = "./district/thrissur.html";
  event.preventDefault();
});

document.getElementById("idki").addEventListener("click", function (event) {
  window.location.href = "./district/idukki.html";
  event.preventDefault();
});
document.getElementById("pthita").addEventListener("click", function (event) {
  window.location.href = "./district/pathanamthitta.html";
  event.preventDefault();
});
document.getElementById("klm").addEventListener("click", function (event) {
  window.location.href = "./district/kollam.html";
  event.preventDefault();
});

document.getElementById("alpzha").addEventListener("click", function (event) {
  window.location.href = "./district/alappuzha.html";
  event.preventDefault();
});
document.getElementById("ktym").addEventListener("click", function (event) {
  window.location.href = "./district/kottayam.html";
  event.preventDefault(0);
});

document.getElementById("tvm").addEventListener("click", function (event) {
  window.location.href = "./district/tvm.html";
  event.preventDefault();
});

//============Registration Form========

// signup authentication

const formsignup = document.getElementById("signupForm");
const username = document.getElementById("uname");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("confirmpassword");

formsignup.addEventListener("submit", (e) => {
  e.preventDefault();

  signupInputs();
});

const setError = (element, message) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".error");

  errorDisplay.innerText = message;
  inputControl.classList.add("error");
  inputControl.classList.remove("success");
};

const setSuccess = (element) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".error");

  errorDisplay.innerText = "";
  inputControl.classList.add("success");
  inputControl.classList.remove("error");
};

const isValidEmail = (email) => {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0.9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return re.test(String(email).toLowerCase());
};

const signupInputs = () => {
  const usernameValue = username.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();
  const passwordValue2 = password2.value.trim();

  if (usernameValue === "") {
    setError(username, "Username is required");
  } else {
    setSuccess(username);
  }

  if (emailValue === "") {
    setError(email, "Email is required");
  } else if (!isValidEmail(emailValue)) {
    setError(email, "Provide a valid email address");
  } else {
    setSuccess(email);
  }

  if (passwordValue === "") {
    setError(password, "Password is required");
  } else if (passwordValue.length < 6) {
    setError(password, "Password must be at least 6 characters");
  } else {
    setSuccess(password);
  }

  if (passwordValue2 === "") {
    setError(password2, "Please confirm your password");
  } else if (passwordValue2 !== passwordValue) {
    setError(passwordValue2, "Passwords doesn't match");
  } else {
    setSuccess(password2);
  }
};

//login authentication

const formlogin = document.getElementById("loginForm");
const emaillogin = document.getElementById("logemail");
const passwordlogin = document.getElementById("logpassword");

formlogin.addEventListener("submit", (e) => {
  e.preventDefault();

  loginInputs();
});

const loginInputs = () => {
  const loginemail = emaillogin.value.trim();
  const loginpassword = passwordlogin.value.trim();

  if (loginemail === "") {
    setError(emaillogin, "Email is required");
  } else if (!isValidEmail(loginemail)) {
    setError(emaillogin, "Provide a valid email address");
  } else {
    setSuccess(emaillogin);
  }

  if (loginpassword === "") {
    setError(passwordlogin, "Password is required");
  } else if (passwordlogin.length < 6) {
    setError(passwordlogin, "Password must be at least 6 characters");
  } else {
    setSuccess(passwordlogin);
  }
};
