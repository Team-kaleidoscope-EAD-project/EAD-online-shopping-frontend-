import { Box, ImageListItem } from "@mui/material";
import React from "react";

function ProductColors({ image }) {
  return (
    <Box
      sx={{
        height: { xs: "115px", sm: "130px", md: "135px", lg: "145px" },
        width: { xs: "115px", sm: "130px", md: "135px", lg: "145px" },
        borderRadius: "20px",
        overflow: "hidden",
      }}
    >
      <ImageListItem
        sx={{
          width: "150px",
          height: "150px",
          img: {
            // Styles for the <img> within ImageListItem
            width: "100px",
            height: "100px",
            objectFit: "cover",
            transition: "all 0.2s ease",
            "&:hover": { scale: 1.1 },
          },
        }}
      >
        <img src={image} alt="colors" loading="lazy" />
      </ImageListItem>
    </Box>
  );
}

export default ProductColors;
