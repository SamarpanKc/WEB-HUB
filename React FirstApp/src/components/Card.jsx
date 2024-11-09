import React from 'react'
import "./Card.css"

const Card = (props) => {
  return (
    <div className='card'>
        <h2>{props.title}</h2>
        <p>{props.description}</p>
        <button>Do it Now</button>
    </div>
  )
}

export default Card