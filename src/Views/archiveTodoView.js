import { removeTask, retrieveTask } from "../Models/storageModel.js";
import { removeTaskFromList } from "../Models/listModel";

function archiveTask(id, taskDiv) {
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
    archivePara.textContent = "Are you sure you want to archive this task? You can restore it at any time.";
    archiveTodo.appendChild(archivePara);

    const btnDiv = document.createElement("div");
    btnDiv.classList.add("btn-div");
    archiveTodo.appendChild(btnDiv);

    const cancelBtn = document.createElement("button");
    cancelBtn.classList.add("cancel-btn");
    cancelBtn.textContent = "Cancel";
    btnDiv.appendChild(cancelBtn);

    const archiveBtn = document.createElement("button");
    archiveBtn.classList.add("archive-button");
    archiveBtn.textContent = "Archive task";
    btnDiv.appendChild(archiveBtn);

    cancelBtn.addEventListener("click", () => {
        archiveTodo.remove();
        overlay.remove();
    });

    archiveBtn.addEventListener("click", () => {
        console.log("Archving task");
    });
}

export default archiveTask;