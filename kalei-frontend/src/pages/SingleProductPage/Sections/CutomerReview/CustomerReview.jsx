import { Box, Typography } from "@mui/material";
import React from "react";
import EditIcon from "@mui/icons-material/Edit";

function CustomerReview() {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          width: "100%",
          justifyContent: "center",
        }}
      >
        <Typography
          sx={{
            fontFamily: "amiko_semibold",
            fontSize: "25px",

            height: "100%",
          }}
        >
          CUSTOMER REVIEWS
        </Typography>
      </Box>

      {/* write a review */}

      <Box
        sx={{
          display: "flex",
          width: "100%",
          border: "1px solid transparent",
          marginTop: "60px",
          cursor: "pointer",
          transition: "all 0.15s ease-in",
          justifyContent: "center",
          alignItems: "center",
          "&:hover": {
            border: "1px solid black",
          },
        }}
      >
        <EditIcon
          sx={{
            fontSize: "25px",
            marginRight: "15px",
          }}
        />
        <Typography
          sx={{
            fontFamily: "amiko_semibold",
            fontSize: "25px",
            height: "100%",
          }}
        >
          WRITE A REVIEW
        </Typography>
      </Box>
    </>
  );
}

export default CustomerReview;
