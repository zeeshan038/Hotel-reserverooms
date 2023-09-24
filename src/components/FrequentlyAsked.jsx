import React from 'react'
import '../styles/Faqs.css'
import Faqs from './Faqs'
function FrequentlyAsked() {
    const faq= [
         {
            question : "Is it free?",
            answer : `Far far away, behind the word mountains, far from the 
            countries Vokalia and Consonantia, there live the blind texts.`
         },
         {
            question : 'How to book it?',
            answer : `Far far away, behind the word mountains, far from the 
            countries Vokalia and Consonantia, there live the blind texts.`
         },
    ]
  return (
  
    <div>
    <div className="faqs">
      <h1>Frequently asked  question</h1>
      <div className='faq-list'>
        {faq.map((faq, index) => (
          <Faqs key={index} question={faq.question} answer={faq.answer} />
        ))}
      </div>
    </div>
  </div>
  )
}

export default FrequentlyAsked
