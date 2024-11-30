import React from "react";
import {
  PaymentElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import { Box, Button, Typography, Snackbar, Alert } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import useCheckoutForm from "./hooks/useCheckoutForm"; // Adjust path as needed

function CheckoutForm({ isClose, orderObject, orderId }) {
  const stripe = useStripe();
  const elements = useElements();

  const { alert, handleCloseAlert, handleSubmit } = useCheckoutForm(
    stripe,
    elements,
    isClose,
    orderObject,
    orderId
  );

  return (
    <Box
      sx={{
        display: "flex",
        width: "100%",
        height: "100%",
        position: "fixed",
        backgroundColor: "rgba(0,0,0,0.7)",
        zIndex: 10,
        top: 0,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        width={"50%"}
        border={"2px solid rgba(0,0,0,0.15)"}
        borderRadius={"15px"}
        padding={"25px"}
        backgroundColor={"white"}
      >
        <Box width={"100%"} display={"flex"} justifyContent={"flex-end"}>
          <CloseIcon
            onClick={() => isClose(false)}
            sx={{ cursor: "pointer" }}
          />
        </Box>

        <Typography fontSize={30} fontWeight={"bold"} marginBottom={"20px"}>
          Payment
        </Typography>

        <PaymentElement />
        <Button
          variant="contained"
          onClick={handleSubmit}
          sx={{ marginTop: "30px" }}
        >
          Submit
        </Button>
      </Box>

      {/* Snackbar for Alerts */}
      <Snackbar
        open={alert.open}
        autoHideDuration={6000}
        onClose={handleCloseAlert}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <Alert
          onClose={handleCloseAlert}
          severity={alert.type}
          sx={{ width: "100%" }}
        >
          {alert.message}
        </Alert>
      </Snackbar>
    </Box>
  );
}

export default CheckoutForm;
