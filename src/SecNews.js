import React from 'react';
import SmallCard from './SmallCard';
import BigCard from './BigCard';
import './secnews.css';
import SecNewsHeader from './SecNewsHeader';

const SecNews = () => {
    return (
        <div className="sec-news-container">
            <div>
                <SecNewsHeader />
            </div>
            <div className="content-row">
                <div className="left-column">
                    <BigCard text="לוחמים פשטו על עשרות מתחמי רקטות" />
                </div>
                <div className="right-column">
                    <SmallCard text='test1' />
                    <SmallCard text='test2' />
                    <SmallCard text='test3' />
                    <SmallCard text='test4' />
                </div>
            </div>
        </div>
    );
};

export default SecNews;
