class Start {
    constructor() {
        this.list = new List();

        this.input = document.querySelector('input');

        this.ul = document.querySelector('ul');
        this.taskNumber = document.querySelector('h2 span');

        document.querySelector('button').addEventListener('click', this.startDraw.bind(this));
        document.getElementById('filtr').addEventListener('input', this.filtr.bind(this));



    }
    startDraw() {
        //dodanie taska
        if (this.input.value === '') {
            alert('Musisz coś wpisać w polu tekstowym.');
        } else {
            const li = this.list.addTask(this.input.value);
            //ustawienie nasłuchiwania na przycisk z X
            li.querySelector('button').addEventListener('click', this.deleteTask.bind(this));
            //czyszczenie inputa
            this.input.value = '';

            this.render();
        }
    }

    deleteTask(e) {
        const index = e.target.parentNode.dataset.key;
        const i = this.list.removeTask(index);
        this.render();
    }

    filtr(e) {
        const searchTask = e.target.value;
        //przekazujemy do wyrenderowania przefiltrowana tablice
        this.render(this.list.filtrTasks(searchTask));
    }

    render(listTask = this.list.getTasks()) {
        this.ul.textContent = '';

        listTask.forEach((task, key) => {
            task.dataset.key = key;
            this.ul.appendChild(task);
        });
        this.taskNumber.textContent = this.list.getTasksNumber();
    }
}