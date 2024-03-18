import axios from "axios";
import { GETDepartmentApi } from "./Endpoint"
import PublicUserApiService from "./PublicUserApiService";

const DepartmentApiService = {
    async fetch() {
        try {
            const authToken = localStorage.getItem('authToken');

            const response = await axios.get(GETDepartmentApi, {
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
