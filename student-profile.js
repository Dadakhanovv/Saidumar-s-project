let moverEl = document.getElementById("mover");
let mainProfileIdEl = document.getElementById("main-profile-id");

moverEl.addEventListener("click", function () {
  window.location.href = "student-panel.html";
});

let student = JSON.parse(sessionStorage.getItem("firstPageBtn"));

mainProfileIdEl.innerHTML = `
 <li class="main-profile__list-item">
                <span>Name</span>
                <br />
                ${localStorage.nameElValue}
              </li>
              <li class="main-profile__list-item">
                <span>Email</span>
                <br />
                ${localStorage.loginElValue}
              </li>
              <li class="main-profile__list-item">
                <span>Phone</span>
                <br />
                ${localStorage.numberElValue}
              </li>
              <li class="main-profile__list-item">
                <span>Date admission</span>
                <br />
                08-Dec, 2021
              </li>
`;

let nimaGapEl = document.getElementById("nima-gap");
nimaGapEl.innerHTML = `
 <h1 id="nima-gap" class="menu__intro-title">${localStorage.nameElValue}</h1>
`;

let tinchOzindaNimaGapEl = document.getElementById("tinch-ozinda-nima-gap");
tinchOzindaNimaGapEl.innerHTML = `
 <h3 id="nima-gap" class="menu__intro-title">${localStorage.nameElValue}</h3>
`;
