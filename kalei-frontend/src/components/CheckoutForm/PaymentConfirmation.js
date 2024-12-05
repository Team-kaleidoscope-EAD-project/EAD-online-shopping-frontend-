export const paymentConfirmation = async (
  stripe,
  elements,
  setAlert,
  isClose,
  orderId
) => {
  try {
    const { error, paymentIntent } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        // Provide a return_url if redirection is required.
        return_url: `${window.location.origin}/add-to-cart`,
      },
      redirect: "if_required", // Prevent automatic redirection
    });

    console.log(paymentIntent);

    if (error) {
      console.log("Error during payment confirmation:", error.message);
      setAlert({
        open: true,
        type: "error",
        message: error.message || "Payment failed!",
      });
    } else if (paymentIntent && paymentIntent.status === "succeeded") {
      setAlert({
        open: true,
        type: "success",
        message: "Payment successful!",
      });

      localStorage.setItem("cart", "");
      window.location.reload();
    } else {
      console.log("Unhandled payment status:", paymentIntent?.status);
      setAlert({
        open: true,
        type: "warning",
        message: `Payment status: ${paymentIntent?.status || "Unknown"}`,
      });
    }
  } catch (e) {
    console.error("Unexpected error:", e);
    setAlert({
      open: true,
      type: "error",
      message: "An unexpected error occurred.",
    });
  }
};
