import React from "react";
import styles from "./AddToCartPage.module.css";
import CartPage from "../AddToCart/AddToCart";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import CheckoutForm from "../../components/CheckoutForm/CheckoutForm";

export default function AddToCartPage() {
  return (
    <div className={styles.homepageSection}>
      {/* <Navbar /> */}
      {/* <CartPage /> */}
      <CheckoutForm />
      <Footer />
    </div>
  );
}
