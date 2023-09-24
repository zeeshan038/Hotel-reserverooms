import React from 'react'
import '../styles/Testimoials.css'
import Slider from 'react-slick';
import TestimonialCards from './TestimonialCards';
import { test_data } from '../Testimonial';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
function Testimonials() {
  
  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 3,
    initialSlide: 0,
  
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
     
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        
        }
      },
      {
        breakpoint: 280,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
    
        }
      }
    ]
  };
  return (
    
<div  className='testimonials'>
  <div className="test-main-content-container">
      <h2 className='test-heading'>TESTIMONIALS</h2>
      <p className='test-para'>A small river named Duden flows by their 
      place and supplies it with the necessary regelialia. It is a paradisematic country,
       in which roasted parts of sentences fly into your mouth</p>
       </div>
      <div className='slider-container'> 
      <Slider {...settings}>
        {test_data.map((item, index) => (
          <div key={index} className='Container'>
            {/* Use the TestimonialCards component to display testimonial data */}
            <TestimonialCards item={item} />
          </div>
        ))}
      </Slider>
      </div>
    </div>
  )
}

export default Testimonials
