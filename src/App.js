import './App.css';

import {
  createBrowserRouter,
  RouterProvider,
  BrowserRouter as Router,
  Route,
  Link,
  Routes,
} from "react-router-dom";
import HomePage from './Components/HomePage';
import Cart from './Components/Cart/Cart';
import ProductPage from './Components/ProductPage/ProductPage';
import AddProduct from './Components/AddProduct/AddProduct';
import OrderForm from './OrderForm/OrderForm';
import OrderSummary from './OrderSummary/OrderSummary';
import SuccessPage from './Success';
import SearchBar from './Components/SearchBar/SearchBar';
import About from './Components/NavMenu/About';
import Services from './Components/NavMenu/Services';
import Contact from './Components/NavMenu/Contact';
import Login from './Components/Auth/Login';
import Register from './Components/Auth/Register';
import { useState } from 'react';

function App() {

  const [logged,setLogged]=useState(0);
  return (
    <div className="App">
      <Routes>
         
          <Route path='login' element={<Login/>}/>

          <Route path='*' element={<HomePage/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/productpage' element={<ProductPage/>}/>
          <Route path='/addproduct' element={<AddProduct/>}/>
          <Route path='/orderform' element={<OrderForm/>}/>
          <Route path='/ordersummary' element={<OrderSummary/>}/>
          <Route path='/success' element={<SuccessPage/>}/>
          <Route path='/search' element={<SearchBar/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/service' element={<Services/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/register' element={<Register/>}/>
      </Routes>
      
     
    </div>
  );
}

export default App;
