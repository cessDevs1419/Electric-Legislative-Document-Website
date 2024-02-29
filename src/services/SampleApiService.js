import axios from "axios";
import { GETProjectsApi } from "./Endpoint"

const SampleApiService = {
    async fetchProjects() {
        try {
            const authToken = localStorage.getItem('authToken');

            const response = await axios.get(GETProjectsApi, {
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

export default SampleApiService;
