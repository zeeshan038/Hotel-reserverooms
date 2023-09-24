import React, { useState } from 'react'


function Faqs({question, answer}) {
  
    const [open , setOpen]= useState(false);
    const handleToggle =  function(){
        setOpen(!open);
    }

  return (
    <div className='faq-container'>   

        <div className={`faq_question ${open ? 'open' : ''} `} onClick={handleToggle}>
              <div className='question'> {question}
          
              </div>
              <div className='symbol'> {open ? '-' : '+'}
             
              </div>
        </div>
   {open && <div className='faq-answer'>{answer}</div>}

    </div>
  )
}

export default Faqs
