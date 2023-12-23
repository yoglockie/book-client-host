

const cartReducer = (state,action) => {

  if(action.type === "ADD_TO_CART")
  {
    let {id,title,imgurl,price,amount}=action.payload;
    
    let existP = state.cart.find((item)=>item.id===id) ;
    
    if(existP)
    {
          let updatedElement = state.cart.map((item)=>{
            if(item.id===id)
            {
              let newAmount = item.amount+1;
              return {
                ...item,
                amount : newAmount, 
              }
            }
            else
            {
              return item
            }
            
          });
          return {
            ...state,
            cart:updatedElement,
          };  
    }
    else{
        
          let cartProduct = {
            id: id,
            title:title,
            imgurl:imgurl,
            price:price,
            amount:amount,
        }
        return {
          ...state,
          cart:[...state.cart,cartProduct]
        };     
    
    }

    

  }

  if(action.type==="CART_TOTAL_ITEM"){
      let ucelement = state.cart.reduce((initialVal,item)=>{
          let {amount} = item;
          initialVal = initialVal+amount;
          return initialVal;
      },0);
      return {
         ...state,
         total_item:ucelement,
      }
  }
  if(action.type==="CART_TOTAL_PRICE"){
    let tprice = state.cart.reduce((initialVal,item)=>{
        let {price,amount} = item;
        initialVal= initialVal+ price*amount;
        return initialVal;
    },0);
    return {
       ...state,
       total_price:tprice,
    }
}

  if(action.type==="REMOVE_ITEM")
  {
    let updatedCart =state.cart.filter((item)=>item.id!== action.payload);
    return {
      ...state,
      cart:updatedCart,
    }
  }
  if(action.type==="CLEAR_CART")
  {
     return {
       ...state,
       cart:[]
     }
  }
  
  if(action.type==="SET_DECREASE"){
      let uelement = state.cart.map((item)=>{
        if(item.id===action.payload){
             let decAmount = item.amount-1;
             if(decAmount<1)
             {
               decAmount=1;
             }
             return {
              ...item,
              amount:decAmount,
             };
        }
        else{
          return item;
        }

      });
      return {
        ...state,
        cart:uelement,
      }
  }
  if(action.type==="SET_INCREASE"){
    let upelement = state.cart.map((item)=>{
      if(item.id===action.payload){
           let incAmount = item.amount+1;
           return {
            ...item,
            amount:incAmount,
           };
      }
      else{
        return item;
      }

    });
    return {
      ...state,
      cart:upelement,
    }
  }


  return state;
}

export default cartReducer