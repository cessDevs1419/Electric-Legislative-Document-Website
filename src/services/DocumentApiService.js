import axios from "axios";
import { GETDocumentApi ,GETOnlineTrackingSearchApi, POSTDocumentApi, GETMyDocument } from "./Endpoint"
import PublicUserApiService from "./PublicUserApiService";

const DocumentApiService = {

    async fetch() {
        try {
            const response = await axios.get(GETDocumentApi, {
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
    },
    async fetchOnlineTrackingDocument(){
        try {
            const response = await axios.get(GETOnlineTrackingSearchApi, {
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
    },
    async fetchMyDocument() {
        try {
            const response = await axios.get(GETMyDocument, {
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
    },
    async submitDocument(data) {
        try {
            const response = await axios.post(
                POSTDocumentApi, 
                data, {
                headers: {
                    "Authorization": `Bearer ${PublicUserApiService.getAuthToken()}` ,
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
