import { Grid2, Typography } from "@mui/material";
import React from "react";
import ProductCard from "../../../../components/Cards/ProductCard/ProductCard";

function SimilarProduct({ similarProductList }) {
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
          justifyContent: "flex-start",
        }}
      >
        {similarProductList &&
          similarProductList.length > 0 &&
          similarProductList.map((item, index) => (
            <Grid2 key={index} item xs={6} md={8}>
              <ProductCard singleProduct={item} />
            </Grid2>
          ))}

        {!similarProductList && (
          <Typography sx={{ marginTop: "10px", color: "rgba(30,30,30,0.5)" }}>
            No similar products to show
          </Typography>
        )}
      </Grid2>
    </div>
  );
}

export default SimilarProduct;
