// OrderSummary.jsx
import React from 'react';
import { Box, Typography, Button } from '@mui/material';

const OrderSummary = ({ total }) => (
  <Box p={3} border="1px solid #ddd" borderRadius={1}>
    <Typography variant="h6">ORDER SUMMARY</Typography>
    <Box display="flex" justifyContent="space-between" mt={2}>
      <Typography>Total</Typography>
      <Typography>Rs. {total}.00</Typography>
    </Box>
    <Typography variant="caption" display="block" mt={1}>
      Tax included and shipping calculated at checkout
    </Typography>
    <Button fullWidth variant="contained" color="primary" sx={{ mt: 2 }}>
      PROCEED TO CHECKOUT
    </Button>
    <Button fullWidth variant="outlined" color="secondary" sx={{ mt: 1 }}>
      CONTINUE SHOPPING
    </Button>
  </Box>
);

export default OrderSummary;
