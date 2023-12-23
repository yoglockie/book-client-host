import React from 'react'
import "./Cart.css"
import { useCartContext } from '../../context/cartcontext';
import CartItem from './CartItem';
import {Link} from 'react-router-dom';
const Cart = () => {
    
  const {cart,clearCart,total_price} = useCartContext();
  console.log(cart);

  if(cart.length===0)
  {
      return  <div className="parent">
      <div className="container">
           <h1>Shopping Cart 🛒</h1>
           <hr />
           <h5>No items in cart</h5>
                 <div className="item">
                    <Link to="/home"><button>Home</button></Link>
                 </div>
      </div>
 </div>
  }
  return (
      <div className="parent">
           <div className="container">
                <h1>Shopping Cart 🛒</h1>
                <div className="item">
                   <strong><h4>Image</h4></strong>
                   <strong><h4>Title</h4></strong>
                   <strong><h4>Quantity</h4></strong>
                   <strong><h4>Delete</h4></strong>
                   <strong><h4>Total Amount</h4></strong>
                </div> 
                <hr />
                <div>
                {
                    cart.map((item)=>{
                      return  <CartItem id={item.id} title={item.title} price={item.price} imgurl={item.imgurl} amount={item.amount}/>
                    })
                }
                </div> 
                 
                 <hr />
                 <div className="item-end">
                    <Link to="/home"><button>Home</button></Link>
                    <button onClick={clearCart}>Clear Cart</button>
                    <h4>Total price : ${total_price}</h4>
                    <Link to="/orderform"><button id='checkout'>Checkout</button></Link>
                    
                 </div>
                 <div className="ritem-end">
                    <div className='rritem-end'>
                    <Link to="/home"><button>Home</button></Link>
                    <button onClick={clearCart}>Clear Cart</button>
                    </div>
                    <div className='rritem-end'>
                    <h4>Total price : ${total_price}</h4>
                    <Link to="/orderform"><button id='checkout'>Checkout</button></Link>
                    </div>
                    
                 </div>
           </div>
      </div>
  )
}

export default Cart