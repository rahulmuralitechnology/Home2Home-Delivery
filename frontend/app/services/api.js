import axios from 'axios';

const API_BASE_URL = "http://127.0.0.1:8000/api/";

export const createOrder = async (orderData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}orders/`, orderData);
    return response.data;
  } catch (error) {
    console.error("Error creating order:", error);
    throw error;
  }
};
