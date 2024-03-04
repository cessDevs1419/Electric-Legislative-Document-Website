import axios from "axios";
import { GETOnlineTrackingSearchApi } from "./Endpoint"

const OnlineTrackingApiService = {
    async fetch() {
        try {
            const authToken = localStorage.getItem('authToken');

            const response = await axios.get(GETOnlineTrackingSearchApi, {
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
