import axios from "axios";
import { GETCalendarApi } from "./Endpoint"

const CalendarApiService = {
    async fetch() {
        try {
            const authToken = localStorage.getItem('authToken');

            const response = await axios.get(GETCalendarApi, {
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

export default CalendarApiService;
