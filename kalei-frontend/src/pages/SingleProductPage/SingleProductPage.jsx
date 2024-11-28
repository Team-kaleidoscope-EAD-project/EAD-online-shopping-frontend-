import React, { useEffect, useState } from "react";
import ProductOverview from "./Sections/ProductOverview/ProductOverview";
import { Box, Typography } from "@mui/material";
import ProductDescription from "./Sections/ProductDescription/ProductDescription";
import CustomerReview from "./Sections/CutomerReview/CustomerReview";
import SimilarProduct from "./Sections/SimilarProducts/SimilarProduct";
import PopUp from "./Sections/CutomerReview/PopUp";
import EditIcon from "@mui/icons-material/Edit";
import Footer from "../../components/Footer/Footer";
import useFetch from "../../hooks/useFetch";
import ProductService from "../../services/productServices";
import { useNavigate } from "react-router-dom";

// dummy data for ProductOverview
const singleProductImageList = [
  {
    image: require("../../assets/images/singleProductImages/woman_image1.png"),
    color: "purple",
  },

  {
    image: require("../../assets/images/singleProductImages/woman_image2.png"),
    color: "green",
  },

  {
    image: require("../../assets/images/singleProductImages/woman_image3.png"),
    color: "orange",
  },
  {
    image: require("../../assets/images/singleProductImages/woman_image2.png"),
    color: "green",
  },
];

const productName = "Women’s Silk TShirt";
const productId = "1234567890_KALEI";
const productPrice = 3500;

const sizeList = ["sm", "md", "lg", "xl"];
const productStock = 10;

//dummy data for ProductDescription
const productDescription =
  "Brand - HUF & DEE Material -Cotton Lycra \n Neck – Crew \n Sleeve - Short Sleeve \n Texture – Printed \n Size - S - 3XL";

//dummy data for customer review

const reviewDataList = [
  {
    proPic: require("../../assets/images/profile/profileImg.png"),
    username: "Anonymous user",
    date: "October 21, 2024",
    ratingValue: 3,
    comment:
      "The silk clothing is absolutely stunning! It feels incredibly soft and lightweight, making it perfect for all-day comfort. The fabric drapes beautifully and gives a luxurious vibe. I love how breathable it is, even on warmer days. It’s my new go-to for both casual outings and special occasions!",
  },
  {
    proPic: require("../../assets/images/profile/profileImg.png"),
    username: "Anonymous user",
    date: "October 21, 2024",
    ratingValue: 4,
    comment:
      "The silk clothing is absolutely stunning! It feels incredibly soft and lightweight, making it perfect for all-day comfort. The fabric drapes beautifully and gives a luxurious vibe. I love how breathable it is, even on warmer days. It’s my new go-to for both casual outings and special occasions!",
  },
  {
    proPic: require("../../assets/images/profile/profileImg.png"),
    username: "Anonymous user",
    date: "October 21, 2024",
    ratingValue: 5,
    comment:
      "The silk clothing is absolutely stunning! It feels incredibly soft and lightweight, making it perfect for all-day comfort. The fabric drapes beautifully and gives a luxurious vibe. I love how breathable it is, even on warmer days. It’s my new go-to for both casual outings and special occasions!",
  },
  {
    proPic: require("../../assets/images/profile/profileImg.png"),
    username: "Anonymous user",
    date: "October 21, 2024",
    ratingValue: 4,
    comment:
      "The silk clothing is absolutely stunning! It feels incredibly soft and lightweight, making it perfect for all-day comfort. The fabric drapes beautifully and gives a luxurious vibe. I love how breathable it is, even on warmer days. It’s my new go-to for both casual outings and special occasions!",
  },
  {
    proPic: require("../../assets/images/profile/profileImg.png"),
    username: "Anonymous user",
    date: "October 21, 2024",
    ratingValue: 1,
    comment:
      "The silk clothing is absolutely stunning! It feels incredibly soft and lightweight, making it perfect for all-day comfort. The fabric drapes beautifully and gives a luxurious vibe. I love how breathable it is, even on warmer days. It’s my new go-to for both casual outings and special occasions!",
  },
];

//dummy data for similar products
const similarProductList = [1, 2, 3, 1, 2];

function SingleProductPage({ productId = "1234567890_KALEI" }) {
  const navigate = useNavigate();
  const [displayPopUp, setDisplayPopUp] = useState(false);

  const { data, error, loading } = useFetch(
    () => ProductService.getProductById(productId),
    [productId]
  );

  const addToCart = (selectedQuantity, selectedSize, selectedColor) => {
    // Prepare the item data
    const selectedItem = {
      itemId: productId,
      name: productName,
      price: productPrice,
      quantity: selectedQuantity,
      size: sizeList[selectedSize],
      color: singleProductImageList[selectedColor].color,
      image: singleProductImageList[selectedColor].image,
    };

    const cart = JSON.parse(localStorage.getItem("cart")) || [];

    // Check if the item already exists in the cart
    const existingItemIndex = cart.findIndex(
      (item) => item.itemId === selectedItem.itemId
    );

    if (existingItemIndex === -1) {
      cart.push(selectedItem);
      localStorage.setItem("cart", JSON.stringify(cart));
    }

    navigate("/add-to-cart", { state: { productStock: productStock } });
  };

  return (
    <>
      <div
        style={{
          color: "#292726",
        }}
      >
        {/* Header Section  */}
        <ProductOverview
          singleProductImageList={singleProductImageList}
          productName={productName}
          productId={productId}
          productPrice={productPrice}
          sizeList={sizeList}
          productStock={productStock}
          addToCart={addToCart}
        />

        {/* Description  */}
        <Box
          sx={{
            marginTop: { xs: "60px", md: "100px" },
          }}
        >
          <ProductDescription productDescription={productDescription} />
        </Box>

        {/* Review  */}
        <Box
          sx={{
            marginTop: { xs: "60px", md: "100px" },
          }}
        >
          <CustomerReview reviewDataList={reviewDataList} />

          {/* write a review */}
          <Box
            sx={{
              display: "flex",
              width: "100%",
              border: "1px solid transparent",
              marginTop: "60px",
              cursor: "pointer",
              transition: "all 0.15s ease-in",
              justifyContent: "center",
              alignItems: "center",
              "&:hover": {
                border: "1px solid rgba(0,0,0,0.2)",
              },

              "&:active": {
                opacity: 0.6,
              },
            }}
            onClick={() => setDisplayPopUp(true)}
          >
            <EditIcon
              sx={{
                fontSize: { xs: "20px", md: "25px" },
                marginRight: "15px",
              }}
            />
            <Typography
              sx={{
                fontFamily: "amiko_semibold",
                fontSize: { xs: "20px", md: "25px" },
                height: "100%",
              }}
            >
              WRITE A REVIEW
            </Typography>
          </Box>
        </Box>

        {/* Similar product bottom section */}
        <Box
          sx={{
            marginTop: { xs: "60px", md: "100px" },
            padding: "25px",
          }}
        >
          <SimilarProduct similarProductList={similarProductList} />
        </Box>

        {/* popup */}
        {displayPopUp && <PopUp close={setDisplayPopUp} />}

        {/* footer section */}
        <Footer />
        {/* footer section */}
      </div>
    </>
  );
}

export default SingleProductPage;
