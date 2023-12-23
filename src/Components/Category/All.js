import React, { useEffect, useState } from 'react';
import BookCard from '../BookCard/BookCard';


const All = () => {
  const [products,setproducts] = useState([]);
  
  useEffect(()=>{
      
      const fetcheddata = async()=>{
          try {
            const response = await fetch("https://book-server-host.onrender.com//products/all");
            const data = await response.json();
            console.log(data)
            setproducts(data);
          } catch (error) {
            console.log(error);
          }
      }
      fetcheddata(); 
  },[])
  return (
    <>
      {
        
        products.map(product=>(
          <BookCard
          key={product._id} // Make sure to use a unique key for each item in the list
          id={product._id}
          imgurl={product.image}
          title={product.title}
          price={product.price}
        />
        ))
      }
      
     
     

    </>
  )
}

export default All