import { useState } from 'react'
import left from './assets/arrowleft.png'
import right from './assets/arrowright.png'

import './App.css'
import Todoform from './Todoform'
import Todolist from './Todolist'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   <div className='flex h-screen justify-center bg-background items-center'>
  <div className='bg-white w-1/3 h-700 px-10 py-10 rounded-xl text-center'>
    <div className="flex justify-around">
    
    <div className='flex flex-col'>
      <h1 className='text-bluetext font-semibold'>MONDAY,</h1>
      <div className='text-bluetext mb-6' >31st September</div>
      
      </div>
      
    </div>
   
    <Todoform/>

 
  </div>
</div>


    </>
  )
}

export default App
