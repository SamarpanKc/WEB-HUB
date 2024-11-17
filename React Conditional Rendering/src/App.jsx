import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [ShowBtn, setShowBtn] = useState(true)

  return (
    <>
    {ShowBtn?<button>Opps, I caught</button>:"Bye Bye!"} 
    
    {/* {ShowBtn && <button>Opps, I caught</button>} */}

    {/* if true show button  */}

    <div>
      
    <button onClick={()=>{setShowBtn(!ShowBtn)}}>
      ShowBtn</button>
     </div>
     
    </>
  )
}

export default App
