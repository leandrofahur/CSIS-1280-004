const blink = document.querySelector("#blink");

const btn = document.querySelector("#onFormSubmit");
const name = document.querySelector("#name");
const company = document.querySelector("#company");
const subject = document.querySelector("#subject");
const email = document.querySelector("#email");
const message = document.querySelector("#message");
const warning = document.querySelector("#warning");

let fields = [];

setInterval(() => {
  blink.hidden = !blink.hidden;
}, 500);

btn.addEventListener("click", (evt) => {
  evt.preventDefault();

  fields = [name, company, subject, email, message];

  // The Map will return an array with the indexes of the black input
  const filteredArr = fields.map((element, index) => {
    if (element.value == "") {
      onWarning(element);
      document.querySelector("#warning").style.color = "red";
      document.querySelector("#warning").innerHTML =
        "* Please fill the fields in red";
    } else {
      if (index === 3) {
        const pos1 = element.value.search(/@/g);
        const pos2 = element.value.search(/.com/g);
        if (pos1 === -1 || pos2 === -1) {
          onWarning(element);
          document.querySelector("#warningEmail").style.color = "red";
          document.querySelector("#warningEmail").innerHTML =
            "* Please make sure you inserted a valid email address";
        }
      } else {
        onResult(element);
      }
    }
  });
});

const onWarning = (obj) => {
  document.querySelector(`#${obj.id}`).style.border = "3px solid red";
};

const onResult = (obj) => {
  document.querySelector(`#${obj.id}`).style.border = "none";
};
