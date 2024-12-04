import axiosInstance from "../axiosInstance";

export const addFeedback = async (feedback) => {
  try {
    const response = await axiosInstance.post(
      "/api/v1/feedback/addfeedback",
      feedback
    );
    return response;
  } catch (error) {
    console.log(error.message);
    throw error;
  }
};

export const getFeedbacksByProducts = async (productId) => {
  try {
    const response = await axiosInstance.get(
      "/api/v1/feedback/getfeedback/byproduct/" + productId
    );
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error.message);
    throw error;
  }
};