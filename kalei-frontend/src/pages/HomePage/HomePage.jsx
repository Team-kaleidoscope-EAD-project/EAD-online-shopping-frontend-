import React from "react";
import styles from "../HomePage/HomePage.module.css";
import NewArrivals from "./Sections/NewArrivals/NewArrivals";
import CartPage from "./Sections/AddToCart/AddToCart";

export default function HomePage() {
  return (
    <div className={styles.homepageSection}>
      {/* navbar section */}
      {/* navbar section */}
      <NewArrivals />
      <CartPage/>
      {/* your section */}
      {/* footer section */}
      {/* footer section */}
    </div>
  );
}
