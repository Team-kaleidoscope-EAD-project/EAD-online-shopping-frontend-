import axiosInstance from "../axiosInstance";

export const productFilter = async (filteredProduct) => {
  try {
    const { categories, colors, brand, sizes, minPrice, maxPrice } =
      filteredProduct;
    console.log("filter", filteredProduct);
    const response = await axiosInstance.get("/api/v1/product/filter", {
      params: {
        categories,
        colors,
        brand,
        sizes,
        minPrice,
        maxPrice,
      },
    });
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log("Error product filter:" + error.message);
  }
};
