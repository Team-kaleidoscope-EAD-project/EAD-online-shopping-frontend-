import React from "react";
import Grid from "@mui/material/Grid2";
import OrderCard from "../../components/Cards/OrderCard/OrderCard";
import image1 from "../../assets/images/collectionImages/collection1.jpg";
import image2 from "../../assets/images/collectionImages/collection2.jpg";
import Typography from "@mui/material/Typography";

const orders = [
  {
    key: 1,
    status: "Delivered",
    lastUpdatedDate: "6 days ago",
    imgUrl: image1,
    noOfItems: 2,
    orderNo: "#1234",
    price: 8500,
  },
  {
    key: 2,
    status: "On its way",
    lastUpdatedDate: "3 days ago",
    imgUrl: image2,
    noOfItems: 1,
    orderNo: "#2134",
    price: 6000,
  },
  {
    key: 3,
    status: "Delivered",
    lastUpdatedDate: "1 week ago",
    imgUrl: image1,
    noOfItems: 3,
    orderNo: "#1235",
    price: 12000,
  },
  {
    key: 4,
    status: "Delivered",
    lastUpdatedDate: "2 weeks ago",
    imgUrl: image2,
    noOfItems: 1,
    orderNo: "#1236",
    price: 6000,
  },
  {
    key: 5,
    status: "Delivered",
    lastUpdatedDate: "3 weeks ago",
    imgUrl: image1,
    noOfItems: 2,
    orderNo: "#1237",
    price: 8500,
  },
];
export default function Orders() {
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
          <div>No orders found.</div>
        ) : (
          orders.map((order) => (
            <OrderCard
              key={order.key}
              status={order.status}
              price={order.price}
              lastUpdatedDate={order.lastUpdatedDate}
              imgUrl={order.imgUrl}
              noOfItems={order.noOfItems}
              orderNo={order.orderNo}
            />
          ))
        )}
      </Grid>
    </div>
  );
}
