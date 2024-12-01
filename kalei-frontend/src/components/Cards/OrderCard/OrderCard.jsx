import React from "react";
import { Card, CardContent, Box } from "@mui/material";
import styles from "./OrderCard.module.css";
import CollectionButton from "../../Buttons/CollectionButton";

export default function OrderCard({
  status,
  orderNumber,
  lastUpdated,
  image,
  noOfItems,
  price,
}) {
  return (
    <div>
      <Card
        sx={{
          position: "relative",
          width: { xs: "250px", lg: "300px" },
          height: { xs: "350px", lg: "480px" },
          borderRadius: "8px",
          overflow: "hidden",
        }}
      >
        <div>
          <Box
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "10%",
              background: "white",
              zIndex: 2,
            }}
          />
          <CardContent
            sx={{
              position: "absolute",
              top: 0,
              zIndex: 3,
              color: "black",
              width: "100%",
              padding: "16px",
              boxSizing: "border-box",
              zIndex: 4,
            }}
          >
            <div>
              <h3 className={styles.topTextStatus}>{status}</h3>
              <h3 className={styles.topTextDate}>{lastUpdated}</h3>
            </div>
          </CardContent>
        </div>
        <Box
          sx={{
            position: "absolute",
            top: 20,
            left: 0,
            width: "100%",
            height: "70%",
            backgroundImage: `url(${image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            zIndex: 1,
          }}
        />
        <CardContent
          sx={{
            position: "absolute",
            bottom: 0,
            zIndex: 3,
            color: "black",
            width: "100%",
            padding: "16px",
            boxSizing: "border-box",
          }}
        >
          <div>
            <h3 className={styles.h1}>{"Order " + orderNumber}</h3>
            <h3 className={styles.items}>{noOfItems + " Items"}</h3>
            <h3 className={styles.h3}>{price}</h3>
          </div>
          <div>
            <CollectionButton buttonName={"BUY AGAIN"} />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
