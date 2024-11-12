import React from "react";
import Box from "@mui/material/Box";
import styles from "./CollectionCard2.module.css";

export default function CollectionCard2({ name, image, noOfItems }) {
  return (
    <Box
      className="collectionCard"
      component="section"
      sx={{
        maxWidth: 300,
        height: 480,
        borderRadius: "30px",
        borderColor: "black",
        backgroundImage: "url(" + image + ")",
        backgroundSize: "cover",
        position: "flex",
        boxSizing: "border-box",
        padding: "20px",
        overflow: "hidden",
        "&:hover::after": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          width: 300,
          height: 480,
          borderRadius: "30px",
          background:
            "linear-gradient(180deg, rgba(100, 100, 100, 0.5), rgba(50, 50, 50, 0.8))",
        },
      }}
    >
      <Box
        sx={{
          width: 300,
          height: 250,
          position: "absolute",
          top: 230,
          left: 0,
          borderRadius: "0px 0px 30px 30px",
          background:
            "linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(100,100,100,1) 100%)",
        }}
      />
      <div className={styles.container}>
        <h1>{name}</h1>
        <h3>{noOfItems} PRODUCTS </h3>
      </div>
    </Box>
  );
}
