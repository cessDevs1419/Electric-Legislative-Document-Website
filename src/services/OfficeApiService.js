import axios from "axios";
import { GETOfficeApi } from "./Endpoint"

const OfficeApiService = {
    async fetch() {
        try {
            const authToken = localStorage.getItem('authToken');

            const response = await axios.get(GETOfficeApi, {
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

export default OfficeApiService;
