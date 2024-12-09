import React, { useState } from 'react';
import logo from './assets/logo.jpg';
import './sec-header.css'
import { ArrowLeftIcon } from '@heroicons/react/24/outline';

const categories = [
  { name: 'ראשי', link: '/' },
  { name: 'חדשות', link: '/news' },
  { name: 'ספורט', link: '/sports' },
  { name: 'כלכלי', link: '/economy' },
  { name: 'כלכלי', link: '/economy' },
  { name: 'כלכלי', link: '/economy' },
  { name: 'כלכלי', link: '/economy' },
  { name: 'כלכלי', link: '/economy' },
  { name: 'כלכלי', link: '/economy' },
  {name:'כלכלי' , link:'/economy'},
  {name:'כלכלי' , link:'/economy'},
  {name:'כלכלי' , link:'/economy'},
  {name:'כלכלי' , link:'/economy'},
  {name:'כלכלי' , link:'/economy'},
]

const SecHeader = () => {

  const [scrollpos, setscrollpos] = useState(0)

  const scrolling = (num) => {
    setscrollpos((prev) => Math.min(90, prev + num))
  }

  return (
    <div className='s'>
      <div className='sec-header-container'>
        <button onClick={() => scrolling(30)} className='scroll-button'><ArrowLeftIcon style={{ color: 'red', width: '15px', height: '15px', strokeWidth: '3' }} /></button>
        <div className='menu-container' >
          <ul className='categories-list' style={{ transform: `translateX(${scrollpos}px)` }}>
            {categories.map((category, index) => (
              <li key={index}>
                <a href={category.link} className="category-link">
                  {category.name}
                </a>
              </li>
            ))}





          </ul>
        </div>
        <img className='img' src={logo} alt="des"></img>
      </div>
    </div>
  )
}

export default SecHeader