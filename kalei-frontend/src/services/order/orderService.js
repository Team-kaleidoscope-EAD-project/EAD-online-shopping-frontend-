import axiosInstance from "../axiosInstance";

// Function to create a PaymentIntent with dynamic price
export const createPaymentIntent = async (amount) => {
  try {
    const response = await axiosInstance.post(
      "/api/v1/order/stripepayment/create-payment-intent",
      {
        amount,
        currency: "lkr",
      }
    );
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("Error creating PaymentIntent:", error.message);
    throw error;
  }
};

export const sendOrderDetails = async (orderObject) => {
  try {
    console.log(orderObject);
    const response = await axiosInstance.post(
      "/api/v1/order/addorder",
      orderObject
    );

    return response.data;
  } catch (error) {
    console.error("Error creating order:", error.message);
    throw error;
  }
};

export const orderRollBack = async (orderId) => {
  try {
    console.log("rollbacked");
    const response = await axiosInstance.post("/order/addorder", { orderId });

    return response.status;
  } catch (error) {
    console.error("Error creating Payment:", error);
    throw error;
  }
};
