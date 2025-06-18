import { removeTask } from "../Models/storageModel.js";
import displayTasks from "../home.js";

function deleteTask(id, taskDiv) {
    const pageContent = document.querySelector(".page-content");
    if (!pageContent) return;

    const deleteTodo = document.createElement("div");
    deleteTodo.classList.add("delete-todo");
    pageContent.appendChild(deleteTodo);

    const overlay = document.createElement("div");
    overlay.classList.add("overlay");
    pageContent.appendChild(overlay);

    const confirm = document.createElement("h3");
    confirm.textContent = "Confirmation?";
    deleteTodo.appendChild(confirm);
    overlay.appendChild(deleteTodo);

    const deletePara = document.createElement("p");
    deletePara.textContent = "Are you sure you want to delete this task? This action cannot be undone.";
    deleteTodo.appendChild(deletePara);

    const btnDiv = document.createElement("div");
    btnDiv.classList.add("btn-div");
    deleteTodo.appendChild(btnDiv);

    const cancelBtn = document.createElement("button");
    cancelBtn.classList.add("cancel-btn");
    cancelBtn.textContent = "Cancel";
    btnDiv.appendChild(cancelBtn);

    const deleteBtn = document.createElement("button");
    deleteBtn.classList.add("delete-btn");
    deleteBtn.textContent = "Delete";
    btnDiv.appendChild(deleteBtn);

    cancelBtn.addEventListener("click", () => {
        deleteTodo.remove();
        overlay.remove();
    });

    deleteBtn.addEventListener("click", () => {
        removeTask(id);
        taskDiv.remove();
        overlay.remove();
    });
}

export default deleteTask;