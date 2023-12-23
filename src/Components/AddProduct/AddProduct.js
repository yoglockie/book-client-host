import React, { useState } from 'react'
import './AddProduct.css'
import axios from "axios";
const AddProduct = () => {
  const [formData,setformData]=useState({
    id:"",
    title:"",
    author:"",
    price:0,
    rating:0,
    image:"",
    category:""

  })
  const handleonChange=(e)=>{
       console.log(e);
       setformData({...formData,[e.target.name]:e.target.value});
  }
  const handleSubmit=async(e)=>{
       e.preventDefault();
       try {
          await axios.post("https://book-server-host.onrender.com//products/add",formData);

          setformData({
            id:"",
            title:"",
            author:"",
            price:0,
            rating:0,
            image:"",
            category:""
          })

          alert("Product added successfully");
       } catch (error) {
        console.error("Error adding product:", error);
        alert("Error adding product. Please try again later.");
       }
  }
  return (
    <div className='parent'>
     <h1>Add Product</h1>   
    <form onSubmit={handleSubmit}>
    <label htmlFor="id">ID:</label>
    <input 
        type="text" 
        id="id" name="id" 
        value={formData.id}
        onChange={handleonChange}
        required/>

    <label htmlFor="title">Title:</label>
    <input 
        type="text" 
        id="title" name="title" 
        value={formData.title}
        onChange={handleonChange}
        required/>

    <label htmlFor="author">Author:</label>
    <input 
        type="text" 
        id="author" name="author" 
        value={formData.author}
        onChange={handleonChange}
        required/>

    <label htmlFor="price">Price:</label>
    <input 
        type="number" 
        id="price" name="price" 
        value={formData.price}
        onChange={handleonChange}
        required/>
    <label htmlFor="rating">Rating:</label>
    <input 
        type="number" 
        id="rating" name="rating" 
        value={formData.rating}
        onChange={handleonChange}
        required/>  

    <label htmlFor="image">Image URL:</label>
    <input 
        type="text" 
        id="image" name="image" 
        value={formData.image}
        onChange={handleonChange}
        required/>    

    <label htmlFor="category">Category:</label>
    <input 
        type="text" 
        id="category" name="category" 
        value={formData.category}
        onChange={handleonChange}
        required/>  

    <button type="submit" id='btn'>Add Product</button>
  </form>
    </div>
  )
}

export default AddProduct