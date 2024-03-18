import axios from "axios";
import { GETOfficeApi } from "./Endpoint"
import PublicUserApiService from "./PublicUserApiService";


const OfficeApiService = {
    async fetch() {
        try {
            const authToken = localStorage.getItem('authToken');

            const response = await axios.get(GETOfficeApi, {
                headers: {
                    Authorization: `Bearer ${PublicUserApiService.getAuthToken()}` ,
                    "Content-Type": "application/json",
                    "Accept": "application/json",
                }
            });
            return response.data;
        } catch (error) {
            throw error;
        }
    }
};

export default OfficeApiService;
