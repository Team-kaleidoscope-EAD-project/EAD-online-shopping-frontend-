import { Box, Grid2, Typography } from "@mui/material";
import React from "react";
import ProductCard from "../../../../components/Cards/ProductCard/ProductCard";

const similarProductList = [1, 2, 3, 1, 2];

function SimilarProduct() {
  return (
    <div>
      <Typography
        sx={{
          fontFamily: "amiko_semibold",
          fontSize: { xs: "20px", md: "25px" },
          textAlign: "left",
          height: "100%",
          color: "#7C4100",
          marginBottom: "25px",
        }}
      >
        SIMILAR PRODUCTS
      </Typography>

      <Grid2
        container
        spacing={{ xs: 2, sm: 3, md: 4, lg: 6 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
        sx={{
          justifyContent: "center",
        }}
      >
        {similarProductList.map((item, index) => (
          <Grid2 key={index} item xs={6} md={8}>
            <ProductCard />
          </Grid2>
        ))}
      </Grid2>
    </div>
  );
}

export default SimilarProduct;