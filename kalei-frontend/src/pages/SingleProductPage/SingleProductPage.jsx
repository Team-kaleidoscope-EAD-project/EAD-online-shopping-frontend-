import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import ProductOverview from "./Sections/ProductOverview/ProductOverview";
import { Box } from "@mui/material";
import ProductDescription from "./Sections/ProductDescription/ProductDescription";
import CustomerReview from "./Sections/CutomerReview/CustomerReview";
import SimilarProduct from "./Sections/SimilarProducts/SimilarProduct";

function SingleProductPage() {
  return (
    <>
      <Navbar />

      <div
        style={{
          padding: "25px",
          color: "#292726",
        }}
      >
        {/* Header Section  */}
        <ProductOverview />

        {/* Description  */}
        <Box
          sx={{
            marginTop: { xs: "60px", md: "100px" },
          }}
        >
          <ProductDescription />
        </Box>

        {/* Review  */}
        <Box
          sx={{
            marginTop: { xs: "60px", md: "100px" },
          }}
        >
          <CustomerReview />
        </Box>

        {/* Similar product bottom section */}
        <Box
          sx={{
            marginTop: { xs: "60px", md: "100px" },
          }}
        >
          <SimilarProduct />
        </Box>
      </div>
    </>
  );
}

export default SingleProductPage;
