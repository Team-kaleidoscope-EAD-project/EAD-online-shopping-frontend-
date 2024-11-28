import { Box, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";

function PriceSection({
  productPrice,
  productStock,
  selectedQuantity,
  handleCart,
}) {
  const [productQuantity, setProductQuantity] = useState(1);

  useEffect(() => {
    selectedQuantity(productQuantity);
  }, [productQuantity]);

  return (
    <>
      <Typography
        sx={{
          fontFamily: "amiko_regular",
          textAlign: "left",
          fontSize: { xs: "20px", sm: "22px" },
          display: "flex",

          alignItems: "center",
        }}
      >
        Subtotal :
        <Typography
          sx={{
            fontFamily: "amiko-bold",
            fontSize: { xs: "20px", sm: "22px" },
            marginLeft: "10px",
          }}
        >
          Rs: {(productPrice * productQuantity).toLocaleString("en-IN")}
        </Typography>
      </Typography>

      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row", md: "row" },
          gap: "30px",
          marginTop: { xs: "20px", sm: "25px", md: "30px" },
        }}
      >
        {/* quantity changeing component  */}
        <Box
          sx={{
            display: "flex",
            width: { xs: "100%", sm: "120px", md: "150px" },
            height: { xs: "60px", sm: "65px", md: "70px" },
            borderRadius: "20px",
            border: "1px solid black ",
            alignItems: "center",
            justifyContent: "space-between",
            overflow: "hidden",
          }}
        >
          {/* decreasing quanties */}
          <Box
            sx={{
              display: "flex",
              height: "100%",
              width: "20%",
              fontWeight: "bold",
              cursor: "pointer",
              fontSize: "40px",
              alignItems: "center",
              justifyContent: "center",
            }}
            onClick={() => {
              if (productQuantity > 1) setProductQuantity(productQuantity - 1);
            }}
          >
            -
          </Box>

          <Typography
            sx={{
              fontFamily: "amiko_semibold",
              fontSize: "20px",
            }}
          >
            {productQuantity}
          </Typography>

          {/* Increasing quantities */}
          <Box
            sx={{
              display: "flex",
              height: "100%",
              width: "20%",
              fontWeight: "bold",
              cursor: "pointer",
              fontSize: "30px",
              alignItems: "center",
              justifyContent: "center",
            }}
            onClick={() => {
              if (productQuantity < productStock)
                setProductQuantity(productQuantity + 1);
            }}
          >
            +
          </Box>
        </Box>

        {/* Add to cart component */}

        <Box
          sx={{
            display: "flex",
            width: { xs: "100%", sm: "150px", md: "180px" },
            height: { xs: "60px", sm: "65px", md: "70px" },
            borderRadius: "20px",
            backgroundColor: "#1E1B1B",
            alignItems: "center",
            justifyContent: "center",
            color: "white",
            cursor: "pointer",
            transition: "all 0.25s ease",

            "&:hover": {
              opacity: 0.8,
            },
            "&:active": {
              opacity: 0.6,
            },
          }}
          onClick={() => handleCart()}
        >
          <Typography
            sx={{
              fontFamily: "amiko-bold",
              fontSize: { xs: "18px", md: "20px" },
            }}
          >
            Add to cart
          </Typography>
        </Box>
      </Box>
    </>
  );
}

export default PriceSection;
