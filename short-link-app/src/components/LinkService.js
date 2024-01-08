// short-link-app/src/components/LinkService.js
import axios from 'axios';

const API_URL = 'http://localhost:5000';

const LinkService = {
  createLink: async (linkData) => {
    try {
      const response = await axios.post(`${API_URL}/link/create`, linkData);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  getAnalytics: async (linkId) => {
    try {
      const response = await axios.get(`${API_URL}/link/analytics/${linkId}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  },
};

export default LinkService;
