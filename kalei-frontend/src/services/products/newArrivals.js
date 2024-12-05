import axiosInstance from "../axiosInstance";

export const newArrivals = async () => {
  try {
    const res = await axiosInstance.get("/api/v1/product/new-arrivals");

    console.log(res.data);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
