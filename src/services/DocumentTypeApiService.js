import axios from "axios";
import { GETDocumentTypeApi } from "./Endpoint"
import PublicUserApiService from "./PublicUserApiService";

const DocumentTypeApiService = {
    async fetch() {
        try {
            const response = await axios.get(GETDocumentTypeApi, {
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

export default DocumentTypeApiService;
