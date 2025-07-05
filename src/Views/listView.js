import { List, addToList } from "../Models/listModel.js";
import { displayLists } from "../home.js";

function addList() {
    const pageContent = document.querySelector(".page-content");
    if (!pageContent) return;

    if (document.querySelector(".list-form")) return;

    const listForm = document.createElement("div");
    listForm.classList.add("list-form");
    pageContent.appendChild(listForm);

    const overlay = document.createElement("div");
    overlay.classList.add("overlay");

    const formDiv = document.createElement("div");
    formDiv.classList.add("form-div-list");
    const form = document.createElement("form");
    form.classList.add("contact-form");

    //buttons creation
    const btnDiv = document.createElement("div");
    btnDiv.classList.add("btn-div");    
    form.appendChild(btnDiv);

    const cancelBtn = document.createElement("button");
    cancelBtn.classList.add("cancel-btn");
    cancelBtn.textContent = "Cancel";
    btnDiv.appendChild(cancelBtn);

    const addBtn = document.createElement("button");
    addBtn.classList.add("add-btn");
    addBtn.textContent = "Add List";
    btnDiv.appendChild(addBtn);

    //name form
    const nameDiv = document.createElement("div");
    nameDiv.classList.add("name-div");    
    form.appendChild(nameDiv);

    const name = document.createElement("label");
    name.textContent = "Name";
    name.setAttribute("for", "name");
    nameDiv.appendChild(name);

    const nameInput = document.createElement("input");
    nameInput.type = "text";
    nameInput.placeholder = "Add name ...";
    nameInput.id = "name";
    nameDiv.appendChild(nameInput);

    //page outlines
    formDiv.appendChild(form);
    overlay.appendChild(formDiv);
    listForm.appendChild(overlay);

    //buttons event listeners
    cancelBtn.addEventListener("click", () => {
        taskForm.remove();
    });

    addBtn.addEventListener("click", () => {
        if (nameInput.value == "") {
            alert("Error: List must have a name.");
            return;
        }
        else {
            let newList = new List(nameInput.value);
            console.log(newList);
            addToList(newList);
            displayLists();
        }
    });    
}

export default addList;