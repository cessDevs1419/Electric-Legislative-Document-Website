import axios from "axios";
import { GETMunicipalitiesApi } from "./Endpoint"
import PublicUserApiService from "./PublicUserApiService";

const MunicipalitiesApiService = {
    async fetch() {
        try {
            const response = await axios.get(GETMunicipalitiesApi, {
                headers: {
                    Authorization: `Bearer ${PublicUserApiService.getAuthToken()}` ,
                    "Content-Type": "application/json",
                    "Accept": "application/json",
                }
            });
            return response.data;
        } catch (error) {
            throw error;
        }
    },
    async fetchMunicipality(uuid) {
        try {
          const response = await axios.get(`${GETMunicipalitiesApi}/${uuid}`, {
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

export default MunicipalitiesApiService;
