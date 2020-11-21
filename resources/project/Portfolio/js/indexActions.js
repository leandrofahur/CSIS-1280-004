const blink = document.querySelector("#blink");
const typeEffect = document.querySelector(".typeEffect");

let isWritting = true;
let i = 0;

setInterval(() => {
  blink.hidden = !blink.hidden;
}, 500);

const TextEffect = () => {
  if (isWritting) {
    let txt = typeEffect.getAttribute("data-entry").charAt(i);
    typeEffect.innerHTML += txt;
    i++;
    setTimeout(TextEffect, 200);
    if (i == typeEffect.getAttribute("data-entry").length) {
      isWritting = false;
    }
  } else {
    typeEffect.innerHTML = typeEffect.innerHTML.slice(0, -1);
    i--;
    setTimeout(TextEffect, 300);
    if (i == 1) {
      isWritting = true;
    }
  }
};

TextEffect();
