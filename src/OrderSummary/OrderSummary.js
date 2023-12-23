import React from 'react';
import "./OrderSummary.css";
import { useCartContext } from '../context/cartcontext';
import { useLocation, useNavigate } from 'react-router-dom';



const OrderSummary = () => {

  const location = useLocation();
  const propsdata=location.state;
  const navigate = useNavigate();
  const {cart,total_price} = useCartContext();
  

  const loadScript=(src)=>{
      return new Promise((resolve)=>{
        const script = document.createElement('script')
        script.src = src;

        script.onload =()=>{
          resolve(true)
        }
        script.onerror =()=>{
          resolve(false)
        }

        document.body.appendChild(script);
      })
  }

  const displayRazorpay=async()=>{
         const res = await loadScript('https://checkout.razorpay.com/v1/checkout.js')

         if(!res)
         {
           alert('Failed to load. Try Again !!');
           return
         }

         const options = {
          key:"rzp_test_1y7gcpEMsogt5N",
          currency:"INR",
          amount:"207200",
          name:propsdata.name,
          description:"Thanks for purchase",
          image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKn2voLX6l8xo_rILZYc4dXoLspHRJJ4y4owzNoHne&s",
          handler: function (response) {
            // alert(response.razorpay_payment_id);
            // alert("Payment successful");
            navigate('/success',{state:propsdata})
          },
          prefill:{
            name:"Lokesh Yogi",

          }

         }
       const paymentObject = new window.Razorpay(options);
       paymentObject.open()
  }

  return (
    <div className="order-summary-container">
      <div className="user-info">
        <h2>User Information</h2>
        <p><strong>Name:</strong> {propsdata.name}</p>
        <p><strong>Email:</strong> {propsdata.email}</p>
        <p><strong>Mobile:</strong> {propsdata.mobile}</p>
        <p><strong>Address:  </strong>{propsdata.address}</p>
      </div>

      <div className="products-info">
        <h2>Products Information</h2>
        <table>
          <thead>
            <tr>
              <th>Product Name</th>
              <th>Quantity</th>
              <th>Total Price</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((product, index) => (
              <tr key={index}>
                <td>{product.title}</td>
                <td>{product.amount}</td>
                <td>${product.amount * product.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="total-amount">
        <h2>Total Amount</h2>
        <p><strong>Total:</strong> ₹{total_price*80}</p>
      </div>
      
      <button className="pay-button" onClick={displayRazorpay}>Pay Now</button>
    </div>
  );
}

export default OrderSummary;