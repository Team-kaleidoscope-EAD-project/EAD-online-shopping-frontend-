import { Box } from "@mui/material";
import React from "react";

function MainImage({ productImage }) {
  return (
    <>
      <Box
        sx={{
          height: "auto",
          width: { xs: "100%", md: "600px", lg: "768px" },
          backgroundColor: "white",
          borderRadius: "20px",
          overflow: "hidden",
        }}
      >
        {console.log("main image:" + productImage)}
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
