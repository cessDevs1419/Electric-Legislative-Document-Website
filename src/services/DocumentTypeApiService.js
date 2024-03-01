import axios from "axios";
import { GETDocumentTypeApi } from "./Endpoint"

const DocumentTypeApiService = {
    async fetch() {
        try {
            const authToken = localStorage.getItem('authToken');

            const response = await axios.get(GETDocumentTypeApi, {
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

export default DocumentTypeApiService;
