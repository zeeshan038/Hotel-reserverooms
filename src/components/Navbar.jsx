import React from 'react'
import { Link } from 'react-router-dom'
import {FiPhoneCall} from 'react-icons/fi'
import {GiHamburgerMenu,GiTireIronCross} from 'react-icons/gi'
import '../styles/Navbar.css'
import { useState } from 'react'
function Navbar() {

  
    const [nav , setnav] = useState(false);

     const handleNav= ()=>{
        setnav(!nav);
     }
  return (
   
    <div>
      
     <nav className='navbar'>
          <h1 className="logo">Hotel</h1>
        
         <ul className={nav ?  " active" : "ul"}>

            <Link to='/' className='link'>Home</Link>
            <Link to='/Destination' className='link'>Destination</Link>
            <Link to='/service' className='link'>Service</Link>
            <Link to='/About' className='link'>About</Link>
            <Link to='/Contact' className='link'>Contact</Link>
         </ul>
          <Link to="#" onClick={handleNav} className='burgur'>{nav ? <GiTireIronCross color='black'/> : <GiHamburgerMenu/>}</Link>
         
         <div className="call-icon">
         <FiPhoneCall/>

         </div>
     </nav>


    </div>
  )
}

export default Navbar
