import React, { useState } from 'react'
import "./Register.css";
import axios from "axios";
import {Link, useNavigate} from 'react-router-dom'
const Register = () => {
   
    const navigate = useNavigate();
    const [name,setName]=useState('');
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    
    async function submit(e) {
        
        e.preventDefault();
        try {
            const res =await axios.post("https://book-server-host.onrender.com//products/signup",{name,email,password});
            console.log(res);
            if (res.data.errors) {
              // Handle validation errors here
              const errorMessages = res.data.errors.map(error => error.msg);
              alert(errorMessages.join('\n'));
            }
            else if(res.data=="alreadyexist")
              {
                alert("Email already exist");
              }
              else if(res.data=="added")
              {          
                    alert("Account created please login !!"); 
                    navigate("/");
              }
           
        } catch (error) {
            console.log(error);
        }
    
    }

    return (
    <div className='body'>
      <div class="wrapper">
    <h2>Registration</h2>
    <form action="#">
      <div class="input-box">
        <input type="text" placeholder="Enter your name" onChange={(e)=>{setName(e.target.value)}} required/>
      </div>
      <div class="input-box">
        <input type="text" placeholder="Enter your email" onChange={(e)=>{setEmail(e.target.value)}} required/>
      </div>
      <div class="input-box">
        <input type="password" placeholder="Create password" onChange={(e)=>{setPassword(e.target.value)}} required/>
      </div>
      
      
      <div class="input-box button">
        <input type="Submit" value="Register Now" onClick={submit}/>
      </div>
      <div class="text">
        <h3>Already have an account? <Link to="/login">Login now</Link></h3>
      </div>
    </form>
  </div>
    </div>
  )
}

export default Register
