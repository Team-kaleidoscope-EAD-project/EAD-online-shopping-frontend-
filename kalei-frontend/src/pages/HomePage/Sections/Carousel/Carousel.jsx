// Dinul
import React from "react";
import styles from "./Carousel.module.css";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper/modules";

import poster1 from "../../../../assets/images/carouselPosters/oversizeTshirt_carousel.png";
import poster2 from "../../../../assets/images/carouselPosters/watch_carousel.png";
import poster3 from "../../../../assets/images/carouselPosters/women_carousel.png";

export default function Carousel() {
  return (
    <div className={styles.carouselSection}>
      <Swiper
        spaceBetween={30}
        slidesPerView={1}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        pagination={{
          clickable: true,
        }}
        style={{ height: "100%" }}
        loop={true}
        // navigation={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Pagination, Navigation]}
        speed={1000}
      >
        <SwiperSlide
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div className={styles.carouselPoster}>
            <img src={poster1} alt="carousel poster"/>
          </div>
        </SwiperSlide>
        <SwiperSlide
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div className={styles.carouselPoster}>
            <img src={poster3} alt="carousel poster"/>
          </div>
        </SwiperSlide>
        <SwiperSlide
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div className={styles.carouselPoster}>
            <img src={poster2} alt="carousel poster" />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
