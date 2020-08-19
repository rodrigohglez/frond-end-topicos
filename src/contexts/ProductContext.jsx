import React, { createContext, useState, useEffect } from "react";
import {ProductService}  from "../services/ProductService";

export const ProductContext = createContext();

const ProductContextProvider = (props) => {
  const productService = new ProductService();

  const [Products, setProducts] = useState([]);

  const [editProduct, setEditProduct] = useState(null);

  useEffect(() => {
    productService.readAll().then((data) => setProducts(data));
  }, []);

  const createProduct = (Product) => {
    productService
      .create(Product)
      .then((data) => setProducts([...Products, data]));
  };

  const findProduct = (id) => {
    const Product = Products.find((p) => p._id === id);

    setEditProduct(Product);
  };

  const updateProduct = (Product) => {
    productService
      .update(Product)
      .then((data) =>
        setProducts(
          Products.map((p) => (p._id === Product._id ? data : Product))
        )
      );

    setEditProduct(null);
  };

  return (
    <ProductContext.Provider
      value={{
        createProduct,
        findProduct,
        updateProduct,
        editProduct,
        Products,
      }}
    >
      {props.children}
    </ProductContext.Provider>
  );
};

export default ProductContextProvider;
