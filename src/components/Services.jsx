import React from 'react'
import '../styles/Services.css'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import Card from './Card';
import { card_data } from '../data';
import Footer from './Footer';
function Services() {
  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
    initialSlide: 0,
    
    
    responsive: [
      {
        breakpoint: 1350, // Breakpoint for desktop screens
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        }
      },
     
      {
        breakpoint: 1024, // Breakpoint for desktop screens
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        
        }
      },
    
    
      {
        breakpoint: 768, // Breakpoint for tablet screens
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          
        }
      },

      {
        breakpoint: 680, // Breakpoint for mobile screens
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
       
          
        }
      },
      {
        breakpoint: 580, // Breakpoint for mobile screens
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
   
        }
      }
    ]
  };
  
  
  return (
    <div className='Services'>

    <div className="slider-container">

        <div className='services-container'>
          <h1 className='service-heading'>OUR SERVICES </h1>
        </div>
     <Slider {...settings}>


        {card_data.map((item,index)=>{
            return (
                <React.Fragment key={index}>
                    <Card item={item}/>
                </React.Fragment>
                )

        })}
      
     

         

     </Slider>
  </div>
  
  </div>
  )
}

export default Services
