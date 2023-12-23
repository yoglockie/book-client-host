import React from 'react'
import './HomePage.css';
import Navbar from './Navbar/Navbar';
import Footer from './Footer/Footer';
import Carousal from './Carousal/Carousal';
import BookCard from './BookCard/BookCard';
import Author from './Author/Author';
import Cart from './Cart/Cart';
import BestSelling from './BestSelling/BestSelling';
import SearchBar from './SearchBar/SearchBar';
import All from './Category/All';
import Buisness from './Category/Buisness';
import Fiction from './Category/Fiction';
import Motivational from './Category/Motivational';
import Mystery from './Category/Mystery';
import {createBrowserRouter,RouterProvider,BrowserRouter as Router,Route,Link,Routes,} from "react-router-dom";
import Search from './Category/Search';
const HomePage = () => {
  return (
    <div>
     <Navbar/>
     <Carousal/>
     <div className="category">
         <ul>
          <Link to="/"><li>All</li></Link>
          <Link to='/fiction'><li>Fiction</li></Link>
          <Link to="/mystery"><li>Mystery</li></Link>
          <Link to="/buisness"><li>Buisness</li></Link>
          <Link to="/motivational"><li>Motivational</li></Link>
          
         </ul>
     </div>
     <Link to="/search"><button className="search-button">&#128269;</button></Link>
      <div className="card-container">
          <Routes>
                <Route path='/' element={<All/>}/>
                <Route path='/fiction' element={<Fiction/>}/>
                <Route path='/mystery' element={<Mystery/>}/>
                <Route path='/buisness' element={<Buisness/>}/>
                <Route path='/motivational' element={<Motivational/>}/>
                
          </Routes>
      </div>


      <div className='bests'>
      <BestSelling/>
      </div>
     
     <div className="author-container">
          <Author/>
          <Author/>
          <Author/>
          <Author/>
     </div>

     <Footer/>
    </div>
  )
}

export default HomePage