import React, { useState } from 'react'
import Todolist from './Todolist'
import { v4 as uuidv4, v4 } from 'uuid';

function Todoform({todos,setTodos}) {
  uuidv4();
    const [task, setTask] = useState("")
    console.log(task)
    

    const handleSubmit = (e) => {
        e.preventDefault();
        setTodos((currentTodos) => {
          return [
              ...currentTodos,
              {id:uuidv4(), title:task, completed:false} ,
             ]
             
        })
        setTask("")
    }

   
  return (
    <div>
      <form onSubmit={handleSubmit}>
           <div className='flex justify-between ' >
    
      <input type='text' placeholder='Add a new task...' value={task} onChange={(e) => setTask(e.target.value)} className='bg-slate-500 text-white w-fit px-1 mr-6'></input>
      <button className='bg-button px-3  text-white' >Add new</button>
    </div>
    <Todolist task={task} todos={todos} setTodos={setTodos} />
    </form>
    </div>
  )
}

export default Todoform