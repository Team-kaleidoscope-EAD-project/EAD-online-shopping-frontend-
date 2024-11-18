import { Box, Typography } from "@mui/material";
import React from "react";

const similarProductList = [1, 2, 3];

function SimilarProduct() {
  return (
    <div>
      <Typography
        sx={{
          fontFamily: "amiko_semibold",
          fontSize: "25px",
          textAlign: "left",
          height: "100%",
          color: "#7C4100",
        }}
      >
        SIMILAR PRODUCTS
      </Typography>

      <Box
        sx={{
          display: "flex",
          gap: "25px",
        }}
      >
        {similarProductList.map((item, index) => (
          <Box key={index}>
            <Box
              sx={{
                height: "100px",
                width: "100px",
                backgroundColor: "red",
              }}
            ></Box>
          </Box>
        ))}
      </Box>
    </div>
  );
}

export default SimilarProduct;
