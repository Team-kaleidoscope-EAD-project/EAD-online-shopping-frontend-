import React from "react";
import styles from "../HomePage/HomePage.module.css";
import Carousel from "./Sections/Carousel/Carousel";
import Collections from "../HomePage/Sections/Collections/Collections";
import NewArrivals from "./Sections/NewArrivals/NewArrivals";
import Footer from "../../components/Footer/Footer";

export default function HomePage() {
  return (
    <div className={styles.homepageSection}>
      {/* navbar section */}

      {/* navbar section */}

      {/* your section */}
      <Carousel />
      <Collections />
      {/* <NewArrivals /> */}
      {/* your section */}

      {/* footer section */}
      <Footer />
      {/* footer section */}
    </div>
  );
}
