import { useState } from "react";
import { sendOrderDetails } from "../../../services/order/orderService";

import { paymentConfirmation } from "../PaymentConfirmation";

const useCheckoutForm = (stripe, elements, isClose, orderObject, orderId) => {
  const [alert, setAlert] = useState({ open: false, type: "", message: "" });

  const handleCloseAlert = () => {
    setAlert({ ...alert, open: false });
  };

  const handleSubmit = async () => {
    if (!stripe || !elements) {
      return;
    }

    const isOrderConfirm = await sendOrderDetails(orderObject);

    //confirm the payment
    if (isOrderConfirm) {
      await paymentConfirmation(stripe, elements, setAlert, isClose, orderId);
    }
  };
  return {
    alert,
    handleCloseAlert,
    handleSubmit,
  };
};

export default useCheckoutForm;
