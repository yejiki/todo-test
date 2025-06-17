import { useState } from 'react'
import viteLogo from '/favicon.png'
import './App.css'
import TodoAdd from './component/TodoAdd'
import Todolist from './component/TodoList'

const mockdata = [
  {
    id : 0,
    content : "abc"
  } 
]

function App() {
  
  const parsedData = JSON.parse(localStorage.getItem("todos")); 

  const [todos, setTodos] = useState(parsedData || []);

  localStorage.setItem("todos", JSON.stringify(todos));

  const onCreate = (content) => {
    const newTodo = {
      id : Date.now(),
      content : content
    }
    setTodos([...todos, newTodo]);
  }

  const onDelete = (targetID) => {
    setTodos(todos.filter((item) => {
      return item.id !== targetID
    }));
  }

  
  return (
    <>
      <div id="wrap">

        <h1>TODO LIST</h1>

        <TodoAdd onCreate={onCreate} />

        <Todolist onDelete={onDelete} todos={todos} />

      </div>
      
    </>
  )
}

export default App
