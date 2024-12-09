import React from 'react';
import mainImg from './assets/mainImg.jpg'; 
import flags from './assets/flags.jpg';
import arabs from './assets/arabs.jpg'
import amalah from './assets/amlah.jpg'
import './main-news.css';

const MainNews = () => {
  return (
    <div className="main-news-container">
      {/* Top row with image and article text */}
      <div className="top-row">
        <img className="main-img" src={mainImg} alt="Main" />

        <div className="main-artical-text">
        <a href='/test' style={{textDecoration:'none',color:'inherit'}}>
          <h1>קרבות עזים<span style={{color:'rgba(219, 0, 11, 1)'}}>:</span> מיליון איש נמלטו מרפיח - טנקים במרכז העיר</h1>
          טנקים ישראלים הגיעו למרכז העיר רפיח. תושבים סיפרו כי בעיר מתחוללים קרבות עזים בין כוחות צה"ל לפעילי חמאס והג'יהאד האיסלאמי. חטיבות הצנחנים וחטיבה 7 חיסלו מחבלים ואיתרו אמצעי לחימה במרחב
        </a>
        </div>
      </div>

      {/* Bottom row with additional content */}
      <div className="bottom-row">

        
        <div className='bottom-row-card'>
        <img className="bottom-row" src={flags}></img>
        <h3>"דיון משמעותי" של שרי האיחוד על סנקציות נגד ישראל</h3>
        שרי החוץ של האיחוד האירופי דנו לראשונה באפשרות של הטלת סנקציות על ישראל, אם היא לא תפעל בהתאם להחלטות בית הדין הבינלאומי לצדק בהאג: "ישראל חייבת לציית לפסיקה"
        </div>

        
        <div className='bottom-row-card'>
            <img className='bottom-row' src={arabs}></img>
            <h3>דיווח: זה מה שגרם לשריפה הענקית ברפיח</h3>
            בישראל עדכנו את ארה"ב שההערכה היא שרסיס מהתקיפה ברפיח פגע במיכל דלק שעמד במרחק של כ-100 מטרים שהצית את השרפה באוהלי העקורים
            </div>

            <div className='bottom-row-card'>
        <img className='bottom-row' src={amalah}></img>
        <h3>הלוחמים איתרו אמצעי לחימה רבים וחיסלו מחבלים במנהרות</h3>
        איתור מאות אמצעי לחימה, השמדת מתחם שיגור רקטות ותשתיות טרור. תיעוד מלחימת צוות הקרב של חטיבת הנח"ל ברפיח
      </div>
      </div>




</div>
  );
};

export default MainNews;
