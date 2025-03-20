import axios from "axios";

const API_BASE_URL = "https://fded-backend-production.up.railway.app"; // 🔥 Backend URL-ed

const authProvider = () => {

  return {
    registerUser: async (userData) => {

      try {
        const response = await axios.post(`${API_BASE_URL}/register`, {
          name: userData.name,
          username: userData.username,
          email: userData.email,
          phone: userData.phone,
          address: userData.address,
          password: userData.password,
        });
        return response.data;
      } catch (error) {
        throw error;
      }
    },

    loginUser: async (email, password) => {
      try {
        const response = await axios.post(`${API_BASE_URL}/login`, {
          email,
          password,
        });

        const token = response.data.access_token; // JWT token
        if (token) {
          localStorage.setItem("auth_token", token); // 🔥 Token mentése LocalStorage-be
          setTimeout(() => authProvider().logoutUser(), 4 * 60 * 60 * 1000); // ⏳ 4 óra után kilépteti a usert
        }

        return response.data;
      } catch (error) {
        throw error;
      }
    },

    logoutUser: () => {
      localStorage.removeItem("auth_token"); // 🔥 Token törlése
    },

    getCurrentUser: () => {
      return localStorage.getItem("auth_token") || null;
    },

    setupAuthInterceptor: () => {
      axios.interceptors.request.use((config) => {
        const token = localStorage.getItem("auth_token");
        if (token) {
          config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
      });
    },

    getUserById: async (userId) => {
      try {
        const response = await axios.get(`${API_BASE_URL}/users/${userId}`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("auth_token")}`,
          },
        });
        return response.data;
      } catch (error) {
        console.error(
          "❌ Hiba történt a felhasználó lekérése során:",
          error.response?.data || error.message
        );
        throw error;
      }
    },
  };
};
export default authProvider;
