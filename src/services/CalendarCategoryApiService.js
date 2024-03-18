import axios from "axios";
import { GETCalendarCategoryApi } from "./Endpoint"
import PublicUserApiService from "./PublicUserApiService";

const CalendarCategoryApiService = {
    async fetch() {
        try {
            const response = await axios.get(GETCalendarCategoryApi, {
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

export default CalendarCategoryApiService;
