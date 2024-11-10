import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(1)

  return (
    <>
    <div>{count} is odd Number</div>
    <button onClick={()=>{setCount(count+2)}}>Next Number</button>
    </>
  )
}

export default App
