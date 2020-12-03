let button = document.querySelector("#button");

//METHOD 1. ADDING IT PROGRAMMATICALLY
function buttonClick() {
    console.log("I am clicked again");
}
//console.log(button);

/* button.onclick = function () { console.log(" I am clicked") };

button.onclick = buttonClick; */

//METHOD 2 .. USES EVENT LISTENER

//Using anonumous function
button.addEventListener("click", function (event) {
    console.log("Using addEvevntListener: I am clicked")
    //console.log(event);
    console.log(event.target);
    console.log(event.target.id);
    console.log(event.target.className);
    console.log(event.target.classList);
    console.log(event.type);
    console.log(event.clientX, event.clientY);
    console.log(event.offsetX, event.offsetY);

    console.log(event.altKey);
    console.log(event.ctrlKey);
    console.log(event.shiftKey);
})


let box = document.querySelector("#box");
box.addEventListener("mousemove", runEvent);

function runEvent(ev) {
    box.style.backgroundColor = "rgb(" + ev.offsetX + "," + ev.offsetY + ", 80)";
}

//using named function

//button.addEventListener("click", buttonClick)

//Geting the form and using submit

let form = document.querySelector("form");
let textInput = document.querySelector("input[type='text']");
let selectBox = document.querySelector(".selectType");
console.log(form, textInput, selectBox);

form.addEventListener("submit", runEvent2);

function runEvent2(ev) {
    ev.preventDefault();
    console.log("Event type:", ev.type)
    console.log("Event target:", ev.target)

}

selectBox.addEventListener("change", runEvent2);
textInput.addEventListener("focus", runEvent2);
textInput.addEventListener("blur", runEvent2);
