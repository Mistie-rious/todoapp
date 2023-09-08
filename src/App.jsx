import { useState, useEffect } from 'react'
import left from './assets/arrowleft.png'
import right from './assets/arrowright.png'
import moment from 'moment';
import './App.css'
import Todoform from './Todoform'
import Todolist from './Todolist'

function App() {
  const [count, setCount] = useState(0)
    const currentDate = moment();
    const formattedDate = currentDate.format('MMMM Do YYYY, h:mm:ss a');
 

  const [todos, setTodos] = useState(() => {
    const localValue = localStorage.getItem("ITEMS")
    if (localValue == null) return []
    return JSON.parse(localValue)
  })
  useEffect(() => {
    localStorage.setItem("ITEMS", JSON.stringify(todos))
  }, [todos])

  return (
    <>
   <div className='flex min-h-screen justify-center max-h-fit bg-background items-center'>
  <div className='bg-white w-fit h-fit px-10 py-10 rounded-3xl text-center'>
    <div className="flex justify-around">
    
    <div className='flex flex-col'>
      <h1 className='text-bluetext font-semibold'>To Do List</h1>
      <div className='text-bluetext mb-6' >{formattedDate}</div>
      
      </div>
      
    </div>
   
    <Todoform todos={todos} setTodos={setTodos}/>

 
  </div>
</div>


    </>
  )
}

export default App
