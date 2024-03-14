import axios from "axios";
import { GETCurrentAuthUser, POSTLogin, POSTRegister, POSTForgotPassword, POSTResetPassword, POSTLogout } from "./Endpoint";
const PublicUserApiService = {
    async getAuthUser() {
        // try {
        //     const authToken = localStorage.getItem('authToken');

        //     const response = await axios.get('http://127.0.0.1:8000/api/projects', {
        //         headers: {
        //             Authorization: `Bearer ${authToken}` 
        //         }
        //     });
        //     return response.data;
        // } catch (error) {
        //     throw error;
        // }
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
    async login() {
        try {
            
            const response = await axios.post(
                POSTLogin, 
                data, {
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json",
                }
            });
            
            localStorage.setItem('responseData', JSON.stringify(response.data));
    
            return response.data;
        } catch (error) {
            throw error;
        }
    }
};

export default PublicUserApiService;
