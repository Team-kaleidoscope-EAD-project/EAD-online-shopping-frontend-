import axiosInstance from "../axiosInstance";

export const productFilterByName = async (name) => {
    try {
        const response = await axiosInstance.get("/api/v1/product/filter", {
            params: {
                name
            },
        });
        return response.data;
    } catch (error) {
        console.log("Error product filter");
        throw error;
    }
};
