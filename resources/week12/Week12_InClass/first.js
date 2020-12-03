//Traversing the DOM

let tasks = document.querySelector("#tasks");
//console.log(tasks);

//Select the parent

/* console.log(tasks.parentNode);
console.log(tasks.parentElement);
console.log(tasks.parentElement.parentElement); */

//Child nodes
console.log(tasks.childNodes);  //returns children nodes
console.log(tasks.childNodes.length);
console.log(tasks.firstChild);   //returns the first child node
console.log(tasks.lastChild);
console.log(tasks.children[1].style.backgroundColor = "lightgreen");    //returns children elements
console.log(tasks.children.length);
console.log(tasks.firstElementChild);
console.log(tasks.lastElementChild.textContent = "I am the last child");

//SIBLINGS

console.log("The next Sibling", tasks.nextSibling);
console.log("The previous Sibling", tasks.previousSibling);
console.log("The next Element Sibling", tasks.nextElementSibling);
console.log("The previous Element Sibling", tasks.previousElementSibling);

tasks.previousElementSibling.style.color = "blue";

//CREATE NEW ELEMENTS
//1. Create a heading element
let heading = document.createElement("h1");
/* //create a text node
let textNode = document.createTextNode("I am the new element");
//3. Append text to the heading
heading.appendChild(textNode);
//4. Append heading to the DOM */

heading.innerHTML = "I am a new <span> element</span>"

document.body.appendChild(heading);

let newDiv = document.createElement("div");

newDiv.className = "newDiv";
newDiv.id = "newDiv";
newDiv.setAttribute('title', " I am a new Division");;
console.log(newDiv)
let text = document.createTextNode("I am a new DIV");
newDiv.appendChild(text);

let mainDiv = document.querySelector("#main");

//mainDiv.appendChild(newDiv);
mainDiv.insertBefore(newDiv, tasks);



