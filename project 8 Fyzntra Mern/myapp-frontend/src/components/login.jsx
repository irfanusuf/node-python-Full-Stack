import React, { useState } from 'react'
import "./login.css"
import { AiOutlineCloseCircle } from "react-icons/ai";
import axios from 'axios';


const Login = () => {


  const[username,setUsername] = useState("")
  const[email, setEmail]=useState("")
  const[password, setpassword]=useState("")
  const[message , setMessage] =useState("something")
  const[showlogin, setshowlogin]=useState("true")
  const gotoSignUp=()=>{setshowlogin(!showlogin)}






const handlelogin =async (e) =>{

e.preventDefault()
  try {
    const formdata={email, password}
    const url= "http://localhost:4002/login"
    const response= await axios.post(url, formdata)
    console.log(response)


    setMessage(response.data.message)


  } catch (error) {
    console.log(error)
  }
}



  return (
    <div className='login-form'>


      {showlogin?
      
      (<form className='lf'>
      <div className='cross'><AiOutlineCloseCircle /></div>

        <h1>Login</h1>
        

         <label>Email</label>
         <input type="email"placeholder='ENTER YOUR EMAIL' value={email} onChange={(e)=>{setEmail(e.target.value)}} />
         <label>Password</label>
         <input type="password"placeholder='ENTER YOUR PASSWORD' value={password} onChange={(e)=>{setpassword(e.target.value)}} />



          <p style={{color :"red"}}> {message}</p>
         <button type='submit' onClick = {handlelogin}>login</button>






        </form>):( <form action="">

<h1>SignUp</h1>
<label>USERNAME</label>
<input type="text"placeholder='Enter Your Username Here' />
<label> EMAIL</label>
<input type="text"placeholder='Enter Your Email Here' />
<label>PASSWORD</label>
 <input type="password"placeholder='Enter Your Password Here' />

 <button>SignUp</button>

        </form>)}



       







    </div>
  )
}

export default Login