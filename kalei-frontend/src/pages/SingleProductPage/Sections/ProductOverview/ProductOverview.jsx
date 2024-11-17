import React from "react";
import MainImage from "./MainImage";
import { Box } from "@mui/material";
import ProductHeader from "./ProductHeader";
import MultiCarousel from "../../../../components/MultiCarousel/MultiCarousel";
import ProductColors from "./ProductColors";

// dummy data
const singleProductImage = require("../../../../assets/images/singleProductImages/woman_image1.png");
const productName = "Women’s Silk TShirt";
const productId = "1234567890_KALEI";
const productPrice = "3,500";

const carouselItems = [
  <ProductColors
    image={require("../../../../assets/images/singleProductImages/woman_image1.png")}
  />,
  <ProductColors
    image={require("../../../../assets/images/singleProductImages/woman_image2.png")}
  />,
  <ProductColors
    image={require("../../../../assets/images/singleProductImages/woman_image3.png")}
  />,
  <ProductColors
    image={require("../../../../assets/images/singleProductImages/woman_image2.png")}
  />,
];

const ProductOverview = () => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          gap: "50px",
        }}
      >
        {/* cover Image */}
        <MainImage productImage={singleProductImage} />

        {/* Right Section */}
        <Box>
          {/* Product Headers */}
          <ProductHeader
            productName={productName}
            productId={productId}
            productPrice={productPrice}
          />

          {/* Color Carousel */}
          <Box
            sx={{
              maxWidth: { xs: "100%", md: "45vw", lg: "40vw" },
              padding: "10px",
            }}
          >
            <MultiCarousel list={carouselItems} />
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default ProductOverview;
