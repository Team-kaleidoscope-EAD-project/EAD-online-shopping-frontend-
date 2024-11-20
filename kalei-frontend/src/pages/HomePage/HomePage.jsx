import React from "react";
import styles from "../HomePage/HomePage.module.css";
import Navbar from "../../components/Navbar/Navbar";
import Carousel from "./Sections/Carousel/Carousel";
import Collections from "./Sections/Collections/Collections";
import NewArrivals from "./Sections/NewArrivals/NewArrivals";
import CartPage from "./Sections/AddToCart/AddToCart";
import Footer from "../../components/Footer/Footer";

export default function HomePage() {
  return (
    <div className={styles.homepageSection}>
      {/* navbar section */}
      <Navbar />
      {/* navbar section */}

      {/* your section */}
      <Carousel />
      <Collections />
      <NewArrivals />
      {/* your section */}

      {/* footer section */}
       <Footer />
      {/* footer section */}
    </div>
  );
}
