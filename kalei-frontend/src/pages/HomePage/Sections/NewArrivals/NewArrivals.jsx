// Dilrangi/NewArrivals.js
import React from "react";
import styles from "../NewArrivals/NewArrivals.module.css";
import ProductCard from "../../../../components/Cards/ProductCard/ProductCard";

export default function NewArrivals() {
  return (
    <div className={styles.newArrivals}>New Arrivals
    <div className={styles.ProductCard}>
    <ProductCard/>
    <ProductCard/>
    <ProductCard/>
    <ProductCard/>
    <ProductCard/>
    <ProductCard/>
    <ProductCard/>
    <ProductCard/>
    </div>



   
      
    </div>
  );
}
