import { Avatar, Box, Rating, Typography } from "@mui/material";
import React from "react";

function ReviewCard({ proPic, ratingValue, username, date, comment }) {
  return (
    <Box
      sx={{
        height: { xs: "350px", md: "400px" },
        width: { xs: "100%", md: "85%" },
        boxShadow: "2px 2px 8px rgba(0,0,0,0.15)",
        padding: "35px",
        borderRadius: "20px",
        border: "2px solid rgba(162,162,162,0.5)",
        textAlign: "left",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          width: "100%",
          gap: "25px",
        }}
      >
        <Avatar
          alt="User Name"
          src={proPic}
          sx={{
            width: { xs: "50px", md: "60px" },
            height: { xs: "50px", md: "60px" },
          }}
        />
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },

            width: "100%",
            justifyContent: "space-between",
          }}
        >
          <Box>
            <Typography sx={{ fontFamily: "amiko_semibold", fontSize: "20px" }}>
              {username}
            </Typography>
            <Typography
              sx={{
                fontFamily: "amiko_semibold",
                fontSize: "16px",
                color: "#999999",
              }}
            >
              {date}
            </Typography>
          </Box>

          <Rating
            name="user-rating"
            value={ratingValue}
            readOnly
            size="large"
            sx={{
              "& .MuiRating-icon": {
                fontSize: { xs: "25px", sm: "25px", md: "30px" },
                marginRight: "5%",
              },
            }}
          />
        </Box>
      </Box>

      <Typography
        sx={{
          fontFamily: "amiko_regular",
          fontSize: { xs: "15px", md: "20px" },
          marginTop: "25px",
          height: "170px",
          overflow: "scroll",
          scrollbarWidth: "none",
          "&::-webkit-scrollbar": {
            display: "none",
          },
        }}
      >
        {comment}
      </Typography>
    </Box>
  );
}

export default ReviewCard;
