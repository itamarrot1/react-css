import React from 'react'
import dots from "./assets/_.jpg"
import { ArrowLeftIcon } from '@heroicons/react/24/outline'



const SecNewsHeader = () => {
  return (
    <div  className="sec-header" >

        <img src={dots}></img>
        <h3 style={{whiteSpace:'nowrap'}}>חרבות ברזל</h3>


        <button className='sec-header'>
        <ArrowLeftIcon className='sec-header-icon'
        style={{
        width:'20px' ,
        height:'20px',
        color:'rgba(219, 0, 11, 1)',
        strokeWidth:'3px'
          }}/>עוד במדור</button>

        </div>
  )
}

export default SecNewsHeader