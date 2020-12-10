const blink = document.querySelector("#blink");
const button = document.querySelector(".btn");
const frontModalButton = document.querySelector("#front-modal-button");
const frontModal = document.querySelector(".front-modal");
const displayFrontModal = document.querySelector("#display-front-modal");

const backModal = document.querySelector(".back-modal");
const displayBackModal = document.querySelector("#display-back-modal");
const backModalButton = document.querySelector("#back-modal-button");

const devopsModal = document.querySelector(".devops-modal");
const displayDevopsModal = document.querySelector("#display-devops-modal");
const devopsModalButton = document.querySelector("#devops-modal-button");

const embeddedModal = document.querySelector(".embedded-modal");
const displayEmbeddedModal = document.querySelector("#display-embedded-modal");
const embeddedModalButton = document.querySelector("#embedded-modal-button");

frontModal.style.display = "none";
backModal.style.display = "none";
devopsModal.style.display = "none";
embeddedModal.style.display = "none";

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

devopsModalButton.addEventListener("click", (e) => {
  e.preventDefault();
  devopsModal.style.display = "none";
});

displayDevopsModal.addEventListener("click", (e) => {
  e.preventDefault();
  devopsModal.style.display = "block";
});

embeddedModalButton.addEventListener("click", (e) => {
  e.preventDefault();
  embeddedModal.style.display = "none";
});

displayEmbeddedModal.addEventListener("click", (e) => {
  e.preventDefault();
  embeddedModal.style.display = "block";
});

button.addEventListener("click", (e) => {
  e.preventDefault();
});

setInterval(() => {
  blink.hidden = !blink.hidden;
}, 500);
