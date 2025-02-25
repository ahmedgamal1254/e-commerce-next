"use client"
import ProductCard from "./Product";
import React, { useEffect, useState } from 'react';

export default function Products() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
          try {
            const response = await fetch("https://ecommerce.ahmedgamaldev.com/api/products?limit=8&page=1");
            const result = await response.json();
            setProducts(result.data.data);
          } catch (error) {
            console.error("Error fetching products:", error);
          }
        };

        fetchProducts();
    }, []);
    
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">Our Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products != null && products.length > 0 ?products.map((product) => (
          <ProductCard key={product.id} product={product} />
        )):(
            <p></p>
          )}
      </div>
    </div>
  );
}