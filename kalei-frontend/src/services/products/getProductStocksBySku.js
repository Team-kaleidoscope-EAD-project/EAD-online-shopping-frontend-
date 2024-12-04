import axiosInstance from "../axiosInstance";

export const getProductStocksBySku = async (sku) => {
  try {
    const response = await axiosInstance.get(
      "/api/v1/inventory/getinventoryitem/" + sku,
      {
        params: {
          sku,
        },
      }
    );

    return response.data;
  } catch (error) {
    console.log(error);
  }
};
