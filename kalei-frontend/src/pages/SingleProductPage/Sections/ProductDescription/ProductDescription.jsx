import { Box, Typography } from "@mui/material";
import React from "react";

const productDescription =
  "Brand - HUF & DEE Material -Cotton Lycra \n Neck – Crew \n Sleeve - Short Sleeve \n Texture – Printed \n Size - S - 3XL";

function ProductDescription() {
  return (
    <div style={{ padding: "25px" }}>
      <Box
        sx={{
          display: "flex",
          width: "100%",
          borderBottom: "1px solid rgba(0,0,0,0.2)",
          justifyContent: "center",
        }}
      >
        <Typography
          sx={{
            fontFamily: "amiko_semibold",
            fontSize: { xs: "20px", md: "25px" },
            width: "200px",
            height: "100%",
            borderBottom: "4px solid black",
            color: "#2C2828",
          }}
        >
          DESCRIPTION
        </Typography>
      </Box>

      {/* description */}

      <Box
        sx={{
          marginTop: "25px",
        }}
      >
        <Typography
          sx={{
            fontFamily: "amiko_regular",
            fontSize: { xs: "16px", md: "20px" },
            textAlign: "left",
          }}
        >
          {productDescription}
        </Typography>
      </Box>
    </div>
  );
}

export default ProductDescription;
