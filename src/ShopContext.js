"use client";

import { useState, useEffect, useContext, createContext } from "react";
import axios from "axios";

const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const [addToCart, setAddToCart] = useState([]);
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);
  const [ProductDetail, setProductDetail] = useState();

  // funciones productos
  const getProducts = async () => {
    try {
      setLoading(true);
      const res = await axios.get("http://localhost:5000/api/products");
      setProducts(res.data.products);
      setLoading(false);
    } catch (error) {
      console.error("Error al obtener productos", error);
      setLoading(false);
    }
  }
      const getProductsByCategory = async (categorySlug) => {
        try {
          setLoading(true);
          const res = await axios.get(
            `http://localhost:5000/api/categories/${categorySlug}`
          );
          setProducts(res.data.products);
          setLoading(false)
        } catch (error) {
        console.error("Error al obtener productos de categoría", error);
        setLoading(false);
      };
    }

    const getProductById = async (id) => {
      try {
        setLoading(true)
        const res = await axios.get(`http://localhost:5000/api/products/${id}`);
        setProductDetail(res.data.product);
        setLoading(false)
      } catch (error) {
        console.error("Error al obetener producto", error);
        setLoading(false) 
      }
    }

    const getCategories = async () => {
      try {
        setLoading(true);
        const res = await axios.get("http://localhost:5000/api/categories");
        setCategories(res.data.categories);
        setLoading(false);
      } catch (error) {
        console.error("Error al obtener categorías", error);
        setLoading(false);
      }
    };

    const handleAddToCart = ({ id, name, image }) => {
      const isOnCart = addToCart.some((product) => product.id === id);

      if (isOnCart) {
        setAddToCart(addToCart.filter((product) => product.id !== id));
        console.log(`Chau ${name} del carrito`);
      } else {
      setAddToCart([...addToCart, { id, name, image }]);
      console.log(`Agregado ${name} al carrito`);
    };
  };

  const isCart = (id) => addToCart.some((product) => product.id === id);

  const cartQty = () => addToCart.length;

  return (
    <AppContext.Provider
      value={{
        addToCart,
        handleAddToCart,
        isCart,
        cartQty,
        products,
        ProductDetail,
        categories,
        loading,
        getProducts,
        getProductsByCategory,
        getProductById,
        getCategories,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext debe usarse dentro de AppContextProvider");
  }
  return context;
};
