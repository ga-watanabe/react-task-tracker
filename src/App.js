import { useState } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'

function App() {
  const [tasks, setTasks] = useState(
    [
      {
        id: 1,
        text: 'text 1',
        day: '2022-01-01',
        reminder: false
      },
      {
        id: 2,
        text: 'text 2',
        day: '2022-02-02',
        reminder: true
      },
      {
        id: 3,
        text: 'text 3',
        day: '2022-03-03',
        reminder: false
      }
    ]
  )

  const addTask = (task) => {
    const id = Math.floor(Math.random() *10000) + 1
    const newTask = { id, ...task }

    setTasks([...tasks, newTask])
  }

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  const toggleReminder = (id) => {
    setTasks(tasks.map((task) => task.id === id
      ? { ...task, reminder: !task.reminder } : task)
    )
  }

  return (
    <div className="container">
      <Header title="Task Tracker" />
      <AddTask onAdd={addTask} />
      {tasks.length > 0 ?
        <Tasks
          tasks={tasks}
          onDelete={deleteTask}
          onToggle={toggleReminder} />
        : 'No Task'
      }
    </div>
  );
}

export default App;
