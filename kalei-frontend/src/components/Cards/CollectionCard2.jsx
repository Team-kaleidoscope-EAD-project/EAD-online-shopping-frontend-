import React from "react";
import { Card, CardContent, Box } from "@mui/material";
import styles from "./CollectionCard.module.css";
import CollectionButton from "../Buttons/CollectionButton";

import { useNavigate } from "react-router-dom";

export default function CollectionCard2({ name, image }) {
  const navigate = useNavigate();

  const handleViewCollection = (category) => {
    navigate(`/product-catalog`, { state: { category } });
  };

  return (
    <div className={styles.collectionCard}>
      <Card
        sx={{
          position: "relative",
          width: { xs: "250px", lg: "300px" },
          height: { xs: "350px", lg: "480px" },
          borderRadius: "12px",
          overflow: "hidden",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundImage: `url(${image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            zIndex: 1,
          }}
        />

        <Box
          sx={{
            position: "absolute",
            bottom: 0,
            left: 0,
            width: "100%",
            height: "40%",
            background:
              "linear-gradient(to top, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0))",
            zIndex: 2,
          }}
        />
        <CardContent
          sx={{
            position: "absolute",
            bottom: 0,
            zIndex: 3,
            color: "white",
            width: "100%",
            padding: "16px",
            boxSizing: "border-box",
          }}
        >
          <div className={styles.container}>
            <h1>{name}</h1>
            <CollectionButton
              parseFunction={() => handleViewCollection(name)}
            />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
