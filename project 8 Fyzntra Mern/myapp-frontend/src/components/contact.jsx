import React from 'react'
import "./contact.css"
import { RiCloseCircleFill } from "react-icons/ri";

const contact = () => {
  return (
    <div className='contact-page'>

       <div className='cb'><RiCloseCircleFill /></div>

    
        <h1>Contact Us</h1>
        
        <form className='cp'>
            <label>Name</label>
            <input type="name"placeholder='ENTER YOUR NAME'/>
            <label>Email</label>
            <input type='email'placeholder='ENTER YOUR EMAIL'/>
            <label>Queries</label>
            <textarea type="queries"placeholder='ENTER YOUR QUERIES'/>

              <button>SUBMIT</button>






        </form>











    </div>
  )
}

export default contact