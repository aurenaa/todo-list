import { retrieveTask } from "../Models/storageModel.js";
import { Todo, addToList } from "../Models/todoModel";
import displayTasks, { displayLists } from "../home.js";

function unArchiveTask(id, taskDiv) {
    const pageContent = document.querySelector(".page-content");
    if (!pageContent) return;

    const archiveTodo = document.createElement("div");
    archiveTodo.classList.add("archive-todo");
    pageContent.appendChild(archiveTodo);

    const overlay = document.createElement("div");
    overlay.classList.add("overlay");
    pageContent.appendChild(overlay);

    const confirm = document.createElement("h3");
    confirm.textContent = "Confirmation?";
    archiveTodo.appendChild(confirm);
    overlay.appendChild(archiveTodo);

    const archivePara = document.createElement("p");
    archivePara.textContent = "Are you sure you want to unarchive this task?";
    archiveTodo.appendChild(archivePara);

    const btnDiv = document.createElement("div");
    btnDiv.classList.add("btn-div");
    archiveTodo.appendChild(btnDiv);

    const cancelBtn = document.createElement("button");
    cancelBtn.classList.add("cancel-btn");
    cancelBtn.textContent = "Cancel";
    btnDiv.appendChild(cancelBtn);

    const unArchiveBtn = document.createElement("button");
    unArchiveBtn.classList.add("archive-button");
    unArchiveBtn.textContent = "Unarchive task";
    btnDiv.appendChild(unArchiveBtn);

    cancelBtn.addEventListener("click", () => {
        archiveTodo.remove();
        overlay.remove();
    });

    unArchiveBtn.addEventListener("click", () => {
        const task = retrieveTask(id);

        let unArchiveTask = new Todo(task.title, task.description, task.dueDate, task.priority, task.list, task.done, false, task.id);
        addToList(unArchiveTask);

        taskDiv.remove();
        displayTasks();
        displayLists();
        overlay.remove();
    });
}

export default unArchiveTask;