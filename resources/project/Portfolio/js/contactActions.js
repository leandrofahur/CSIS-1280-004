const blink = document.querySelector("#blink");

setInterval(() => {
  blink.hidden = !blink.hidden;
}, 500);
