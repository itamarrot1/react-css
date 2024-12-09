import React from 'react'
import "./bigcard.css"
import placeholder from './assets/placeholder.png'
import neshek from './assets/neshek.jpg'

const BigCard = ({text}) => {
  return (
    <div className='big-card-container'>
        <img className='big-card-container' src={neshek}></img>
        <h3>{text}</h3>
    </div>
  )
}

export default BigCard