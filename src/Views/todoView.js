function addTask() {
    const pageContent = document.querySelector(".page-content");
    if (!pageContent) return;

    if (document.querySelector(".task-form")) return;

    const taskForm = document.createElement("div");
    taskForm.classList.add("task-form");
    pageContent.appendChild(taskForm);

    const cancelBtn = document.createElement("button");
    cancelBtn.classList.add("cancel-btn");
    cancelBtn.textContent = "Cancel";
    taskForm.appendChild(cancelBtn);

    const addBtn = document.createElement("button");
    addBtn.classList.add("add-btn");
    addBtn.textContent = "Add Task";
    taskForm.appendChild(addBtn);

    const contact = document.createElement("div");
    contact.classList.add("contact");

    const formDiv = document.createElement("div");
    formDiv.classList.add("form-div");
    const form = document.createElement("form");
    form.classList.add("contact-form");

    const title = document.createElement("label");
    title.textContent = "Title";
    title.setAttribute("for", "title");
    form.appendChild(title);

    const titleInput = document.createElement("input");
    titleInput.type = "text";
    titleInput.placeholder = "Add a title ...";
    titleInput.id = "title";
    form.appendChild(titleInput);   

    const description = document.createElement("label");
    description.textContent = "Description*";
    description.setAttribute("for", "description");
    form.appendChild(description);

    const descriptionInput = document.createElement("textarea"); 
    descriptionInput.placeholder = "Add a description ...";
    descriptionInput.id = "description";
    form.appendChild(descriptionInput);

    const date = document.createElement("label");
    date.textContent = "Due Date";
    date.setAttribute("for", "due-date");
    form.appendChild(date);

    const dateInput = document.createElement("input");
    dateInput.type = "date";
    dateInput.id = "due-date";
    form.appendChild(dateInput); 

    const priority = document.createElement("label");
    priority.textContent = "Priority";
    priority.setAttribute("for", "priority");
    form.appendChild(priority);

    const priorityCheckbox = document.createElement("input");
    priorityCheckbox.type = "checkbox";
    priorityCheckbox.id = "priority";   
    form.appendChild(priorityCheckbox);

    formDiv.appendChild(form);
    contact.appendChild(formDiv);
    taskForm.appendChild(contact);

    cancelBtn.addEventListener("click", () => {
        taskForm.remove();
    });

    //addBtn.addEventListener("click", () => {
    //    const newTask = new Todo(titleInput, descriptionInput, dateInput, "High", "Programming");
    //});
}

export default addTask;