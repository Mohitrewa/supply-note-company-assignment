// short-link-app/src/components/AuthService.js
import axios from 'axios';

const API_URL = 'http://localhost:5000';

const AuthService = {
  login: async (credentials) => {
    try {
      const response = await axios.post(`${API_URL}/user/login`, credentials);
      return response.data;
    } catch (error) {
      throw error;
    }
  },
};

export default AuthService;
