import React, { useState } from "react";
import MainImage from "./MainImage";
import { Box } from "@mui/material";
import ProductHeader from "./ProductHeader";
import MultiCarousel from "../../../../components/MultiCarousel/MultiCarousel";
import ProductColors from "./ProductColors";
import SizeComponent from "./SizeComponent";
import PriceSection from "./PriceSection";
import UserRating from "./UserRating";

// dummy data
const singleProductImageList = [
  {
    image: require("../../../../assets/images/singleProductImages/woman_image1.png"),
    color: "purple",
  },

  {
    image: require("../../../../assets/images/singleProductImages/woman_image2.png"),
    color: "green",
  },

  {
    image: require("../../../../assets/images/singleProductImages/woman_image3.png"),
    color: "orange",
  },
  {
    image: require("../../../../assets/images/singleProductImages/woman_image2.png"),
    color: "green",
  },
];
const productName = "Women’s Silk TShirt";
const productId = "1234567890_KALEI";
const productPrice = 3500;

const sizeList = ["sm", "md", "lg", "xl"];
const productStock = 10;

const ProductList = [
  <ProductColors image={singleProductImageList[0].image} />,
  <ProductColors image={singleProductImageList[1].image} />,
  <ProductColors image={singleProductImageList[2].image} />,
  <ProductColors image={singleProductImageList[3].image} />,
];

const ProductOverview = () => {
  const [selectedColor, setSelectedColor] = useState(0);
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedQuantity, setSelectedQuantity] = useState(1);

  console.log(selectedQuantity);

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
        <MainImage productImage={singleProductImageList[selectedColor].image} />

        {/* Right Section */}
        <Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column-reverse", md: "column" },
            }}
          >
            {/* Product Headers */}
            <ProductHeader
              productName={productName}
              productId={productId}
              productPrice={productPrice}
            />

            {/* Color Carousel */}
            <Box
              sx={{
                maxWidth: { xs: "100%", md: "45vw", lg: "38vw" },
                padding: "10px",
                marginTop: { xs: "0px", sm: "10px", md: "40px" },
                marginBottom: { xs: "30px", md: "0px" },
              }}
            >
              <MultiCarousel
                list={ProductList}
                selectedColor={setSelectedColor}
              />
            </Box>
          </Box>

          {/* product sizes */}
          <Box
            sx={{
              marginTop: { xs: "25px", sm: "30px", md: "40px" },
            }}
          >
            <SizeComponent sizeList={sizeList} selectedSize={setSelectedSize} />
          </Box>

          {/* product prices */}
          <Box
            sx={{
              marginTop: { xs: "50px", sm: "60px", md: "70px" },
            }}
          >
            <PriceSection
              productPrice={productPrice}
              productStock={productStock}
              selectedQuantity={setSelectedQuantity}
            />
          </Box>

          {/* user Rating */}
          <Box
            sx={{
              marginTop: { xs: "50px", sm: "60px", md: "70px" },
            }}
          >
            <UserRating ratingValue={4} />
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default ProductOverview;
