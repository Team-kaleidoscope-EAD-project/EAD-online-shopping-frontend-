// // CartItem.jsx
// import React from 'react';
// import { Box, Typography, IconButton, TextField } from '@mui/material';
// import RemoveIcon from '@mui/icons-material/Remove';
// import AddIcon from '@mui/icons-material/Add';

// const CartItem = ({ item, updateQuantity }) => {
//   const { id, name, price, quantity, imgSrc } = item;

//   return (
//     <Box display="flex" alignItems="center" p={2} border="1px solid #F0E3D5" borderRadius={5} marginTop={2}>
//       <Box component="img" src={imgSrc}  width={80} height={80} paddingLeft={10} paddingRight={6}/>
//       <Box   paddingLeft={12} paddingRight={12} >

//         <Typography>Rs. {price}.00</Typography>
//       </Box>
//       <Box display="flex" alignItems="flex-start"  paddingLeft={4} paddingRight={6}>
//         <IconButton onClick={() => updateQuantity(id, Math.max(1, quantity - 1))}>
//           <RemoveIcon />
//         </IconButton>
//         <TextField 
//           value={quantity}
          
//           inputProps={{ readOnly: true }}
//           sx={{ width: 40, textAlign: "left"  }}
//         />
//         <IconButton onClick={() => updateQuantity(id, quantity + 1)}>
//           <AddIcon />
//         </IconButton>
//       </Box>
//       <Typography sx={{ minWidth: 100, textAlign: 'left', paddingLeft:5, paddingRight:5}}>
//         Rs. {price * quantity}.00
//       </Typography>
//     </Box>
//   );
// };

// export default CartItem;


