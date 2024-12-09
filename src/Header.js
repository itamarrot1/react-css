import React from 'react';
import './header.css';
import { SunIcon, CalendarIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import logo from './assets/logo.jpg'
import vector from './assets/Vector.png'
const Header = () => {
  return (
    <div className="header-container">
      {/* Desktop Header */}
      <div className="header-desktop">
        <div className="head-features">
          <input className="head-features" type="text" placeholder="חיפוש באתר" />
          <button className="head-features">
            <MagnifyingGlassIcon style={{ width: '15px', height: '15px' }} />
          </button>
        </div>

        <div className="head-features">
          י״ט אייר התשפ״ד | 27/05/2024
          <CalendarIcon style={{ width: '20px', height: '20px' }} />
        </div>

        <div className="head-features">
          בני ברק: 26
          <SunIcon style={{ width: '20px', height: '20px' }} />
        </div>

        <button className="but-news">+ מבזקים</button>
      </div>

      {/* Mobile Header */}
      <div className="header-mobile">
        <div className="mobile-title">
          <button style={{marginRight:'40px', background: 'rgba(219, 0, 11, 1)', borderRadius: '10px'
}}><img src={vector}></img></button>
          <img src={logo}>
          </img>
        </div>
        <button className="mobile-menu-button">☰</button>
      </div>
    </div>
  );
};

export default Header;
