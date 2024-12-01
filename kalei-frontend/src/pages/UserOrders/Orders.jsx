import React from "react";
import Grid from "@mui/material/Grid2";
import OrderCard from "../../components/Cards/OrderCard/OrderCard";
import image1 from "../../assets/images/collectionImages/collection1.jpg";
import image2 from "../../assets/images/collectionImages/collection2.jpg";
import Typography from "@mui/material/Typography";

export default function CollectionsPage() {
  const orders = [
    {
      key: 1,
      orderNumber: "#1234",
      image: image1,
      noOfItems: 2,
      price: "Rs 8500",
      status: "Delivered",
      lastUpdated: "6 days ago",
    },
    {
      key: 2,
      orderNumber: "#4321",
      image: image2,
      noOfItems: 3,
      price: "Rs 10500",
      status: "In Transit",
      lastUpdated: "2 days ago",
    },
  ];
  return (
    <div>
      <Typography
        key="3"
        sx={{
          color: "text.primary",
          marginBottom: 2,
          fontSize: 24,
          fontFamily: "amiko",
          textAlign: "start",
          marginLeft: "20px",
        }}
      >
        Orders
      </Typography>
      <Grid
        size={{ xs: 12 }}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "4vw",
          paddingLeft: "3vw",
          paddingRight: "3vw",
        }}
      >
        {orders.length === 0 ? (
          <div>No collections found.</div>
        ) : (
          orders.map((order) => (
            <OrderCard
              key={order.key}
              orderNumber={order.orderNumber}
              image={order.image}
              noOfItems={order.noOfItems}
              price={order.price}
              status={order.status}
              lastUpdated={order.lastUpdated}
            />
          ))
        )}
      </Grid>
    </div>
  );
}
