"use client";

import { useState, useEffect, useContext, createContext, useCallback } from "react";
import axios from "axios";

const ShopContext = createContext();

export const ShopContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [products, setProducts] = useState([]);
  const [product, setProduct] = useState({});
  const [categoryProducts, setCategoryProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // funciones productos

  const handleAddToCart = (productToAdd) => {
    const existingProduct = cart.find(
      (item) => item._id === productToAdd._id && item.size === productToAdd.size
    );

    if (existingProduct) {
      alert("Este producto con el mismo talle ya está en tu carrito.");
      return;
    }
    setCart(preCart => [...preCart, {...productToAdd, cartItemId: `${productToAdd._id}-${productToAdd.size}`}]);
    alert(`${productToAdd.name} (Talle: ${productToAdd.size}) agregado al carrito!`);
    //setcart
  };
 
  const getProducts = useCallback(async() => {
    try {
      setLoading(true)
      const res = await axios.get("http://localhost:4000/products")
      console.log("products", res.data)
      setProducts(res.data.products)
    } catch (error) {
      console.log(error)
      setLoading(false)
    }
  }, [])

  const getOneProduct = useCallback(async (id) => {
    try {
      setLoading(true)
      const res = await axios.get(`http://localhost:4000/products/${id}`)//llega por parámetro
      console.log("product", res.data.product)
      setProduct(res.data.product)
    } catch (error) {
      console.log(error)
      setLoading(false)
    }
  }, [])

  const getProductBycategory = useCallback(async (slug) => {
    setLoading(true)
    try {
      const res = await axios.get (`http://localhost:4000/products/category${slug}`);
      setCategoryProducts(res.data.products);
    } catch (error) {
      console.log(error)
      setLoading(false)
    }
    
  })

  useEffect(() => {
    getProducts();
  }, [getProducts])

  return (
    <ShopContext.Provider
      value={{
        products,
        product,
        cart,
        loading,
        getProducts,
        getOneProduct,
        getProductBycategory,
        categoryProducts,
        handleAddToCart,
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
