import React from "react";
import styles from "../HomePage/HomePage.module.css";
import Navbar from "../../components/Navbar/Navbar";
import Carousel from "./Sections/Carousel/Carousel";
import Collections from "./Sections/Collections/Collections";

export default function HomePage() {
  return (
    <div className={styles.homepageSection}>
      {/* navbar section */}
      <Navbar />
      {/* navbar section */}

      {/* your section */}
      <Carousel />      
      <Collections />
      {/* your section */}

      {/* footer section */}

      {/* footer section */}
    </div>
  );
}
