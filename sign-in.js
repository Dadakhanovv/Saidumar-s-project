const loginEl = document.getElementById("login");
const passwordEl = document.getElementById("password");
const secondPageUnderBtn = document.getElementById("second-page-under-btn");
const secondPageBtn = document.getElementById("second-page-btn");

secondPageUnderBtn.addEventListener("click", function () {
  window.location.href = "index.html";
});

secondPageBtn.addEventListener("click", function () {
  const loginValue = loginEl.value;
  const passwordValue = passwordEl.value;
  localStorage.setItem("loginElValue", loginValue);
  localStorage.setItem("passwordElValue", passwordValue);
  
  window.location.href = "student-panel.html";
});
