import axios from "axios";
import { GETCurrentAuthUser, POSTLogin, POSTRegister, POSTForgotPassword, POSTResetPassword, POSTLogout, POSTProfileUpdate, POSTPasswordUpdate } from "./Endpoint";
const PublicUserApiService = {
    getAuthToken() {
        return localStorage.getItem('authToken');
    },
    async getAuthUser() {
        try {
            const response = await axios.get(GETCurrentAuthUser, {
                headers: {
                    "Authorization": `Bearer ${this.getAuthToken()}`,
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
            }
          );
      
          const authToken = response.data.data.token;
          const authTime = response.data.data.token_expiration_in_minutes;
          const currentTime = new Date().getTime();
          const expirationTime = currentTime + (authTime * 60 * 1000); 
      
          localStorage.setItem('authToken', authToken);
          localStorage.setItem('authTime', expirationTime); 
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
    async updateProfile(data) {
        try {
            
            const response = await axios.post(
                POSTProfileUpdate, 
                data, {
                headers: {
                    "Authorization": `Bearer ${this.getAuthToken()}`,
                    "Content-Type": "application/json",
                    "Accept": "application/json",
                }
            });
            
            return response.data;
        } catch (error) {
            throw error;
        }
    },
    async updatePassword(data) {
        try {
            
            const response = await axios.post(
                POSTPasswordUpdate, 
                data, {
                headers: {
                    "Authorization": `Bearer ${this.getAuthToken()}`,
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
                {},
                {
                    headers: {
                        "Authorization": `Bearer ${this.getAuthToken()}`,
                        "Content-Type": "application/json",
                        "Accept": "application/json",
                    }
                }
            );

            return response.data;
        } catch (error) {
            throw error;
        }
    }
    
};

export default PublicUserApiService;
