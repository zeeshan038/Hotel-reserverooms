import React from 'react'

function TestimonialCards( {item }) {
  return (
    <div >
    
        <div className="test-card">
          <div className='test-content'>
            <p  className='test-message'>{item.p}</p>
            <div className='test-info'>
                <img src={item.src} alt=""  className='test-img'/>
                <h4>{item.name}</h4>
            </div>
            </div>
        </div>
    </div>
  )
}

export default TestimonialCards
