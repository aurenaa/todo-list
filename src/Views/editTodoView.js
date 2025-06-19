import { removeTask, retriveTask } from "../Models/storageModel.js";
import Todo, { addToList } from "../Models/todoModel";
import displayTasks from "../home.js";

function editTask(id, taskDiv) {
    const pageContent = document.querySelector(".page-content");
    if (!pageContent) return;

    const task = retriveTask(id);

    if (document.querySelector(".task-form")) return;

    const taskForm = document.createElement("div");
    taskForm.classList.add("task-form");
    pageContent.appendChild(taskForm);

    const overlay = document.createElement("div");
    overlay.classList.add("overlay");

    const formDiv = document.createElement("div");
    formDiv.classList.add("form-div");
    const form = document.createElement("form");
    form.classList.add("contact-form");

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

    const titleDiv = document.createElement("div");
    titleDiv.classList.add("title-div");    
    form.appendChild(titleDiv);

    const title = document.createElement("label");
    title.textContent = "Title";
    title.setAttribute("for", "title");
    titleDiv.appendChild(title);

    const titleInput = document.createElement("input");
    titleInput.type = "text";
    titleInput.placeholder = task.title;
    titleInput.id = "title";
    titleDiv.appendChild(titleInput);

    const descriptionDiv = document.createElement("div");
    descriptionDiv.classList.add("description-div");    
    form.appendChild(descriptionDiv);    

    const description = document.createElement("label");
    description.textContent = "Description";
    description.setAttribute("for", "description");
    descriptionDiv.appendChild(description);

    const descriptionInput = document.createElement("textarea"); 
    descriptionInput.placeholder = task.description;
    descriptionInput.id = "description";
    descriptionDiv.appendChild(descriptionInput);

    const dateDiv = document.createElement("div");
    dateDiv.classList.add("date-div");    
    form.appendChild(dateDiv);    

    const date = document.createElement("label");
    date.textContent = "Due Date";
    date.setAttribute("for", "due-date");
    dateDiv.appendChild(date);

    const dateInput = document.createElement("input");
    dateInput.type = "date";
    dateInput.value = task.dueDate ? task.dueDate : '';
    dateInput.id = "due-date";
    dateDiv.appendChild(dateInput);

    const priorityDiv = document.createElement("div");
    priorityDiv.classList.add("priority-div");    
    form.appendChild(priorityDiv);    

    const priority = document.createElement("label");
    priority.textContent = "Priority";
    priority.setAttribute("for", "priority");
    priorityDiv.appendChild(priority);

    const priorityCheckbox = document.createElement("input");
    priorityCheckbox.type = "checkbox";
    priorityCheckbox.id = "priority";   
    priorityDiv.appendChild(priorityCheckbox);

    if (task.priority) {
        priorityCheckbox.checked = true;
    }

    formDiv.appendChild(form);
    overlay.appendChild(formDiv);
    taskForm.appendChild(overlay);

    cancelBtn.addEventListener("click", () => {
        taskForm.remove();
    });

    editBtn.addEventListener("click", () => {
        if (!titleInput.value) {
            titleInput.value = titleInput.placeholder;
        }
        if (!descriptionInput.value) {
            descriptionInput.value = descriptionInput.placeholder;
        }
        if (!dateInput.value) {
            dateInput.value = dateInput.placeholder;
        }
        let editedTask = new Todo(titleInput.value, descriptionInput.value, dateInput.value, priorityCheckbox.checked, "Programming");
        console.log(editedTask);
        addToList(editedTask);
        taskDiv.remove();
        removeTask(id);
        displayTasks();
    });
}

export default editTask;