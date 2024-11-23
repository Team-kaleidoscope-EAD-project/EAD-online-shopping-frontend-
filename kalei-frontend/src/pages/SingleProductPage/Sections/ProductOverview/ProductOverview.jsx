import React, { useState } from "react";
import MainImage from "./MainImage";
import { Box } from "@mui/material";
import ProductHeader from "./ProductHeader";
import MultiCarousel from "../../../../components/MultiCarousel/MultiCarousel";
import ProductColors from "./ProductColors";
import SizeComponent from "./SizeComponent";
import PriceSection from "./PriceSection";
import UserRating from "./UserRating";

const ProductOverview = ({
  singleProductImageList,
  productName,
  productId,
  productPrice,
  sizeList,
  productStock,
}) => {

  const [selectedColor, setSelectedColor] = useState(0);
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedQuantity, setSelectedQuantity] = useState(1);

  console.log(selectedQuantity);

  const ProductList = singleProductImageList.map((item, index) => (
    <ProductColors key={index} image={item.image} />
  ));

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          gap: "50px",
          padding: "25px",
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
                marginTop: { xs: "0px", sm: "10px", md: "30px" },
                marginBottom: { xs: "30px", md: "0px" },
              }}
            >
              <MultiCarousel
                list={ProductList}
                selectedItem={setSelectedColor}
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
              marginTop: { xs: "40px", sm: "45px", md: "50px" },
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
              marginTop: { xs: "40px", sm: "45px", md: "50px" },
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
