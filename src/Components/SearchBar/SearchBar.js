import React, { useEffect, useState } from 'react'
import "./SearchBar.css";
import {Link} from 'react-router-dom';
import BookCard from '../BookCard/BookCard';



const SearchBar = () => {
  
  const [nameList,setNameList]=useState([]);
  const [search, setSearch]=useState("");
  
  const helper=(e)=>{
    setSearch(e.target.value)
  }

  useEffect(()=>{
      
    const fetcheddata = async()=>{
        try {
          const response = await fetch("http://localhost:8080/products/all");
          const data = await response.json();
          console.log("i am in")
          console.log(data)
          setNameList(data)
        } catch (error) {
          console.log(error);
        }
    }
    fetcheddata(); 
},[])

  return (
    <>
        <div className='search'>
             <div className="search-bar">
             <input type="text" placeholder="Search for a book" onChange={(e)=>helper(e)}/>
             </div>
              
        </div>
        <div className="card-container">
        {nameList.filter((product)=>{
           if(search=="")
           {
              return product
           }
           else if(product.title.toLowerCase().includes(search.toLowerCase()))
           {
                return product
           }
           
        })
        .map((product)=>{
          return <BookCard
          key={product._id} // Make sure to use a unique key for each item in the list
          id={product._id}
          imgurl={product.image}
          title={product.title}
          price={product.price}
        />
        })}
        </div>
        
    </>
  )
}

export default SearchBar