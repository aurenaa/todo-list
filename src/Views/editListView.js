import { retrieveList } from "../Models/storageModel.js";
import { List, addToList } from "../Models/listModel";
import displayTasks, { displayLists } from "../home.js";

function editList(id, listDiv) {
    const pageContent = document.querySelector(".page-content");
    if (!pageContent) return;
    console.log("radi li ovde2");

    //getting the task to edit
    const list = retrieveList(id);
    console.log(list.todos);
    if (document.querySelector(".task-form")) return;

    const taskForm = document.createElement("div");
    taskForm.classList.add("task-form");
    pageContent.appendChild(taskForm);

    const overlay = document.createElement("div");
    overlay.classList.add("overlay");

    const formDiv = document.createElement("div");
    formDiv.classList.add("form-div-list");
    const form = document.createElement("form");
    form.classList.add("contact-form");

    //buttons
    const btnDiv = document.createElement("div");
    btnDiv.classList.add("btn-div");    
    form.appendChild(btnDiv);

    const cancelBtn = document.createElement("button");
    cancelBtn.classList.add("cancel-btn");
    cancelBtn.textContent = "Cancel";
    btnDiv.appendChild(cancelBtn);

    const editBtn = document.createElement("button");
    editBtn.classList.add("edit-btn-form");
    editBtn.textContent = "Edit";
    btnDiv.appendChild(editBtn);

    //form elements
    const nameDiv = document.createElement("div");
    nameDiv.classList.add("name-div");    
    form.appendChild(nameDiv);

    const name = document.createElement("label");
    name.textContent = "Name";
    name.setAttribute("for", "name");
    nameDiv.appendChild(name);

    const nameInput = document.createElement("input");
    nameInput.type = "text";
    nameInput.placeholder = list.name;
    nameInput.id = "title";
    nameDiv.appendChild(nameInput);

    formDiv.appendChild(form);
    overlay.appendChild(formDiv);
    taskForm.appendChild(overlay);

    cancelBtn.addEventListener("click", () => {
        taskForm.remove();
    });

    //making a new list and removing the old one
    editBtn.addEventListener("click", () => {
        if (!nameInput.value) {
            nameInput.value = nameInput.placeholder;
        }
        console.log("radi li ovde3");
        let editedList = new List(nameInput.value, list.todos, list.id);
        addToList(editedList);

        listDiv.remove();
        displayTasks();
        displayLists();
    });
}

export default editList;