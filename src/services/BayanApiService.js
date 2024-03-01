import axios from "axios";
import { GETBayanApi } from "./Endpoint"

const BayanApiService = {
    async fetch() {
        try {
            const authToken = localStorage.getItem('authToken');

            const response = await axios.get(GETBayanApi, {
                headers: {
                    Authorization: `Bearer ${authToken}` 
                }
            });
            return response.data;
        } catch (error) {
            throw error;
        }
    }
};

export default BayanApiService;
