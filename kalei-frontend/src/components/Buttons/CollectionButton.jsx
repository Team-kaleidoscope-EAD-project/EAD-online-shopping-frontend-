import React from "react";
import Button from "@mui/material/Button";

export default function CollectionButton({
  name,
  bgColor,
  txtColor,
  parseFunction,
}) {
  return (
    <div>
      <Button
        variant="contained"
        sx={{
          backgroundColor: "#be8748",
          color: "#FFFFFF",
          borderRadius: "20px",
          padding: "6px 20px",
          fontFamily: "amiko",
          fontSize: "12px",
          fontWeight: "bold",
          boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
          "&:hover": {
            backgroundColor: "#d48c3a",
          },
          boxSizing: "border-box",
        }}
        onClick={parseFunction}
      >
        {name}
      </Button>
    </div>
  );
}
