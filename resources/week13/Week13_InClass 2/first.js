let form = document.querySelector("form");
let task = document.querySelector("#task");
let taskList = document.querySelector("#tasks");


form.addEventListener('submit', (event) => {

    event.preventDefault();

    let newTask = task.value;
    console.log(newTask);
    if (newTask == "") {
        alert("The task can't be empty");
    }
    else {
        //Create a new li element
        let li = document.createElement('li');

        //Add text Node

        let textNode = document.createTextNode(newTask);
        li.appendChild(textNode);

        let deleteButton = document.createElement('button');
        // deleteButton.classList.add("delete");
        deleteButton.className("delete");
        let deleteText = document.createTextNode("Delete");
        deleteButton.appendChild(deleteText);
        li.appendChild(deleteButton)

        //append li to the list
        taskList.appendChild(li);
        task.value = "";
    }
})

taskList.addEventListener('click', (event) => {

    if (event.target.classList.contains("delete")) {

        if (confirm("Are you sure?")) {
            let li = event.target.parentElement;
            taskList.removeChild(li);
        }
    }

})

