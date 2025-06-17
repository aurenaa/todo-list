function storeTask(newTask) {
    localStorage.setItem(newTask.id, JSON.stringify(newTask));
}

function retriveTask(id) {
    const storedTask = localStorage.getItem(id);

    if(storedTask) {
        return JSON.parse(storedTask);
    }
    else {
        console.log("Task not found in local storage.");
        return null;
    }    
}

function loadAllTasks() {
    const tasks = [];
    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        const task = localStorage.getItem(key);
        tasks.push(JSON.parse(task));
    }
    return tasks;
}

function removeTask(id) {
    localStorage.removeItem(id);
}

export { storeTask, retriveTask, removeTask, loadAllTasks };