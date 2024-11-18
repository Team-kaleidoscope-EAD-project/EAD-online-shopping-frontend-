import { Box, Rating, Typography } from "@mui/material";
import React from "react";

function UserRating({ ratingValue }) {
  return (
    <>
      <Typography
        sx={{
          fontFamily: "amiko_regular",
          fontSize: { xs: "20px", sm: "25px" },
          textAlign: "left",
          marginBottom: "10px",
        }}
      >
        User Ratings
      </Typography>

      <Box
        sx={{
          display: "flex",
          alignItems: "left",
        }}
      >
        <Rating
          name="user-rating"
          value={ratingValue}
          readOnly
          size="large"
          sx={{
            "& .MuiRating-icon": {
              fontSize: { xs: "40px", md: "60px" },
              marginRight: "25px",
            },
          }}
        />
      </Box>
    </>
  );
}

export default UserRating;
