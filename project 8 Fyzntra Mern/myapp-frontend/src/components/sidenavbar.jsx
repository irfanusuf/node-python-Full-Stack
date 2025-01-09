import React from 'react'
import "./sidenavbar.css"
import { Link } from "react-router-dom"

const sidenavbar = () => {
  return (
    <div className='sidenavbar'>
        <div className='brand-name'>

            <h1>AFFORDABLE</h1>
            <h1>ELEGANCE</h1>
            
            






        </div>
        <input type='text' placeholder='Search'/>


        <button>Search</button>
        
        
        
        <ul>

        <li>Home</li>
        <hr />
        <li> 
          <Link to='./login'>Login</Link>

        </li>
        
        <hr />

        <li>About</li>
        <hr />
        <li>
        <Link to='./contact'>Contact</Link>


        </li>
        <hr />
        <li>Blogs</li>
        <hr />
    



        </ul>

           

    









    </div>
  )
}

export default sidenavbar