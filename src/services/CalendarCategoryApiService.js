import axios from "axios";
import { GETCalendarCategoryApi } from "./Endpoint"

const CalendarCategoryApiService = {
    async fetch() {
        try {
            const authToken = localStorage.getItem('authToken');

            const response = await axios.get(GETCalendarCategoryApi, {
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

export default CalendarCategoryApiService;
