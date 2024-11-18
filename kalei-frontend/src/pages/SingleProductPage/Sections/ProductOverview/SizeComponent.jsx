import { Box, Typography } from "@mui/material";
import React, { useState } from "react";

function SizeComponent({ sizeList, selectedSize }) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  return (
    <>
      <Box>
        <Typography
          sx={{
            fontFamily: "amiko_regular",
            fontSize: { xs: "20px", sm: "25px" },
            textAlign: "left",
            marginBottom: "10px",
          }}
        >
          Size
        </Typography>

        {/* mapping sizes list  */}

        <Box
          sx={{
            display: "flex",

            gap: "15px",
          }}
        >
          {Array.isArray(sizeList) && sizeList.length > 0 ? (
            sizeList.map((item, index) => (
              <Box
                key={index}
                sx={{
                  display: "flex",
                  height: { xs: "55px", sm: "65px" },
                  width: { xs: "80px", sm: "100px" },
                  borderRadius: "10px",
                  backgroundColor:
                    selectedIndex === index ? "#1E1B1B" : "white",
                  cursor: "pointer",
                  alignItems: "center",
                  justifyContent: "center",
                }}
                onClick={() => {
                  setSelectedIndex(index);
                  selectedSize(index);
                }}
              >
                <Typography
                  sx={{
                    fontFamily: "amiko-bold",
                    fontSize: { xs: "16px", sm: "20px" },
                    color: selectedIndex === index ? "white" : "#1E1B1B",
                  }}
                >
                  {item}
                </Typography>
              </Box>
            ))
          ) : (
            <Typography
              sx={{
                color: "red",
                textAlign: "left",
              }}
            >
              out of stock
            </Typography>
          )}
        </Box>
      </Box>
    </>
  );
}

export default SizeComponent;
