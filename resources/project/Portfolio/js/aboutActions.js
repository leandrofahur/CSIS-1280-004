const blink = document.querySelector("#blink");
const button = document.querySelector(".btn");
const frontModalButton = document.querySelector("#front-modal-button");
const frontModal = document.querySelector(".front-modal");
const displayFrontModal = document.querySelector("#display-front-modal");

const backModal = document.querySelector(".back-modal");
const displayBackModal = document.querySelector("#display-back-modal");
const backModalButton = document.querySelector("#back-modal-button");

frontModal.style.display = "none";
backModal.style.display = "none";

frontModalButton.addEventListener("click", (e) => {
  e.preventDefault();
  frontModal.style.display = "none";
});

displayFrontModal.addEventListener("click", (e) => {
  e.preventDefault();
  frontModal.style.display = "block";
});

backModalButton.addEventListener("click", (e) => {
  e.preventDefault();
  backModal.style.display = "none";
});

displayBackModal.addEventListener("click", (e) => {
  e.preventDefault();
  backModal.style.display = "block";
});

button.addEventListener("click", (e) => {
  e.preventDefault();
});

setInterval(() => {
  blink.hidden = !blink.hidden;
}, 500);
