import { useState } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'

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

  return (
    <div className="container">
      <Header title="Task Tracker" />
      <Tasks tasks={tasks}/>
    </div>
  );
}

export default App;
