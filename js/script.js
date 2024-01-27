console.log('Vue ok', Vue)

const { createApp } = Vue;

const app = createApp({
    name: 'VueToDo',
    data: () => ({
        tasks: [
            { id: 1, done: false, text: 'Fare la spesa' },
            { id: 2, done: true, text: 'Lavare i capelli' },
            { id: 3, done: false, text: 'Comprare una marca da bollo' },
            { id: 4, done: false, text: 'Aggiornare il PC' }
        ],
        newTask: ''

    }),
    // Cancello i Task
    methods: {
        deleteTask(id) {
            this.tasks = this.tasks.filter(task => id !== task.id)
        },
        // Aggiungo un nuovo Task
        addTask() {
            const newTask = {
                id: new Date().toISOString(),
                done: false,
                text: this.newTask
            }
            this.tasks.push(newTask)
            // Svuoto la stringa dopo averla inviata
            this.newTask = ''
        },
        toggleDone(id) {
            this.tasks.forEach(task => {
                if (id === task.id) {
                    task.done = !task.done
                }
            })
        }
    }
})

app.mount('#root');