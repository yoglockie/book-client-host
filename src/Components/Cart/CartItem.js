import React, { useState } from 'react'
import "./Cart.css"
import { useCartContext } from '../../context/cartcontext';
const CartItem = (props) => {
    const {removeItem,setDecrease,setIncrease}=useCartContext();
    

  return <>
       <div className="item">
         <img src={props.imgurl} alt="" />
         <h5>{props.title}</h5>
         <div className="count">
          <button onClick={()=>setDecrease(props.id)}>-</button>
          <p>{props.amount}</p>
          <button onClick={()=>setIncrease(props.id)}>+</button>
         </div>
         <button id='del' onClick={()=>removeItem(props.id)}>Delete</button>
         <h4>${props.price*props.amount}</h4>
       </div>
       
       <div className="ritem">
         <div className='litem'>
            <img src={props.imgurl} alt="" />
            
         </div>
        <div className='rritem'>
          <h5>{props.title}</h5>
         <h4>${props.price*props.amount}</h4>
         <div className="count">
             <button className='id-btn' onClick={()=>setDecrease(props.id)}>-</button>
             <p>{props.amount}</p>
             <button className='id-btn' onClick={()=>setIncrease(props.id)}>+</button>
         </div>
         <button id='del' onClick={()=>removeItem(props.id)}>Delete</button>
        </div>
       </div>
  </>
  
}

export default CartItem