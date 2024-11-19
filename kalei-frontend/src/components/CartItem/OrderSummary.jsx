// OrderSummary.jsx
import React from 'react';
import { Box, Typography, Button } from '@mui/material';

const OrderSummary = ({ total }) => (
  <Box p={3} border="1px solid #F0E3D5" borderRadius={3} marginTop={2}>
    <Typography variant="h6">ORDER SUMMARY</Typography>
    <Box display="flex" justifyContent="space-between" mt={2}>
      <Typography sx={{marginTop:3, marginBottom:3}}>Total</Typography>
      <Typography sx={{marginTop:3, marginBottom:3}}>Rs. {total}.00</Typography>
    </Box>
    <Typography variant="caption" display="block" mt={1} sx={{color: "#7C4100"}} >
      Tax included and shipping calculated at checkout
    </Typography>
    <Button fullWidth variant="text"   sx={{ mt: 2, backgroundColor: "#7C4100", color: "#FFFFFF", borderRadius: 3, letterSpacing: 3}}>
      PROCEED TO CHECKOUT
    </Button>
    <Button fullWidth variant="text" color="secondary" sx={{ mt: 1, backgroundColor: "#F0E3D5", color: "#7C4100",  borderRadius: 3, letterSpacing: 3}}>
      CONTINUE SHOPPING
    </Button>
  </Box>
);

export default OrderSummary;
