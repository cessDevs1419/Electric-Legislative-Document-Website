import axios from "axios";
import { GETMunicipalitiesApi } from "./Endpoint"

const MunicipalitiesApiService = {
    async fetch() {
        try {
            const authToken = localStorage.getItem('authToken');

            const response = await axios.get(GETMunicipalitiesApi, {
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
    async fetchMunicipality(uuid) {
        try {
          const authToken = localStorage.getItem('authToken');
          const response = await axios.get(`${GETMunicipalitiesApi}/${uuid}`, {
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

export default MunicipalitiesApiService;
