import { Box, Typography } from "@mui/material";
import React, { useState } from "react";
import ReviewCard from "./ReviewCard";
import MultiCarousel from "../../../../components/MultiCarousel/MultiCarousel";


function CustomerReview({ reviewDataList }) {

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

  const [selectedReview, setSelectedReview] = useState();

  return (
    <div style={{ padding: "25px" }}>
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
    </div>
  );
}

export default CustomerReview;
