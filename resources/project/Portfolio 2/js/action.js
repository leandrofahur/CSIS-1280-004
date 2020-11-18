const blink = document.getElementById("blink");
const typeEffect = document.getElementById("typeEffect");

let isWriting = true;
let i = 0;
let txt = "the most precious resource you have...";
// let txt = "test...";

const Effect = () => {
  if (isWriting) {
    typeEffect.innerHTML += txt.charAt(i);
    i++;
    console.log(i);
    setTimeout(Effect, 200);
    if (i == txt.length) {
      isWriting = false;
    }
  } else {
    typeEffect.innerHTML = typeEffect.innerHTML.slice(0, -1);
    i--;
    setTimeout(Effect, 300);
    if (i == 0) {
      isWriting = true;
    }
  }
};

setInterval(() => {
  blink.hidden = !blink.hidden;
}, 500);

Effect();
