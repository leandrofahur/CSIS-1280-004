let button = document.querySelector("#button");

//METHOD 1. ADDING IT PROGRAMMATICALLY
function buttonClick() {
  console.log("I am clicked again");
}
//console.log(button);

/* button.onclick = function () { console.log(" I am clicked") };

button.onclick = buttonClick; */

//METHOD 2 .. USES EVENT LISTENER

button.addEventListener("click", function (event) {
  console.log(event);
  console.log(event.target);
  console.log(event.target.id);
  console.log(event.target.value);
  console.log(event.clientX);
  console.log(event.clientY);
  console.log(event.offsetX);
  console.log(event.offsetY);
});
