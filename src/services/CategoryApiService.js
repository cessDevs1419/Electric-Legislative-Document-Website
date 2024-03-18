import axios from "axios";
import { GETDocumentCategoryApi } from "./Endpoint"
import PublicUserApiService from "./PublicUserApiService";


const CategoryApiService = {
    async fetch() {
        try {
            const response = await axios.get(GETDocumentCategoryApi, {
                headers: {
                    Authorization: `Bearer ${PublicUserApiService.getAuthToken()}`,
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

export default CategoryApiService;
