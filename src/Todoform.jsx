import React, { useState } from 'react'
import Todolist from './Todolist'
import { v4 as uuidv4, v4 } from 'uuid';

function Todoform() {
    const [task, setTask] = useState([])
    console.log(task)
    const [todos, setTodos] = useState([])

    const handleSubmit = (e) => {
        e.preventDefault();
        setTodos((currentTodos) => {
          return [
              ...currentTodos,
              {id:v4(), title:task, completed:false} ,
             ]
          
        })
    }

   
  return (
    <div>
      <form onSubmit={handleSubmit}>
           <div className='flex justify-between' >
      <span>0 tasks</span>
      <input type='text' placeholder='Add a new task...' value={task} onChange={(e) => setTask(e.target.value)} className='bg-slate-500 w-1/2'></input>
      <button >Add new</button>
    </div>
    <Todolist task={task} todos={todos}/>
    </form>
    </div>
  )
}

export default Todoform