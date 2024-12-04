import { orderRollBack } from "../../services/order/orderService";

export const paymentConfirmation = async (
  stripe,
  elements,
  setAlert,
  isClose,
  orderId
) => {
  localStorage.setItem("cart", "");
  //payment confirmation
  const { error, paymentIntent } = await stripe.confirmPayment({
    elements,
    confirmParams: {
      return_url: `${window.location.origin}/add-to-cart`,
    },
  });

  if (error) {
    setAlert({
      open: true,
      type: "error",
      message: error.message || "Payment failed!",
    });
  } else if (paymentIntent && paymentIntent.status !== "succeeded") {
    //rolback
    console.log(error);
    // await orderRollBack(orderId);
  } else if (paymentIntent && paymentIntent.status === "succeeded") {
    setAlert({
      open: true,
      type: "success",
      message: "Payment successful!",
    });

    localStorage.setItem("cart", "");
  }

  if (isClose) {
    isClose(false);
  }
};
