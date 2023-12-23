import React, { useState } from 'react'
import "./OrderForm.css"
import {Link} from 'react-router-dom';

const OrderForm = () => {
   const [formData,setformdData]=useState({
    name:"",
    email:"",
    mobile:"",
    address:"",
   }) 

   const handleChange=(e)=>{
       console.log(e);
       setformdData({...formData, [e.target.name]: e.target.value })
   }
  return (
     <div className='body'>
         <div class="form-container">
    <h2>Checkout</h2>
    <form action="#" method="post">
        <div class="form-group">
            <label for="name">Name:</label>
            <input 
              type="text" id="name" name="name" 
              value={formData.name}
              onChange={handleChange}
              required/>
        </div>

        <div class="form-group">
            <label for="email">Email:</label>
            <input 
              type="email" id="email" name="email" 
              value={formData.email}
              onChange={handleChange}
              required/>
        </div>

        <div class="form-group">
            <label for="mobile">Mobile Number:</label>
            <input 
              type="tel" id="mobile" name="mobile" pattern="[0-9]{10}" 
              value={formData.mobile}
              onChange={handleChange} 
              required/>
        </div>

        <div class="form-group">
            <label for="address">Address:</label>
            <textarea 
              id="address" name="address" rows="4" 
              value={formData.address}
              onChange={handleChange}
              required ></textarea>
        </div>

       <Link 
         to="/ordersummary"
         
           state={{
                 
                 name:formData.name,
                 mobile:formData.mobile,
                 email:formData.email,
                 address:formData.address,
                }}
         > <button type="submit">Proceed to Payment</button></Link>
    </form>
</div>
     </div> 
     
  )
}

export default OrderForm