import axiosInstance from './axiosInstance';

const ProductService = {
    getProductById: async (productId) => {
        try {
            const response = await axiosInstance.get(`/products/${productId}`);
            return response.data;
        } catch (error) {
            console.error('Error fetching product details:', error);
            throw error;
        }
    }
};