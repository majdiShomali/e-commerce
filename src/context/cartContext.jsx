import React from "react";
import {createContext, useState,useEffect } from "react";
import axios from "axios";

export const CartContext = createContext();
const CartProvider = ( {children} ) => {
  
    const [cartNavRefresh ,setCartNavRefresh] = useState([])

    useEffect(() => {
        const storedItems = localStorage.getItem('items');
        if (storedItems) {
          setCartNavRefresh(JSON.parse(storedItems));
        }
      }, []);

  return (
        <>
            <CartContext.Provider
                value={{
                    cartNavRefresh,setCartNavRefresh,
                }}
            >
                {children}
            </CartContext.Provider>
        </>
    )
};
 export default CartProvider;