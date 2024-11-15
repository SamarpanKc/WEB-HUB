import { useState } from 'react'
import './App.css'

function App() {
  const [todos, settodos] = useState([{
    title: 'Hello World',
    desc: 'Starting ToDo List'
  },
  {
    title: 'Learn React',
    desc: 'Learn the fundamentals of React'
  },
  {
    title: 'Create ToDo List',
    desc: 'Create a simple ToDo list app'
  }
])

  return (
    <>
    <div className="top font-sans font-bold text-4xl ">Todo Lists</div>
      {todos.map(todo=>{
        return <div key={todo.title} className="todo font-sans font-semibold bg-red-400 m-4 p-4 border-2 rounded-lg border-white-400 ">
          <div className="todo">{todo.title}</div>
          <div className="todo">{todo.desc}</div>
        </div>
        
      })}
    </>
  )
}

export default App
