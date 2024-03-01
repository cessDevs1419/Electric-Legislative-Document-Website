import axios from "axios";
import { GETDocumentRequirementApi } from "./Endpoint"

const DocumentRequirementApiService = {
    async fetch() {
        try {
            const authToken = localStorage.getItem('authToken');

            const response = await axios.get(GETDocumentRequirementApi, {
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

export default DocumentRequirementApiService;
