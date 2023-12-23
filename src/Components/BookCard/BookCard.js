import React from 'react'
import "./BookCard.css";
import {Link} from 'react-router-dom'
const BookCard = (props) => {
   
  return (
    <div className="card">
    <Link
     
     to="/productpage"
     state={{
            id:props.id,
            title:props.title,
            imgurl:props.imgurl,
            price:props.price,
     }}

     
     style={{textDecoration:"none"}}>
      <img src={props.imgurl} alt="Book 1"/>
      <h5>{props.title}</h5>
     <p className="price">$ {props.price}</p>
     {/* <div className="rating">⭐⭐⭐⭐</div> */}
    </Link>
     
    
    {/* <button className="add-to-cart">Add to Cart</button> */}
  </div>
  )
}

export default BookCard

// to="/productpage"

