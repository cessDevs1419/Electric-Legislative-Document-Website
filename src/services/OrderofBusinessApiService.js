import axios from "axios";
import { GETOrderOfBusiness, GETOrderOfBusinessCategory, GET20thSPMembers, GETHotlines } from "./Endpoint"

const OrderofBusinessApiService = {
    async fetchOrderOfBusiness() {
        try {
            const authToken = localStorage.getItem('authToken');

            const response = await axios.get(GETOrderOfBusiness, {
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
    },
    async fetchOrderOfBusinessCategory() {
        try {
            const authToken = localStorage.getItem('authToken');

            const response = await axios.get(GETOrderOfBusinessCategory, {
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
    },
    async fetch20thSPMembers() {
        try {
            const authToken = localStorage.getItem('authToken');

            const response = await axios.get(GET20thSPMembers, {
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
    },
    async fetchHotlines() {
        try {
            const authToken = localStorage.getItem('authToken');

            const response = await axios.get(GETHotlines, {
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

export default OrderofBusinessApiService;
