"use client";

import { useState, useEffect, useContext, createContext, useCallback } from "react";
import axios from "axios";

const ShopContext = createContext();

export const ShopContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [products, setProducts] = useState([]);
  const [product, setProduct] = useState({});

  // funciones productos

  const handleAddToCart = () => {
    //setcart
  }
 
  const getProducts = useCallback(async() => {
    try {
      const res = await axios.get("http://localhost:4000/products")
      console.log("products", res.data)
      setProducts(res.data.products)
    } catch (error) {
      console.log(error)
    }
  }, [])

  const getOneProduct = useCallback(async (id) => {
    try {
      const res = await axios.get(`http://localhost:4000/products/${id}`)//llega por parámetro
      console.log("product", res.data.product)
      setProduct(res.data.product)
    } catch (error) {
      console.log(error)
    }
  }, [])

  useEffect(() => {
    getProducts();
  }, [])

  return (
    <ShopContext.Provider
      value={{
        products,
        product,
        getOneProduct
      }}
    >
      {children}
    </ShopContext.Provider>
  );
};

export const useShopContext = () => {
  const context = useContext(ShopContext);
  if (!context) {
    throw new Error("useShopContext must be use within a ShopContextProvider");
  }
  return context;
};
