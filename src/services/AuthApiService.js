import axios from "axios";

const SampleApiService = {
    async fetchProjects() {
        try {
            const authToken = localStorage.getItem('authToken');

            const response = await axios.get('http://127.0.0.1:8000/api/projects', {
                headers: {
                    Authorization: `Bearer ${authToken}` 
                }
            });
            return response.data;
        } catch (error) {
            throw error;
        }
    }
};

export default SampleApiService;
