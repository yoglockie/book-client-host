import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from '../reducer/cartReducer'  


const CartContext = createContext();


const CartProvider = ({children})=>{
    
    const getLocalData=()=>{
        let newCartData = localStorage.getItem("localCart");
        if(newCartData==[])
        {
           return [];
        }
        else{
            return JSON.parse(newCartData);
        }
    }

    const initialstate = {
        //cart:[],
        cart:getLocalData(),
        total_item:"",
        total_price:""
    };
    const [state,dispatch]= useReducer(reducer, initialstate )

    const addToCart=(id,title,imgurl,price,amount)=>{
       
        dispatch({type:"ADD_TO_CART", payload:{id,title,imgurl,price,amount}})
    }
    
    const removeItem=(id)=>{
        dispatch({type:"REMOVE_ITEM",payload:id});
    }
    
    const clearCart=()=>{
        dispatch({type:"CLEAR_CART"});
    }
     
    const setDecrease=(id)=>{
           dispatch({type:"SET_DECREASE",payload:id})
    }
    const setIncrease=(id)=>{
        dispatch({type:"SET_INCREASE",payload:id})
    }

    useEffect(()=>{
           dispatch({type:"CART_TOTAL_ITEM"});
           dispatch({type:"CART_TOTAL_PRICE"});
           localStorage.setItem("localCart",JSON.stringify(state.cart));
    },[state.cart])

    return  <CartContext.Provider value={{...state,addToCart,removeItem,clearCart,setDecrease,setIncrease}}>{children}</CartContext.Provider>
}


const useCartContext = () =>{
    return useContext(CartContext)
}

export {CartProvider,useCartContext}