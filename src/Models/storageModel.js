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

function removeTask(id) {
    localStorage.removeItem(id);
}

export { storeTask, retriveTask, removeTask };