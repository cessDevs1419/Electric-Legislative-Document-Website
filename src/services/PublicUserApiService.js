import axios from "axios";
import { GETCurrentAuthUser, POSTLogin, POSTRegister, POSTForgotPassword, POSTResetPassword, POSTLogout } from "./Endpoint";
const PublicUserApiService = {
    authToken: localStorage.getItem('authToken'),
    async getAuthUser() {
        try {
            const authToken = localStorage.getItem('authToken');

            const response = await axios.get(GETCurrentAuthUser, {
                headers: {
                    "Authorization": `Bearer ${authToken}`,
                    "Content-Type": "application/json",
                    "Accept": "application/json",
                }
            });
            return response.data;
        } catch (error) {
            throw error;
        }
    },
    async register(data) {
        try {
            
            const response = await axios.post(
                POSTRegister, 
                data, {
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json",
                }
            });
    
            return response.data;
        } catch (error) {
            throw error;
        }
    },
    async login(data) {
        try {
            
            const response = await axios.post(
                POSTLogin, 
                data, {
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json",
                }
            });
            
            const authToken = response.data.token;
            localStorage.setItem('authToken', authToken);
    
            return response.data;
        } catch (error) {
            throw error;
        }
    },
    async forgotPassword(data) {
        try {
            
            const response = await axios.post(
                POSTForgotPassword, 
                data, {
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json",
                }
            });
            
            return response.data;
        } catch (error) {
            throw error;
        }
    },
    async resetPassword(data) {
        try {
            
            const response = await axios.post(
                POSTResetPassword, 
                data, {
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json",
                }
            });
            
            return response.data;
        } catch (error) {
            throw error;
        }
    },
    async logout() {
        try {
            
            const response = await axios.post(
                POSTLogout, 
                data, {
                headers: {
                    "Authorization": `Bearer ${authToken}` ,
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

export default PublicUserApiService;
