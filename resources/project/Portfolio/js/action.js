const blink = document.getElementById("blink");

setInterval(() => {
  blink.hidden = !blink.hidden;
}, 500);
