// SuccessPage.js
import React, { useRef } from 'react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import OrderSummary from './OrderSummary/OrderSummary';
import "./Success.css";
import { useCartContext } from './context/cartcontext';
import { useLocation , Link} from 'react-router-dom';
const SuccessPage = () => {

  const location = useLocation();
  const propsData = location.state; 
  const {cart,total_price,clearCart}=useCartContext();
  const pdfRef = useRef(null);
  
  const handleDownload=()=>{

       const input = pdfRef.current;
       html2canvas(input).then((canvas)=>{
         const imgData = canvas.toDataURL('image/png');
         const pdf = new jsPDF('p','mm','a4',true);
         const pdfWidth= pdf.internal.pageSize.getWidth();
         const pdfHeight= pdf.internal.pageSize.getHeight();
         const imgWidth = canvas.width;
         const imgHeight = canvas.height;
         const ratio = Math.min(pdfWidth/imgWidth,pdfHeight/imgHeight);
         const imgX = (pdfWidth-imgWidth*ratio)/2;
         const imgY = 30;
         pdf.addImage(imgData,'PNG',imgX,imgY,imgWidth*ratio,imgHeight*ratio);
         pdf.save('bill.pdf');
       })
     clearCart();  
  }
  
  return (
    <div id='loki' >
      <div >
      <h2>Payment Successful</h2>
      <p>Thank you for your purchase!</p>
      </div>
      <div className="order-summary-container" ref={pdfRef}>
      <div className="user-info">
        <h2>User Information</h2>
        <p><strong>Name:</strong>{propsData.name}</p>
        <p><strong>Email:</strong> {propsData.email}</p>
        <p><strong>Mobile:</strong> {propsData.mobile}</p>
        <p><strong>Address:  </strong>{propsData.address}</p>
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
        <p><strong>Total:</strong> ${total_price}</p>
      </div>

      
    </div>
      
      <Link to='/home'><button onClick={handleDownload}>Download PDF</button></Link>
    </div>
    
  );
};

export default SuccessPage;