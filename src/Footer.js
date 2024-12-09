import React from 'react';
import './footer.css';
import './header.css'
import logo from './assets/logo.jpg';
import { CameraIcon, GlobeAltIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/react/24/outline';

const Footer = () => {
  return (
    <div className="footer-container">
              {/* Left Side */}
      <div className="left-side">
        <ul>
          <li>ראשי</li>
          <li>מלחמה</li>
          <li>כלכלי</li>
        </ul>
        <ul>
        <li>בריאות</li>
          <li>חדשות בעולם</li>
          <li>חרדים</li>
        </ul>
        <ul>
        <li>צור קשר</li>
          <li>תנאי שימוש</li>
          <li>מדיניות האתר</li>
        </ul>
      </div>



      <div className="right-side">
        {/* Logo */}
        <img src={logo} alt="Logo" />

        {/* Icons */}
        <div className="icons-container">
          <PhoneIcon style={{ width: '20px', height: '20px' }} />
          <CameraIcon style={{ width: '20px', height: '20px' }} />
          <PlayCircleIcon style={{ width: '20px', height: '20px' }} />
          <GlobeAltIcon style={{ width: '20px', height: '20px' }} />
        </div>
        <button className='but-news'> + מבזקים  </button>
      </div>
      <div className='left-side'>
        
      </div>
    </div>
  );
};

export default Footer;
