// CartPage.jsx
import React, { useState } from "react";
import { Box, Typography, Grid, Divider } from "@mui/material";
import CartItem from "../../../../components/CartItem/CartItem";
import OrderSummary from "../../../../components/CartItem/OrderSummary";

const CartPage = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Pink Top",
      price: 2500,
      quantity: 1,
      imgSrc: "/path-to-image1.jpg",
    },
    {
      id: 2,
      name: "Purple Tee",
      price: 2500,
      quantity: 1,
      imgSrc: "/path-to-image2.jpg",
    },
  ]);

  const updateQuantity = (id, newQuantity) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const total = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <Box p={3}>
      <Typography variant="h5" align="left" color="#7C4100" mb={1}>
        Your Cart
      </Typography>
      <Divider
        sx={{ mb: 4, borderBottomWidth: "3px", backgroundColor: "#F0E3D5" }}
      />
      <Grid container spacing={2}>
        {/* Cart Items Section */}
        <Grid item xs={12} md={8}>
          <Box  borderRadius={1} p={2}>
            <Grid
              container
              alignItems="flex-start"
              p={3}
              spacing={0.5}
              style={{ borderBottom: "1px solid #ddd", fontSize: 18, backgroundColor:'#ECE8E8', borderRadius:20}}
            >
              <Grid item xs={3}>
                <Typography style={{ color: "#7C4100", fontWeight: "bold" }}>
                  Product
                </Typography>
              </Grid>
              <Grid item xs={3}>
                <Typography style={{ color: "#7C4100", fontWeight: "bold" }}>
                  Price
                </Typography>
              </Grid>
              <Grid item xs={3}>
                <Typography style={{ color: "#7C4100", fontWeight: "bold" }}>
                  Quantity
                </Typography>
              </Grid>
              <Grid item xs={2}>
                <Typography style={{ color: "#7C4100", fontWeight: "bold" }}>
                  Total
                </Typography>
              </Grid>
            </Grid>
            {cartItems.map((item) => (
              <CartItem
                key={item.id}
                item={item}
                updateQuantity={updateQuantity}
              />
            ))}
          </Box>
        </Grid>

        {/* Order Summary Section */}
        <Grid item xs={12} md={4}>
          <OrderSummary total={total} />
        </Grid>
      </Grid>
    </Box>
  );
};

export default CartPage;
