import React from 'react'
import  '../styles/Footer.css'
import { Link } from 'react-router-dom'
import {AiOutlineInstagram} from 'react-icons/ai'
import { BiLogoFacebook } from 'react-icons/bi'
import { AiOutlineTwitter } from 'react-icons/ai'
import { BiLogoWhatsapp } from 'react-icons/bi'

import { AiFillLinkedin } from 'react-icons/ai'


function Footer() {
  return (
    <div >
        <div className='footer'>
            <div className="left-side">
              <div className="footer-home">
                 <h4>home</h4>
                 <Link to="" className='footer-links'>About us</Link>
                 <Link to="" className='footer-links'>Places</Link>
                 <Link to="" className='footer-links'>Services</Link>
                 <Link to="" className='footer-links'>Destination</Link>
                 <Link to="" className='footer-links'>About us</Link>
              </div>
              <div className='footer-services'>
                <h4>Services</h4>
                <Link to='' className='footer-links'>Tour</Link>
                <Link to='' className='footer-links'>Swimming</Link>
                <Link to='' className='footer-links'>Kayak</Link>
                <Link to='' className='footer-links'>Surfing</Link>
              </div>
            </div>

            <div className="right-side">
    <div className='practice-area'>
        <h4>Practice Area
        </h4>
        <Link to='' className='footer-links'>Travel</Link>
        <Link to='' className='footer-links'>Popular places</Link>
        <Link to='' className='footer-links'>Destination</Link>
        <Link to='' className='footer-links'>Family Vacation</Link>
        <Link to='' className='footer-links'>Tour</Link>
    </div>
     <div className="footer-contact">
     <h4>Contact</h4>
        <p>University of peshawar</p>
         <Link to='' className='footer-links'>+923012631172</Link>
         
         <Link to='' className='footer-links'>muhammadxzeeshan@gmail.com</Link>
         <Link to='' className='footer-links'>+923479819738</Link>
  

             <div className="connect">
                <h4>Connect</h4>
                <div className='socail-icons'>
                  <div className='icon-container'>
                <AiOutlineInstagram className='icon'/>
                </div> 
                <div className='icon-container' >
                <BiLogoFacebook className='icon'/>
                </div>
                <div className='icon-container'>
                <AiOutlineTwitter className='icon'/>
                </div>
                <div className='icon-container'>
                <AiFillLinkedin className='icon'/>
                </div>
                <div className='icon-container'>
                <BiLogoWhatsapp className='icon'/>
                </div>
                </div>
                </div>
             </div>
            </div>



        </div>
      
    </div>
  )
}

export default Footer
