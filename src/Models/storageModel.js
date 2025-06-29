function storeTask(newTask) {
    localStorage.setItem(`task-${newTask.id}`, JSON.stringify(newTask));
}

function storeList(newList) {
    localStorage.setItem(`list-${newList.id}`, JSON.stringify(newList));
}

function retrieveTask(id) {
    console.log(`task-${id}`);
    const storedTask = localStorage.getItem(`task-${id}`);
    console.log("task stored:", storedTask);
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
        if (key.startsWith("task-")) {
            const task = localStorage.getItem(key);
            tasks.push(JSON.parse(task));
        }
    }
    return tasks;
}

function loadAllLists() {
    const lists = [];
    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        if (key.startsWith("list-")) {
            const list = localStorage.getItem(key);
            lists.push(JSON.parse(list));
        }
    }
    return lists;
}

function removeTask(id) {
    localStorage.removeItem(`task-${id}`);
}

function removeList(id) {
    localStorage.removeItem(`list-${id}`);
}

export { storeTask, storeList, retrieveTask, removeTask, removeList, loadAllTasks, loadAllLists };