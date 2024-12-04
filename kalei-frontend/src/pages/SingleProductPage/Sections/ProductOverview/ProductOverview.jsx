import React, { useEffect, useState } from "react";
import MainImage from "./MainImage";
import { Box } from "@mui/material";
import ProductHeader from "./ProductHeader";
import MultiCarousel from "../../../../components/MultiCarousel/MultiCarousel";
import ProductColors from "./ProductColors";
import SizeComponent from "./SizeComponent";
import PriceSection from "./PriceSection";
import UserRating from "./UserRating";
import { getProductStocksBySku } from "../../../../services/products/getProductStocksBySku";

// dummy data
const sps = [
  require("../../../../assets/images/singleProductImages/woman_image1.png"),

  require("../../../../assets/images/singleProductImages/woman_image2.png"),
];

const ProductOverview = ({
  singleProductImageList,
  productName,
  productId,
  productPrice,
  product,
  addToCart,
}) => {
  const [selectedColor, setSelectedColor] = useState(0);
  const [selectedSize, setSelectedSize] = useState(0);
  const [selectedQuantity, setSelectedQuantity] = useState(1);
  const [productStock, setProductStock] = useState(1);

  const ProductList = singleProductImageList.map((item, index) => (
    <ProductColors key={index} image={item.imageUrl} />
  ));

  useEffect(() => {
    fetchProductStock();
  }, [selectedColor, selectedSize]);

  const handleCart = () => {
    console.log("overview stoks", productStock);
    addToCart(selectedQuantity, selectedSize, selectedColor, productStock);
  };

  // console.log(selectedColor);

  const fetchProductStock = async () => {
    const stocks = await getProductStocksBySku(
      product.variants[selectedColor].sizes[selectedSize].sku
    );
    // console.log("stocks", stocks);
    setProductStock(stocks.quantity);
  };

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
        <MainImage
          productImage={singleProductImageList[selectedColor].imageUrl}
        />

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
                width: { xs: "100%", md: "45vw", lg: "38vw" },
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
            <SizeComponent
              sizeList={singleProductImageList[selectedColor].sizes}
              selectedSize={setSelectedSize}
            />
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
              handleCart={() => handleCart()}
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
