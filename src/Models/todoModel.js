import { storeTask, retrieveTask, removeTask, loadAllTasks } from './storageModel';
class Todo {
    constructor(title, description, dueDate, priority, list) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.list = list;
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
    task.id = generateID();
    storeTask(task);
    return task.id; 
}

export default Todo;
export { generateID, addToList };