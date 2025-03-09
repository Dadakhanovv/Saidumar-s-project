// let searchElement = document.querySelectorAll("ul a");
// function searchFunction(inpValue) {
//   searchElement.forEach((name) => {
//     if (name.textContent.toLowerCase().includes(inpValue.value.toLowerCase())) {
//       name.style.display = "block";
//     } else {
//       name.style.display = "none";
//     }
//   });
// }

const logoutBtnEl = document.getElementById("logout-btn");

logoutBtnEl.addEventListener("click", function () {
  window.location.href = "index.html";
});

let student = JSON.parse(sessionStorage.getItem("firstPageBtn"));
let studentUI = document.getElementById("student-profile");

studentUI.addEventListener("click", function () {
  window.location.href = "student-profile.html";
});

studentUI.innerHTML = `
<img
  class="card__img"
  src="./assets/images/menu__intro-img.png"
  alt=""
/>
<p>${localStorage.nameElValue}</p>
<p class="second">${localStorage.loginElValue}</p>
<p class="third">${localStorage.numberElValue}</p>
<p class="fivth">08-Dec, 2021</p>
`;


let nimaGapEl = document.getElementById("nima-gap");

nimaGapEl.innerHTML = `
 <h3 id="nima-gap" class="menu__intro-title">${localStorage.nameElValue}</h3>
`