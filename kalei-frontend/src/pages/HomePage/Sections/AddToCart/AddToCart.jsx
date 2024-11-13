// // CartPage.jsx
// import React, { useState } from 'react';
// import { Box, Typography, Grid, Divider } from '@mui/material';
// import CartItem from "../../../../components/CartItem/CartItem";
// import OrderSummary from '../../../../components/CartItem/OrderSummary';

// const CartPage = () => {
//   const [cartItems, setCartItems] = useState([
//     { id: 1, name: "Pink Top", price: 2500, quantity: 1, imgSrc: "/path-to-image1.jpg" },
//     { id: 2, name: "Purple Tee", price: 2500, quantity: 1, imgSrc: "/path-to-image2.jpg" }
//   ]);

//   const updateQuantity = (id, newQuantity) => {
//     setCartItems(cartItems.map(item =>
//       item.id === id ? { ...item, quantity: newQuantity } : item
//     ));
//   };

//   const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

//   return (
//     <Box p={3}>
//       <Typography variant="h5" align="left" mb={3}>Your Cart</Typography>
//       <Divider />
//       <Grid container spacing={3}>
//         {/* Cart Items Section */}
//         <Grid item xs={12} md={8}>
//           <Box bgcolor="#f9f9f9" borderRadius={1} p={2}>
//             <Grid container alignItems="center" p={2} spacing={1} borderBottom="1px solid #ddd">
//               <Grid item xs={6}>Product</Grid>
//               <Grid item xs={2}>Price</Grid>
//               <Grid item xs={2}>Quantity</Grid>
//               <Grid item xs={2}>Total</Grid>
//             </Grid>
//             {cartItems.map(item => (
//               <CartItem key={item.id} item={item} updateQuantity={updateQuantity} />
//             ))}
//           </Box>
//         </Grid>
        
//         {/* Order Summary Section */}
//         <Grid item xs={12} md={4}>
//           <OrderSummary total={total} />
//         </Grid>
//       </Grid>
//     </Box>
//   );
// };

// export default CartPage;








// CartPage.jsx
import React, { useState } from 'react';
import { Box, Typography, Grid, Divider } from '@mui/material';
import CartItem from "../../../../components/CartItem/CartItem";
import OrderSummary from '../../../../components/CartItem/OrderSummary';

const CartPage = () => {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: "Pink Top", price: 2500, quantity: 1, imgSrc: "/path-to-image1.jpg" },
    { id: 2, name: "Purple Tee", price: 2500, quantity: 1, imgSrc: "/path-to-image2.jpg" }
  ]);

  const updateQuantity = (id, newQuantity) => {
    setCartItems(cartItems.map(item =>
      item.id === id ? { ...item, quantity: newQuantity } : item
    ));
  };

  const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <Box p={3}>
      <Typography variant="h5" align="left" mb={1}>Your Cart</Typography>
      <Divider sx={{ mb: 4 }} />
      <Grid container spacing={3}>
        {/* Cart Items Section */}
        <Grid item xs={12} md={8}>
          <Box bgcolor="#f9f9f9" borderRadius={1} p={2}>
            <Grid container alignItems="center" p={2} spacing={1} borderBottom="1px solid #ddd">
              <Grid item xs={6}>Product</Grid>
              <Grid item xs={2}>Price</Grid>
              <Grid item xs={2}>Quantity</Grid>
              <Grid item xs={2}>Total</Grid>
            </Grid>
            {cartItems.map(item => (
              <CartItem key={item.id} item={item} updateQuantity={updateQuantity} />
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

















