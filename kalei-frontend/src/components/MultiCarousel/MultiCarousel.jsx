import { Box, Typography } from "@mui/material";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./MultiCarousel.css";

function MultiCarousel({ list, selectedItem, itemsCount }) {
  // Dynamically set the number of items per slide based on the prop
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: itemsCount && itemsCount.desktop ? itemsCount.desktop : 3, // Default to 2 if not provided
      slidesToSlide: 2,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: itemsCount && itemsCount.tablet ? itemsCount.tablet : 3, // Default to 2 if not provided
      slidesToSlide: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: itemsCount && itemsCount.mobile ? itemsCount.mobile : 1, // Default to 1 if not provided
      slidesToSlide: 1,
    },
  };

  return (
    <Carousel
      swipeable={true}
      draggable={true}
      showDots={false}
      responsive={responsive}
      ssr={true} // Server-side rendering
      infinite={true}
      autoPlay={true}
      keyBoardControl={true}
      customTransition="all 1.3s"
      transitionDuration={500}
      containerClass="customContainerClass"
    >
      {Array.isArray(list) && list.length > 0 ? (
        list.map((item, index) => (
          <Box
            key={index}
            sx={{ cursor: "pointer" }}
            onClick={() => selectedItem(index)}
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
