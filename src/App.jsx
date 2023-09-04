import { useState } from 'react'
import left from './assets/arrowleft.png'
import right from './assets/arrowright.png'
import trash from './assets/trash.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   <div className='flex h-screen justify-center bg-background items-center'>
  <div className='bg-white w-1/3 h-700 px-10 py-10 rounded-xl text-center'>
    <div className="flex justify-around">
    
    <div className='flex flex-col'>
      <h1 className='text-bluetext font-semibold'>MONDAY,</h1>
      <div className='text-bluetext' >31st September</div>
      
      </div>
      
    </div>
    <div className='flex  my-11 mb-11 justify-between   '>
      <button className='w-5 h-5 rounded-full border-blue-200 border'></button>
      <div className=''>Go jogging</div>
      <img src={trash} height={20} width={24} />
    </div>
    <div className='flex justify-between' >
      <span>0 tasks</span>
      <input className='bg-slate-500 w-1/2'></input>
      <button>Add new</button>
    </div>
 
  </div>
</div>


    </>
  )
}

export default App
