import React, { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import ProductOverview from "./Sections/ProductOverview/ProductOverview";
import { Box, Typography } from "@mui/material";
import ProductDescription from "./Sections/ProductDescription/ProductDescription";
import CustomerReview from "./Sections/CutomerReview/CustomerReview";
import SimilarProduct from "./Sections/SimilarProducts/SimilarProduct";
import PopUp from "./Sections/CutomerReview/PopUp";
import EditIcon from "@mui/icons-material/Edit";
import Footer from "../../components/Footer/Footer";

function SingleProductPage() {
  const [displayPopUp, setDisplayPopUp] = useState(false);

  return (
    <>
      <Navbar />
      <div
        style={{
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
          <SimilarProduct />
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
