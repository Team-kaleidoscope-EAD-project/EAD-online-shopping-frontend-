import { Box, Typography } from "@mui/material";
import React, { useState } from "react";
import ReviewCard from "./ReviewCard";
import MultiCarousel from "../../../../components/MultiCarousel/MultiCarousel";

const reviewDataList = [
  {
    proPic: require("../../../../assets/images/profile/profileImg.png"),
    username: "Anonymous user",
    date: "October 21, 2024",
    ratingValue: 3,
    comment:
      "The silk clothing is absolutely stunning! It feels incredibly soft and lightweight, making it perfect for all-day comfort. The fabric drapes beautifully and gives a luxurious vibe. I love how breathable it is, even on warmer days. It’s my new go-to for both casual outings and special occasions!",
  },
  {
    proPic: require("../../../../assets/images/profile/profileImg.png"),
    username: "Anonymous user",
    date: "October 21, 2024",
    ratingValue: 4,
    comment:
      "The silk clothing is absolutely stunning! It feels incredibly soft and lightweight, making it perfect for all-day comfort. The fabric drapes beautifully and gives a luxurious vibe. I love how breathable it is, even on warmer days. It’s my new go-to for both casual outings and special occasions!",
  },
  {
    proPic: require("../../../../assets/images/profile/profileImg.png"),
    username: "Anonymous user",
    date: "October 21, 2024",
    ratingValue: 5,
    comment:
      "The silk clothing is absolutely stunning! It feels incredibly soft and lightweight, making it perfect for all-day comfort. The fabric drapes beautifully and gives a luxurious vibe. I love how breathable it is, even on warmer days. It’s my new go-to for both casual outings and special occasions!",
  },
  {
    proPic: require("../../../../assets/images/profile/profileImg.png"),
    username: "Anonymous user",
    date: "October 21, 2024",
    ratingValue: 4,
    comment:
      "The silk clothing is absolutely stunning! It feels incredibly soft and lightweight, making it perfect for all-day comfort. The fabric drapes beautifully and gives a luxurious vibe. I love how breathable it is, even on warmer days. It’s my new go-to for both casual outings and special occasions!",
  },
  {
    proPic: require("../../../../assets/images/profile/profileImg.png"),
    username: "Anonymous user",
    date: "October 21, 2024",
    ratingValue: 1,
    comment:
      "The silk clothing is absolutely stunning! It feels incredibly soft and lightweight, making it perfect for all-day comfort. The fabric drapes beautifully and gives a luxurious vibe. I love how breathable it is, even on warmer days. It’s my new go-to for both casual outings and special occasions!",
  },
];

const reviewList = reviewDataList.map((item, index) => {
  return (
    <ReviewCard
      key={index}
      proPic={item.proPic}
      username={item.username}
      date={item.date}
      ratingValue={item.ratingValue}
      comment={item.comment}
    />
  );
});

function CustomerReview() {
  const [selectedReview, setSelectedReview] = useState();

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
            fontSize: { xs: "20px", md: "25px" },

            height: "100%",
          }}
        >
          CUSTOMER REVIEWS
        </Typography>
      </Box>

      <Box
        sx={{
          marginTop: "40px",
        }}
      >
        <MultiCarousel
          list={reviewList}
          selectedItem={setSelectedReview}
          itemsCount={{ desktop: 2, tablet: 1, mobile: 1 }}
        />
      </Box>
    </>
  );
}

export default CustomerReview;
