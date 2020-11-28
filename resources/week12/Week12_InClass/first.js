let tasks = document.querySelector("#tasks");

// console.log(tasks);
// console.log(tasks.parentNode);
// console.log(tasks.parentElement);
// console.log(tasks.parentElement.parentElement);

// console.log(tasks.childNodes);
// console.log(tasks.children);

console.log(tasks.childNodes); //returns children nodes
console.log(tasks.childNodes.length);
console.log(tasks.firstChild); //returns the first child node
console.log(tasks.lastChild);
console.log(tasks.children); //returns children elements
console.log(tasks.children.length);
console.log(tasks.firstElementChild);
console.log((tasks.lastElementChild.textContent = "I am the last child"));
