import React, { useState } from 'react'
import "./Login.css";
import axios from "axios";
import {useNavigate,Link} from 'react-router-dom'
const Login = () => {
   const navigate = useNavigate();
   const [email,setEmail]=useState("");
   const [password,setPassword]=useState("");
   
   async function submit(e) {
              e.preventDefault();
              try {
                 const response = await axios.post("http://localhost:8080/products/login",{email,password});
                
                 if(response.data=="exist")
                 {
                    navigate("/");
                 }
                 else if(response.data=="invalid")
                 {
                    alert("Password Invalid");
                 }
                 else if(response.data=="notexist")
                 {
                    alert("Account doesn't exist");
                 }
               
              } catch (error) {
                  console.log(error);
              }
   }
  return (
    <div className='body'>
           <div class="wrapper">
         <div class="title">
            Login Form
         </div>
         <form action="#">
            <div class="field">
               <input type="text" onChange={(e)=>{setEmail(e.target.value)}} required/>
               <label>Email Address</label>
            </div>
            <div class="field">
               <input type="password" onChange={(e)=>{setPassword(e.target.value)}} required/>
               <label>Password</label>
            </div>
            <div class="content">
               <div class="checkbox">
                  <input type="checkbox" id="remember-me"/>
                  <label for="remember-me">Remember me</label>
               </div>
               
            </div>
            <div class="field">
               <input type="submit" value="Login" onClick={submit}/>
            </div>
            <div class="signup-link">
               Not a member? <Link to="/register">Signup now</Link>
            </div>
         </form>
      </div>
    </div>
  )
}

export default Login
