import axios from "axios";
import { GETBayanApi } from "./Endpoint"
import PublicUserApiService from "./PublicUserApiService";

const BayanApiService = {
    async fetch() {
        try {

            const response = await axios.get(GETBayanApi, {
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

export default BayanApiService;
