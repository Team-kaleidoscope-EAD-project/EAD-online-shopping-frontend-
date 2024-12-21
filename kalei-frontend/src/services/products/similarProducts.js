import axiosInstance from "../axiosInstance";

export const similarProducts = async () => {
  try {
    const res = await axiosInstance.get("/api/v1/product/related");

    console.log(res.data);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
