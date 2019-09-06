class List {
    constructor() {
        let _tasks = [];

        this.getTasks = () => _tasks;

        this.getTasksNumber = () => _tasks.length;

        this.addTask = (content) => {
            const li = document.createElement('li');
            li.classList = 'task';
            li.innerHTML = `${content} <button> X </button>`;
            _tasks.push(li);
            return li;
        }
        this.removeTask = (index) => {
            return _tasks.splice(index, 1);
        }
        this.filtrTasks = (searchTask) => {
            let tasks = _tasks;
            return tasks.filter(li => li.textContent.toLowerCase().includes(searchTask.toLowerCase()));
        }
    }


}