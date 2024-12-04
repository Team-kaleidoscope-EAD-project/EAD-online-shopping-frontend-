import { Box, Rating, Typography } from "@mui/material";
import React, { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import { addFeedback } from "../../../../services/feedbacks/feedback";
import { userInfo } from "../../../../services/users/userInfo";

function PopUp({ close, productId }) {
  const [ratedValue, setRatedValue] = useState(0);
  const [feedbackContent, setFeedbackContent] = useState("");

  const handleSubmit = async () => {
    try {
      const { userId } = await userInfo();

      close(false);
      await addFeedback({
        userId: userId,
        productId,
        rating: ratedValue,
        feedbackContent,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Box
        sx={{
          display: "flex",
          width: "100%",
          height: "100%",
          position: "fixed",
          backgroundColor: "rgba(0,0,0,0.7)",
          zIndex: 10,
          top: 0,
          marginLeft: "-25px",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            width: { xs: "100%", md: "50%" },
            height: "auto",
            backgroundColor: "white",
            alignSelf: "center",
            borderRadius: "15px",
            padding: "40px",
            textAlign: "left",
          }}
        >
          {/* Rating  */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <Typography
              sx={{
                fontFamily: "amiko_semibold",
                marginBottom: "10px",

                fontSize: "18px",
              }}
            >
              Rating
            </Typography>

            <Box
              sx={{
                display: "flex",
                width: "40px",
                height: "40px",
                borderRadius: "25px",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "rgba(0,0,0,0.1)",
                cursor: "pointer",
                transition: "all 0.15s ease",

                "&:hover": {
                  backgroundColor: "rgba(0,0,0,0.3)",
                },

                "&:active": {
                  opacity: 0.5,
                },
              }}
              onClick={() => close(false)}
            >
              <CloseIcon />
            </Box>
          </Box>

          <Rating
            name="user-rating"
            value={ratedValue}
            onChange={(event, newValue) => setRatedValue(newValue)}
            size="large"
            sx={{
              "& .MuiRating-icon": {
                fontSize: { xs: "30px", md: "35px" },
                marginRight: "5%",
              },
            }}
          />

          {/* commet  */}
          <Typography
            sx={{
              fontFamily: "amiko_semibold",
              marginBottom: "10px",
              marginTop: "25px",
              fontSize: "18px",
            }}
          >
            Your Review
          </Typography>
          <textarea
            style={{
              width: "100%",
              height: "200px",
              fontSize: "18px",
              fontWeight: "regualar",
              outline: "none",
              borderRadius: "10px",
            }}
            onChange={(e) => {
              setFeedbackContent(e.target.value);
            }}
          />

          {/* submit btn */}

          <Box
            sx={{
              marginTop: "25px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: "15px",
              backgroundColor: "rgba(50,50,50)",
              borderRadius: "10px",
              cursor: "pointer",
              width: "30%",
              transition: "all 0.15s ease",

              "&:hover": {
                opacity: 0.8,
              },

              "&:active": {
                opacity: 0.6,
              },
            }}
            onClick={handleSubmit}
          >
            <Typography
              sx={{
                fontFamily: "amiko-bold",
                fontSize: { xs: "15px", md: "18px" },
                color: "white",
              }}
            >
              Submit
            </Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default PopUp;
