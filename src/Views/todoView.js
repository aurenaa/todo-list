import Todo, { addToList } from "../Models/todoModel";
import displayTasks from "../home.js";

function addTask() {
    const pageContent = document.querySelector(".page-content");
    if (!pageContent) return;

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
    addBtn.textContent = "Add Task";
    btnDiv.appendChild(addBtn);

    //title form
    const titleDiv = document.createElement("div");
    titleDiv.classList.add("title-div");    
    form.appendChild(titleDiv);

    const title = document.createElement("label");
    title.textContent = "Title";
    title.setAttribute("for", "title");
    titleDiv.appendChild(title);

    const titleInput = document.createElement("input");
    titleInput.type = "text";
    titleInput.placeholder = "Add a title ...";
    titleInput.id = "title";
    titleDiv.appendChild(titleInput);

    //description form
    const descriptionDiv = document.createElement("div");
    descriptionDiv.classList.add("description-div");    
    form.appendChild(descriptionDiv);    

    const description = document.createElement("label");
    description.textContent = "Description";
    description.setAttribute("for", "description");
    descriptionDiv.appendChild(description);

    const descriptionInput = document.createElement("textarea"); 
    descriptionInput.placeholder = "Add a description ...";
    descriptionInput.id = "description";
    descriptionDiv.appendChild(descriptionInput);

    //date form
    const dateDiv = document.createElement("div");
    dateDiv.classList.add("date-div");    
    form.appendChild(dateDiv);    

    const date = document.createElement("label");
    date.textContent = "Due Date";
    date.setAttribute("for", "due-date");
    dateDiv.appendChild(date);

    const dateInput = document.createElement("input");
    dateInput.type = "date";
    dateInput.id = "due-date";
    dateDiv.appendChild(dateInput); 

    //priority form
    const priorityList = document.createElement("div");
    priorityList.classList.add("priority-list");
    form.appendChild(priorityList);

    const priorityDiv = document.createElement("div");
    priorityDiv.classList.add("priority-div");    
    priorityList.appendChild(priorityDiv);  

    const priority = document.createElement("label");
    priority.textContent = "Priority";
    priority.setAttribute("for", "priority");
    priorityDiv.appendChild(priority);

    const priorityCheckbox = document.createElement("input");
    priorityCheckbox.type = "checkbox";
    priorityCheckbox.id = "priority";   
    priorityDiv.appendChild(priorityCheckbox);

    //dropdown selection
    const dropDownDiv = document.createElement("div")
    dropDownDiv.classList.add("dropdown-div");    
    priorityList.appendChild(dropDownDiv);  

    const list = document.createElement("label");
    list.textContent = "List";
    list.setAttribute("for", "list");
    dropDownDiv.appendChild(list);

    const listInput = document.createElement("select");
    listInput.id = "list-dropdown";
    dropDownDiv.appendChild(listInput);
    
    //initial list
    const allTasksList = document.createElement("option");
    allTasksList.value = "allTasks";
    allTasksList.textContent = "All tasks";
    listInput.appendChild(allTasksList);
    
    //page outlines
    formDiv.appendChild(form);
    overlay.appendChild(formDiv);
    taskForm.appendChild(overlay);

    //buttons event listeners
    cancelBtn.addEventListener("click", () => {
        taskForm.remove();
    });

    addBtn.addEventListener("click", () => {
        let newTask = new Todo(titleInput.value, descriptionInput.value, dateInput.value, priorityCheckbox.checked, "Programming");
        console.log(newTask);
        addToList(newTask);
        displayTasks();
    });
}

export default addTask;