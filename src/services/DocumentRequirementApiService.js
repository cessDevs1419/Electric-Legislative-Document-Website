import axios from "axios";
import { GETDocumentRequirementApi } from "./Endpoint"
import PublicUserApiService from "./PublicUserApiService";

const DocumentRequirementApiService = {
    async fetch() {
        try {
            const response = await axios.get(GETDocumentRequirementApi, {
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

export default DocumentRequirementApiService;
