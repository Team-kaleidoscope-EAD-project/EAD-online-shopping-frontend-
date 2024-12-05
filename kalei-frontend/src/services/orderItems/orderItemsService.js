import axiosInstance from "../axiosInstance";

export const getOrderItemsByOrderId = async (orderId) => {
    console.log(orderId)
    try {

        const response = await axiosInstance.get(`api/v1/order/getallorderitemsbyorderid/${orderId}`)
        console.log("orderItems:" + response.data)
        return response.data;
    } catch (error) {
        console.error("Error fetching order items for orderId:", error);
        throw error;
    }


}


export const getProductBySku = async (sku) => {
    try {
        const response = await axiosInstance.get(`api/v1/product/sku/${sku}`)
        return response.data;
    } catch (error) {
        console.error("Error fetching order items for orderId:", error);
        throw error;
    }
}
