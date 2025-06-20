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

function addToStorage(list) {
    list.id = generateID();
    storeTask(list);  
}

function addTaskToList(task) {

}

export default List;
export { generateID, addToStorage, addTaskToList };