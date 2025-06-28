import { storeTask, retrieveTask, removeTask, loadAllTasks } from './storageModel';
class Todo {
    constructor(title, description, dueDate, priority, list, done, id = null) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.list = list;
        this.done = done;
        this.id = id;
    }
}

function generateID() {
    let maxID = -1;

    for (let i = 0; i < localStorage.length; i++) {
        const task = JSON.parse(localStorage.getItem(localStorage.key(i)));
        if (task && task.id > maxID) {
            maxID = task.id;
        }
    }
    return maxID + 1;
}

function addToList(task) {
    if (task.id == null) {
        task.id = generateID();        
    }
    storeTask(task);
    return task.id; 
}

function updateTask(taskId, doneValue) {
    const allTasks = loadAllTasks();
    const targetTask = allTasks.find(task => task.id === taskId);
    if (targetTask) {
        targetTask.done = doneValue;
        storeTask(targetTask);
    } else {
        console.log("No task with that ID.");
    }
}

export { Todo, generateID, addToList, updateTask };