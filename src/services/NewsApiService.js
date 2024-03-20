import axios from "axios";
import { GETNews } from "./Endpoint"
import PublicUserApiService from "./PublicUserApiService";

const DepartmentApiService = {
    async fetch() {
        try {
            const response = await axios.get(GETNews, {
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

export default DepartmentApiService;
