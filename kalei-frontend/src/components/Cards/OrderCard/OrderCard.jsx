import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";

import styles from "./OrderCard.module.css";
import OrderDetails from "../../OrderDetails/OrderDetails";

export default function OrderCard({
  status,
  lastUpdatedDate,
  imgUrl,
  order,
  price,
}) {

  // drawer
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };
  // drawer

  return (
    <>
      <div onClick={toggleDrawer(true)}>
        <Card className={styles.orderCard}>
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
              sx={{
                color: "text.secondary",
                fontFamily: "amiko",
                fontWeight: "500",
                fontSize: "14px",
              }}
            >
              {"Order " + order.id}
            </Typography>
            <Typography
              sx={{
                color: "#000000",
                fontFamily: "amiko",
                fontWeight: "800",
                fontSize: "1.5rem",
              }}
            >
              Total : {"Rs " + price}
            </Typography>
          </CardContent>
          <CardActions disableSpacing></CardActions>
        </Card>
      </div>

      {/* order details */}
      <OrderDetails
        closingController={toggleDrawer(false)}
        open={open}
        order={order}
      />
      {/* order details */}
      
    </>
  );
}
