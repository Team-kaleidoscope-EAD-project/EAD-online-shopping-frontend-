// CartItem.jsx
import React from 'react';
import { Box, Typography, IconButton, TextField } from '@mui/material';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';

const CartItem = ({ item, updateQuantity }) => {
  const { id, name, price, quantity, imgSrc } = item;

  return (
    <Box display="flex" alignItems="center" p={2} borderBottom="1px solid #ddd">
      <Box component="img" src={imgSrc} alt={name} width={80} height={80} borderRadius={1} mr={2} />
      <Box flexGrow={1}>
        <Typography>{name}</Typography>
        <Typography>Rs. {price}.00</Typography>
      </Box>
      <Box display="flex" alignItems="center">
        <IconButton onClick={() => updateQuantity(id, Math.max(1, quantity - 1))}>
          <RemoveIcon />
        </IconButton>
        <TextField
          value={quantity}
          inputProps={{ readOnly: true }}
          sx={{ width: 50, textAlign: 'center' }}
        />
        <IconButton onClick={() => updateQuantity(id, quantity + 1)}>
          <AddIcon />
        </IconButton>
      </Box>
      <Typography sx={{ minWidth: 100, textAlign: 'right' }}>
        Rs. {price * quantity}.00
      </Typography>
    </Box>
  );
};

export default CartItem;
