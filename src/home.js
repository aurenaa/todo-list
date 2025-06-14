import Todo from './Models/todoModel.js';
import addTask from './Views/todoView.js'
import List from './Models/listModel.js';

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

    const myTodo = new Todo("Learn JS", "Complete The Odin Project", "2025-06-15", "High", "Programming");
    const myList = new List("Default", myTodo);

    const sideBar = document.createElement("div");
    sideBar.classList.add("side-bar");
    pageContent.appendChild(sideBar);

    const mainPage = document.createElement("div");
    mainPage.classList.add("main-page");
    pageContent.appendChild(mainPage);
}

export default createHomePage;