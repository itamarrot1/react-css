import React from 'react'
import './smallcard.css'
import neshek from './assets/neshek.jpg'

const SmallCard = ({text}) => {
  return (
    <div className='small-card-container'>
        <img className='small-card-container' src={neshek}></img>
        <h4>{text}</h4>

    </div>
  )
}

export default SmallCard