import { storeTask, storeList, retrieveTask, removeTask, removeList, loadAllTasks, loadAllLists } from './storageModel';
class List {
    constructor(name, todos = []) {
        this.name = name;
        this.todos = todos;
    }
}

function generateID() {
    let maxID = -1;

    for (let i = 0; i < localStorage.length; i++) {
        const list = JSON.parse(localStorage.getItem(localStorage.key(i)));
        if (list && list.id > maxID) {
            maxID = list.id;
        }
    }
    return maxID + 1;
}

function addToList(list) {
    list.id = generateID();
    storeList(list);  
}

export default List;
export { generateID, addToList };