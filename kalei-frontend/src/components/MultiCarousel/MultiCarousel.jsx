import { Box, Typography } from "@mui/material";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 3, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3,
    slidesToSlide: 2, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

function MultiCarousel({ list, selectedColor }) {
  return (
    <Carousel
      swipeable={true}
      draggable={true}
      showDots={false}
      responsive={responsive}
      ssr={true} // Render carousel on server-side
      infinite={false}
      autoPlay={false}
      keyBoardControl={true}
      customTransition="all .5s"
      transitionDuration={500}
      containerClass="carousel-container"
      // removeArrowOnDeviceType={["tablet", "mobile"]}
      dotListClass="custom-dot-list-style"
      itemClass="carousel-item-padding-20-px"
    >
      {Array.isArray(list) && list.length > 0 ? (
        list.map((item, index) => (
          <Box
            key={index}
            sx={{ cursor: "pointer" }}
            onClick={() => selectedColor(index)}
          >
            {item}
          </Box>
        ))
      ) : (
        <Typography>No Items</Typography>
      )}
    </Carousel>
  );
}

export default MultiCarousel;
