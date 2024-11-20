// Dilrangi/NewArrivals.js
import React from "react";
import styles from "../NewArrivals/NewArrivals.module.css";
import ProductCard from "../../../../components/Cards/ProductCard/ProductCard";
const productData = require("./products.json");

export default function NewArrivals() {
  return (
    <div>
    <div className={styles.newArrivals}>New Arrivals </div>

    <div className={styles.ProductCard}>
        {productData.map((product, index) => (
          <ProductCard
            key={index}
            id={product.id}
            
          />
        ))}
      </div>




   
      
    </div>
  );
}
