import React from 'react'
import '../styles/Home.css'
import  {BsFillPersonLinesFill} from 'react-icons/bs'
import Services from './Services'
import Image from './Image'
import FrequentlyAsked from './FrequentlyAsked'
import Testimonials from './Testimonials'
import Footer from './Footer'
function Home() {
  return (
    <div>
        <div className='home'>
       
          <h2 className="home-main-text"> 
            Once a year go  someplaces <br /> you've  
             never  been before
          </h2>
          <button className='see-video'>see video</button>
        </div>
         <form className="checkin-form">
           <div className="labels">
          <div className='arrival'>
            <label >Arrival date:</label>
        <input type="date" className='Arrival-date' placeholder='Date Arrival'/>
        </div>
        <div className='departure'>
          <label > Departure date</label>
        <input type="date" className='Departure-date' name='departure-date' placeholder='Date Departure' />

        </div>
        <div className='persons'>
         <label htmlFor="">Persons</label>
          <select name="" id="" className='noofPersons'>
            <option value=""># of person</option>
            <option value="">1</option>
            <option value="">2</option>
            <option value="">3</option>
            <option value="">4</option>
          </select>   
          </div>
    <button className="find-now">Find Now</button>
          </div>
          </form> 
          <Services/>
          <Image/>
        <FrequentlyAsked/>
        <Testimonials/>
        <Footer/>

    </div>
  )
}

export default Home
