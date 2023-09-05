import React from 'react'
import trash from './assets/trash.png'
function Todolist({task, todos}) {
  return (
    <div>
        
        {todos.map(todos =>{
          return [
            <li key={todos.id} className='flex  my-7 mb-5  '>
            <div className=' w-5 h-5 rounded-full border-blue-200 border'></div>
            <input type='checkbox' checked={todos.completed} className='ml-6'>{todos.title}</input>
            <img className='ml-auto' src={trash} height={20} width={24} />
            
            </li>
       
          ]
        })}
      

    </div>
  )
}

export default Todolist