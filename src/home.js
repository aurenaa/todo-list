import addTask from './Views/todoView.js'
import { updateTask } from './Models/todoModel.js'
import addList from './Views/listView.js'
import deleteTask from './Views/removeTodoView.js';
import editTask from './Views/editTodoView.js';
import { storeTask, storeList, retrieveTask, removeTask, removeList, loadAllTasks, loadAllLists } from './Models/storageModel';

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
        displayLists();
    });

    //sidebar
    //div for all the lists
    const all = document.createElement("div")
    all.classList.add("all");
    sideBar.appendChild(all);    

    const iconAll = document.createElement("img");
    iconAll.classList.add("icon-all");
    iconAll.src = "/src/Assets/home.png"
    all.appendChild(iconAll);

    const textAll = document.createElement("p");
    textAll.textContent = "All tasks";
    all.appendChild(textAll);

    const lists = document.createElement("div");
    lists.classList.add("lists");
    sideBar.appendChild(lists);

    //div for adding list
    const addListDiv = document.createElement("div");
    addListDiv.classList.add("add-list");
    sideBar.appendChild(addListDiv);

    const addListBtn = document.createElement("img");
    addListBtn.src = "/src/Assets/add.png"
    addListBtn.classList.add("add-task-btn");
    addListDiv.appendChild(addListBtn);

    addListBtn.addEventListener("click", () => {
        addList();
    });

    const addListText = document.createElement("p");
    addListText.textContent = "Create new list";
    addListText.classList.add("add-list-text");
    addListDiv.appendChild(addListText);
}

let activeListTasksIDs = null; 
let activeList = null;

function displayLists() {
    const listsContainer = document.querySelector(".lists");
    const allLists = document.querySelector(".all");
    if (!listsContainer) return;

    activeList = allLists;
        
    listsContainer.innerHTML = '';  
    const lists = loadAllLists();
        
    lists.forEach(list => {
        if (list) {
            const listDiv = document.createElement("div");
            listDiv.classList.add("list-div");
             
            const title = document.createElement("p");
            title.textContent = list.name;
            listDiv.appendChild(title);
            listsContainer.appendChild(listDiv);

            listDiv.addEventListener("click", () => {
                activeListTasksIDs = list.todos;
                listDiv.style.backgroundColor = "#8D99AE";
                displayTasks(activeListTasksIDs);

                if (activeList && activeList !== listDiv) {
                    activeList.style.backgroundColor = "#EDF2F4";
                }

                if (listDiv.style.backgroundColor == "#8D99AE") {
                    listDiv.style.backgroundColor = "#EDF2F4"
                    activeList = null;
                } else {
                    listDiv.style.backgroundColor = "#8D99AE";
                    activeList = listDiv;
                }
            });

            allLists.addEventListener("click", () => {
                displayTasks();
                activeList = allLists;
                listDiv.style.backgroundColor = "#EDF2F4"
                activeList.style.backgroundColor = "#8D99AE";                               
            });
        }
    });
}

let activeTaskBtns = null; 

function displayTasks(activeListTasksIDs) {
    const mainPage = document.querySelector(".main-page");
    if (!mainPage) return;
        
    mainPage.innerHTML = '';
        
    const tasks = loadAllTasks();
        
    tasks.forEach(task => {
        if (task) {
            if (activeListTasksIDs != null) {
                for (let i = 0; i < activeListTasksIDs.length; i++) {
                if (task.id == activeListTasksIDs[i]) {
                    const taskElement = createTaskElement(task);
                    mainPage.appendChild(taskElement);
                    }
                }
            }

            else {
                const taskElement = createTaskElement(task);
                mainPage.appendChild(taskElement);              
            }
        }
    });
}

function createTaskElement(task) {
    const taskDiv = document.createElement("div");
    taskDiv.classList.add("task-div");

    const taskMenu = document.createElement("img");
    taskMenu.classList.add("task-menu");
    taskMenu.src = "/src/Assets/menu.png";

    const taskBtns = document.createElement("div");
    taskBtns.classList.add("task-btn");

    const editBtn = document.createElement("button");
    editBtn.classList.add("edit-btn");
    editBtn.textContent = "Edit..";

    const removeBtn = document.createElement("button");
    removeBtn.classList.add("remove-btn");
    removeBtn.textContent = "Remove";

    taskBtns.appendChild(editBtn);
    taskBtns.appendChild(removeBtn);
    taskDiv.appendChild(taskBtns);

    taskMenu.addEventListener("click", () => {
        if (activeTaskBtns && activeTaskBtns !== taskBtns) {
            activeTaskBtns.style.display = "none";
        }

        if (taskBtns.style.display === "block") {
            taskBtns.style.display = "none";
            activeTaskBtns = null;
        } else {
            taskBtns.style.display = "block";
            activeTaskBtns = taskBtns;
        }
    });

    editBtn.addEventListener("click", () => {
        editTask(task.id, taskDiv);
    });

    removeBtn.addEventListener("click", () => {
        deleteTask(task.id, taskDiv);
    });

    const title = document.createElement("h3");
    title.classList.add("task-title");
    title.textContent = task.title;

    const description = document.createElement("p");
    description.textContent = task.description;

    const dueDate = document.createElement("p");
    dueDate.textContent = `Due: ${task.dueDate}`;

    const priority = document.createElement("p");
    priority.textContent = `Priority: ${task.priority ? 'High' : 'Normal'}`;

    const list = document.createElement("p");
    list.textContent = `List: ${task.list}`;

    //done checkbox
    const doneDiv = document.createElement("div");
    doneDiv.classList.add("done-div");

    const doneBox = document.createElement("input");
    doneBox.classList.add("done-checkbox");
    doneBox.type = "checkbox";
    doneBox.id = "done"; 

    const done = document.createElement("label");
    done.textContent = "Done";
    done.setAttribute("for", "done");

    doneDiv.appendChild(doneBox);
    doneDiv.appendChild(done);

    if (task.done) {
        title.style.textDecoration = "line-through";
        doneBox.checked = true;
    }

    doneBox.addEventListener("change", function () {
        if (this.checked) {
            title.style.textDecoration = "line-through";
            updateTask(task.id, true); 
        } else {
            title.style.textDecoration = "none";
            updateTask(task.id, false);
        }
    });

    //all task div components
    taskDiv.appendChild(title);
    taskDiv.appendChild(description);
    taskDiv.appendChild(dueDate);
    taskDiv.appendChild(priority);
    taskDiv.appendChild(list);
    taskDiv.appendChild(taskMenu);
    taskDiv.appendChild(doneDiv);

    return taskDiv;
}

export default createHomePage;
export { displayTasks, displayLists };