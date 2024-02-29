import axios from "axios";

const SampleApiService = {
    async fetchProjects() {
        try {
            const response = await axios.get('http://127.0.0.1:8000/api/projects');
            return response.data;
        } catch (error) {
            throw error;
        }
    }
};

export default SampleApiService;
