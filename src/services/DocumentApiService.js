import axios from "axios";
import { GETDocumentApi ,GETOnlineTrackingSearchApi, POSTDocumentApi } from "./Endpoint"

const DocumentApiService = {
    authToken: localStorage.getItem('authToken'),
    async fetch() {
        try {
            const response = await axios.get(GETDocumentApi, {
                headers: {
                    Authorization: `Bearer ${this.authToken}` ,
                    "Content-Type": "application/json",
                    "Accept": "application/json",
                }
            });
            return response.data;
        } catch (error) {
            throw error;
        }
    },
    async fetchOnlineTrackingDocument(){
        try {
            const response = await axios.get(GETOnlineTrackingSearchApi, {
                headers: {
                    Authorization: `Bearer ${this.authToken}`,
                    "Content-Type": "application/json",
                    "Accept": "application/json",
                }
            });
            return response.data;
        } catch (error) {
            throw error;
        }
    },
    async submitDocument(data) {
        try {
            const response = await axios.post(
                POSTDocumentApi, 
                data, {
                headers: {
                    "Authorization": `Bearer ${this.authToken}` ,
                    "Content-Type": "application/json",
                    "Accept": "application/json",
                }
            });
            
            return response.data;
        } catch (error) {
            throw error;
        }
    },
};

export default DocumentApiService;
