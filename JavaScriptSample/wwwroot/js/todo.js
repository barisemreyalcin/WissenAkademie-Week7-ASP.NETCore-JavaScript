const form = document.querySelector("form"); // form object
const input = document.querySelector("#txtTaskName"); // input task text
const btnAddNewTask = document.querySelector("#btnAddNewTask"); // button add new task
const taskList = document.querySelector("#task-list"); // ul task list
const btnDeleteAll = document.querySelector("#btnDeleteAll"); // button delete all tasks

// add new task
form.addEventListener("submit", addNewItem);

taskList.addEventListener("click", deleteItem);

btnDeleteAll.addEventListener("click", deleteAllItems);

function addNewItem(e) {
    if (input.value == "") {
        alert("Enter a task!");
    } else {
        const li = document.createElement("li");
        li.classList.add("list-group-item", "list-group-item-secondary");
        li.appendChild(document.createTextNode(input.value));

        const a = document.createElement("a");
        a.classList.add("delete-item", "float-end");
        a.setAttribute("href", "#");
        a.innerHTML = `<i class="fas fa-times"></i>`;

        li.appendChild(a);
        taskList.appendChild(li);

        alert(taskList.childElementCount);
        e.preventDefault(); 
    }
}

function deleteItem(e) {
    if (e.target.className === "fas fa-times") {
        if (confirm("Do you really want to delete this task?")) {
            e.target.parentElement.parentElement.remove();
        }
    }
}

function deleteAllItems(e) {
    confirm("Do you really want to delete all the items?") 
    {
        while (taskList.firstChild) {
            taskList.removeChild(taskList.firstChild);
        }
    }
}