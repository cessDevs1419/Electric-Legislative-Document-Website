import axios from "axios";
import { GETOnlineTrackingSearchApi } from "./Endpoint"

const OnlineTrackingApiService = {
    async fetch(id) {
        try {
            const authToken = localStorage.getItem('authToken');

            const response = await axios.get(GETOnlineTrackingSearchApi, id, {
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

export default OnlineTrackingApiService;
