import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Chip,
  Box,
  IconButton,
} from "@mui/material";

import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ProductImage from "../../../assets/images/products/kalei1.png";

// navigation
import { useNavigate } from "react-router-dom";
// navigation

export default function ProductCard({ singleProduct }) {
  const navigate = useNavigate();
  const colors = [
    "#986AA2", // purple
    "#FBB7DC", // pink
    "#44BC68", // green
    "#9F5700", // brown
    "#A7C0D7", // blue
    "#EFE7DA", // beige
    "#626160", // dark gray
    "#00FFFF", // cyan
  ];

  const availableColors = ["#986AA2", "#44BC68", "#9F5700", "#00FFFF"];

  const [colorIndex, setColorIndex] = useState(0);

  const [material, setMaterial] = useState("Cotton");

  const handleViewProduct = () => {
    // Pass the product ID or any relevant data via the route

    localStorage.setItem("singleProduct", JSON.stringify(singleProduct));
    navigate(`/single-product-view`, {
      state: { id: singleProduct.id, singleProduct },
    });
  };

  const handleNextColorSet = () => {
    setColorIndex((prevIndex) => (prevIndex + 4) % colors.length);
  };

  return (
    <Box>
      <Card
        sx={{
          width: {
            xs: 250,
            sm: 250,
            md: 250,
          },
          borderRadius: 3,
          px: 2,
          py: 2,
          position: "relative",
          boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
          height: "auto", // Ensure the card's height is auto
        }}
      >
        {/* <Chip
          label="New"
          color="primary"
          sx={{
            position: "absolute",
            top: 25,
            left: 25,
            width: 50,
            height: 18,
            backgroundColor: "#ffffff",
            color: "#7C4100",
            fontWeight: "semi-bold",
            fontSize: 9,
            border: "1px solid #7C4100",
            zIndex: 1,
          }}
        /> */}
        <Box
          sx={{
            position: "relative",
            overflow: "hidden",
            borderRadius: 2,
            mb: 1,
            "&:hover img": {
              transform: "scale(1.2)",
            },
          }}
        >
          <CardMedia
            component="img"
            image={singleProduct.variants[0].imageUrl}
            alt="productImage"
            sx={{
              transition: "transform 0.3s ease-in-out",
              borderRadius: 2,
              mb: 1,
              height: "250px",
              objectFit: "fill",
            }}
          />
        </Box>
        <CardContent sx={{ px: 0, py: 0, mb: -3 }}>
          <Box sx={{ display: "flex", justifyContent: "space-between", mb: 1 }}>
            <Typography
              component="div"
              sx={{
                fontWeight: "bold",
                color: "#7C4100",
                fontSize: 13,
                flex: 2,
                lineHeight: 1.2,
                textAlign: "left",
              }}
            >
              {singleProduct.name}
            </Typography>
            <Typography
              component="div"
              sx={{
                color: "#7C4100",
                fontWeight: "bold",
                fontSize: 13,
                flex: 2,
                textAlign: "right",
              }}
            >
              Rs.{singleProduct.price.toFixed(2)}
            </Typography>
          </Box>
          <Box sx={{ display: "flex", justifyContent: "space-between", mb: 1 }}>
            <Typography variant="body2" color="#7C7C7C" sx={{ fontSize: 12 }}>
              Material
            </Typography>
            <Typography
              variant="body2"
              sx={{ color: "#7C7C7C", fontWeight: "regular", fontSize: 12 }}
            >
              {material}
            </Typography>
          </Box>
          <Box sx={{ display: "flex", justifyContent: "space-between", mb: 1 }}>
            <Typography variant="body2" color="#7C7C7C" sx={{ fontSize: 12 }}>
              Color
            </Typography>
            <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
              {singleProduct &&
                singleProduct.variants
                  .slice(colorIndex, colorIndex + 4)
                  .map((item, index) => (
                    <Box
                      key={index}
                      sx={{
                        position: "relative",
                        width: 15,
                        height: 15,
                        backgroundColor: item.color,
                        borderRadius: "50%",
                        cursor: "pointer",
                        border: "1px solid rgba(0,0,0,0.3)",
                      }}
                    >
                      {/* {!availableColors.includes(item.color) && (
                      <Box
                        sx={{
                          position: "absolute",
                          top: "50%",
                          left: "50%",
                          transform: "translate(-50%, -50%) rotate(45deg)",
                          width: "100%",
                          height: 2,
                          backgroundColor: "#FF0000", // Red cross mark
                        }}
                      />
                    )} */}
                    </Box>
                  ))}
              <IconButton size="small" onClick={handleNextColorSet}>
                <ArrowForwardIosIcon sx={{ fontSize: 8 }} />
              </IconButton>
            </Box>
          </Box>
          <Box sx={{ display: "flex", justifyContent: "space-between", mb: 2 }}>
            <Typography variant="body2" color="#7C7C7C" sx={{ fontSize: 12 }}>
              Size
            </Typography>
            <Box sx={{ display: "flex", gap: 1 }}>
              {singleProduct.variants[0].sizes.map((item, index) => (
                <Box
                  key={index}
                  sx={{
                    width: 15,
                    height: 15,
                    backgroundColor: "#F0E3D5",
                    color: "#7C4100",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: "50%",
                    fontSize: 8,
                    fontWeight: "bold",
                  }}
                >
                  {item.size}
                </Box>
              ))}
            </Box>
          </Box>
          <Button
            variant="contained"
            sx={{
              width: "100%",
              backgroundColor: "#F0E3D5",
              color: "#7C4100",
              fontWeight: "semi-bold",
              textTransform: "none",
              marginBottom: 0,
              borderRadius: 5,
              fontSize: 13,
              boxShadow: "rgba(240, 227, 213, 0.16) 0px 1px 4px",
            }}
            onClick={handleViewProduct}
          >
            VIEW PRODUCT
          </Button>
        </CardContent>
      </Card>
    </Box>
  );
}
