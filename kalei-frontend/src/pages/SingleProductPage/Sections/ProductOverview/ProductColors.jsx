import { Box } from "@mui/material";
import React from "react";

function ProductColors({ image }) {
  return (
    <Box
      sx={{
        height: { xs: "115px", sm: "130px", md: "140px", lg: "160px" },
        width: { xs: "115px", sm: "130px", md: "140px", lg: "160px" },
        borderRadius: "20px",
        overflow: "hidden",
      }}
    >
      <img
        src={image}
        alt="colors"
        style={{
          width: "100%",
          height: "100%",
          resize: "cover",
        }}
      />
    </Box>
  );
}

export default ProductColors;
