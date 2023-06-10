
import { useState } from 'react';
import './App.css'
import { Footer } from './components/Footer';
import { Header } from './components/Header'
import { TasksList } from './components/TasksList'

function App() {
const [tasks, setTasks] = useState(['tarea1'])

  return (
    <main style={{minWidth: '500px'}}>
    <Header setTasks={setTasks}/>
    <TasksList tasks={tasks}/>
    <Footer/>
    </main>
  )
}

export default App