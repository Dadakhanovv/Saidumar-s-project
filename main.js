const loginEl = document.getElementById("login");
const passwordEl = document.getElementById("password");
const firstPageBtn = document.getElementById("first-page-btn");
const nameEl = document.getElementById("name");
const numberEl = document.getElementById("number");
const signInEl = document.getElementById("sign-in");

firstPageBtn.addEventListener("click", function () {
  const loginValue = loginEl.value;
  const passwordValue = passwordEl.value;
  const nameValue = nameEl.value;
  const numberValue = numberEl.value;

  localStorage.setItem("loginElValue", loginValue);
  localStorage.setItem("passwordElValue", passwordValue);
  localStorage.setItem("nameElValue", nameValue);
  localStorage.setItem("numberElValue", numberValue);

  window.location.href = "student-panel.html";
});

signInEl.addEventListener("click", function (){
  window.location.href = "sign-in.html";
})