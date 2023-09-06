import React from 'react';
import trash from './assets/trash.png';

function Todolist({setTodos, todos}) {

  const completetask = (id) => {
    setTodos(currentTodos => {
      return currentTodos.map(todo => {
        if (todo.id ===id){
          return {
          ...todo, completed:!todo.completed
        }
       
        }
        return todo
      })
    })
  }

  const deleteTask = (id) => {
    setTodos(currentTodos => {
     return currentTodos.filter(todo => todo.id !== id)
    })
  }
  return (
    <div>
      {todos.length === 0 && "No Todos" }
      {todos.map((todo) => (
        <li key={todo.id} className='flex my-7 text-white bg-background rounded-lg py-2 mb-5'> 
        {/* 
<div onClick={() => completetask(todo.id)} className='w-5 h-5 rounded-full border-blue-200 border'></div>
*/}

          <label className={`   ml-6 ${todo.completed ? 'line-through' : ''}`}>
  <div onClick={() => completetask(todo.id)}>{todo.title}</div>
</label>

          <img onClick={() => deleteTask(todo.id)} className='ml-auto' src={trash} height={20} width={24} />
        </li>
      ))}
    </div>
  )
      }


export default Todolist;
