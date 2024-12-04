import { Box, Typography } from "@mui/material";
import React, { useState } from "react";
import ReviewCard from "./ReviewCard";
import MultiCarousel from "../../../../components/MultiCarousel/MultiCarousel";
import { userInfo } from "../../../../services/users/userInfo";

function CustomerReview({ reviewDataList }) {
  const reviewList = reviewDataList.map((item, index) => {
    const date = new Date(item.dateTime);

    return (
      <ReviewCard
        key={index}
        proPic={item.proPic}
        username={item.userId}
        date={date.toISOString().split("T")[0]}
        ratingValue={item.rating}
        comment={item.feedbackContent}
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

      {reviewDataList && reviewDataList.length > 0 ? (
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
      ) : (
        <Typography sx={{ marginTop: "10px", color: "rgba(30,30,30,0.5)" }}>
          No reviews to show
        </Typography>
      )}
    </div>
  );
}

export default CustomerReview;
