"use client"
import ProductCard from "./Product";
import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import  "../env.js";

// const products = [
//   {
//     id: 1,
//     name: 'Product 1',
//     price: 29.99,
//     salePrice: 39.99, // Optional sale price
//     images: ['1031/1.jpg','1031/2.jpg','1031/3.jpg','1031/4.jpg','1031/5.jpg'],
//     description: 'This is a short description for Product 1.',
//   },
//   {
//     id: 2,
//     name: 'Product 2',
//     price: 49.99,
//     images: ['1031/1.jpg','1031/2.jpg','1031/3.jpg','1031/4.jpg','1031/5.jpg'],
//     description: 'This is a short description for Product 2.',
//   },
//   {
//     id: 3,
//     name: 'Product 3',
//     price: 19.99,
//     images: ['1031/1.jpg','1031/2.jpg','1031/3.jpg','1031/4.jpg','1031/5.jpg'],
//     description: 'This is a short description for Product 3.',
//   },

//   {
//     id: 4,
//     name: 'Product 4',
//     price: 19.99,
//     images: ['1031/1.jpg','1031/2.jpg','1031/3.jpg','1031/4.jpg','1031/5.jpg'],
//     description: 'This is a short description for Product 3.',
//   },
// ];


export default function Products() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
          try {
            const response = await fetch("https://ecommerce.ahmedgamaldev.com/api/products?limit=8&page=1");
            const result = await response.json();
            setProducts(result.data["data"]);
          } catch (error) {
            console.error("Error fetching products:", error);
          }
        };

        fetchProducts();
    }, []);
    
    console.log(products)
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">Our Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
            <ProductCard key={product.id} product={product} />
        ))}

        {products>0?products.map((product) => (
          <ProductCard key={product.id} product={product} />
        )):(
            <p></p>
          )}
      </div>
    </div>
  );
}