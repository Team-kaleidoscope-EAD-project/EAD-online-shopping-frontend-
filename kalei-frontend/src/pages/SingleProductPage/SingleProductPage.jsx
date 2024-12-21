import React, { useContext, useEffect, useState } from "react";
import ProductOverview from "./Sections/ProductOverview/ProductOverview";
import { Box, Typography } from "@mui/material";
import ProductDescription from "./Sections/ProductDescription/ProductDescription";
import CustomerReview from "./Sections/CutomerReview/CustomerReview";
import SimilarProduct from "./Sections/SimilarProducts/SimilarProduct";
import PopUp from "./Sections/CutomerReview/PopUp";
import EditIcon from "@mui/icons-material/Edit";
import Footer from "../../components/Footer/Footer";
import { useNavigate } from "react-router-dom";
import {
  getFeedbacksByProducts,
  productRating,
} from "../../services/feedbacks/feedback";
import { userInfo } from "../../services/users/userInfo";
import { getProductStocksBySku } from "../../services/products/getProductStocksBySku";
import { KeycloakContext } from "../../auth/KeycloakProvider";
import { similarProducts } from "../../services/products/similarProducts";

const sizeList = ["sm", "md", "lg", "xl"];

function SingleProductPage() {
  // const location = useLocation();
  // const product = location.state.singleProduct;
  const { authenticated } = useContext(KeycloakContext);

  const product = JSON.parse(localStorage.getItem("singleProduct"));

  const [similarProductList, setSimilarProductList] = useState([]);

  const navigate = useNavigate();
  const [displayPopUp, setDisplayPopUp] = useState(false);
  const [reviewDataList, setReviewDataList] = useState([]);
  const [userData, setUserData] = useState([]);
  const [rating, setRating] = useState([]);

  useEffect(() => {
    fetchUserFeedbacks();
    fetchUserData();

    console.log(userData);
  }, []);

  const fetchUserFeedbacks = async () => {
    const feedbacks = await getFeedbacksByProducts(product.id);
    setReviewDataList(feedbacks);
  };

  //add to cart function
  const addToCart = (
    selectedQuantity,
    selectedSize,
    selectedColor,
    productStock
  ) => {
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
      productStock: productStock,
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

    navigate("/add-to-cart", { state: { productStock } });
  };

  const fetchUserData = async () => {
    const res = await userInfo();
    setUserData(res);
  };

  useEffect(() => {
    const totalRating = productRating(reviewDataList);
    setRating(totalRating);
  }, [reviewDataList]);

  useEffect(() => {
    const fetchSimilarProducts = async () => {
      const res = await similarProducts(product.name);
      setSimilarProductList(res);
    };

    fetchSimilarProducts();
  }, [product.name]);

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
          product={product}
          addToCart={addToCart}
          productRating={rating}
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

          {authenticated && (
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
          )}
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
        {displayPopUp && (
          <PopUp close={setDisplayPopUp} productId={product.id} />
        )}

        {/* footer section */}
        <Footer />
        {/* footer section */}
      </div>
    </>
  );
}

export default SingleProductPage;
