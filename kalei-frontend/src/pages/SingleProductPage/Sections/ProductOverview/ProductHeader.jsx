import { Box, Typography } from "@mui/material";
import React from "react";

function ProductHeader({ productName, productId, productPrice }) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",

        textAlign: "left",
      }}
    >
      <Typography
        sx={{
          fontSize: { xs: "30px", sm: "35px", md: "40px" },
          fontFamily: "amiko-bold",
        }}
      >
        {productName}
      </Typography>

      <Typography
        sx={{
          fontSize: { xs: "14px", sm: "18px", md: "20px" },

          fontFamily: "amiko_regular",
        }}
      >
        ITEM ID: {productId}
      </Typography>

      <Typography
        sx={{
          fontSize: { xs: "30px", sm: "35px", md: "40px" },

          fontFamily: "amiko-bold",
          marginTop: { xs: "25px", sm: "30px", md: "40px" },
        }}
      >
        Rs {productPrice.toLocaleString("en-IN")}
      </Typography>
    </Box>
  );
}

export default ProductHeader;
