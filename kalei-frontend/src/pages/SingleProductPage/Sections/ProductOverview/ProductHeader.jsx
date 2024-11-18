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
          fontSize: { xs: "28px", sm: "30px", md: "35px" },
          fontFamily: "amiko-bold",
        }}
      >
        {productName}
      </Typography>

      <Typography
        sx={{
          fontSize: { xs: "14px", sm: "16px", md: "18px" },

          fontFamily: "amiko_regular",
        }}
      >
        ITEM ID: {productId}
      </Typography>

      <Typography
        sx={{
          fontSize: { xs: "28px", sm: "30px", md: "35px" },

          fontFamily: "amiko-bold",
          marginTop: { xs: "25px", sm: "30px", md: "30px" },
        }}
      >
        Rs {productPrice.toLocaleString("en-IN")}
      </Typography>
    </Box>
  );
}

export default ProductHeader;
