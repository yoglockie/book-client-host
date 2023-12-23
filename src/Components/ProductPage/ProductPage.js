import React from 'react'
import './ProductPage.css'
import { useLocation,Link} from 'react-router-dom';
import { useCartContext } from '../../context/cartcontext';
const ProductPage = () => {
  const {addToCart}=useCartContext();
  const location = useLocation();
  const propsdata=location.state;

  console.log(propsdata);
  return (
    
    <div className='parent'>
        <div className='ppage'>
         <div className="left-container">
               <img src={propsdata.imgurl} alt="" />
         </div>
         <div className="right-container">
              <h1>{propsdata.title}</h1> 
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro consequatur dolore quas voluptates mollitia sunt.</p>
              <p>${propsdata.price}</p>
              <div className="rating">⭐⭐⭐⭐</div>

              <Link 
              to='/cart'
              onClick={()=>addToCart(propsdata.id,propsdata.title,propsdata.imgurl,propsdata.price,1)}
              >
                <button>Add to cart</button>
              </Link>
         </div>
        </div>

        <div className='lpage'>
        
         
             <img src={propsdata.imgurl} alt="" />
              <h1>{propsdata.title}</h1> 
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro consequatur dolore quas voluptates mollitia sunt.</p>
              <p>${propsdata.price}</p>
              <div className="rating">⭐⭐⭐⭐</div>

              <Link 
              to='/cart'
              onClick={()=>addToCart(propsdata.id,propsdata.title,propsdata.imgurl,propsdata.price,1)}
              >
                <button>Add to cart</button>
              </Link>
         
        </div>

        </div>
  )
}
export default ProductPage