import axios from "axios";
import { GETDocumentCategoryApi } from "./Endpoint"

const CategoryApiService = {
    async fetch() {
        try {
            const authToken = localStorage.getItem('authToken');

            const response = await axios.get(GETDocumentCategoryApi, {
                headers: {
                    Authorization: `Bearer ${authToken}`,
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
