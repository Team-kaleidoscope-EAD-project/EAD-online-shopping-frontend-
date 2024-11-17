import { Box } from "@mui/material";
import React from "react";

function MainImage({ productImage }) {
  return (
    <>
      <Box
        sx={{
          height: { xs: "452px", md: "650px", lg: "1000px" },
          width: { xs: "100%", md: "570px", lg: "768px" },
          backgroundColor: "white",
          borderRadius: "20px",
          overflow: "hidden",
        }}
      >
        <img
          src={productImage}
          alt="Single Product"
          style={{
            width: "100%",
            height: "100%",
            resize: "cover",
          }}
        />
      </Box>
    </>
  );
}

export default MainImage;
