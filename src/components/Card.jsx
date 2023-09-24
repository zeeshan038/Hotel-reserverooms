// Card.js
import React from 'react';


function Card({ item }) {
    return (
        <div className='card-slider'>
            <div className="card">
                <div className="card-content">
                    <img src={item.src} alt=''  />
                    <h2>{item.heading}</h2>
                    <p>
                        {item.p}
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Card;
