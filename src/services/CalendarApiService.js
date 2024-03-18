import axios from "axios";
import { GETCalendarApi } from "./Endpoint"
import PublicUserApiService from "./PublicUserApiService";

const CalendarApiService = {
    async fetch() {
        try {

            const response = await axios.get(GETCalendarApi, {
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
    }
};

export default CalendarApiService;
