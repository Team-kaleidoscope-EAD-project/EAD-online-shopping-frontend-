import axiosInstance from "../axiosInstance";

export const productFilter = async (filteredProduct) => {
  try {
    const { categories, colors, brands, sizes, minPrice, maxPrice } =
      filteredProduct;
    console.log(filteredProduct)
    const response = await axiosInstance.get("/api/v1/product/filter", {
      params: {
        categories,
        colors,
        brands,
        sizes,
        minPrice,
        maxPrice,
      },
    });
    console.log(response.data)
    return response.data;
  } catch (error) {
    console.log("Error product filter:" + error.message);
  }
};
