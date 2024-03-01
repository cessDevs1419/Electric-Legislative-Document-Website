import axios from "axios";
import { GETDepartmentApi } from "./Endpoint"

const BayanApiService = {
    async fetchProjects() {
        try {
            const authToken = localStorage.getItem('authToken');

            const response = await axios.get(GETDepartmentApi, {
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
