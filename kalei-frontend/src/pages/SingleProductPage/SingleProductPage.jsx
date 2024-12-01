import React, { useState } from "react";
import ProductOverview from "./Sections/ProductOverview/ProductOverview";
import { Box, Typography } from "@mui/material";
import ProductDescription from "./Sections/ProductDescription/ProductDescription";
import CustomerReview from "./Sections/CutomerReview/CustomerReview";
import SimilarProduct from "./Sections/SimilarProducts/SimilarProduct";
import PopUp from "./Sections/CutomerReview/PopUp";
import EditIcon from "@mui/icons-material/Edit";
import Footer from "../../components/Footer/Footer";
import ProductService from "../../services/productServices";
import { useLocation, useNavigate } from "react-router-dom";

const sizeList = ["sm", "md", "lg", "xl"];
const productStock = 10;

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

function SingleProductPage() {
  const location = useLocation();
  const product = location.state.singleProduct;

  const similarProductList = [product, product];

  const navigate = useNavigate();
  const [displayPopUp, setDisplayPopUp] = useState(false);

  const addToCart = (selectedQuantity, selectedSize, selectedColor) => {
    // Prepare the item data
    const selectedItem = {
      itemId: product.id,
      sku: product.variants[selectedColor].sizes[selectedSize].sku,
      name: product.name,
      price: product.price,
      quantity: selectedQuantity,
      size: sizeList[selectedSize],
      color: product.variants[selectedColor].color,
      image: product.variants[selectedColor].imageUrl,
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
          singleProductImageList={product.variants}
          productName={product.name}
          productId={product.id}
          productPrice={product.price}
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
          <ProductDescription productDescription={product.description} />
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
