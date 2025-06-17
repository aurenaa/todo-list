import addTask from './Views/todoView.js'
import List from './Models/listModel.js';
import { storeTask, retrieveTask, removeTask, loadAllTasks } from './Models/storageModel';

function createHomePage() {
    const content = document.querySelector(".content");

    const pageHeader = document.createElement("div");
    pageHeader.classList.add("page-header");
    content.appendChild(pageHeader);

    const siteName = document.createElement("p");
    siteName.classList.add("site-name");
    siteName.textContent = "todo";
    pageHeader.appendChild(siteName);

    const addTaskBtn = document.createElement("img");
    addTaskBtn.src = "/src/Assets/add.png"
    addTaskBtn.classList.add("add-task-btn");
    pageHeader.appendChild(addTaskBtn);

    addTaskBtn.addEventListener("click", () => {
        addTask();
    });

    const pageContent = document.createElement("div");
    pageContent.classList.add("page-content");
    content.appendChild(pageContent);

    const sideBar = document.createElement("div");
    sideBar.classList.add("side-bar");
    pageContent.appendChild(sideBar);

    const mainPage = document.createElement("div");
    mainPage.classList.add("main-page");
    pageContent.appendChild(mainPage);

    document.addEventListener('DOMContentLoaded', () => {
        displayTasks();
    });

}

function displayTasks() {
    const mainPage = document.querySelector(".main-page");
    if (!mainPage) return;
        
    mainPage.innerHTML = '';
        
    const tasks = loadAllTasks();
        
    tasks.forEach(task => {
        if (task) {
            const taskDiv = document.createElement("div");
            taskDiv.classList.add("task-div");

            const taskMenu = document.createElement("img");
            taskMenu.classList.add("task-menu");
            taskMenu.src = "/src/Assets/menu.png"

            const taskBtns = document.createElement("div");
            taskBtns.classList.add("task-btn");
            const editBtn = document.createElement("button")
            editBtn.classList.add("edit-btn");
            editBtn.textContent = "Edit";
            const removeBtn = document.createElement("button")
            removeBtn.classList.add("remove-btn");
            removeBtn.textContent = "Remove";
            taskBtns.appendChild(editBtn);
            taskBtns.appendChild(removeBtn);
            taskDiv.appendChild(taskBtns);

            var isClicked = true;

            taskMenu.addEventListener("click", () => {
                if(isClicked) {
                    taskBtns.style.display = "block";
                    isClicked = false;
                }
                else {
                    taskBtns.style.display = "none";
                    isClicked = true;                    
                }
            });

            editBtn.addEventListener("click", () => {
                displayEdit();
            });

            removeBtn.addEventListener("click", () => {
                removeTask();
            });
             
            const title = document.createElement("h3");
            title.textContent = task.title;
            
            const description = document.createElement("p");
            description.textContent = task.description;
            
            const dueDate = document.createElement("p");
            dueDate.textContent = `Due: ${task.dueDate}`;
            
            const priority = document.createElement("p");
            priority.textContent = `Priority: ${task.priority ? 'High' : 'Normal'}`;
            
            const list = document.createElement("p");
            list.textContent = `List: ${task.list}`;

            taskDiv.appendChild(title);
            taskDiv.appendChild(description);
            taskDiv.appendChild(dueDate);
            taskDiv.appendChild(priority);
            taskDiv.appendChild(list);
            taskDiv.appendChild(taskMenu);

            mainPage.appendChild(taskDiv);
        }
    });
}

export default createHomePage;
export { displayTasks };