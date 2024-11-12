import React from "react";
import styles from "./CollectionButton.module.css";
import Button from "@mui/material/Button";

export default function CollectionButton({ name, bgColor, txtColor }) {
  return (
    <div>
      <Button
        variant="contained"
        sx={{
          backgroundColor: "#7C4100",
          color: "#FFFFFF",
          borderRadius: "20px",
          padding: "6px 20px",
          fontFamily: "amiko",
          fontSize: "12px",
          fontWeight: "bold",
          boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
          "&:hover": {
            backgroundColor: "#4A240A",
          },
          boxSizing: "border-box",
        }}
      >
        SHOP NOW
      </Button>
    </div>
  );
}
