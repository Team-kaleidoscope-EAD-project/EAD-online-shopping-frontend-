import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import CollectionButton from "../../Buttons/CollectionButton";

import styles from "./OrderCard.module.css";

export default function OrderCard({
  status,
  lastUpdatedDate,
  imgUrl,
  noOfItems,
  orderNo,
  price,
}) {
  return (
    <Card
      sx={{ width: "250px", borderRadius: "15px"}}
      className={styles.orderCard}
    >
      <CardHeader
        title={
          <Typography
            variant="h6"
            sx={{
              color: "#000000",
              fontFamily: "amiko",
              fontWeight: "800",
              fontSize: "14px",
            }}
          >
            {status}
          </Typography>
        }
        subheader={
          <Typography
            variant="h6"
            sx={{
              color: "grey",
              fontFamily: "amiko",
              fontSize: "12px",
            }}
          >
            {lastUpdatedDate}
          </Typography>
        }
      />
      <CardMedia component="img" height="195" image={imgUrl} />
      <CardContent>
        <Typography
          variant="body2"
          sx={{
            color: "#000000",
            fontFamily: "amiko",
            fontWeight: "800",
            fontSize: "14px",
          }}
        >
          {noOfItems}
          {noOfItems > 1 ? " items" : " item"}
        </Typography>
        <Typography
          sx={{
            color: "text.secondary",
            fontFamily: "amiko",
            fontWeight: "500",
            fontSize: "14px",
          }}
        >
          {"Order " + orderNo}
        </Typography>
        <Typography
          sx={{
            color: "#000000",
            fontFamily: "amiko",
            fontWeight: "800",
            fontSize: "14px",
          }}
        >
          {"Rs " + price}
        </Typography>
        <CollectionButton name={"VIEW MORE"} />
      </CardContent>
      <CardActions disableSpacing></CardActions>
    </Card>
  );
}
