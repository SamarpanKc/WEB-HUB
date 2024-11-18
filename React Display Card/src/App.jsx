import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [Cards, setCards] = useState([])

  const fetchData = async()=>{
    let d = await fetch('https://jsonplaceholder.typicode.com/posts')
    let data = await d.json()
    setCards(data)
  }

  useEffect(()=>{
    fetchData()
  })

  return (
    <>
      <div className="top font-bold md:text-2xl">Fetching API Datas into Cards</div>
      <div className="container grid md:grid-cols-4 justify-items-center sm:grid-cols-2">
        {Cards.map((data)=>{
          return <div key={data.title} className="data font-sans w-11/12 m-4 bg-zinc-800 border-2 rounded-lg border-zinc-700  cursor-pointer shadow-md hover:shadow-zinc-700 ">
            <div className="data mb-4 mx-2 text-left font-semibold">{data.id}</div>
            <div className="data mb-2 mx-2 leading-4 text-right font-semibold ">{data.title}</div>
            <div className="data mb-3 mx-2 leading-4 text-justify opacity-90">{data.body}</div>
          </div>
        })}
      </div>
    </>
  )
}

export default App