import axios from "axios";
import { GETAnnouncement } from "./Endpoint"
import PublicUserApiService from "./PublicUserApiService";

const AnnouncementApiService = {
    async fetch() {
        try {

            const response = await axios.get(GETAnnouncement, {
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

export default AnnouncementApiService;
