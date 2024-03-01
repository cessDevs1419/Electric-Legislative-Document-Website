import axios from "axios";
import { GETDocumentApi } from "./Endpoint"

const DocumentApiService = {
    async fetch() {
        try {
            const authToken = localStorage.getItem('authToken');

            const response = await axios.get(GETDocumentApi, {
                headers: {
                    Authorization: `Bearer ${authToken}` ,
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

export default DocumentApiService;
